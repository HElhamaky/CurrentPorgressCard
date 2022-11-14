const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Q1 - 2022', 'Q2 - 2022', 'Q3 - 2022', 'Q4 - 2022'],
    datasets: [
      {
        label: 'التقدم الفعلي',
        backgroundColor: '#E4E4E4',
        barThickness: 40,
        data: [20, 40, 60, 80],
      },
      {
        label: 'التقدم المخطط',
        backgroundColor: '#00665E',
        barThickness: 40,
        data: [30, 50, 70, 90],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 12,
          boxHeight: 12,

        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
        ticks: {
          color: 'Black',
          font: {
            family: 'ITC-Bold',
            size: 12,
          },
        },
      },
      y: {
        stacked: false,
        ticks: {
          callback: function (value, index, ticks) {
            return value + '%';
          },
          font: {
            family: 'ITC',
            size: 10,
          },
        },
      },
    },
  },
});
