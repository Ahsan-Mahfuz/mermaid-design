import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

const EarningsChart = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Earnings Growth',
        data: [50, 70, 90, 120, 50, 180, 200, 230, 50, 280, 100, 350],
        backgroundColor: '#0063F7',
        borderColor: '#004bb7',
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to adapt to its container
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Earnings Growth (Month-wise)',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '2024',
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Earnings ($)',
          font: {
            size: 14,
          },
        },
        beginAtZero: true,
      },
    },
  }

  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      <Bar data={data} options={options} />
    </div>
  )
}

export default EarningsChart
