import React from "react";

const Dropdown = ({ label, values, name, ...props}:{label: string, values: Array<string>, name: string}) => {

    const options = values.map((value) => (<option key={value} value={value}>{value}</option>));
   return(
       <>
           <label htmlFor={name} className={"text-white px-2 mb-1 "}>{label}</label>
           <select {...props} className={"rounded-xl bg-white text-lg text-gray-600 text-opacity-70 p-4 mb-3"}>
               {options}
           </select>
       </>
   )
}

export default Dropdown;