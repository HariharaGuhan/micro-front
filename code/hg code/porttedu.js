import react from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import img1 from '../images/books.jpg'
import img2 from '../images/img.jpg'
import img3 from '../images/schol.jpg'


import { Cert } from './cert';
import { Skil } from './slil';
import { Exp } from './exp';
import { Home1 } from './home';
import './edu.css'

export function Edu() {

  let userid = localStorage.getItem('userid');

  const [vieweducation, setVieweducation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3017/View_education/' + userid)
      .then(response => response.json())
      .then(json => setVieweducation(json));
  }, []
  )
  return (
    <>
    
      <div className='container-fluid bgeducation bg-light '>
      <h1 className='text-success  text-center text-dark font-italic p-5'>Education Details </h1>
        <div className='container-fluid edu '>
          
          <div className='row'>
            <div className='col-lg-4 '>
              <img src={img1} className='col-lg-12 mt- boxc educationborder' />

              <img src={img3} className='col-lg-12 boxc mt-2 educationborder' />
              <img src={img2} className='col-lg-12 boxc educationborder' />

            </div>
            <div className='col-lg-2'>&nbsp;

            </div>
            <div className='col-lg-6 '>

              {/* {vieweducation.map((v,i)=>(
                            <>
                              <h5 className='text-warning'>PG</h5>
                              <h3>INSTITUTE :{v.pginstitute}</h3>
                              <h3>Department  :{v.pgstandard}</h3>
                             
                            </>


                          ))} */}
              <div className='box bg-info text-center'>

                {vieweducation.map((v, i) => (
                  <>
                    <h5 className='text-warning '>UNDER GRADUATE</h5>
                    <h3 className=''>INSTITUTE : </h3><h3 className=' text-light'>{v.uginstitute}</h3>
                    <h3 className=''>DEPARTMENT : </h3><h3 className='text-light'>{v.ugstandard}</h3>

                  </>


                ))}
              </div>
              <div className='mt-5 border lg box bg-info text-center'>

                {
                vieweducation.map((v, i) => (
                  <>
                    <h5 className='text-warning'>HIGHER SECONDARY</h5>
                    <h3 className='text-ligt'> SCHOOL NAME:</h3><h3 className=' text-light'>{v.sslcinstitute}</h3>
                    <h3 className=''>CLASS : </h3><h3 className=' text-light'>{v.sslcstandard}</h3>

                  </>


                ))}
              </div>
              <div className='mt-5 box bg-info text-center'>

                {vieweducation.map((v, i) => (
                  <>
                    <h5 className='text-warning mt-5'>SECONDARY SCHOOL </h5>
                    <h3 className='text'> SCHOOL NAME:</h3><h3 className='font- text-light'>{v.hscinstitute}</h3>
                    <h3 className='text-li'>CLASS: </h3><h3 className=' text-light'>{v.hscstandard}</h3>

                  </>


                ))}
              </div>



            </div>

          </div>


        </div>

      </div>
    
    </>
  );
}