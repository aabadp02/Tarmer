var express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const { userInfo } = require('os');
var neo4j = require('neo4j-driver');

//Vamos a inicializar el servidor express que será nuestro backend
var app = express();

//

app.use(cors());
app.use(bodyParser.json())

var driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'a'));
var session = driver.session();

//Ponemos a correr a nuestro servidor
app.listen(3000, function(){
    
    console.log('La aplicación NodeJS que estamos utilizando se ha ejecutado correctamente en el puerto 3000')

});

app.post("/prueba", function(req, res){
    
    console.log("--------------------------------------------------")
    var data = req.body.checkbox;

    console.log("Hemos recibido un mensaje post a Prueba")
    console.log(data);

    session
        .run('MATCH(n) RETURN n LIMIT 30')
        .then(function(result){
            result.records.forEach(function(record){
                console.log(record);
            })
        })
        .catch(function(err){
            console.log(err);
        });
    
    res.send('It Works')
});

//Si lo que queremos es jugar, la tarjeta gráfica tendrá más peso
app.post("/jugar", function(req, res){

    var num = req.body.puntuacion;

    //Primero tratermos de sacar


});

app.post("/priorizarGrafica", async function(req, res){

    var num = req.body.puntuacion;
    var oc = req.body.overclocking;
    var eco = req.body.economic;
    var caracteristicas = req.body.caract;
    var builds = [];

    //console.log(caracteristicas);
    
    console.log(num);

    await sacarComponentes(num, num + 5, num - 5, num + 2, 0.70, 0.30, num, 1, oc, eco, caracteristicas, res, undefined);
});

//Tareas: (Gaming:1, eidicion: 2, streaming: 3, ofimática: 4, multimedia: 5)

app.post("/priorizarProcesador", function(req, res){

    var num = req.body.puntuacion;
    var oc = req.body.overclocking;
    var flagSo = req.body.sistOp;
    var eco = req.body.economic;
    var caracteristicas = req.body.caract;
    var activ = req.body.actividad;
    var builds = [];

    console.log("Hemos recibido un post a priorizarProcesador");
    console.log("El número es: " + num);

    sacarComponentes(num - 5, num, num, num + 5, 0.30, 0.70, num, activ, oc, eco, caracteristicas, res, flagSo);
});

app.post("/priorizarAmbos", function(req, res){

    var num = req.body.puntuacion;
    var oc = req.body.overclocking;
    var eco = req.body.economic;
    var caracteristicas = req.body.caract;
    var activ = req.body.actividad;

    console.log("Hemos recibido un post a priorizarAmbos", 3);
    console.log("El número es: " + num);

    sacarComponentes(num, num + 5, num, num + 5, 0.50, 0.50, num, activ, oc, eco, caracteristicas, res, undefined);
});

app.post("/priorizarAmbosDif", function(req, res){

    var num1 = req.body.puntuacion;
    var num2 = req.body.puntuacion2;

    console.log("Hemos recibido un post a priorizarAmbosDif", 4);
    console.log("El número es: " + num1);
    console.log("El segundo úmero es: " + num2);

});

function pruebaRecibir(builds)
{
    console.log(builds);
}

