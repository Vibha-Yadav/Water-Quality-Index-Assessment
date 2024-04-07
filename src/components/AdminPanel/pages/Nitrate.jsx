// import React from "react";
// import nimage from '../images/nitrate.png';

// import Papa from 'papaparse';
// import { Line } from 'react-chartjs-2';


import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Nitrate=()=>{
    // return(
    //     <div>
    //       {/* <h1>Nitrate</h1> */}
    //       <img src={nimage} alt="Nitrate" />
    //     </div>
    // );
  // Third attempt:(


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/dataset.csv');
      const csvData = await response.text();
      // Parse CSV data
      const parsedData = parseCSV(csvData);
      setData(parsedData);
    };
    fetchData();
  }, []);

  const parseCSV = (csv) => {
    // Split CSV by lines
    const rows = csv.split('\n');
    
    // Extract header row to get column indices
    const headerRow = rows[0].split(',');
    const timestampIndex = headerRow.indexOf('Timestamp');
    const no3Index = headerRow.indexOf('NO3');

    // Initialize array to store parsed data
    const parsedData = [];

    // Iterate over rows (excluding header)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(',');
      if (row.length >= Math.max(timestampIndex, no3Index)) {
        parsedData.push({
          timestamp: row[timestampIndex],
          no3: parseFloat(row[no3Index]) // Assuming NO3 values are numeric
        });
      }
    }

    return parsedData;
  };

  return (
    <div>
      <LineChart width={700} height={500} data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="no3" stroke="#8884d8" />
      </LineChart>
    </div>
  );

};

export default Nitrate;

// //scatterplot
// import React, { useState, useEffect } from 'react';
// import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const Nitrate = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/sandy_ck_sorbellos_road_joined (4).csv');
//       const csvData = await response.text();
//       const parsedData = parseCSV(csvData);
//       setData(parsedData);
//     };
//     fetchData();
//   }, []);

//   const parseCSV = (csv) => {
//     const rows = csv.split('\n');
//     const headerRow = rows[0].split(',');
//     const timestampIndex = headerRow.indexOf('Timestamp');
//     const no3Index = headerRow.indexOf('NO3');

//     const parsedData = [];

//     for (let i = 1; i < rows.length; i++) {
//       const row = rows[i].split(',');
//       if (row.length >= Math.max(timestampIndex, no3Index)) {
//         parsedData.push({
//           timestamp: row[timestampIndex],
//           no3: parseFloat(row[no3Index])
//         });
//       }
//     }

//     return parsedData;
//   };

//   return (
//     <div>
//       <ScatterChart width={700} height={500}>
//         <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//         <XAxis dataKey="timestamp" type="category" />
//         <YAxis />
//         <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//         <Legend />
//         <Scatter name="NO3" data={data} fill="#8884d8" shape="circle" />
//       </ScatterChart>
//     </div>
//   );
// };

// export default Nitrate;
