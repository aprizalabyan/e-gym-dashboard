import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip )

const createData = () => {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
    (week) => {
      const visit = Math.floor(Math.random() * 50)
      return {
        week, visit
      }
    }
  )
}

const VisitingMembers = () => {
  const [data, setData] = useState ([])

  useEffect(() => {
    setData(createData())
  }, [])

  const chartData = {
    labels: data.map(({week}) => week),
    datasets: [{
      label: "Visiting Members",
      backgroundColor: "#007AFF",
      borderColor: "#007AFF",
      data: data.map(({visit}) => visit),
      cubicInterpolationMode: 'monotone',
      tension: 0.3
    }]
  }

  const chartOpt = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10
        }
      }
    }
  }

  return (
    <Line data={chartData} options={chartOpt} />
  )
}

export default VisitingMembers