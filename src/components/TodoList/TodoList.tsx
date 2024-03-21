import React, { useState } from "react"
import { FaCheck, FaTrash } from "react-icons/fa"

const TodoList = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex justify-center items-center pt-5">
      <div className=" w-[720px] p-3">
        <div className="flex flex-col gap-5">
          <div className="flex w-full">
            <input
              className="w-full rounded-s-full p-3 bg-[#f1ece6]"
              type="text"
              placeholder="Type something"
            />
            <button className="w-56 p-3 rounded-e-full bg-[#76b7cd]  text-white font-bold">
              ADD TODO
            </button>
          </div>
          <div className="bg-[#f1ece6] p-10 rounded-xl">
            <ul>
              <li className="flex justify-between  items-center gap-2 border-b-2 border-[#76B7CD] py-3">
                <div className="flex gap-2">
                  <div
                    onClick={() => setChecked(prev => !prev)}
                    className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-[#d98326] cursor-pointer"
                  >
                    {checked && <FaCheck className="text-[#d98326]" />}
                  </div>
                  <p
                    className={`text-2xl  ${checked && "text-[#C2C2C2]"} relative`}
                  >
                    <p
                      className={`absolute top-[50%] ${checked && "border border-[#C2C2C2]"} w-full `}
                    ></p>
                    this is todo
                  </p>
                </div>
                <FaTrash className="text-red-500 cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
