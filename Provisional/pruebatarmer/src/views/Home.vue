<template>
  <!--Contenedor principal. Toda la interfaz de home estará aquí dentro-->
  <v-container fluid high="500px" class="secondary">

    <!--En este primer layout encontramos la barra de navegación de la parte superior que contiene el logo, el nombre y algunos otros apartados-->
    <v-layout>
      <v-app-bar app color="#000000" height=100>
        <v-avatar size="55" class="ml-5" rounded="">
          <img src="../assets/laptopWhite.png" absoulte alt="">
        </v-avatar>
        <v-toolbar-title class="myfontWhite ml-5">HWPicker</v-toolbar-title>
        <v-avatar size="40" class="ml-5" rounded="">
          <img src="../assets/beta.png" absoulte alt="">
        </v-avatar>
        <h1 class="myfontWhiteNormal ml-3">Beta</h1>

         <v-spacer></v-spacer>
          <h1 class="myfontWhiteSmall ma-10 hoverMouse">Portfolio</h1>
          <h1 class="myfontWhiteSmall ma-10 hoverMouse">Merchandising</h1>
          <h1 class="myfontWhiteSmall ma-10 hoverMouse">Desarrolladores</h1>

      </v-app-bar>
    </v-layout>

    <!--Aquí tendremos la presentación de la página web en la que se explicará brevemente qué vamos a encontrar-->
    <v-layout column align-center class="mt-12">
        <h1 class="mt-12"></h1>
        <h1 class="mt-5 font-weight-black myfontWhiteBig">El hardware que mejor</h1>
        <h1 class="font-weight-black myfontWhiteBig">se adapta a tus necesidades</h1>
        <h2 class="myfontGrey mt-5">¡No es necesario que tengas conocimientos técnicos para escoger! ¿Quieres saber cómo?</h2>
        <v-flex row>
          <h2 class="myfontGrey">¡Échale un ojo a nuestro sistema de recomendación!</h2>
          <h2 class="myfontPurpleSoft ml-2 hoverMouse" @click="scrollDown">Haz click aquí.</h2>
        </v-flex>
    </v-layout>

    <!--En este layout encontraremos varias cards en las que se explicará brevemente la funcionalidad de distintas partes del hardware de un ordenador al usuario-->
    <v-layout row>
      <div class="card leftExtreme">
        <div class="front">
          <v-card
          class="mt-12"
          elevation="4"
          width="450"
          height="350"
          color="#282828"
          >
            <v-layout column align-center>
              <v-avatar size="100" class="mt-10">
                <img src="../assets/questionPurple.png" absoulte alt="">
              </v-avatar>
                <h1 class="mt-12 myfontWhiteCard">¿Quiénes Somos?</h1>
                <v-layout row justify-center>
                  <h1 class="myfontGreySmall mt-5">Descubre el equipo encargado del sistema de recomendación</h1>
                  <h1 class="myfontGreySmall">y nuestras empresas afiliadas que pueden también interesarte</h1>
                </v-layout>
            </v-layout>
          </v-card>
        </div>

        <div class="back">
          <v-card
          class="mt-12"
          elevation="4"
          width="450"
          height="350"
          color="#282828"
          >
            <h1>Esta es la parte trasera</h1>
          </v-card>
        </div>
      </div>

      <div class="card middle">
        <div class="front">
          <v-card
          class="mt-12"
          elevation="4"
          width="450"
          height="350"
          color="#282828"
          >
            <v-layout column align-center>
              <v-avatar size="100" class="mt-10" rounded="">
                <img src="../assets/graph.png" absoulte alt="">
              </v-avatar>
                <v-flex align-self-center>
                  <h1 class="mt-12 myfontWhiteCard">¿Cómo funciona nuestro sistema?</h1>
                </v-flex>
              <v-layout column align-center>
                <h1 class="myfontGreySmall mt-5">Las bases de datos basadas en grafos de conocimiento</h1>
                <h1 class="myfontGreySmall">como Neo4j ofrecen muchas posibilidades. ¡Descúbrelas!</h1>
              </v-layout>
            </v-layout>
          </v-card>
        </div>

        <div class="back">
          <v-card
          class="mt-12"
          color="#282828"
          elevation="4"
          width="450"
          height="350">
            <h1>Esta es la parte trasera</h1>
          </v-card>
        </div>
      </div>

      <div class="card right">
        <div class="front">
          <v-card
          class="mt-12"
          elevation="4"
          width="450"
          height="350"
          color="#282828"
          >
            <v-layout column align-center>
              <v-avatar size="100" class="mt-10" rounded="">
                <img src="../assets/purpleGear.png" absoulte alt="">
              </v-avatar>
              <h1 class="mt-12 myfontWhiteCard">¿Qué ventajas ofrecemos?</h1>
              <h1 class="myfontGreySmall mt-5">Escoger un ordenador para alguien sin conocimiento del tema</h1>
              <h1 class="myfontGreySmall">no es una tarea fácil. Nosotros automatizamos esto por ti.</h1>
            </v-layout>
          </v-card>
        </div>

        <div class="back">
          <v-card
          class="mt-12"
          color="#282828"
          width="450"
          elevation="4"
          height="350">
            <h1>Esta es la parte trasera</h1>
          </v-card>
        </div>
      </div>
    </v-layout>



    <!--En este layout pondremos un v-card con cierta información-->
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>

    <v-card
      class="mt-12"

      fluid
      height="600"
      elevation="2"
      dark
    >

    <v-layout class="mt-13" column>

      <v-layout column align-center>
      <v-row class="mt-13 ml-13 myfontWhite" justify-center>
        <h1>¿Te interesa el </h1><h1 class="myfontPurpleSoft ml-2">Hardware</h1><h1>? ¡Aprende con nosotros!</h1>
      </v-row>
      </v-layout>

      <h1 class="mt-13"></h1>

      <v-row xs6 class="mt-13">

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn
      class="mx-2"
      fab
      color="#202121"
      dark
      height="150"
      width="150"
    >
      <img src="../assets/RAM.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

      <v-spacer></v-spacer>

     <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
    >
      <img src="../assets/graphicCard.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

      <v-spacer></v-spacer>

     <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
    >
      <img src="../assets/Processor.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

          <v-spacer></v-spacer>

     <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
    >
      <img src="../assets/netCard.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>
    
         <v-spacer></v-spacer>

     <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
    >
      <img src="../assets/battery.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

      <v-spacer></v-spacer>

     <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"

    >
      <img src="../assets/motherboard.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

     <v-spacer></v-spacer>
     <v-spacer></v-spacer>

      </v-row>

    <v-row class="mt-13">
    
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
      
    >
      <img src="../assets/keyboard2.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

     <v-spacer></v-spacer>

    <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
    >
      <img src="../assets/fan.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

     <v-spacer></v-spacer>


     <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
    >
      <img src="../assets/mouse.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

     <v-spacer></v-spacer>


     <v-btn
      class="mx-2"
      fab
      dark
      color="#202121"
      height="150"
      width="150"
      
    >
      <img src="../assets/Screen.png" absoulte alt="" max-height="50" max-width="50" class="hoverMouse">
     </v-btn>

     <v-spacer></v-spacer>
     <v-spacer></v-spacer>
     <v-spacer></v-spacer>


    </v-row>

    </v-layout>

    </v-card>
    


  <v-layout class="mt-13"></v-layout>
  <v-layout class="mt-13" column>

      <v-layout row justify-center class="primay">
        
        <v-layout class="texto mt-13" column align-center>
          <h1 class="mt-13"></h1>
          <h1 class="mt-13"></h1>

          <h1 class="myfontWhiteMedium mt-13">En colaboración con la empresa de</h1>
          <h1 class="myfontWhiteMedium">venta online de Hardware Líder en España</h1>
          <h1 class="myfontPurpleSoft">PcComponentes.com</h1>
          <h1 class="myfontGreyMedium mt-9">Nuestra base de datos cuenta con más de 700 ordenadores portátiles</h1>
          <h1 class="myfontGreyMedium">con decenas de configuraciones diferentes, todos actualmente en venta en PcComponentes en territorio español.</h1>
          <h1 class="myfontGreyMedium">y que cuentan con hardware de última generación, así como opiniones de cientos de compradores.</h1>
          <h1 class="myfontGreyMedium">Tan solo has de tener claro qué quieres hacer con tu nuevo ordenador. Del resto nos encargamos nosotros</h1>

        </v-layout>
        
        <v-layout class="imagen mt-13" row justify-center>
          <img src="../assets/isoComputer3.png" absoulte alt="">
        </v-layout>

      </v-layout> 


    </v-layout>



    <v-layout class="mt-13"></v-layout>
    <v-layout class="mt-13"></v-layout>

    <v-layout class="mt-13"></v-layout>

    <v-card
      class="mt-12 PRINCIPAL"
      fluid
      height="1900"
      elevation="3"
      dark
    >
      <v-card
      dark
      height="200px"
      elevation="3"
      >     
        <v-layout column align-center>
          <h1 class="myfontWhiteMedium mt-5">¡Prueba ahora nuestro sistema de recomendación!</h1>
          <h1 class="myfontGrey">Solo tienes que elegir la actividad que más se adecúe a tus intereses</h1>
        </v-layout>
      </v-card>

      <v-layout column align-center class="mt-10">
      <v-layout> 
        <v-card
        class="mt-13 ml-2 hoverMouse"
        fluid
        height="680"
        width="900"
        elevation="6"
        
        color="#282828"
        >
          <v-layout row>
            <v-layout column>
              <v-card
                height="680"
                width="300"
                color="#383838"
              >
                <v-layout class="mt-13"></v-layout>
                <v-col align="center">
                  <h1>Sistema</h1>
                  <v-layout class="mt-13"></v-layout>
                  <v-layout class="mt-13"></v-layout>
                  <v-layout class="mt-2"></v-layout>

                  <v-img
                  src="../assets/node.png"
                  height="200"
                  width="200"
                  >
                    
                  </v-img>

                  <v-layout class="mt-13"></v-layout>
                  <v-layout class="mt-13"></v-layout>
                  <v-layout class="mt-13"></v-layout>

                  <v-btn height="60" width="200" class="primary" @click="recomendar()">
                    Recomiéndame
                  </v-btn>
                
                </v-col>
              </v-card>
              
            </v-layout>
            <v-layout column>
              <v-row>
                <h1 class="myfontWhiteNormal mt-2 mr-3">Información del sistema</h1>
                <v-spacer></v-spacer>
                <h1></h1>
                <v-spacer></v-spacer>
                <v-layout class="ml-15"></v-layout>
                <v-layout class="ml-12"></v-layout>
              </v-row>

               <v-row>
                <h1 class="myfontWhiteNormalSmallBold mt-10">Tipo de PC</h1>
              </v-row>
              <v-row>
               <v-checkbox
                v-model="economic"
                class="mr-8"
                value=1
                color="#9985FF"
              >
              </v-checkbox>
              <h1 class="myfontWhiteNormalSmall mt-3">Calidad-precio</h1>
              </v-row>
              <v-row>
              <v-checkbox
                v-model="economic"
                class="mr-8"
                value=0
                color="#9985FF"
              >
              </v-checkbox>
              <h1 class="myfontWhiteNormalSmall mt-3">Rendimiento</h1>
              </v-row>

              <v-row>
                <h1 class="myfontWhiteNormalSmallBold mt-0">Sistema operativo</h1>
              </v-row>

              <v-row>
              <v-checkbox
                v-model="sistemaOperativo"
                class="mr-8"
                value=1
                color="#9985FF"
              >
              </v-checkbox>
              <h1 class="myfontWhiteNormalSmall mt-3">Linux</h1>
              </v-row>

              <v-row>
              <v-checkbox
                v-model="sistemaOperativo"
                class="mr-8"
                value=3
                color="#9985FF"
              >
              </v-checkbox>
              <h1 class="myfontWhiteNormalSmall mt-3">Windows 8 o superior</h1>
              </v-row>

              <v-row>
              <v-checkbox
                v-model="sistemaOperativo"
                class="mr-8"
                value=2
                color="#9985FF"
              >
              </v-checkbox>
              <h1 class="myfontWhiteNormalSmall mt-3">Windows 7 o inferior</h1>
              </v-row>
              
              <v-row>
                <h1 class="myfontWhiteNormalSmallBold mt-">Overclocking</h1>
              </v-row>
              <v-row>
               <v-checkbox
                v-model="oc"
                class="mr-8"
                value=0
                color="#9985FF"
              >
              </v-checkbox>
              <h1 class="myfontWhiteNormalSmall mt-3">No</h1>
              </v-row>
              <v-row>
              <v-checkbox
                v-model="oc"
                class="mr-8"
                value=1
                color="#9985FF"
              >
              </v-checkbox>
              <h1 class="myfontWhiteNormalSmall mt-3">Sí</h1>
              </v-row>
              <v-layout></v-layout>
              <v-layout></v-layout>
              <v-layout></v-layout>

            </v-layout>

          </v-layout>
        </v-card>

