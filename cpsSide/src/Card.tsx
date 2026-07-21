import './App.css'
type Data = {
    headers:string[],
    values:number[]
}
export default function Card({headers,values}:Data){
    return (
            <div className='flex justify-center items-center flex-col'>
                <h2>Your results:</h2>
                {headers.map((val,idx)=>(
                    <p>{val} : {values[idx]}</p>
                ))}
            </div>
    )
}