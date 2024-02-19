const tiempo = document.getElementById('tiempo');
const fecha = document.getElementById('Fecha');

const monthNames = ["Enero","Febrero","Marzo","Abril",
              "Mayo","Junio","Julio","Agosto",
              "Septiembre","Octubre","Noviembre","Diciembre"];
const interval = setInterval(() => {

    const local = new Date();
    
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();
        tiempo.innerHTML = local.toLocaleTimeString();
        Fecha.innerHTML = `${day} ${monthNames[month]} ${year}`;
} ,1000);