<!--AQUI-->

        <v-card
        class="mt-13 ml-8 hoverMouse"
        fluid
        height="680"
        width="900"
        elevation="6"
        
        color="#282828"
        >
          <v-layout column>
            <v-row>
              <h1 class="myfontWhiteNormal ml-7 mt-2">Ofimática</h1>
              <v-spacer></v-spacer>
              <v-checkbox
                v-model="actividades.ofimatica"
                class="mr-8"
                value="2"
                color="#9985FF"
              >
              </v-checkbox>
            </v-row>
            <v-row>
              <v-col class="ml-10">
                <v-img src="../assets/officeDark2.png" height=450 width=450 class="ml-15"></v-img>
              </v-col>
              <v-col>
                <v-layout class="mt-12"></v-layout>
                <v-img src="../assets/excel.png" height=60 width=60 class="mt-13 ml-15"></v-img>
                <v-img src="../assets/word.png" height=60 width=60 class="mt-10 ml-15"></v-img>
                <v-img src="../assets/ppt.png" height=60 width=60 class="mt-10 ml-15"></v-img>
              </v-col>
             
            </v-row>
             <v-col align="center">
                <h1 class="myfontGreyMedium ml-2">La ofimática principalmente, consiste en el uso de programas como los que trae el paquete de Microsotf Office (Excel, Word, PowerPoint...) u otros programas de oficina que no requieren de mucha potencia commputacional</h1>
              </v-col>
              <!--<v-divider class="mt-5"></v-divider>-->
          </v-layout>
          
        </v-card>
