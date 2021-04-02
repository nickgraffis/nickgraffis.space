import { useState, useEffect } from "react"

export default function StarryNight() {
  const stars = new Array(20).fill(0)
  const [starStyle, setStarStyle] = useState([])
  useEffect(() => {
    stars.forEach(star => setStarStyle(prev => [...prev, {top: Math.floor(Math.random() * 100) + '%', left: Math.floor(Math.random() * 100) + '%'}]))
  }, [])

  return <>
    {stars.map((star, index) => {
      return <div className="z-30 absolute rounded-full h-2 w-2 bg-lincoln" style={starStyle[index]}></div>
    })}
  </>
}
