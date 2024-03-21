import { useState } from "react"
import { FaCheck, FaTrash } from "react-icons/fa"
import { useAppDispatch } from "../../app/hooks"
import { deleteTodo } from "../../features/todo/createTodoSlice"

const TaskList = ({ id, task }: { id: number; task: string }) => {
  const [checked, setChecked] = useState(false)
  const dispatch = useAppDispatch()

  const removeTodo = (id: number) => {
    dispatch(deleteTodo({ id: id }))
  }

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
          {task}
        </p>
      </div>
      <FaTrash
        onClick={() => removeTodo(id)}
        className="text-red-500 cursor-pointer"
      />
    </li>
  )
}

export default TaskList
