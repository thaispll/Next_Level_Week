//tipos de dados
//String "" Number 01 Object {} 
//Boolean true or false

let map = L.map('mapid').setView([51.505, -0.09], 13)

L.tileLayer(
	'https://{s}.tile.openstreetmap.org/{z}/{x}?{y}.png', 
	{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
	}
).addTo(map)

.marker([51.5, -0.09])
.addTo(map)
.bindPopup('A pretty CSS3 popup. <br> Easily customizable')
.openPopup()