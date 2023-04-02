import React from 'react'
import '../styles/Main.css'
import img from "../icons/statue.png"
import icon from '../icons/back.png'


function Main({setShow,show}) {
  const toggle = () =>{
    setShow(!show)
    console.log("cliefofihewofuh");
  }
  return (
    <div className='main_wrapper'>
      <div style={{height:"100%",width:"1%"}} className='back_btn_container'>
          <div className='close_icon_container'>
              <img src={icon} />
          </div>
      </div>
      <div style={{height:"100%",width:"99%",display:"flex",alignItems:"center",justifyContent:'center'}} onClick={() => toggle()}>
      <img src={img} className='icon'/>
      </div>
    </div>
  )
}

export default Main
