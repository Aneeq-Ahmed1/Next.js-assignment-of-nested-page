import React from 'react'
import cssStyle from "./nested.module.css"
console.log(cssStyle,"CSS-Style")


const Nested = () => {
  return (
  
  <div>
    <div>
       <h1 className={cssStyle.n}>Hello I`m Nested Page</h1>

    </div>
    

  </div>
  )
}

export default Nested
