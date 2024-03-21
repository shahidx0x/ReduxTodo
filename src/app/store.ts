import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { createTodoSlice } from "../features/todo/createTodoSlice"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"

const rootReducer = combineSlices(createTodoSlice)
export type RootState = ReturnType<typeof rootReducer>
const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
  })
  const persistor = persistStore(store)
  return { store, persistor }
}

export const { store, persistor } = makeStore()
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