<!--AQUÍ-->
        <v-card
        class="mt-13 ml-8 hoverMouse"
        fluid
        height="680"
        width="900"
        elevation="6"
        color="#282828"
        >
          <v-layout column>
            <v-row>
              <h1 class="myfontWhiteNormal ml-7 mt-2">Multimedia</h1>
              <v-spacer></v-spacer>
              <v-checkbox
                v-model="actividades.navegar"
                class="mr-8"
                value="5"
                color="#9985FF"
              >
              </v-checkbox>
            </v-row>
            <v-row class="mt-10">
              <v-col class="ml-5">
                <h1 class="myfontGreyMedium mt-15">Esta actividad englobaría un uso del ordenador casi completamente enfocado a navegar por internet:</h1>
                <h1 class="myfontGreyMedium mt-5">-YouTube</h1>
                <h1 class="myfontGreyMedium mt-5">-Netflix, HBO y derivados</h1>
                <h1 class="myfontGreyMedium mt-5">-Twitch</h1>
                <h1 class="myfontGreyMedium mt-5">-Uso casi exclusivo del navegador</h1>
              </v-col>
              <v-col>
                 <v-avatar size="380" class="mr-5" rounded="">
                    <img src="../assets/speed.png" absoulte alt="">
                  </v-avatar>
              </v-col>
            </v-row>
             <v-col align="center">
                <h1 class="myfontGreyMedium ml-2 mt-8">No es necesario un gran poder computacional. No obstante, tendemos a tener muchas pestañas del navegador abierto, y Chrome consume mucha RAM, por lo que se recomienda contar con una build de 8GB (sobretodo si el S.O es Windows 10)</h1>
              </v-col>
              <!--<v-divider class="mt-5"></v-divider>-->
          </v-layout>
          
        </v-card>
        

      </v-layout>

<v-layout> 
        <v-card
        class="mt-13 ml-3 hoverMouse"
        fluid
        height="680"
        width="890"
        elevation="6"
        
        color="#282828"
        >
          <v-layout row>
            <v-layout column>
              <v-img src="../assets/keyboard.png" height=680 width=300>
                <v-col align="center" justify="center">
                  <v-layout class="mt-15"></v-layout>
                  <v-layout class="mt-15"></v-layout>
                  <v-layout class="mt-8"></v-layout>
                  <v-img src="../assets/Controller.png" height=200 width=200 class="mt-7"></v-img>
                </v-col>
              </v-img>
            </v-layout>

            <v-layout column>
            <v-row>
              <h1 class="myfontWhiteNormal mt-2">Gaming</h1>
              <v-spacer></v-spacer>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-spacer></v-spacer>
              <v-checkbox
                v-model="actividades.jugar"
                class="mr-8"
                value="9"
                color="#9985FF"
              >
              </v-checkbox>
            </v-row>
              <v-select
                v-model="caracteristicasJugar.tipoDeJuego"
                :items="caracteristicasJuego.tiposDeJuegos"
                menu-props="auto"
                label="Tipo De Juego"
                hide-details
                prepend-icon="mdi-map"
                single-line
                class="mr-15"
              ></v-select>

              <v-select
                v-model="caracteristicasJugar.resolucion"
                :items="caracteristicasJuego.resoluciones"
                menu-props="auto"
                label="Resolución"
                hide-details
                prepend-icon="mdi-map"
                single-line
                class="mr-15"
              ></v-select>

              <v-select
                v-model="caracteristicasJugar.fps"
                :items="caracteristicasJuego.fpss"
                menu-props="auto"
                label="Fps"
                hide-details
                prepend-icon="mdi-map"
                single-line
                class="mr-15"
              ></v-select>

              <v-select
                v-model="caracteristicasJugar.calidad"
                :items="caracteristicasJuego.calidades"
                menu-props="auto"
                label="Calidad"
                hide-details
                prepend-icon="mdi-map"
                single-line
                class="mr-15"
              ></v-select>
          </v-layout>
          </v-layout>
          
          
        </v-card>

<!--AQUI-->

        <v-card
        class="mt-13 ml-14 hoverMouse"
        fluid
        height="680"
        width="890"
        elevation="6"        
        color="#282828"
        >
          <v-layout row>
            <v-layout column>
              <v-img src="../assets/edicion2.png" height=680 width=300>
                <v-col align="center" justify="center">
                  <v-layout class="mt-15"></v-layout>
                  <v-layout class="mt-15"></v-layout>
                  <v-layout class="mt-8"></v-layout>
                  <v-img src="../assets/Premiere.png" height=200 width=200 class="mt-15"></v-img>
                </v-col>
              </v-img>
            </v-layout>

            <v-layout column>
            <v-row>
              <h1 class="myfontWhiteNormal mt-2">Edición</h1>
              <v-spacer></v-spacer>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-layout class="mr-15"></v-layout>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-checkbox
                v-model="actividades.edicion"
                class="mr-8"
                value="9"
                color="#9985FF"
              >
              </v-checkbox>
            </v-row>
            <v-layout column>
              <v-row>
                <v-layout class=""></v-layout>
                <v-col>
                  <v-img src="../assets/cinema.png" height=250 width=250 class="mr-5"></v-img>
                </v-col>
                <v-layout class=""></v-layout>
              </v-row>
              
            <v-select
                v-model="caracteristicasEditar.tipoDeCodec"
                :items="caracteristicasEdicion.tipoCodec"
                menu-props="auto"
                label="Nivel de exigencia"
                hide-details
                prepend-icon="mdi-map"
                single-line
                class="mr-15 mt-7"
              ></v-select>

            <v-layout class="mt-15"></v-layout>

              <v-select
                v-model="caracteristicasEditar.calidadDeRender"
                :items="caracteristicasEdicion.calidadRender"
                menu-props="auto"
                label="Tipo de archivo"
                hide-details
                prepend-icon="mdi-map"
                single-line
                class="mr-15"
              ></v-select>

            <v-layout class="mt-15"></v-layout>

             
            </v-layout>

          </v-layout>
          </v-layout>
          
          
        </v-card>
