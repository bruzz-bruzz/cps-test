import './App.css'
import Card from './Card'
import {useState} from 'react'
export default function App(){
  const [startTime,setStartTime] = useState(0)
  const [time,setTime] = useState(0)
  const [cps,setCPS] = useState(0)
  const [totalClicks,setTotalClicks] = useState(0)
  const [prevTotalClicks,setPrevTotalClicks] = useState(0)
  const [running,setRunning] = useState(false)
  const [done,setDone] = useState(false)
  function startTest(){
    const interval = setInterval(()=>{
      if(time <= 0){
        setRunning(false)
        setDone(true)
        clearInterval(interval)
      } else {
        setCPS(()=>{
          const res = totalClicks / (startTime - time)
          return res
        })
        setTime(time => time - 0.1)
      }
    },100)
  }
  return (
    <div className='font-mono'>
      <div className='flex justify-center items-center flex-col'>
        <h1>CPS (Clicks per second) test</h1>
        {done === false && (
          <div>
           <div className='grid grid-cols-3'>
            <div className='border border-black rounded-lg p-2 flex justify-center items-center flex-col'>
              <label>Time</label>
              {running === false && <input type='number' className='border border-black rounded-lg p-2' value={time} onChange={(e)=>{
                setStartTime(parseInt(e.target.value))
                setTime(parseInt(e.target.value))
              }} />}
              {running === true && <input type='number' readOnly className='border border-black rounded-lg p-2' value={time} onChange={(e)=>{
                setStartTime(parseInt(e.target.value))
                setTime(parseInt(e.target.value))
              }} />}
            </div>
            <div className='border border-black rounded-lg p-2 flex justify-center items-center flex-col'>
              <label>CPS</label>
              <h2>{cps}</h2>
            </div>
            <div className='border border-black rounded-lg p-2 flex justify-center items-center flex-col'>
              <label>Total clicks</label>
              <h2>{totalClicks}</h2>
            </div>
        </div>  
        <div>
          <button className={`${totalClicks - prevTotalClicks >= 1 ? 'animation-pulse' : ''} flex justify-center items-center flex-col w-9/10 border border-black rounded-lg hover:cursor-pointer`}title='Click area' onClick={()=>{
            if(running === true){
              setPrevTotalClicks(()=>{return totalClicks})
              setTotalClicks(clicks => clicks + 1)
            } else {
              setRunning(true)
              startTest()
            }
          }}>
            {running === false ? 'Click to start the test' : ''}
          </button>
        </div>
        </div>
        )}
        {done === true && (
          <div className='flex justify-center items-center flex-col p-2 border border-black rounded-lg'>
          <Card headers={['CPS','Total Clicks','Time']} values={[cps,totalClicks,startTime]} />
          <button className='border border-black rounded-lg p-2' onClick={()=>setDone(false)}>Try again</button>
          </div>
        )}
      </div>
    </div>
  )
}