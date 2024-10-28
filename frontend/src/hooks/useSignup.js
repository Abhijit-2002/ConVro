import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, Setloading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const sucess = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!sucess) return;
    Setloading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }

      //localstorage and context
      localStorage.setItem("user-info", JSON.stringify(data));
      setAuthUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      Setloading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("!please fill all the fields");
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password should be at least 6 characters");
    return false;
  }
  return true;
}
