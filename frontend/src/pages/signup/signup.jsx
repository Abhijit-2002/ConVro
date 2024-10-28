import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckbxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { signup, loading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    // console.log(signup);
    await signup(inputs);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">Convro</span>{" "}
        </h1>

        <form action="" onSubmit={handleSubmit}>
          {/*Fullname field*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text "> Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          {/* Username field  */}
          <div> 
            <label className="label p-2">
              <span className="text-base label-text "> Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text "> Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          {/* confirm password  */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender checkbox goes here  */}

          <Checkbox
            onCheckboxChange={handleCheckbxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2"
            disabled={loading}> 
            {loading ? <span className="loading loading-spinner"></span> : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// Starter code for the signup component
// import React from "react";
// import Checkbox from "./Checkbox";

// const signup = () => {
//   return <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <h1 className="text-3xl font-semibold text-center text-gray-300">SignUp <span className="text-blue-500">ChattR</span> </h1>

//       <form action="">
//           {/*Fullname field*/}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text "> Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           {/* Username field  */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text "> Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text "> Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           {/* confirm password  */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text ">Confirm Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           {/* Gender checkbox goes here  */}

//           <Checkbox/>

//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2"> Sign Up</button>
//           </div>

//       </form>
//     </div>
//   </div>;
// };

// export default signup;
