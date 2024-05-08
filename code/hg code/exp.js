import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import img1 from '../images/mec.jpg'


import './exp.css'

export function Exp()
{

    let userid=localStorage.getItem('userid');

    const[viewexp,setViewexp]=useState([]);

    useEffect(()=>
    {
        fetch('http://localhost:3017/View_exp/'+userid)
        .then(response=>response.json())
        .then(json=>setViewexp(json));
    },[]
    )
    return(
        <>
       <div className='container-fluid exp text-center bg-info p-5'>
        <h1 className='   font-italic text-center '>EXPERIENCE</h1>
        <div className='row text-center'>
            <div className='col-lg-6'>
            <img src={img1} className='col-lg-10  i box certificateborder mt-5'/>

            </div>
        <div className=' col-lg-6 box mt-5 font-italic'>
            {viewexp.map((v,i)=>(
<>



  <h3 className='mt-4 text-dark'>JOB :{v.job}</h3>
  <h3 className='text-dark'>   YEARS :{v.years}</h3>
  
  
  </>
   ))}
  </div>


        </div>

       </div>
        </>
    );
}