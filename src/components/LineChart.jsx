// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {Col, Row, Typography} from 'antd'
// import { Bar } from 'react-chartjs-2';
// import { LineChartOutlined } from '@ant-design/icons';
// // import { Chart } from 'chart.js/auto';
// // import { Chart as ChartJS } from 'chart.js/auto'
// // import { Chart }            from 'react-chartjs-2'
// import { Chart as ChartJS, registerables } from 'chart.js';
// import { Chart } from 'react-chartjs-2'
// ChartJS.register(...registerables);
// // import {CategoryScale, LinearScale} from 'chart.js'; 
// const {Title} = Typography;


// // Chart.register(CategoryScale);
// // Chart.register(LinearScale);

// const LineChart = ({coinHistory, currentPrice, coinName}) => {
//   const coinPrice = [];
//   const coinTimestamp = [];
//   for (let i=0; i < coinHistory?.data?.history?.length; i +=1){
//     coinPrice.push(coinHistory.data.history[i].price)
//     coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
//   }

//   // console.log(coinPrice)
//   // console.log(coinTimestamp)


//   const data = {
//     labels: coinTimestamp,
//     datasets: [
//       {
//         label : 'Price in USD',
//         data : coinPrice,
//         fill: false,
//         backgroundColor : '#0071bd',
//         borderColor : '#0071bd'
//       }
//     ]
//   }

//   const options ={
//     scales : {
//       x: {
//         type: 'category', // Use 'category' for categorical data
//       },
//       yAxes : [
//         {
//           // type: 'category',
//           ticks : {
//             beginAtZero : true
//           }
//         }
//       ]
//     }
//   }

//   return (
//     <>
//     <Row className='chart-header'>
//         <Title level={2} className='chart-title'>{coinName} Price Chart  </Title>
//         <Col className='price-container'>
//         <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
//         <Title level={5} className='current-price'>Current {coinName} Price : ${currentPrice}</Title>
//         </Col>
//     </Row>
//     <Line data={data} options={options} />
    
//     </>
//   );
// }

// export default LineChart;






import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
// import millify from 'millify';
Chart.register(CategoryScale);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  // const coinPrice = [];
  // const coinTimestamp = [];

  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinPrice.push(coinHistory?.data?.history[i].price);
  // }

  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  // }


  const coinPrice = [10000, 20000, 300000, 400000];
const coinTimestamp = ['label1', 'label1', 'label1', 'label1'];

const coinHistoryData = coinHistory?.data?.history || []; // Ensure we have valid data
console.log(coinHistoryData)

for (let i = 0; i < coinHistoryData.length; i += 1) {
  const dataPoint = coinHistoryData[i];
  console.log(dataPoint)


  if (dataPoint) {
    coinPrice.push(dataPoint.price);
    coinTimestamp.push(new Date(dataPoint.timestamp).toLocaleDateString());
  }
}

for (let i = 0; i < coinHistory && coinHistory.data && coinHistory.data.history && i < coinHistory.data.history.length; i++) {
  const price = coinHistory.data.history[i].price;
  coinPrice.push(price);
  const timestamp  = new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
  coinTimestamp.push(timestamp)
}

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


// const options = {
//   scales: {
//     x: {
//       type: 'category', // Use 'category' for categorical data
//     },
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;