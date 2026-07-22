import './App.css'
import Card from './Card'
import Github from './Github'
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
      setTime(time=>{
        return parseFloat((time - 0.1).toFixed(2))
      })
    },100)
    setTimeout(()=>{
      setPrevTotalClicks(prevTotalClicks)
      setRunning(false)
      setDone(true)
      clearInterval(interval)
    },time * 1000)
  }
  return (
    <div className='font-mono'>
      <div className='flex justify-center items-center flex-col'>
        <h1>CPS (Clicks per second) test</h1>
        {done === false && (
          <div>
           <div className='grid grid-cols-3'>
            <div className='m-2 border border-black rounded-lg p-2 flex justify-center items-center flex-col'>
              <label>Time (seconds)</label>
              {running === false && <input type='number' className='text-center border border-black rounded-lg p-2' value={time} onChange={(e)=>{
                setStartTime(parseInt(e.target.value))
                setTime(parseInt(e.target.value))
              }} />}
              {running === true && <input type='number' readOnly className='text-center border border-black rounded-lg p-2' value={time} onChange={(e)=>{
                setStartTime(parseInt(e.target.value))
                setTime(parseInt(e.target.value))
              }} />}
            </div>
            <div className='m-2 border border-black rounded-lg p-2 flex justify-center items-center flex-col'>
              <label>CPS</label>
              <h2>{cps}</h2>
            </div>
            <div className='m-2 border border-black rounded-lg p-2 flex justify-center items-center flex-col'>
              <label>Total clicks</label>
              <h2>{totalClicks}</h2>
            </div>
        </div>  
          <div className={`m-2 p-2`}>
          <button className={` w-300 h-100 border border-black rounded-lg hover:cursor-pointer focus:bg-gray-300`} key={totalClicks} title='Click area' onClick={()=>{
            if(running === true){
              setPrevTotalClicks(totalClicks)
              setTotalClicks(clicks => {return clicks + 1})
              const res = totalClicks / (startTime - time)
              setCPS(parseFloat(res.toFixed(2)))
            } else {
              setRunning(true)
              setPrevTotalClicks(totalClicks)
              setTotalClicks(clicks => {return clicks + 1})
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
          <button className='border border-black rounded-lg p-2 hover:cursor-pointer' onClick={()=>{
          setDone(false)
            setTime(0)
            setStartTime(0)
            setCPS(0)
            setTotalClicks(0)
            setPrevTotalClicks(0)
          }}>Try again</button>
          </div>
        )}
      </div>
      <Github url={"bruh"} />
    </div>
  )
}