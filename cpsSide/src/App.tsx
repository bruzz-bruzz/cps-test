import './App.css'
import {useState} from 'react'
import Card from './Card'
export default function App(){
  const [time,setTime] = useState(0)
  const [countdown,setCountdown] = useState(time)
  const [cps,setCPS] = useState(0)
  const [totalClicks,setTotalClicks] = useState(0)
  const [running,setRunning] = useState(false)
  function startTest(){
    const interval = setInterval(()=>{
      if(time <= 0){
        clearInterval(interval)
      } else {
        setTime(time => time - 0.1)
      }
    },100)
  }
  return (
    <div className='font-mono'>
      <div className='flex justify-center items-center flex-col'>
        <h1>CPS (Clicks per second) test</h1>
        <div className='grid grid-cols-3'>
            <Card header={"Timer"} value={time} />
            <Card header={"CPS"} value={cps} />
            <Card header={"Total Clicks"} value={totalClicks} />
        </div>  
        <div className='flex justify-center items-center flex-col'>
          <label>Time allocated: {time}</label>
          <input type='number' className='border border-black rounded-lg p-2' value={time} onChange={(e)=>setTime(parseInt(e.target.value))} />
        </div>
        <div>
          <button className='flex justify-center items-center flex-col w-9/10 border border-black rounded-lg hover:cursor-pointer' title='Click area' onClick={()=>{
            if(running === true){
              setTotalClicks(clicks => clicks + 1)
            } else {
              startTest()
            }
          }}>
            {running === false ? 'Click to start the test' : ''}
          </button>
        </div>
      </div>
    </div>
  )
}