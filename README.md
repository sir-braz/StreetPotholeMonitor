# StreetPotholeMonitor

- The StreetPotholeMonitor API helps municipalities locate and address road potholes. Users can report potholes, and the API provides real-time Geolocation data for efficient maintenance. Enhancing road safety for all.

## Map of Pothole Locations

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    #map {
      height: 400px;
    }
  </style>
</head>
<body>
  <div id="map"></div>

  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script>
    // Cria o mapa
    var map = L.map('map').setView([latitude, longitude], zoom);

    // Adiciona um provedor de mapas (ex: OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Adiciona marcador na localização dos buracos
    var buracoMarker = L.marker([buracoLatitude, buracoLongitude]).addTo(map);
    buracoMarker.bindPopup("Buraco");

    // Adicione mais marcadores para outros buracos, se necessário

  </script>
</body>
</html>

