import { useEffect, useState } from "react"
import { FaCheck, FaTrash } from "react-icons/fa"
import { useAppDispatch } from "../../app/hooks"
import {
  deleteTodo,
  markAsCompleteTodo,
  unMarkAsComplete,
} from "../../features/todo/createTodoSlice"

const TaskList = ({
  id,
  task,
  isComplete,
}: {
  id: number
  task: string
  isComplete: boolean
}) => {
  const [checked, setChecked] = useState(false)
  const dispatch = useAppDispatch()

  const removeTodo = (id: number) => {
    dispatch(deleteTodo({ id: id }))
  }
  
  useEffect(() => {
    if (checked) {
      dispatch(markAsCompleteTodo({ id }))
    } else {
      dispatch(unMarkAsComplete({ id }))
    }
  }, [checked, dispatch, id])

  return (
    <li className="flex justify-between  items-center gap-2 border-b-2 border-[#76B7CD] py-3">
      <div className="flex gap-2">
        <div
          onClick={() => setChecked(prev => !prev)}
          className={`w-8 h-8 flex justify-center items-center rounded-full border-2  ${isComplete ? "border-[#d98326]" : "border-[#737373]"} cursor-pointer`}
        >
          {isComplete && <FaCheck className="text-[#d98326]" />}
        </div>
        <h1 className={`text-2xl  ${isComplete && "text-[#C2C2C2]"} relative`}>
          <p
            className={`absolute top-[50%] ${isComplete && "border border-[#C2C2C2]"} w-full `}
          ></p>
          {task}
        </h1>
      </div>
      <FaTrash
        onClick={() => removeTodo(id)}
        className="text-red-500 cursor-pointer"
      />
    </li>
  )
}

export default TaskList
