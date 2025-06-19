import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/Card'

export function App() {
  const [count, setCount] = useState(0)
  let Obj = {
    username: "harshit",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="harshit" />
    </>
  )
}

