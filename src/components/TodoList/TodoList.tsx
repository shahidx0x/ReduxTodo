import { MdOutlineCleaningServices } from "react-icons/md"
import TaskList from "./TaskList"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  clearMarkedTodo,
  createTodo,
} from "../../features/todo/createTodoSlice"

const TodoList = () => {
  const [todo, setTodo] = useState<string>("")
  const [error, setError] = useState<string>("")
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.todo)

  useEffect(() => {
    if (todo) setError("")
  }, [todo])

  const handleAddTodo = () => {
    if (!todo) {
      setError("Please write something in the input field")
      return
    }
    dispatch(createTodo(todo))
  }

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleAddTodo()
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
              onKeyDown={e => handleKeyPress(e)}
              className="w-56 p-3 rounded-e-full bg-[#76b7cd]  text-white font-bold"
            >
              ADD TODO
            </button>
          </div>
          {error && (
            <p className="bg-yellow-100 p-5 font-medium rounded-xl">{error}</p>
          )}
          <div className="bg-[#f1ece6] p-10 rounded-xl">
            <ul>
              {state.length !== 0 ? (
                state.map(e => (
                  <TaskList
                    key={e.id}
                    task={e.task}
                    id={e.id}
                    isComplete={e.isComplete}
                  />
                ))
              ) : (
                <li className="font-bold text-5xl text-gray-500 flex justify-center">
                  Nothing to do !
                </li>
              )}
            </ul>
            {state.length !== 0 && (
              <div className="flex justify-end pt-5">
                <div
                  onClick={() => dispatch(clearMarkedTodo())}
                  className="flex items-center gap-2 font-bold text-[#d98326] cursor-pointer hover:text-gray-500"
                >
                  <MdOutlineCleaningServices />
                  <p>Clear Completed</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
