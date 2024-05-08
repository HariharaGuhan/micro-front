import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import img1 from '../images/html.jpeg';
import img2 from '../images/js.jpeg';
// import img3 from '../images/react basics.jpg';
import './cert.css';

export function Cert()
{
  
  
    return(
        <>
          <div className='container-fluid bgcert bg-light p-5 text-center mb-5'>
            <div className='container-fluid '>
              <h1 className='text-center  font-italic  '>Certificates</h1>
                <div className='row'>
                  <div className='col-lg-5 p-5'>
                    <h4 className=' font-italic'>HTML</h4>
                    <img src={img1} className='col-lg-12  boxc d certificateborder mt-5'/>

                  </div>
                  <div className='col-lg-2'>
                  &nbsp;
                  </div>
                  <div className='col-lg-5 p-5'>
                    <h4 className=' font-italic'>JavaScript</h4>
                  <img src={img2} className='col-lg-12 d boxc  certificateborder mt-5'/>

                  </div>


                  {/* <div className='col-lg-5'>
                    <img src={img3} className='col-lg-10 i   certificateborder mt-5'/>

                  </div>
                  <div className='col-lg-2'> */}
                  
                  </div>
                  {/* <div className='col-lg-5'>
                  <img src={img4} className='col-lg-10  border border-danger  certificateborder mt-5'/>

                  </div> */}


                {/* </div> */}

            </div>

          </div>
        </>
    );
}