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
              className="w-full border border-gray-500 rounded-s-xl p-3"
              type="text"
              placeholder="Type something"
            />
            <button className="w-56 p-3 rounded-e-xl bg-indigo-500 text-white font-bold">
              ADD TODO
            </button>
          </div>
          <div className="bg-yellow-200 p-10 rounded-xl">
            <ul>
              <li className="flex justify-between  items-center gap-2 border-b border-indigo-500 py-3">
                <div
                  onClick={() => setChecked(prev => !prev)}
                  className="w-8 h-8 flex justify-center items-center rounded-full border border-gray-500 cursor-pointer"
                >
                  {checked && <FaCheck className="text-indigo-500" />}
                </div>
                <p className="text-xl flex-initial text-gray-700 font-mono">
                  this is todo
                </p>
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
