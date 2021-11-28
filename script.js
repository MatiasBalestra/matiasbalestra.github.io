window.onload = iniciar;

function iniciar() {
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickBoton);
}


async function cargarUrl(url) {
    let response = await fetch(url);
    return response.json();
}

async function clickBoton() {

    let pais = document.getElementById('selectPais').value;
    let fecha = document.getElementById('inputFecha').value;
   
    
    let url= `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`

    let json = await cargarUrl(url);
    console.log(json)

    let estadisticas = json.dates[fecha].countries[pais];
    console.log (estadisticas);

    document.getElementById('today_confirmed').innerHTML= " " + estadisticas.today_confirmed;
    document.getElementById('today_deaths').innerHTML= " " + estadisticas.today_deaths;
    document.getElementById('today_hospitalised_patients_with_symptoms').innerHTML= " " + estadisticas.today_hospitalised_patients_with_symptoms;
    document.getElementById('today_intensive_care').innerHTML= " " + estadisticas.today_intensive_care;
    document.getElementById('today_new_confirmed').innerHTML= " " + estadisticas.today_new_confirmed;
    document.getElementById('today_new_deaths').innerHTML= " " + estadisticas.today_new_deaths;
    document.getElementById('today_new_hospitalised_patients_with_symptoms').innerHTML= " " + estadisticas.today_new_hospitalised_patients_with_symptoms;
    document.getElementById('today_new_intensive_care').innerHTML= " " + estadisticas.today_new_intensive_care;
    document.getElementById('today_new_open_cases').innerHTML= " " + estadisticas.today_new_open_cases;
    document.getElementById('today_new_recovered').innerHTML= " " + estadisticas.today_new_recovered;
    document.getElementById('today_new_total_hospitalised_patients').innerHTML= " " + estadisticas.today_new_total_hospitalised_patients;

//today_confirmed: 235290
//today_deaths: 28678
//today_hospitalised_patients_with_symptoms: 0
//today_intensive_care: 11454
//today_new_confirmed: 466
//today_new_deaths: 50
//today_new_hospitalised_patients_with_symptoms: 0
//today_new_intensive_care: 20
//today_new_open_cases: -381
//today_new_recovered: 797
//today_new_total_hospitalised_patients: 140
}