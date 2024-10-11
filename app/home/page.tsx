import React from 'react'
import cssStyle from "./home.module.css"

console.log(cssStyle, "CSS-Style")

const HomePage = () => {
  return (<div className={cssStyle.body}>
    
  
    <div>
      <h1 className={cssStyle.h1}>This is my Home Page</h1>
    </div>
    </div>
  )
}

export default HomePage
