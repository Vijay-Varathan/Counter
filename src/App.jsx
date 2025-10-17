import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div className='flex justify-center h-screen items-center flex-col'>
     
  <div className='mb-34 text-4xl  italic antialiased'>
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
  COUNTER
</h1>

  </div>
  <div className='flex'> 
     <button className='bg-red-400 hover:bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer w-[50px] text-2xl border-2 border-green-800 text-black rounded-lg' onClick={() => setCount(count - 1)}>
  -
</button>
<div className='text-2xl font-extrabold animate-bounce w-[20px]  text-fuchsia-600 m-8'>
  {count}
</div>
<button className='bg-green-400 hover:bg-gradient-to-r from-teal-500 to-cyan-500  cursor-pointer w-[50px]  border-2 border-red-800 text-2xl text-black rounded-lg' onClick={() => setCount(count + 1)}>
  +
</button>
</div> 
    </div>
}

export default App
