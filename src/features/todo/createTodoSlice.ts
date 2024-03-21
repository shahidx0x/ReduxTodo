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
      const index = state.findIndex(e => e.id === action.payload.id)
      if (index !== -1) {
        const toUpdate = { ...state[index], isComplete: true }
        return [...state.slice(0, index), toUpdate, ...state.slice(index + 1)]
      }
      return state
    },
    unMarkAsComplete: (state, action) => {
      const index = state.findIndex(e => e.id === action.payload.id)
      if (index !== -1) {
        const toUpdate = { ...state[index], isComplete: false }
        return [...state.slice(0, index), toUpdate, ...state.slice(index + 1)]
      }
      return state
    },
    clearMarkedTodo: state => {
      state = state.filter(e => e.isComplete !== true)
      return state
    },
  },
})

export const {
  createTodo,
  deleteTodo,
  markAsCompleteTodo,
  unMarkAsComplete,
  clearAllTodo,
  clearMarkedTodo,
} = createTodoSlice.actions
