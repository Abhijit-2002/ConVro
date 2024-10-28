import React from 'react'
// import BiLogout from 'react-icons/bi';
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogOutButton = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='mt-auto'>
         {/* <BiLogout className='w-6 h-6 text-white cursor-pointer'/>  */}
        {!loading ?(
           <BiLogOut className='w-6 h-6 text-white cursor-pointer'
           onClick={logout} />
        ):(
          <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}

export default LogOutButton


// import React from 'react'

// const LogOutButton = () => {
//   return (
//     <div className='mt-auto'>
//         {/* <BiLogout className='w-6 h-6 text-white cursor-pointer'/> */}
//     </div>
//   )
// }

// export default LogOutButton