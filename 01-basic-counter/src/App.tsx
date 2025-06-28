import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          React Counter
        </h1>
        
        <div className="text-center mb-6">
          <span className="text-6xl font-bold text-blue-600">{count}</span>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Decrement
          </button>
          
          <button
            onClick={increment}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
