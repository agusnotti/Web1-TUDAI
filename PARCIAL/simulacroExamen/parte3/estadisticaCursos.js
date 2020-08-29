let objeto = {
    "cursos" : [
        {
            "sede": "Tandil",
            "aprobados": 88,
            "desaprobados": 64,
            "año": 2019
        },
        {
            "sede": "Rauch",
            "aprobados": 19,
            "desaprobados": 6,
            "año": 2019
        },
       
    ]
}
mostrarPorConsola();

function mostrarPorConsola(){
    for (let i = 0; i < objeto.cursos.length; i++) {
        let sede = objeto.cursos[i].sede;
        let año = objeto.cursos[i].año;
        console.log(sede +" - "+ año);
    }
}