// import React from 'react'

// export default function Content_Titles() {

//     const titles = ["html", "css", "js"]
//   return (
//     <div className=''>
//         {titles.map((title) => 
//         <div className='text-3xl'>{title}</div>)}
//     </div>
//   )
// }


// import { useState, useEffect } from 'react';
// function ShowQueations() {
//   const [data, setData] = useState([]);
//   const [selectedData, setSelectedData] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://blablabla');
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   }, []);
//   function handleClick(data) {
//     setSelectedData(data);
//   }
//   return (
//     <div>
//       {data.map((item) => (
//         <button key={item.id} onClick={() => handleClick(item)}>
//           {item.title}
//         </button>
//       ))}
//       {selectedData && <p>{selectedData.title}</p>}
//     </div>
//   );
// }