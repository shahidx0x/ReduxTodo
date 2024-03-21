import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { persistor, store } from "./app/store"
import "./index.css"
import { PersistGate } from "redux-persist/integration/react"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate
          loading={
            <p className="flex justify-center font-bold text-3xl text-gray-500">
              Loading...
            </p>
          }
          persistor={persistor}
        >
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
