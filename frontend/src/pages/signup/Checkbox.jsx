import React from 'react'

const Checkbox = ({onCheckboxChange,selectedGender}) => {


  return (
    <div className='flex'>
        <div className=' form-control'>
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender ==="male" ? "selected" : ""}`}>
                <span className='labe-text'>Male</span>
                <input type="checkbox" className=' checkbox border-slate-900'
                checked={selectedGender==="male"}
                onChange={()=> onCheckboxChange("male")} />
            </label>
        </div>

        <div>
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender ==="female" ? "selected" : ""}`}>
                <span className='labe-text'>Female</span>
                <input type="checkbox" className=' checkbox border-slate-900'
                checked={selectedGender==="female"}
                onChange={()=> onCheckboxChange("female")} />
            </label>
        </div>

    </div>
  )
}

export default Checkbox

// Startter code 
// import React from 'react'

// const Checkbox = () => {
//   return (
//     <div className='flex'>
//         <div className=' form-control'>
//             <label htmlFor="" className='label gap-2 cursor-pointer'>
//                 <span className='labe-text'>Male</span>
//                 <input type="checkbox" className=' checkbox border-slate-900' />
//             </label>
//         </div>

//         <div>
//             <label htmlFor="" className='label gap-2 cursor-pointer'>
//                 <span className='labe-text'>Female</span>
//                 <input type="checkbox" className=' checkbox border-slate-900' />
//             </label>
//         </div>

//     </div>
//   )
// }

// export default Checkbox