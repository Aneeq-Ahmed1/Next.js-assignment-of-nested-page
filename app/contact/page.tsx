import React from 'react'
import cssStyle from "./contact.module.css"

console.log(cssStyle,"CSS-Style")

const Contact = () => {
  return (
    
      
   
  <div className={cssStyle.body}>
    <div>
      <h1 className={cssStyle.h2}>This is Contact Page</h1>
      <div>
        <p className={cssStyle.p1}>Welcome to our contact page</p>
        <p className={cssStyle.p2}>Feel free to <span className={cssStyle.p3}>Contact Us</span></p>
        <p><b>Email: abcd@gmail.com</b></p>
         <b>Ph # +920123456789</b>
      </div>
    </div>
  </div> 
  
  )
}

export default Contact
