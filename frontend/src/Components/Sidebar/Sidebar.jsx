import React from "react";
import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogOutButton from "./LogOutButton.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className=" divider px-3"></div>
      <Conversations/>
        <LogOutButton/>
    </div>
  );
};

export default Sidebar;


// import React from "react";
// import SearchInput from "./SearchInput.jsx";
// import Conversations from "./Conversations.jsx";
// import LogOutButton from "./LogOutButton.jsx";

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className=" divider px-3"></div>
//       <Conversations/>
//         <LogOutButton/>
//     </div>
//   );
// };

// export default Sidebar;
