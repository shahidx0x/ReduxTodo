import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { createTodoSlice } from "../features/todo/createTodoSlice"

const rootReducer = combineSlices(createTodoSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
  return store
}

export const store = makeStore()
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
