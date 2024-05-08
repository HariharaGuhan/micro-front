import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Menu from './webpage/menu';
import Header from './webpage/header';
import { useState,useEffect } from "react";
import { Edu } from './porttedu';
import { Home1 } from './home';
import { Cert } from './cert';
import { Skil } from './slil';
import { Exp } from './exp';
import { Foot } from './footer';




export default function Overall(){
    
   
    

    return(
        <>

       <Home1 />
        
       <Edu/>

       {/* <Cert /> */}
     
      
       <Skil/>
       <Cert />

       <Exp />  
       <Foot/> 
        </>
    )
}