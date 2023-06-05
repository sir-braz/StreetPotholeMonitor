# StreetPotholeMonitor

- The StreetPotholeMonitor API helps municipalities locate and address road potholes. Users can report potholes, and the API provides real-time Geolocation data for efficient maintenance. Enhancing road safety for all.




const buracoData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [{
    label: 'Quantidade de buracos',
    data: [10, 20, 15, 8, 12],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

const buracoOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const buracoChart = new Chart(document.getElementById('buracoChart'), {
  type: 'bar',
  data: buracoData,
  options: buracoOptions
});