<!--AQUÍ-->
        
        <v-card
        class="mt-13 ml-11 hoverMouse"
        fluid
        height="680"
        width="890"
        elevation="6"  
        color="#282828"
        >
          <v-layout row>
            <v-layout column>
              <v-img src="../assets/server.png" height=680 width=300>
                <v-col align="center" justify="center">
                  <v-layout class="mt-15"></v-layout>
                  <v-layout class="mt-15"></v-layout>
                  <v-layout class="mt-8"></v-layout>
                  <v-img src="../assets/obs.png" height=200 width=200 class="mt-15"></v-img>
                </v-col>
              </v-img>
            </v-layout>

            <v-layout column align-center>
            <v-row>
              <h1 class="myfontWhiteNormal mt-2">Streaming</h1>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-checkbox
                v-model="actividades.streaming"
                class="mr-8"
                value="8"
                color="#9985FF"
              >
              </v-checkbox>
            </v-row>
            <v-card
             elevation="6"
             class=""
             width="500"
             >
             <v-row>
              <div class="mb-10">
                <v-img src="../assets/profile.png" height=150 width=150 class="ml-8 mt-5"></v-img>
                <h1 class="myfontWhiteNormalSmall ml-10">Just Chatting</h1>
              </div>
              <v-spacer></v-spacer>
              <v-checkbox
                v-model="caracteristicasStreaming.tipoStreaming"
                class="mr-8"
                value="0"
                color="#9985FF"
              >
              </v-checkbox>
             </v-row>
            </v-card>

            <v-card
              elevation="6"
              class="mb-15 mt-10"
              width="500"

            >
            <v-row>
              <div class="mt-5 mb-10">
                <v-img src="../assets/xbox.png" height=150 width=150 class="mt-5 ml-8"></v-img>
                <h1 class="myfontWhiteNormalSmall ml-15">Gaming</h1>
              </div>
              <v-spacer></v-spacer>
              <v-checkbox
                v-model="caracteristicasStreaming.tipoStreaming"
                class="mr-8"
                value="1"
                color="#9985FF"
              >
              </v-checkbox>
              </v-row>
            </v-card>
          </v-layout>
          </v-layout>
          
          
        </v-card>
        

      </v-layout>

      </v-layout>
    </v-card>

    <v-expansion-panels
    dark
    >
      <v-expansion-panel
      expand
      >
        <v-expansion-panel-header>
          <v-row justify="center">
            <v-col align="center">
              <v-row justify="center">
                <h1 class="myfontWhiteNormal">RECOMENDACIÓN:</h1>
                <h1 class="myfontPurpleSoftSmall ml-5" v-if="buildActiva">{{ this.builds[carouselIndex][0].precio.low + this.builds[carouselIndex][1].precio.low + this.builds[carouselIndex][2].precio.low + this.builds[carouselIndex][3].precio.low +this.builds[carouselIndex][4].precio.low +this.builds[carouselIndex][5].precio.low }}€</h1>
                <h1 class="myfontPurpleSoftSmall ml-5" v-if="buildActivaLow">{{ this.builds[carouselIndex][0].precio.low + this.builds[carouselIndex][1].precio.low + this.builds[carouselIndex][2].precio.low + this.builds[carouselIndex][3].precio.low +this.builds[carouselIndex][4].precio.low}}€</h1> 
              </v-row>
            <h1 class="myfontRed mt-15" v-if="esfuerzoDemasiadoAlto">No hemos encontrado nada lo suficientemente potente en nuestro sistema, pero puede que esto se acerque</h1>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content
        expand=false
        class="mt-10"
        >
          <v-carousel
          height="1600"
          v-model="carouselIndex"
          >
            <v-carousel-item
                  v-for="(build, i) in this.builds"
                  :key="i"
                >
                  <v-card
                  color="#ffffff"
                  height="1400"
                  >
                  <v-col>
                    <v-row justify="center" class="mt-10">
                      <v-spacer></v-spacer>
                      <v-card
                        v-for="(item, i) in build.slice(0, 4)"
                        :key="i"
                        color="#ffffff"
                        height="600"
                        width="500"
                        class="ml-15 hoverMouse prueba"
                        elevation=6
                        @click="redirect(item)"
                      >
                      <v-row>
                        <div class="text-center">
                          <v-dialog
                            v-model="dialogCompleto[i]"
                            max-width="1550"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                color="red lighten-2"
                                dark
                                v-bind="attrs"
                                v-on="on"
                              >
                                Ayuda
                              </v-btn>
                            </template>

                            <v-card>
                              <v-card-title class="headline grey lighten-2">
                                <h1 class="myfontBlackBig">¿Qué es este componente?</h1>
                              </v-card-title>

                              <v-card
                              height=500
                              width=1500
                              class="ml-7 mt-8"
                              >
                                <h1 class="myfontBlack">{{ ayudaCompleta[i] }}</h1>
                                <h1 v-if="buildActivaLow" class="myfontBlack">{{ ayudaCompleta[i + 1] }}</h1>
                              </v-card>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="dialogCompleto[i] = false"
                                >
                                  Cerrar
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </v-row>
                      <v-col align="center">
                      <v-row justify="center">
                         <v-avatar size="300" class="ml-5 mt-10" rounded="">
                            <v-img v-bind:src="''+item.imagen" ></v-img>
                         </v-avatar>
                      </v-row>
                      <h1 class="myfontBlackNormal" v-if="i!=3 && buildActiva">{{ item.nombre }}</h1>
                      <h1 class="myfontBlackNormal" v-if="i==3 && buildActiva">{{cantidadRam[carouselIndex]}}x{{item.gb.low}}GB {{item.nombre}}</h1>
                      <h1 class="myfontBlackNormal" v-if="i!=2 && buildActivaLow">{{ item.nombre }}</h1>
                      <h1 class="myfontBlackNormal" v-if="buildActivaLow && i==2">{{cantidadRam[carouselIndex]}}x{{item.gb.low}}GB {{item.nombre}}</h1>
                      <v-divider dark></v-divider>
                      <v-row class="mt-15">
                        <v-avatar size="150" class="ml-5 mt-3" rounded>
                              <v-img src="../assets/PcComponentes.png" height=50></v-img>
                        </v-avatar>
                        <v-spacer></v-spacer>
                         <h1 class="myfontBlackNormal mt-15 mr-10">{{ item.precio.low }}€</h1>                                     
                      </v-row>
                      </v-col>
                    </v-card>
                      <v-spacer></v-spacer>
                    </v-row>

                    <v-row class="mt-15">
                      <v-spacer></v-spacer>
                      <v-card
                        v-for="(item, i) in build.slice(4, build.length - 1)"
                        :key="i"
                        color="#ffffff"
                        height="600"
                        width="500"
                        class="ml-15 hoverMouse prueba"
                        elevation=6
                        @click="redirect(item)"
                      >
                      <v-row>
                        <div class="text-center">
                          <v-dialog
                            v-model="dialogCompleto[i + 4]"
                            max-width="1550"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                color="red lighten-2"
                                dark
                                v-bind="attrs"
                                v-on="on"
                              >
                                Ayuda
                              </v-btn>
                            </template>

                            <v-card>
                              <v-card-title class="headline grey lighten-2">
                                <h1 class="myfontBlackBig">¿Qué es este componente?</h1>
                              </v-card-title>

                              <v-card
                              height=500
                              width=1500
                              class="ml-7 mt-8"
                              >
                                <h1 v-if="buildActiva" class="myfontBlack">{{ ayudaCompleta[i + 4] }}</h1>
                                <h1 v-if="buildActivaLow" class="myfontBlack">{{ ayudaCompleta[i + 3] }}</h1>
                              </v-card>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="dialogCompleto[i] = false"
                                >
                                  Cerrar
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </v-row>
                      <v-col align="center">
                      <v-row justify="center">
                         <v-avatar size="300" class="ml-5 mt-10" rounded="">
                            <v-img v-bind:src="''+item.imagen" ></v-img>
                         </v-avatar>
                      </v-row>
                      <h1 class="myfontBlackNormal">{{ item.nombre }}</h1>
                      <v-divider></v-divider>
                      <v-row class="mt-15">
                        <v-avatar size="150" class="ml-5 mt-3" rounded>
                              <v-img src="../assets/PcComponentes.png" height=50></v-img>
                        </v-avatar>
                        <v-spacer></v-spacer>
                         <h1 class="myfontBlackNormal mt-15 mr-10">{{ item.precio.low }}€</h1>                                          
                      </v-row>
                      </v-col>
                    </v-card>
                      <v-spacer></v-spacer>-->
                    </v-row>

                  </v-col>
                  </v-card>
              </v-carousel-item>
          </v-carousel>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-btn
        color="#9985FF"
        dark
        class="mr-7 mb-5 hoverMouse"
      >
        Desplegar
      </v-btn>
    </v-expansion-panels>
  
    

  <v-row class="mt-12"></v-row><v-row class="mt-12"></v-row>

        <v-row justify="center accent">

            <v-col align="center">
                <h3 class="myfontWhite">MÁS INFORMACIÓN</h3>
                
                <!--Separador-->
                <v-row class="mt-12"></v-row>

                <p class="myfontWhite">Algunas empresas podrían pasar por aquí para cazar talentos</p>
                <p class="white--text">En colaboración con Incibe y Google CTF</p>
                <p class="myfontWhite hoverMouse">Gracias a Tansi por colaborar mediante Photoshop</p>
                <p class="myfontWhite hoverMouse">Lorem ipsum dolor at</p>
                <p class="myfontPurpleSoft hoverMouse">FAQ</p>
                <p class="myfontPurpleSoft hoverMouse">Miembros</p>
            </v-col>

            <v-col align="center">
                <h3 class="myfontWhite mr-4">REDES SOCIALES</h3>

                <v-row class="mt-7" justify="center">
                    <img src="../assets/Twitter.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
                    <img src="../assets/Instagram.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
                    <img src="../assets/Linkedin.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
                    <img src="../assets/Facebook.png" absolute alt="" class="mt-4 mr-6 hoverMouse">
                </v-row>
            </v-col>

            <v-col align="center">
                <h3 class="myfontWhite">CONTACTO</h3>

                <!--Separador-->
                <v-row class="mt-12"></v-row>

                <p class="myfontWhite hoverMouse">Atención al cliente todos los días de 9:00 a 20:00 de lunes a sábado</p>
                <p class="myfontWhite hoverMouse ">Número de contacto: (+34) 644783929</p>
                <p class="myfontWhite hoverMouse ">También fiestas y cumpleaños</p>
                <p class="myfontWhite hoverMouse ">A quién no le va a gustar</p>
                <p class="myfontPurpleSoft hoverMouse">decliviaoficial@gmail.com</p>
                <p class="myfontWhite">Lo de las fiestas y los cumpleaños era broma</p>
            </v-col>
        </v-row>

  </v-container>
