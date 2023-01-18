import React, {useState,useEffect} from 'react'

export default function UseEffectThree() {
    const [XY, setXy] = useState({x:0,y:0})
    const [display, setDisplay] = useState(true)
    function loggedPosition(e){
        //console.log("mouse event")
        setXy({
            ... XY,
            x : e.clientX,
            y : e.clientY 
        })
    }
    useEffect(()=>{
        console.log("effect occured")
        window.addEventListener('mousemove',loggedPosition)
        
        
        return () => {
            console.log('component unmount')
            window.removeEventListener('mousemove',loggedPosition)
        }
    },[])
  return (
    <>
        {display && <div>x - {XY.x} y - {XY.y}</div>}
        <button onClick={()=>setDisplay(!display)}>togglebutton</button>
    </>
  )
}
