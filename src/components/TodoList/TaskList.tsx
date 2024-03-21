import React, { useState } from "react"
import { FaCheck, FaTrash } from "react-icons/fa"

const TaskList = () => {
  const [checked, setChecked] = useState(false)
  return (
    <li className="flex justify-between  items-center gap-2 border-b-2 border-[#76B7CD] py-3">
      <div className="flex gap-2">
        <div
          onClick={() => setChecked(prev => !prev)}
          className={`w-8 h-8 flex justify-center items-center rounded-full border-2  ${checked ? "border-[#d98326]" : "border-[#737373]"} cursor-pointer`}
        >
          {checked && <FaCheck className="text-[#d98326]" />}
        </div>
        <p className={`text-2xl  ${checked && "text-[#C2C2C2]"} relative`}>
          <p
            className={`absolute top-[50%] ${checked && "border border-[#C2C2C2]"} w-full `}
          ></p>
          this is todo
        </p>
      </div>
      <FaTrash className="text-red-500 cursor-pointer" />
    </li>
  )
}

export default TaskList