//Función para sacar los componentes de la build utilizando los rangos de puntuación para gráfica y procesador.
async function sacarComponentes(minGraf, maxGraf, minProc, maxProc, porcentajeGrafica, porcentajeProcesador, esfuerzo, flagActividad, overclocking, economico, caracteristicas, res, flagSo)
{
    var graficas = [];
    var procesadores = [];
    var modulosRam = [];
    var monitores = [];
    var fuentesAlimentacion = [];
    var builds = [];
    var queryGrafica = 'MATCH (g:tarjetaGrafica) WHERE g.puntuacion >= ' + minGraf + ' AND g.puntuacion <= ' + maxGraf + ' RETURN g';
    var queryProc = 'MATCH (p:procesador)-[:WORKSON]->(pl:placaBase) WHERE p.puntuacion >= ' + minProc + ' AND p.puntuacion <= ' + maxProc + ' RETURN p, pl'

    //Si el esfuerzo que hay que hacer es muy bajo, escogeremos un procesador algo más fuerte con APU, ya que no vamos a escoger tarjeta gráfica
    if(esfuerzo < 40)
    {
        minProc = 55;
        maxProc = 63;
        queryProc = 'MATCH (p:procesador)-[:WORKSON]->(pl:placaBase) WHERE (p.puntuacion >= ' + minProc + ' AND p.puntuacion <= ' + maxProc + ') AND p.graficos = 1 RETURN p, pl'
        
        if(flagActividad == 5)
        {
            minProc = 55;
            maxProc = 66;
            queryProc = 'MATCH (p:procesador)-[:WORKSON]->(pl:placaBase) WHERE (p.puntuacion >= ' + minProc + ' AND p.puntuacion <= ' + maxProc + ') AND p.graficos = 1 RETURN p, pl'
        }
    }
    //Si 
    if(esfuerzo >= 40 && esfuerzo < 50)
    {
        minGraf = 50;
        maxGraf = 55;
        minProc = 50;
        maxProc = 55;
        queryGrafica = 'MATCH (g:tarjetaGrafica) WHERE g.puntuacion >= ' + minGraf + ' AND g.puntuacion <= ' + maxGraf + ' RETURN g';
        queryProc = 'MATCH (p:procesador)-[:WORKSON]->(pl:placaBase) WHERE p.puntuacion >= ' + minProc + ' AND p.puntuacion <= ' + maxProc + ' RETURN p, pl'
    }

    //Si la actividad es 2, escogeremos un procesador con al menos 6 núcleos.
    if(flagActividad == 2)
    {
        queryProc = 'MATCH (p:procesador)-[:WORKSON]->(pl:placaBase) WHERE (p.puntuacion >= ' + minProc + ' AND p.puntuacion <= ' + maxProc + ') AND p.nucleos >= 6 RETURN p, pl';
    }
    
    console.log(minProc);
    console.log(maxProc);
    console.log(queryProc);

    session
        .run(queryGrafica)
        .then(function(result){

            result.records.forEach(function(record){
                graficas.push(record._fields[0].properties);
            })
            session
            .run(queryProc)
            .then(function(result){

                var procesadorActual = []; //Variable utilizada para marcar el procesador qeu se está devolviendo (pues este será devuelto tantas veces como placas base funcionen con él)

                result.records.forEach(function(record)
                {
                    if(procesadorActual.length == 0) //Si es la primera iteración y la variable se encuentra vacía, la rellenamos
                    {
                        procesadorActual.push(record._fields[0].properties);
                    }
                    
                    if(record._fields[0].properties.nombre == procesadorActual[0].nombre) //Mientras sea el mismo procesador guardaremos en un array sus placas base
                    {
                        procesadorActual.push(record._fields[1].properties)
                    }
                    else
                    {
                        procesadores.push(procesadorActual);
                        procesadorActual = [];
                        procesadorActual.push(record._fields[0].properties);
                    }

                })
                session
                .run('MATCH (r:ram) RETURN r')
                .then(function(result){
                    result.records.forEach(function(record)
                    {
                        //console.log(record._fields)
                        modulosRam.push(record._fields[0].properties);
                        //session.close();
                    })
                    //Vamos a sacar ahora los monitores
                    var queryMonitores = "";

                    if(flagActividad == 1 || flagActividad == 3)
                    {
                        queryMonitores = "MATCH (m:monitor) WHERE (m.panel = 'VA' OR m.panel = 'IPS') AND m.resolucion = '" + caracteristicas.res + "' OPTIONAL MATCH(m) WHERE m.tasaRefresco > '" + caracteristicas.tasaRef + "' RETURN m";    
                    }
                    else if(flagActividad == 2)
                    {
                        queryMonitores = "MATCH (m:monitor) WHERE m.panel = 'IPS' AND m.resolucion = '" + caracteristicas.res + "' OPTIONAL MATCH(m) WHERE m.tasaRefresco > '" + caracteristicas.tasaRef + "' RETURN m";
                    }
                    //Si es ofimática, elegiremos monitores con panel TN
                    else if(flagActividad == 4)
                    {
                        queryMonitores = "MATCH (m:monitor) WHERE m.panel = 'TN' AND m.resolucion = '" + caracteristicas.res + "' OPTIONAL MATCH(m) WHERE m.tasaRefresco > '" + caracteristicas.tasaRef + "' RETURN m";
                    }
                    else if(flagActividad == 5)
                    {
                        queryMonitores = "MATCH (m:monitor) WHERE m.panel = 'IPS' AND m.resolucion = '" + caracteristicas.res + "' OPTIONAL MATCH(m) WHERE m.tasaRefresco > '" + caracteristicas.tasaRef + "' RETURN m";
                    }
                    session
                    .run(queryMonitores)
                    .then(function(result){
                        result.records.forEach(function(record)
                        {
                            //console.log(record._fields);
                            monitores.push(record._fields[0].properties);
                        })
                        var queryFuentes = ""

                        if(flagActividad == 1 || flagActividad == 5 || flagActividad == 2 || flagActividad == 3)
                        {
                            queryFuentes = "MATCH (f:fuenteAlimentacion) WHERE f.potencia >= 600 RETURN f";
                        }
                        else if(flagActividad == 4)
                        {
                            queryFuentes = "MATCH (f:fuenteAlimentacion) WHERE f.potencia <= 600 RETURN f";
                        }
                        session
                        .run(queryFuentes)
                        .then(function(result){
                            result.records.forEach(function(record){
                                fuentesAlimentacion.push(record._fields[0].properties);
                            })
                        })
                        .catch(function(err){
                            console.log(err);
                        })
                        .then(async function(){
                            builds = await calcularBuild(graficas, procesadores, modulosRam, monitores, fuentesAlimentacion, porcentajeGrafica, porcentajeProcesador, esfuerzo, flagActividad, overclocking, economico, flagSo);
                            //pruebaRecibir(builds);
                            res.send(builds);
                        })
                    })
                    .catch(function(err){
                        console.log(err);
                    })
                    /*.then(function(res, req)
                    {
                        calcularBuild(graficas, procesadores, modulosRam, monitores, fuentesAlimentacion, porcentajeGrafica, porcentajeProcesador, esfuerzo, flagActividad, overclocking, economico);
                    })*/

                })
                .catch(function(err){
                    console.log(err);
                })
                /*.then(function(res, req){
                    calcularBuild(graficas, procesadores, modulosRam, monitores, fuentesAlimentacion, porcentajeGrafica, porcentajeProcesador, esfuerzo, flagActividad, overclocking, economico);
                })*/
                
            })
            .catch(function(err){

                console.log(err);
    
            })
        })
        .catch(function(err){

            console.log(err);

        })
}

 
//Esta función probará combinaciones y calculará su puntuación para la actividad de la que se quiere hacer uso
async function calcularBuild(graficas, procesadores, modulosRam, monitores, fuentesAlimentacion, porcentajeGrafica, porcentajeProcesador, esfuerzo, flagActividad, overclocking, economico, flagSo)
{
    console.log("OVERCLOCKING: " + overclocking);
    builds = [];
    var cantidadDeRam = [];

    //Si no hay gráficas, significa que la build no consta de gráfica dedicada.
    if(graficas.length == 0)
    {
        for(proc in procesadores)
        {
            //Guardaremos la gráfica, el procesador y la puntuación de la build
            buildAux = []
            var flagAniadir = true; //Este flag nos valdrá para saber si se ha añadido la build del procesador y la gráfica si llega a la puntuación requerida

            buildAux.push(procesadores[proc][0]);

            var posiblesPlacas = [];
            var placaElegida;
            var posiblesRam = [];
            var posiblesMonitores = [];
            var validPl = 0;                  
            var ram = 0;
            var capacidad = 0;
            var modulos = 0;

            //Si la combinación de procesador y gráfica ha alcanzado una puntuación correcta, se procederá a calcular el resto de componentes
            if(flagAniadir)
            {
                //Ahora elegimos una placa base
                if(overclocking == 1)
                {
                    var counter = 0;

                    for(pl in procesadores[proc])
                    {
                        //Nos saltamos la posición 0, que será donde esté el propio procesador. Solo nos interesan las placas base
                        if(counter != 0)
                        {
                            console.log(pl.nombre);
                            if(procesadores[proc][pl].overclocking == 1)
                            {
                                console.log("Hemos entrado");
                                posiblesPlacas.push(procesadores[proc][pl]);
                                validPl++;
                            }
                        }
                        counter++;
                    }
                }
                else
                {
                    validPl = -1;
                }

                //ValidPl solo valdrá 0 si no se ha encontrado ninguna placa para hacer overclocking para este procesador
                if(validPl != 0)
                {
                    if(economico == 1 && validPl > 0)
                    {
                        var precioMin = 100000000;

                        for(pl in posiblesPlacas)
                        {
                            //Escogemos la más barata
                            if(posiblesPlacas[pl].precio < precioMin)
                            {
                                precioMin = posiblesPlacas[pl].precio;
                                placaElegida = posiblesPlacas[pl];
                            }
                        }
                    }
                    //Si la build no es económica, nos quedaremos con una placa base al azar
                    else if(economico == 0 && validPl > 0)
                    {
                        var numrand = Math.round(Math.random() * (posiblesPlacas.length - 1) + 1);

                        placaElegida = posiblesPlacas[numrand];
                    }
                    else if(economico == 1 && validPl < 0)
                    {
                        var precioMin = 100000000;
                        var counter = 0;

                        for(pl in procesadores[proc])
                        {
                            if(counter != 0)
                            {
                                //Escogemos la más barata
                                if(procesadores[proc][pl].precio < precioMin)
                                {
                                    precioMin = procesadores[proc][pl].precio;
                                    placaElegida = procesadores[proc][pl];
                                }
                            }
                            counter++;
                        }
                    }
                    else if(economico == 0 && validPl < 0)
                    {
                        var numrand = Math.round(Math.random() * (procesadores[proc].length - 1) + 1);

                        placaElegida = procesadores[proc][numrand];
                    }
                }

                buildAux.push(placaElegida);

                if(placaElegida != undefined)
                {
                    //Ahora escogeremos la ram

                    //Si la actividad es jugar
                    if(flagActividad == 1) 
                    {
                        if(esfuerzo < 60)
                        {
                            ram = 8;
                        }
                        else
                        {
                            ram = 16
                        }
                    }
                    //Si la actividad es edición
                    else if(flagActividad == 2)
                    {
                        //Si el tipo de codec es Raw, necesitamos mucha ram.
                        if(esfuerzo == 60)
                        {
                            ram = 64;
                        }
                        else if(esfuerzo == 62)
                        {
                            ram = 16;
                        }
                        else if(esfuerzo == 65 || esfuezo == 68)
                        {
                            ram = 32;
                        }
                    }
                    else if(flagActividad == 4)
                    {
                        if(flagSo == 3)
                        {
                            ram = 8;
                        }
                        else
                        {
                            ram = 4;
                        }
                    }
                    else if(flagActividad == 5)
                    {
                        if(flagSo == 3)
                        {
                            ram = 8;
                        }
                        else
                        {
                            ram = 4;
                        }
                    }
                    else if(flagActividad == 3)
                    {
                        if(esfuerzo == 65)
                        {
                            ram = 16;
                        }
                        else
                        {
                            ram = 64;
                        }
                    }
                    //-----------------------------------------------------------------------

                    if(economico != 3)
                    {
                        if(ram == 4)
                        {
                            capacidad = 4;
                            modulos = 1;
                        }
                        else if(ram > 8)
                        {
                            capacidad = ram / placaElegida.ramSlots;
                            modulos = placaElegida.ramSlots;
                        }
                        else
                        {
                            capacidad = ram / (placaElegida.ramSlots / 2);
                            modulos = (placaElegida.ramSlots / 2);
                        }
                    }
                   /* else
                    {
                        if(ram < 64)
                        {
                            capacidad = ram / (placaElegida.ramSlots / 2);
                            modulos = (placaElegida.ramSlots / 2);
                        }
                        else
                        {
                            capacidad = ram / placaElegida.ramSlots;
                            modulos = placaElegida.ramSlots;
                        }
                    }
*/
                    //Una vez tenemos la capacidad de la ram y el número de módulos, buscaremos todos aquellos que tengan esa capacidad.
                    for(r in modulosRam)
                    {
                        if(modulosRam[r].gb == capacidad)
                        {
                            posiblesRam.push(modulosRam[r]);
                        }
                    }
                    
                    //----------------------------------------------------------------------
                   
                    var posiblesMonitoresAux = [];

                    if(flagActividad == 1)
                    {
                        for(monitor in monitores)
                        {
                            posiblesMonitoresAux.push(monitores[monitor]);
                        }

                        var tiempoRespuesta = 100;

                        for(monitor in posiblesMonitoresAux)
                        {
                            if(posiblesMonitoresAux[monitor].tiempoRespuesta < tiempoRespuesta)
                            {
                                tiempoRespuesta = posiblesMonitoresAux[monitor].tiempoRespuesta;
                            }
                        }

                        for(monitor in posiblesMonitoresAux)
                        {
                            if(posiblesMonitoresAux[monitor].tiempoRespuesta == tiempoRespuesta)
                            {
                                posiblesMonitores.push(posiblesMonitoresAux[monitor]);
                            }
                        }
                    }
                    else if(flagActividad == 4 || flagActividad == 5 || flagActividad == 2 || flagActividad == 3)
                    {
                        for(monitor in monitores)
                        {
                            posiblesMonitoresAux.push(monitores[monitor]);
                        }

                        for(monitor in posiblesMonitoresAux)
                        {
                            posiblesMonitores.push(posiblesMonitoresAux[monitor]);
                        }
                    }
                    
                    
                    //Ahora vamos a elegir fuente de alimentación
                    var fuente = Math.round(Math.random() * ((fuentesAlimentacion.length - 1) - 0) + 0);
                    var ram = Math.round(Math.random() * ((posiblesRam.length - 1) - 0) + 0);
                    var monitor = Math.round(Math.random() * ((posiblesMonitores.length - 1)- 0) + 0);
                    var fuenteAlimentacionElegida = fuentesAlimentacion[fuente];
                    var monitorElegido = posiblesMonitores[monitor];
                    var ramElegidaDef = posiblesRam[ram];

                    buildAux.push(ramElegidaDef);
                    buildAux.push(monitorElegido);
                    buildAux.push(fuenteAlimentacionElegida);
                    buildAux.push(modulos);
                    /*console.log("Monitor");
                    console.log(monitorElegido);*/
                }

                if(validPl != 0 && placaElegida != undefined)
                {
                    builds.push(buildAux);
                }
            }
        }

        return builds;
    }
    else
    {
        for(graf in graficas)
        {
            for(proc in procesadores)
            {
                //Guardaremos la gráfica, el procesador y la puntuación de la build
                buildAux = []
                var flagAniadir = false; //Este flag nos valdrá para saber si se ha añadido la build del procesador y la gráfica si llega a la puntuación requerida

                puntuc = graficas[graf].puntuacion * porcentajeGrafica + procesadores[proc][0].puntuacion * porcentajeProcesador;

                //Si la puntuación de la build alcanza o supera lo que necesitamos, lo guardaremos
                if(puntuc >= esfuerzo)
                {
                    buildAux.push(graficas[graf]);
                    buildAux.push(procesadores[proc][0]);
                    flagAniadir = true;
                }

                var posiblesPlacas = [];
                var placaElegida;
                var posiblesRam = [];
                var posiblesMonitores = [];
                var validPl = 0;                  
                var ram = 0;
                var capacidad = 0;
                var modulos = 0;

                //Si la combinación de procesador y gráfica ha alcanzado una puntuación correcta, se procederá a calcular el resto de componentes
                if(flagAniadir)
                {
                    //Ahora elegimos una placa base
                    if(overclocking == 1)
                    {
                        var counter = 0;

                        for(pl in procesadores[proc])
                        {
                            //Nos saltamos la posición 0, que será donde esté el propio procesador. Solo nos interesan las placas base
                            if(counter != 0)
                            {
                                console.log(pl.nombre);
                                if(procesadores[proc][pl].overclocking == 1)
                                {
                                    posiblesPlacas.push(procesadores[proc][pl]);
                                    validPl++;
                                }
                            }
                            counter++;
                        }
                    }
                    else
                    {
                        validPl = -1;
                    }

                    //ValidPl solo valdrá 0 si no se ha encontrado ninguna placa para hacer overclocking para este procesador
                    if(validPl != 0)
                    {
                        if(economico == 1 && validPl > 0)
                        {
                            var precioMin = 100000000;
                            var counter = 0;

                            for(pl in posiblesPlacas)
                            {
                                if(counter != 0)
                                {
                                    //Escogemos la más barata
                                    if(posiblesPlacas[pl].precio < precioMin)
                                    {
                                        precioMin = posiblesPlacas[pl].precio;
                                        placaElegida = posiblesPlacas[pl];
                                    }
                                }
                                counter ++;
                            }
                        }
                        //Si la build no es económica, nos quedaremos con una placa base al azar
                        else if(economico == 0 && validPl > 0)
                        {
                            var numrand = Math.round(Math.random() * (posiblesPlacas.length - 1) + 1);

                            placaElegida = posiblesPlacas[numrand];
                        }
                        else if(economico == 1 && validPl < 0)
                        {
                            var precioMin = 100000000;
                            var counter = 0;

                            for(pl in procesadores[proc])
                            {
                                if(counter != 0)
                                {
                                    //Escogemos la más barata
                                    if(procesadores[proc][pl].precio < precioMin)
                                    {
                                        precioMin = procesadores[proc][pl].precio;
                                        placaElegida = procesadores[proc][pl];
                                    }
                                }
                                counter++;
                            }
                        }
                        else if(economico == 0 && validPl < 0)
                        {
                            var numrand = Math.round(Math.random() * (procesadores[proc].length - 1) + 1);

                            placaElegida = procesadores[proc][numrand];
                        }
                    }
                    //console.log(placaElegida);
                    buildAux.push(placaElegida);

                    if(placaElegida != undefined)
                    {
                        //Ahora escogeremos la ram

                        //Si la actividad es jugar
                        if(flagActividad == 1) 
                        {
                            if(esfuerzo < 60)
                            {
                                ram = 8;
                            }
                            else
                            {
                                ram = 16
                            }
                        }
                        //Si la actividad es edición
                        else if(flagActividad == 2)
                        {
                            //Si el tipo de codec es Raw, necesitamos mucha ram.
                            if(esfuerzo == 60)
                            {
                                ram = 64;
                            }
                            else if(esfuerzo == 62)
                            {
                                ram = 16;
                            }
                            else if(esfuerzo == 65 || esfuerzo == 68)
                            {
                                ram = 32;
                            }
                        }
                        else if(flagActividad == 4)
                        {
                            ram = 4;
                        }
                        else if(flagActividad == 5)
                        {
                            ram = 8;
                        }
                        else if(flagActividad == 3)
                        {
                            if(esfuerzo == 65)
                            {
                                ram = 16;
                            }
                            else
                            {
                                ram = 64;
                            }
                        }

                        //----------------------------------------------------------------------------------
                        if(economico != 3)
                        {
                            if(ram > 8)
                            {
                                capacidad = ram / placaElegida.ramSlots;
                                modulos = placaElegida.ramSlots;
                            }
                            else
                            {
                                capacidad = ram / (placaElegida.ramSlots / 2);
                                modulos = (placaElegida.ramSlots / 2);
                            }
                        }
                        /*else
                        {
                            if(ram < 64)
                            {
                                capacidad = ram / (placaElegida.ramSlots / 2);
                                modulos = (placaElegida.ramSlots / 2);
                            }
                            else
                            {
                                capacidad = ram / placaElegida.ramSlots;
                                modulos = placaElegida.ramSlots;
                            }
                        }*/

                        //Una vez tenemos la capacidad de la ram y el número de módulos, buscaremos todos aquellos que tengan esa capacidad.
                        for(r in modulosRam)
                        {
                            if(modulosRam[r].gb == capacidad)
                            {
                                posiblesRam.push(modulosRam[r]);
                            }
                        }                        
                       
                        var posiblesMonitoresAux = [];

                        if(flagActividad == 1)
                        {
                            for(monitor in monitores)
                            {
                                if(graficas[graf].marca == 'AMD')
                                {
                                    if(monitores[monitor].sincronizacion == "Freesync" || monitores[monitor].sincronizacion == "ambas")
                                    {
                                        posiblesMonitoresAux.push(monitores[monitor]);
                                    }
                                }
                                else
                                {
                                    if(monitores[monitor].sincronizacion == "G-sync" || monitores[monitor].sincronizacion == "ambas")
                                    {
                                        posiblesMonitoresAux.push(monitores[monitor]);
                                    }
                                }
                            }

                            var tiempoRespuesta = 100;

                            for(monitor in posiblesMonitoresAux)
                            {
                                if(posiblesMonitoresAux[monitor].tiempoRespuesta < tiempoRespuesta)
                                {
                                    tiempoRespuesta = posiblesMonitoresAux[monitor].tiempoRespuesta;
                                }
                            }

                            for(monitor in posiblesMonitoresAux)
                            {
                                if(posiblesMonitoresAux[monitor].tiempoRespuesta == tiempoRespuesta)
                                {
                                    posiblesMonitores.push(posiblesMonitoresAux[monitor]);
                                }
                            }
                        }
                        else if(flagActividad == 2 || flagActividad == 3)
                        {
                            for(monitor in monitores)
                            {
                                posiblesMonitoresAux.push(monitores[monitor]);
                            }
    
                            for(monitor in posiblesMonitoresAux)
                            {
                                posiblesMonitores.push(posiblesMonitoresAux[monitor]);
                            }
                        }
                        
                        //Ahora vamos a elegir fuente de alimentación
                        var fuente = Math.round(Math.random() * ((fuentesAlimentacion.length - 1) - 0) + 0);
                        var ramPos = Math.round(Math.random() * ((posiblesRam.length - 1) - 0) + 0);
                        var monitor = Math.round(Math.random() * ((posiblesMonitores.length - 1)- 0) + 0);
                        var fuenteAlimentacionElegida = fuentesAlimentacion[fuente];
                        var monitorElegido = posiblesMonitores[monitor];

                        var ramElegidaDef = posiblesRam[ramPos];
                        
                        buildAux.push(ramElegidaDef);
                        buildAux.push(monitorElegido);
                        buildAux.push(fuenteAlimentacionElegida);
                        buildAux.push(modulos);
                    }

                    if(validPl != 0 && placaElegida != undefined)
                    {
                        builds.push(buildAux);
                    }
                }
            }
        }

        for(build in builds)
        {
            console.log("-------------------------------")
            console.log(builds[build]);
        }

        return builds;
    }    
}

