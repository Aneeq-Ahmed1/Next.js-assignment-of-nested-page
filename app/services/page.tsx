import React from 'react'
import cssStyle from "./services.module.css"

console.log(cssStyle,"CSS-Style")

const Services = () => {
  return (
    <div className={cssStyle.body}>
    <div>
      <h1 className={cssStyle.h3}>This is Services Page</h1>
      <div>
        <p className={cssStyle.p2}>Welcome to our Service Page</p><br />
        <p className={cssStyle.p1}><i><strong>The page usually includes information 
          about the different services you provide, 
          the process behind it and the value these services
          bring to customers</strong></i></p><br />
          <div>
            <ul>
               <li><a className={cssStyle.lNested} href="services/nested" target="blank">Nested <span className={cssStyle.nNested}>Click here</span></a></li>
            </ul>
          </div>
          
      </div>
    </div>
    </div>
  )
}

export default Services
