import { createSlice } from "@reduxjs/toolkit"

interface CreateTodo {
  id: number
  task: string
  isComplete: boolean
}

const initialState: CreateTodo[] = []

export const createTodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const todo = {
        id: Math.random(),
        task: action.payload as string,
        isComplete: false,
      }
      state.push(todo)
    },
    deleteTodo: (state, action) => {
      state = state.filter(e => e.id !== action.payload.id)
      return state
    },
    clearAllTodo: state => {
      return (state = [])
    },
    markAsCompleteTodo: (state, action) => {
      let index = state.findIndex(e => e.id === action.payload.id)
      if (index !== -1) {
        let toUpdate = { ...state[index] }
        toUpdate.isComplete = true
        return state.splice(index, 1, toUpdate)
      }
      return state
    },
  },
})

export const { createTodo, deleteTodo, markAsCompleteTodo, clearAllTodo } =
  createTodoSlice.actions
