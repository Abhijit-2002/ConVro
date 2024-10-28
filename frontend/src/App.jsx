import "./App.css";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Home from "./pages/home/home.jsx";
import { Navigate, Route,Routes } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const {authUser} = useAuthContext();
  return ( 
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Home/> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup/>} /> */}
        <Route path="/" element={authUser ?  <Home/> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login/>} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;









// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <button className='btn btn-accent'>Button</button>
//     </>
//   )
// }

// export default App