</template>


<style>
    .myfontWhiteNormal{
        color: #ffffff;
        font-weight: 10;
        font-size: 36px;
    }

    .myfontPurpleSoftSmall{
      color: #9985FF;
      font-weight: 1000;
      font-size: 36px;
    }

    .myfontBlackNormal{
        color: #000000;
        font-weight: 300;
        font-size: 33px;
    }

    .myfontBlack{
        color: #000000;
        font-weight: 500;
        font-size: 27px;
    }

    .myfontBlackBig{
        color: #000000;
        font-weight: 500;
        font-size: 33px;
    }

    .myfontWhiteNormalSmallBold{
        color: #ffffff;
        font-weight: 500;
        font-size: 25px;
    }

    .myfontWhiteNormalSmall{
        color: #ffffff;
        font-weight: 10;
        font-size: 25px;
    }

    .myfontWhiteSmall{
        color: #ffffff;
        font-size: 20px;
        font-weight: normal;
    }

    .myfontRed{
        color: #ba0000;
        font-size: 30px;
        font-weight: normal;
    }

    .myfontDark{
        color: #252629;
        font-size: 25px;
    }

    .myfontWhiteCard{
        color: #ffffff;
        font-size: 25px;
    }

    .myfontDarkBig{
        color: #000000;;
        font-size: 65px;
    }

    .myfontWhiteBig{
      color:#ffffff;
      font-size: 65px;
    }

    .myfontDarkMedium{
      color: #000000;
      font-size: 42px;
      font-weight: 1000;
    }

    .myfontWhiteMedium{
      color: #ffffff;
      font-size: 42px;
      font-weight: 1000;
    }

    .myfontGreen{
        color: #8ac53e;
        font-family: 'Ubuntu Mono', monospace;
    }

    .buttonColor{
      background: #313336;
    }
    
    .myfontGrey{
        color: #78838a;
    }

    .myfontGreySmall{
        color: #78838a;
        font-size: 15px;
    }

    .myfontGreyMedium{
      color: #78838a;
      font-size: 20px;
    }

    .myfontPurple{
        color: #502eff
    }

    .hoverMouse{
        cursor: pointer
    }

    .myfontWhite{
      color: #ffffff
    }

    .myfontPurpleSoft{
      color: #9985FF;
    }

    .card{
      cursor: pointer;
      width: 500px;
      height: 500px;
    }

    .prueba{
      z-index: 0;
      transition: 0.2s all;
    }

    .front,.back{
      width: 100%;
      height: 100%;
      overflow: hidden;
      backface-visibility: hidden;
      position: absolute;
      transition: transform .6s linear;
    }

    .front{
      transform: perspective(600px) rotateY(0deg);
    }

    .back{
      transform: perspective(600px) rotateY(180deg)
    }

    .card:hover > .front{
      transform: perspective(600px) rotateY(-180deg);
    }

    .card:hover > .back{
      transform: perspective(600px) rotateY(0deg);
    }

    .prueba:hover{
      z-index: 1;
      transform: scale(1.1);
    }

    .leftExtreme{
      position: absolute;
      top: 695px;
      left: calc(50% - 500px);
      transform: translate(-50%, -50%);
    }

    .middle{
      position: absolute;
      top: 695px;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .right{
      position: absolute;
      top: 695px;
      left: calc(50% + 500px);
      transform: translate(-50%, -50%);
    }

    .v-btn{
      background-color: #9985FF;
    }


</style>

<script>

  import axios from "axios";

  const ip = "http://192.168.2.21:3000"

  export default {

    data: () =>({

      //Las actividades del array irán en el siguiente orden: 0:jugar, 1:streaming, 2:edicion, 3:navegar, 4:ofimatica
      actividades : {jugar: 0, streaming: 0, edicion: 0, navegar: 0, ofimatica: 0},

      tipoDeJuego: "Exigentes", //Inicializamos con un valor por defecto que se utilizará si el usuario no escoge ninguna opción

      //Creamos un vector de características e inicializamos cada una con un valor por defecto.
      caracteristicasJugar: {tipoDeJuego: "Exigentes (The Witcher 3)", resolucion: "1080p", fps: 60, calidad: "Ultra"},
      caracteristicasJuego:{tiposDeJuegos: ["Muy exigentes (Red Dead Redemption 2)", "Exigentes (The Witcher 3)", "Normales (GTA V)", "Poco Exigentes (Bioshock)", "Muy Poco Exigentes (Among us)"], resoluciones: ["1080p", "2K", "4K"], fpss: [30, 60, 144, 220, 360], calidades: ["Ultra", "Muy Alta", "Alta", "Media", "Baja"]},
      
      tipoDeStream: 2,
      fastRender: false,
      oc: 0,
      economic: 0,
      sistemaOperativo: 3, //Windows 8-10: 3, windows 7: 2, Linux: 1
      builds: [],
      esfuerzoDemasiadoAlto: false,
      carouselIndex: 0,
      buildActiva: false,
      buildActivaLow: false,
      cantidadRam : [],

      ayudaCompleta:[
      "La tarjeta gráfica es un componente del ordenador capaz de hacer cálculos a altísimas velocidades. Se encarga de procesar los datos que le llegan del procesador y transformarlos en información comprensible y representable en el dispostivo de salida (el monitor, televisor, proyector...). La gráfica será capaz de mostrar a ciertos fotogramas por segundo lo que estemos viendo por pantalla. Los monitores tienen una característica llamada sincronización vertical, que sirve para ponerse de acuerdo con la gráfica y que se sincronicen los hercios del monitor con los fps de la gráfica, de esta forma se evitan tirones o cortes en la pantalla",     
      "El procesador o CPU (Unidad central de procesamiento) es el cerebro de tu ordenador. Es el encargado de hacer cumplir todas las órdenes necesarias para llevar a cabo cada tarea. Un procesador será más o menos rápido en función de su frecuencia, la cuál se mide en hercios. Un procesador pordrá llevar a cabo una o varias instrucciones a la vez. Si solo consta de un núcleo, parecerá que hace varias tareas a la vez, ya que alternará entre ellas muy rápidamente. No obstante, un procesador con más de un núcleo, puede dedicar cada uno de ellos a una tarea y por lo tanto el multiprocesamiento sería real. Además, los núcleos pueden dividirse a su vez en hilos, lo que facilitaría llevar a cabo un mayor número de tareas al mismo tiempo. Las dos marcas de procesadores principales ahora mismo son Intel y AMD, siendo actualemente intel un poco superior en gaming y AMD superior en el resto de tareas que requieren más núcleos que frecuencia. No todos los procesadores son compatibles con todas las placas base. Esto podremos saberlo en función de sus socket o zócalo",
      "La placa base o tarjeta madre es el componente que conecta todos los demás componentes del ordenador. Tiene una serie de circuitos integrados, entre los que se encuentra el chipset, que es el centro de conexión entre el procesador, la memoria RAM y las ranuras de expansión y otros dispositivos. La placa base se compone de un zócalo, que determinará qué procesadores son compatibles, ranuras de módulos de RAM, líneas PCI-Express...",
      "La memoria RAM es una unidad de almacenamiento intermedia entre el procesador y el almacenamiento principal, o sea, el disco duro o unidad de estado sólido. La RAM existe como respuesta a una necesidad de mayor velocidad en el flujo de datos provenientes del almacenamiento. Sin la RAM, el disco duro o ssd del ordenador tardaría demasiado en enviarle datos al procesador, por lo que la potencia de este quedaría desperdiciada. Para evitar esto, se creó la RAM que es una memoria muchísimo más rápida que las unidades de almacenamiento tradicionales, en la que se cargarán los datos a los que se accederá con mucha frecuencia para el programa que se esté ejecutando en concreto. De esta forma, se podrá comunicar con el procesador rápidamente. El sistema operativo se carga en la RAM cuando se enciende el ordenador. La memoria RAM, además, es volátil, los datos que se guardan en esta, se borran cuando se apaga el equipo.",
      "Este periférico es el dispositivo de salida de vídeo de nuestro PC, y se comunicará directamente con la gráfica, la cuál le pasará la información codificada de forma que pueda mostrarla por pantalla. Un monitor puede tener diferentes tipos de paneles. Los paneles TN son los que peor representación de los colore tienen, pero son muy útiles debido a su rapidez, por lo que son muy usados en ofimática o en esports. Los paneles IPS tienen una mejor representación de colores, pero son algo más lentos, por lo que se recomiendan más para juegos no compoetitivos o películas. Finalmente los paneles VA tienen buena representación de colores y son rápidos, por lo que son la mejor opción para videojuegos. Antes hablábamos de la rapidez. Los monitores cuentan con una característica llamada tiempo de respuesta que determina lo que tarda en represntar en la pantall lo que nosotros hacemos en el ordenador. Por otra parte está la tasa de refresco, la cuál se mide en hercios y determinará el número de fotogramas por segundo que podrá representar el monitor. Otra característica importante es la resolución, que indica el número de píxeles de monitor (1080p o HD, 2K o HDR, y 4K son las más comunes, auqnue hay muchas más). Hay muchas otras caracaterísticas. Una muy imporatnte se explica en la gráfica, y las demás no las tendremos en consideración aún.",
      "La fuente de alimentación es un componente que se encarga de convertir la corriente que llega por nuestro sistema eléctrico de alterna (CA) a contínua (CC). De esta forma dota de energía a todos los componentes de nuestro equipo. Es importante escoger una fuente de alimentación de calidad, ya que cuanto más estable sea la corriente, menos sufrirán nuestros componentes y más durarán. Las fuentes de alimentación se suelen clasificar por un número seguido de un plus. Esto indica el porcentaje de energía que es capaz de aportar la fuente de alimentación, ya que si tenemos, por ejemplo, una fuente de 600W, parte de esta energía se perderá en calor. Seguido de este número puede venir también un rango que determinará la calidad de los componentes de la fuente de alimentación y, por lo tanto, la cantidad y calidad de la energía que les llega. Estos rangos son bronze, silver y gold. Es buena idea invertir dinero en una fuente de alimentación, ya que una buena puede durar para toda la vida."
      ],
      ayudaSimple:[
      "El procesador o CPU (Unidad central de procesamiento) es el cerebro de tu ordenador. Es el encargado de hacer cumplir todas las órdenes necesarias para llevar a cabo cada tarea. Un procesador será más o menos rápido en función de su frecuencia, la cuál se mide en hercios. Un procesador pordrá llevar a cabo una o varias instrucciones a la vez. Si solo consta de un núcleo, parecerá que hace varias tareas a la vez, ya que alternará entre ellas muy rápidamente. No obstante, un procesador con más de un núcleo, puede dedicar cada uno de ellos a una tarea y por lo tanto el multiprocesamiento sería real. Además, los núcleos pueden dividirse a su vez en hilos, lo que facilitaría llevar a cabo un mayor número de tareas al mismo tiempo. Las dos marcas de procesadores principales ahora mismo son Intel y AMD, siendo actualemente intel un poco superior en gaming y AMD superior en el resto de tareas que requieren más núcleos que frecuencia. No todos los procesadores son compatibles con todas las placas base. Esto podremos saberlo en función de sus socket o zócalo",
      "La placa base o tarjeta madre es el componente que conecta todos los demás componentes del ordenador. Tiene una serie de circuitos integrados, entre los que se encuentra el chipset, que es el centro de conexión entre el procesador, la memoria RAM y las ranuras de expansión y otros dispositivos. La placa base se compone de un zócalo, que determinará qué procesadores son compatibles, ranuras de módulos de RAM, líneas PCI-Express...",
      "La memoria RAM es una unidad de almacenamiento intermedia entre el procesador y el almacenamiento principal, o sea, el disco duro o unidad de estado sólido. La RAM existe como respuesta a una necesidad de mayor velocidad en el flujo de datos provenientes del almacenamiento. Sin la RAM, el disco duro o ssd del ordenador tardaría demasiado en enviarle datos al procesador, por lo que la potencia de este quedaría desperdiciada. Para evitar esto, se creó la RAM que es una memoria muchísimo más rápida que las unidades de almacenamiento tradicionales, en la que se cargarán los datos a los que se accederá con mucha frecuencia para el programa que se esté ejecutando en concreto. De esta forma, se podrá comunicar con el procesador rápidamente. El sistema operativo se carga en la RAM cuando se enciende el ordenador. La memoria RAM, además, es volátil, los datos que se guardan en esta, se borran cuando se apaga el equipo.",
      "Este periférico es el dispositivo de salida de vídeo de nuestro PC, y se comunicará directamente con la gráfica, la cuál le pasará la información codificada de forma que pueda mostrarla por pantalla. Un monitor puede tener diferentes tipos de paneles. Los paneles TN son los que peor representación de los colore tienen, pero son muy útiles debido a su rapidez, por lo que son muy usados en ofimática o en esports. Los paneles IPS tienen una mejor representación de colores, pero son algo más lentos, por lo que se recomiendan más para juegos no compoetitivos o películas. Finalmente los paneles VA tienen buena representación de colores y son rápidos, por lo que son la mejor opción para videojuegos. Antes hablábamos de la rapidez. Los monitores cuentan con una característica llamada tiempo de respuesta que determina lo que tarda en represntar en la pantall lo que nosotros hacemos en el ordenador. Por otra parte está la tasa de refresco, la cuál se mide en hercios y determinará el número de fotogramas por segundo que podrá representar el monitor. Otra característica importante es la resolución, que indica el número de píxeles de monitor (1080p o HD, 2K o HDR, y 4K son las más comunes, auqnue hay muchas más). Hay muchas otras caracaterísticas. Una muy imporatnte se explica en la gráfica, y las demás no las tendremos en consideración aún.",
      "La fuente de alimentación es un componente que se encarga de convertir la corriente que llega por nuestro sistema eléctrico de alterna (CA) a contínua (CC). De esta forma dota de energía a todos los componentes de nuestro equipo. Es importante escoger una fuente de alimentación de calidad, ya que cuanto más estable sea la corriente, menos sufrirán nuestros componentes y más durarán. Las fuentes de alimentación se suelen clasificar por un número seguido de un plus. Esto indica el porcentaje de energía que es capaz de aportar la fuente de alimentación, ya que si tenemos, por ejemplo, una fuente de 600W, parte de esta energía se perderá en calor. Seguido de este número puede venir también un rango que determinará la calidad de los componentes de la fuente de alimentación y, por lo tanto, la cantidad y calidad de la energía que les llega. Estos rangos son bronze, silver y gold. Es buena idea invertir dinero en una fuente de alimentación, ya que una buena puede durar para toda la vida."
      ],
      dialogCompleto:{dialogGrafica: false, dialogProcesador: false, dialogPlaca: false, dialogRam: false, dialogMonitor: false, dialogFuente: false},
      dialogSimple:{dialogProcesador: false, dialogPlaca: false, dialogRam: false, dialogMonitor: false, dialogFuente: false},

      caracteristicasEdicion:{tipoCodec: ["h.264 y h.265", "mpeg-4", "divx", "raw"], calidadRender:["1080", "2K", "4K"]},
      caracteristicasEditar:{tipoDeCodec: "divx", calidadDeRender: "1080"},

      caracteristicasStreaming:{tipoStreaming: 0} //0: just chatting, 1: gaming
    }),

    methods: {

      redirect(item)
      {
        window.open(item.link);
      },

      async recomendar()
      {
        this.buildActiva = false;
        this.buildActivaLow = false;
        this.esfuerzoDemasiadoAlto = false;
        this.precioBuild = 0;
        window.scrollTo(0, 4000);

        //Vamos a recorrer las actividades en busca de cuáles han sido las marcadas y nos quedaremos solo con aquellas que tengan el valor más alto
        var mayor = 1;

        for (const actividad in this.actividades)
        {
          if(this.actividades[actividad] > mayor)
          {
            mayor = this.actividades[actividad];
          }
        }

        //Recorreremos una segunda vez el array para guardar las actividades marcadas cuya actividad computacional es mayor
        var marcadas = [];
        var counter = 0;

        console.log("El número más grande es: " + mayor);

        for(const actividad in this.actividades)
        {
          if(mayor == this.actividades[actividad])
          {
            marcadas[counter] = actividad;
            counter++
          }
        }

        if(marcadas.length == 1)
        {
          for(var act in marcadas)
          {
            switch (marcadas[act])
            {
              case "jugar":
                this.jugar();
                break;
              
              case "edicion":
                this.edicion();
                break;

              case "streaming":
                this.streaming();
                break;

              case "diseño":
                this.diseño();
                break;

              case "navegar":
                this.navegar();
                break;

              case "ofimatica":
                this.ofimatica();
                break;
            }
          }
        }
        else
        {
          this.combinacion();
        }
      },

      async jugar()
      {
        var esfuerzo = this.calcularEsfuerzoJugar();

        var overC = this.oc;
        var eco = this.economic;
        var resolucion = this.caracteristicasJugar.resolucion.split("p");
        var tasaRefresco = this.caracteristicasJugar.fps;
        this.cantidadRam = []

        var data = {
          puntuacion: esfuerzo,
          overclocking: overC,
          economic: eco,
          caract: {res: resolucion[0], tasaRef: tasaRefresco}
        }

        var respuesta = await axios.post(ip + '/priorizarGrafica', data);         
        this.builds = respuesta.data;
                
        while(this.builds.length == 0)
        {
          if(data.puntuacion > 50)
          {
            this.esfuerzoDemasiadoAlto = true;
            console.log("No hemos obtenido ninguna build");
            data.puntuacion = data.puntuacion - 5;
            respuesta = await axios.post(ip + '/priorizarGrafica', data);
            this.builds = respuesta.data;
          }
        }

        var cantidades = []

        for(var build = 0; build < this.builds.length; build ++)
        {
          if(this.builds[build].length == 7)
          {
            cantidades.push(this.builds[build][6].low);
          }
          else
          {
            cantidades.push(this.builds[build][5]);
          }
        }

        this.cantidadRam = cantidades;

        console.log(this.cantidadRam);

        if(data.puntuacion < 40)
        {
          this.buildActivaLow = true;
          this.buildActiva = false;
        }
        else
        {
          this.buildActiva = true;
          this.buildActivaLow = false;
        }
        
      },

      async edicion()
      {
        console.log("Hemos entrado en Edición");
        var esfuerzo = this.traducirCodec();
        var overC = this.oc;
        var eco = this.economic;
        var resolucion = this.caracteristicasEditar.calidadDeRender;
        var tasaRefresco = 75;
        var so = this.sistemaOperativo;

        var data = {
          puntuacion: esfuerzo,
          overclocking: overC,
          economic: eco,
          caract: {res: resolucion, tasaRef: tasaRefresco},
          actividad: 2,
          sistOp: so
        }

        var respuesta = await axios.post(ip + '/priorizarProcesador', data)
        this.builds = respuesta.data;
        
        
        while(this.builds.length == 0)
        {
          if(data.puntuacion > 50)
          {
            this.esfuerzoDemasiadoAlto = true;
            console.log("No hemos obtenido ninguna build");
            data.puntuacion = data.puntuacion - 5;
            respuesta = await axios.post(ip + '/priorizarGrafica', data);
            this.builds = respuesta.data;
          }
        }

        var cantidades = []

        for(var build = 0; build < this.builds.length; build ++)
        {
          if(this.builds[build].length == 7)
          {
            cantidades.push(this.builds[build][6].low);
          }
          else
          {
            cantidades.push(this.builds[build][5]);
          }
        }

        this.cantidadRam = cantidades;

        alert(this.builds[0].length);

        this.buildActiva = true;
        this.buildActivaLow = false;
        
      },

      async streaming()
      {
        var esfuerzo = 0;
        var overC = this.oc;
        var eco = this.economic;
        var resolucion = "1080";
        var tasaRefresco = 75;

        if(this.caracteristicasStreaming.tipoStreaming == 0)
        {
          esfuerzo = 65;
        }
        else
        {
          puntuc = 75;
        }

         var data = {
          puntuacion: esfuerzo,
          overclocking: overC,
          economic: eco,
          caract: {res: resolucion, tasaRef: tasaRefresco},
          actividad: 3,
        }

        var respuesta = await axios.post(ip + '/priorizarAmbos', data);

         this.builds = respuesta.data;
        
        
        while(this.builds.length == 0)
        {
          if(data.puntuacion > 50)
          {
            this.esfuerzoDemasiadoAlto = true;
            console.log("No hemos obtenido ninguna build");
            data.puntuacion = data.puntuacion - 5;
            respuesta = await axios.post(ip + '/priorizarGrafica', data);
            this.builds = respuesta.data;
          }
        }

        var cantidades = []

        for(var build = 0; build < this.builds.length; build ++)
        {
          if(this.builds[build].length == 7)
          {
            cantidades.push(this.builds[build][6].low);
          }
          else
          {
            cantidades.push(this.builds[build][5]);
          }
        }

        this.cantidadRam = cantidades;

        alert(this.builds[0].length);

        this.buildActiva = true;
        this.buildActivaLow = false;

        console.log(respuesta)
      },

      async diseño()
      {
        var numRand = Math.round(Math.random() * (81 - 50) + 50);

        var data = {
          puntuacion: numRand
        }

        var respuesta = await axios.post(ip + '/priorizarAmbos', data)

        console.log(respuesta)
      },

      async navegar()
      {
        var esfuerzo = 30;
        var overC = this.oc;
        var eco = this.economic;
        var resolucion = 1080;
        var tasaRefresco = 60;
        var so = this.sistemaOperativo;

        var data = {
          puntuacion: esfuerzo,
          overclocking: overC,
          economic: eco,
          caract: {res: resolucion, tasaRef: tasaRefresco},
          actividad: 5,
          sistOp : so
        }

        var respuesta = await axios.post(ip + '/priorizarProcesador', data)

        console.log(respuesta);

        this.builds = respuesta.data;

        var cantidades = []

        for(var build = 0; build < this.builds.length; build ++)
        {
          if(this.builds[build].length == 7)
          {
            cantidades.push(this.builds[build][6].low);
          }
          else
          {
            console.log("cantidad: " + this.builds[build][5]);
            cantidades.push(this.builds[build][5]);
          }
        }

        console.log(cantidades);

        this.cantidadRam = cantidades;

        this.buildActivaLow = true;
        this.buildActiva = false;
      },

      async ofimatica()
      {
        var esfuerzo = 20;
        var overC = this.oc;
        var eco = this.economic;
        var resolucion = 1080;
        var tasaRefresco = 60;
        var so = this.sistemaOperativo;

        var data = {
          puntuacion: esfuerzo,
          overclocking: overC,
          economic: eco,
          caract: {res: resolucion, tasaRef: tasaRefresco},
          actividad: 4,
          sistOp: so
        }

        var respuesta = await axios.post(ip + '/priorizarProcesador', data)

        console.log(respuesta);

        this.builds = respuesta.data;

        var cantidades = []

        for(var build = 0; build < this.builds.length; build ++)
        {
          if(this.builds[build].length == 7)
          {
            cantidades.push(this.builds[build][6].low);
          }
          else
          {
            cantidades.push(this.builds[build][5]);
          }
        }

        this.cantidadRam = cantidades;

        this.buildActivaLow = true;
        this.buildActiva = false;

      },

      async combinacion()
      {
        console.log("Se ha elegido edición y gaming");
        var numRand = Math.round(Math.random() * (81 - 50) + 50);

        var numRand2 = Math.round(Math.random() * (81 - 50) + 50);

        var data = {
          puntuacion: numRand,
          puntuacion2: numRand2
        }

        var respuesta = await axios.post(ip + '/priorizarAmbosDif', data)

        console.log(respuesta)
      },
      
      scrollDown()
      {
          window.scrollTo(0, 2500)
      },

      calcularEsfuerzoJugar()
      {
        //Si el tipo de juego es muy exigente utilizaremos un algoritmo concreto para calcular el esfuerzo
        var pruebaTipo = this.traducirTipoDeJuego();
        var pruebaRes = this.traducirResolucion();
        var pruebaFps = this.traducirFps();
        var pruebaCalidad = this.traducirCalidad();

        if(pruebaTipo == 50)
        {
          //Si la resolución es 4k le sumaremos 5 y los fps a partir de 60 se verán afectados
          if(pruebaRes == 15)
          {
            pruebaRes = pruebaRes + 5;

            if(pruebaFps >= 10)
            {
              pruebaFps = pruebaFps + 5;
            }

          }
        }
          //Una vez hemos modificado ciertos datos en caso
          var esfuerzo = pruebaTipo + pruebaRes + pruebaFps + pruebaCalidad;

          return esfuerzo;
      },

      traducirCodec()
      {
        if(this.caracteristicasEditar.tipoDeCodec == "h.264 y h.265")
        {
          return 68;
        }
        else if(this.caracteristicasEditar.tipoDeCodec == "mpeg-4")
        {
          return 62;
        }
        else if(this.caracteristicasEditar.tipoDeCodec == "divx")
        {
          return 65;
        }
        else
        {
          return 60;
        }
      },

      traducirTipoDeJuego()
      {
        if(this.caracteristicasJugar.tipoDeJuego == "Muy exigentes (Red Dead Redemption 2)")
        {
          return 50;
        }
        else if(this.caracteristicasJugar.tipoDeJuego == "Exigentes (The Witcher 3)")
        {
          return 40;
        }
        else if(this.caracteristicasJugar.tipoDeJuego == "Normales (GTA V)")
        {
          return 30;
        }
        else if(this.caracteristicasJugar.tipoDeJuego == "Poco Exigentes (Bioshock)")
        {
          return 20;
        }
        else
        {
          return 10;  
        }
      },

      traducirResolucion()
      {
        if(this.caracteristicasJugar.resolucion == "1080p")
        {
          return 5;
        }
        else if(this.caracteristicasJugar.resolucion == "2K")
        {
          return 10;
        }
        else
        {
          return 15;
        }
      },

      traducirFps()
      {
        if(this.caracteristicasJugar.fps == 30)
        {
          return 5;
        }
        else if(this.caracteristicasJugar.fps == 60)
        {
          return 10;
        }
        else if(this.caracteristicasJugar.fps == 144)
        {
          return 20
        }
        else if(this.caracteristicasJugar.fps == 220)
        {
          return 30;
        }
        else
        {
          return 40;
        }
      },

      traducirCalidad()
      {
        if(this.caracteristicasJugar.calidad == "Ultra")
        {
          return 5;
        }
        else if(this.caracteristicasJugar.calidad == "Muy Alta")
        {
          return 4;
        }
        else if(this.caracteristicasJugar.calidad == "Alta")
        {
          return 3;
        }
        else if(this.caracteristicasJugar.calidad == "Media")
        {
          return 2;
        }
        else
        {
          return 1;
        }
      }
    }
  }
</script>
