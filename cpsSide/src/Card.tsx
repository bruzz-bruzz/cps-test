import './App.css'
type Data = {
    header:string,
    value:number
}
export default function Card({header,value}:Data){
    return (
        <div className='font-mono w-full p-2 border border-black rounded-lg'>
            <div className='flex justify-center items-center flex-col'>
                <h3>{header}</h3>
                <h4>{value}</h4>
            </div>
        </div>
    )
}