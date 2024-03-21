import { useState } from "react"
import "./App.css"
const App = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div className="bg-[#f3f3f3] flex justify-center w-screen">
        <div className="flex">
          <div
            className={`w-80 p-5 flex justify-center cursor-pointer ${activeTab === 0 && "border-b-2 border-black"}`}
            onClick={() => setActiveTab(0)}
          >
            <h2 className="font-bold text-xl text-gray-500">Personal</h2>
          </div>
          <div
            className={`w-80 p-5 flex justify-center cursor-pointer ${activeTab === 1 && "border-b-2 border-black"}`}
            onClick={() => setActiveTab(1)}
          >
            <h2 className="font-bold text-xl text-gray-500">Professional</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
