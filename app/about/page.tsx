import React from 'react'
import cssStyle from "./about.module.css"

console.log(cssStyle,"CSS-Style")

const About = () => {
  return (
  <div className={cssStyle.body}>
    
  
     <div>
      <h1 className={cssStyle.h1}>This is About Page</h1>
      <div>
        <p className={cssStyle.p1}>Welcome to our About Page</p><br />
        <p className={cssStyle.p2}>This is <i> About Page</i>, where you can get the information about this page </p>
        
      </div>
    </div>
    </div>
  )
}

export default About
