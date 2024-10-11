import Link from "next/link"; 
import React from "react";

export default function Home() {
  return ( 
    <div>
      <div className="main">
        
        
         <ul>
         
            {/* <li></li> */}
            <li>
            <Link href="home" >Home</Link> <span></span>
            <a href="about" target="_blank">About</a> <span></span>
            <a href="contact" target="blank">Contact</a> <span></span>
            <a href="services" target="blank">Services</a> <span></span>
            </li>


           
          
         </ul>

      </div>

    </div>

  );
}

