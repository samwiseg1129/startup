import React from 'react';


export default function Dash2() {
  return (

      <div className=' bg-light container-fluid bg-secondary text-center'>
        <main className="container my-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="text-center mb-4">Click some buttons</h1>
                    {/* <button className="btn btn-outline-primary" type="button" onClick={buttonclick(1)}>Log Out</button>
                    <button className="btn btn-outline-primary" type="button" onClick={buttonclick(2)}>Log Out</button>
                    <button className="btn btn-outline-primary" type="button" onClick={buttonclick(3)}>Log Out</button>
                    <button className="btn btn-outline-primary" type="button" onClick={buttonclick(3)}>Log Out</button>
                    <button className="btn btn-primary" type="button" onClick={buttonclick(3)}>Submit</button> */}
                </div>
            </div>
        </main>
    </div>  
  );
}



// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Dash2() {
//   const [clickCounts, setClickCounts] = useState([0, 0, 0, 0]);

//   const handleButtonClick = (index) => {
//     setClickCounts(prevCounts => {
//       const newCounts = [...prevCounts];
//       newCounts[index] += 1;
//       return newCounts;
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post('/api/submit-clicks', { clickCounts });
//       alert('Click counts submitted successfully!');
//       setClickCounts([0, 0, 0, 0]); // Reset counts after submission
//     } catch (error) {
//       console.error('Error submitting click counts:', error);
//       alert('Failed to submit click counts. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {clickCounts.map((count, index) => (
//         <div key={index}>
//           <button onClick={() => handleButtonClick(index)}>
//             Button {index + 1}
//           </button>
//           <span>Clicks: {count}</span>
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit Counts</button>
//     </div>
//   );
// }
