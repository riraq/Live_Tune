import React, { useContext } from "react"
import "./style.css"

function Footer(){
  return (

<Container maxWidth="lg" >
<Grid item xs={12} >
    <img className="user-image" src=".../assets/LIVE-TUNE-LOGO.png"/>
    </Grid> 
    <Grid item xs={12} >
   <h3> Created by Rony Iraq, Manuel Frayre & Payton Whinnery</h3>
      </Grid> 
 </Container>


      /* 
  <div>

<Grid item xs={12} >
    <img className="user-image" src=""/>
    </Grid> 
    <Grid item xs={12} >
   <h3> Created by Rony Iraq, Manuel Frayre & Payton Whinnery</h3>
      </Grid> 
      <div className="footer">

        
      Created by Rony Iraq, Manuel Frayre & Payton Whinnery
      </div>
  </div> */
  )
}

export default Footer