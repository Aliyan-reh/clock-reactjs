"use client"

import { useEffect, useState } from "react"

type props = {
    time:number
}

export const Clock = ({time:aliyan}: props) => {
    const [time,setTime] = useState(new Date(aliyan))
    useEffect(()=>{

    const timer =setInterval(()=>{
        setTime(new Date())
    },1000)
    return () => clearInterval (timer)
},[])
    
  return <div className="text-7xl tabular-nums">
  {time.toLocaleTimeString(undefined,{
    // hour:'2-digit',minute:'2-digit'
  })}
</div>
}
