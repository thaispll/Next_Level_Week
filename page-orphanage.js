//tipos de dados
//String "" Number 01 Object {} 
//Boolean true or false

/*mapa utilizado: leafletjs*/

//create map
const map = L.map('mapid').setView([-22.5085819, -44.0943383], 15);

//create and add tileLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

//const popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orphanages.html?id=1 class="choose-orphanage""> <img src="./public/images/arrow-white.svg">')


//create and add marker
L.marker([-22.5085819, -44.0943383], { icon }) //icon:icon
    .addTo(map)
    .bindPopup(popup)