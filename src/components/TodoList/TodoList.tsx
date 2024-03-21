import { MdOutlineCleaningServices } from "react-icons/md"
import TaskList from "./TaskList"
import { useEffect, useState } from "react"

const TodoList = () => {
  const [todo, setTodo] = useState<string>("")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (todo) setError("")
  }, [todo])

  const handleAddTodo = () => {
    if (!todo) {
      setError("Please add some todo")
      return
    }
  }
  return (
    <div className="flex justify-center items-center pt-5">
      <div className=" w-[720px] p-3">
        <div className="flex flex-col gap-5">
          <div className="flex w-full">
            <input
              onChange={e => setTodo(e.target.value)}
              className="w-full rounded-s-full p-3 bg-[#f1ece6]"
              type="text"
              placeholder="Type something"
            />
            <button
              onClick={() => handleAddTodo()}
              className="w-56 p-3 rounded-e-full bg-[#76b7cd]  text-white font-bold"
            >
              ADD TODO
            </button>
          </div>
          <p>{error}</p>
          <div className="bg-[#f1ece6] p-10 rounded-xl">
            <ul>
              {Array.from({ length: 10 }).map(e => (
                <>
                  <TaskList />
                </>
              ))}
            </ul>
            <div className="flex justify-end pt-5">
              <div className="flex items-center gap-2 font-bold text-[#d98326] cursor-pointer hover:text-gray-500">
                <MdOutlineCleaningServices />
                <p>Clear Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
