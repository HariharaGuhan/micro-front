// import { link } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// import Signup from './signup';
// import Signin from './signin';



// export default function Signreg() {
//     localStorage.clear();

//     const [checkstatus, setCheckstatus] = useState('');


//     useEffect(() => {
//         fetch('http//localhost:3000/Checkstatus')
//         .then(response=>response.json())
//         .then(json=>setCheckstatus(json.status));

//     },[])
//     return(
//         <>
//         {checkstatus ==0 ?(
//             <Signup/>
//         ):(
//             <Signin/>
//         )}
//         </>
//     )
// }
