
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings'


// import './education1.css'

export function Skil() {

  let userid = localStorage.getItem('userid');

  const [viewskill, setViewskill] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3017/View_skill/' + userid)
      .then(response => response.json())
      .then(json => setViewskill(json));
  }, []
  )
  return (
    <>
      <div className='container-fluid font-italic text-center bg-info p-5'>

        <h1 className='  text-center '>TECHNICAL SKILLS</h1>
        <div className='row'>
          <div className=' col-lg-6'>
            {viewskill.map((v, i) => (
              <>


                <h5 className='text-dark p-5'>FRONT-END</h5>

                {viewskill.map((v, i) => (
                  <h3>HTML :<br></br><StarRatings rating={parseInt(v.html)} starRatedColor="gold" name='rating' /></h3>
                ))}
                {viewskill.map((v, i) => (
                  <h3>CSS:<br></br><StarRatings rating={parseInt(v.css)} starRatedColor="gold" name='rating' /></h3>
                ))}


                {viewskill.map((v, i) => (
                  <h3>JAVASCRIPT :<br></br><StarRatings rating={parseInt(v.javascript)} starRatedColor="gold" name='rating' /></h3>
                ))}
                {viewskill.map((v, i) => (
                  <h3>BOOTSTRAP :<br></br><StarRatings rating={parseInt(v.bootstrap)} starRatedColor="gold" name='rating' /></h3>
                ))}


                {viewskill.map((v, i) => (
                  <h3>REACT JS:<br></br><StarRatings rating={parseInt(v.reactjs)} starRatedColor="gold" name='rating' /></h3>
                ))}


              </>
            ))}
          </div>

          <div className='col-lg-6'>
            {viewskill.map((v, i) => (
              <>

                <h5 className='text-dark p-5'>BACK-END</h5>
                {viewskill.map((v, i) => (
                  <h3>NODEJS:<br></br><StarRatings rating={parseInt(v.nodejs)} starRatedColor="gold" name='rating' /></h3>
                ))}
                {viewskill.map((v, i) => (
                  <h3>COREJAVA:<br></br><StarRatings rating={parseInt(v.corejava)} starRatedColor="gold" name='rating' /></h3>
                ))}
                {viewskill.map((v, i) => (
                  <h3>MYSQL :<br></br><StarRatings rating={parseInt(v.mysql)} starRatedColor="gold" name='rating' /></h3>
                ))}

              </>
            ))}

          </div>


        </div>

      </div>
    </>
  );
}