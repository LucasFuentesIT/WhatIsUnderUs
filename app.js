alert('To work properly you should have the geolocation enable')
//lo primero que se carga en la web (coordenadas)
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log("Latitude: " + lat);
    console.log("Longitude: " + lng);
}
const myLocation = () => {
    getLocation()
    document.getElementById('inputLat').value = lat;
    document.getElementById('inputLng').value = lng;
    document.getElementById('maps').src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13099.454104204166!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f100!5e0!3m2!1ses!2suy!4v1663206065036!5m2!1ses!2suy"`

}
const invert = () => {
    // document.getElementById('coordenadas') = `Lat:${Number(document.getElementById('inputLat').value)} Lng:${Number(document.getElementById('inputLng').value)}`
    invertY = Number(document.getElementById('inputLat').value) * (-1);
    if ((Number(document.getElementById('inputLng').value)) > 0) { invertX = ((Number(document.getElementById('inputLng').value) - 180) % 360); }
    else { invertX = ((Number(document.getElementById('inputLng').value) + 180) % 360) };
    console.log(invertY, invertX)
    console.log(`https://www.google.com.uy/maps/@${invertY},${invertX},7z?hl=es-419`)
    document.getElementById('inputLat').value = invertY;
    document.getElementById('inputLng').value = invertX;
    document.getElementById('maps').src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13099.454104204166!2d${invertX}!3d${invertY}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f100!5e0!3m2!1ses!2suy!4v1663206065036!5m2!1ses!2suy"`
    // return window.open(`https://www.google.com.uy/maps/@${invertY},${invertX},7z?hl=es-419`, '_blank')
}




// como poner un marcador al realizar la busqueda 
// poner un boton que nos devuelva a nuestro origen DONE
//jugar con otras clases de botones de funciones 
// tratar de buscar la tierra mas cercana 
