
    $ REACT $

    REACT  es una libreria de JS, para crear interfaces de usuarios, react no es un framework.
    React es proyecto de codigo abierto, creado por Facebook
    Esta basado en Componentes.

    -El aspecto de react mas importantes es que podemos crear componentes, que son como elementos Html personalizados y 
    reutilizables para construir interfaces de usuarios.

    React-Create-App // entorno de desarrollo en tiempo real

        .Facebook creo un Entorno preconfigurado de desarrollo para crear Apps de React
        .Creara un servidor de desarrollo en vivo
        .trae incorporada web-pack y babel.
        
        instalar:

        npx create-react-app my-app         /npx instala el archivo en el dirrectorio altual.
        cd my-app
        npm start     // incia el servidor en vivo

        npm i //instalamos los modulos de la lista de package.json


    JSX (JAVASCRIP + XML)

        . JSX significa javascript xml
        . El uso de jsx no es obligatorio.
        . Por detras usa createElement.
        .jsx es ta mas cerca de Js, no de html, por esto hay algunas diferencias clave al escribir
         codigo.
            .ClassName="" se usa en lugar de class, ya que class en una palabra reservada en JS
            .Las Propiedades y metodos son CamelCase.
            .Las etiquetas de cierre automatico deben terminar en una barra inclinada. Eje. <img />
            .Podemos inscrustar expresiones de JS dentro de JSX usando {} llaves, pueden  ser variable
             funciones y propiedades.

    Renderizado condicional

        En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.


    Listas y keys

        React usa el key prop para crear una relación entre el componente y el elemento DOM.
        La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no.
        No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática.
        Si key es un índice, reordenar un elemento en la matriz lo cambia. Entonces React se confundirá y volverá a renderizar el elemento incorrecto.

    Manejando eventos

        Los eventos de React se nombran usando camelCase, en vez de minúsculas.
        Con JSX pasas una función como el manejador del evento, en vez de un string.

    Componentes

        Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

    FRAGMENT

        Un patrón común en React es que un componente devuelva múltiples elementos. Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM. 

    Props

    Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX e hijos a este componente como un solo objeto. Llamamos a este objeto “props” (propiedades)
    Son de solo lectura.

    .Es informacion que podemos proporcionar a un componente.

    .Los Props tiene una importante función: ellos pasan los datos de un componente a otro

----------------------------------------------------------------
    React es bastante flexible pero tiene una sola regla estricta:

        Todos los componentes de React deben actuar como funciones puras con respecto a sus props.
        Tales funciones son llamadas “puras” porque no tratan de cambiar sus entradas, y siempre devuelven el mismo resultado para las mismas entradas.
        Por supuesto, las interfaces de usuario de las aplicaciones son dinámicas y cambian con el tiempo. En la siguiente sección, introduciremos un nuevo concepto de “estado”. :::
        
        .basicamente los props no se modican, para eso tenemos los estados
--------------------------------------------

    Estado

        El estado le permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa, sin violar la regla de arriba ☝.
        state(opens new window)
        Para hacer cambios vamos a utilizar un hook.

        .Trabajar con informacion Dinamica, renderizar los componentes dinamicamente.

        .con el estado le indicamos cuando algo cambie, renderice lo que cambio.

        .Nadamas le indica a react que tiene que volver a renderizar algo,
         por eso se usan 
         los Hooks, el cual le indica que tiene que renderizar cuando algo cambie.

        -Hooks-

            Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función.
            Los hooks no funcionan dentro de las clases — te permiten usar React sin clases.
            React proporciona algunos Hooks incorporados como useState.
            También puedes crear tus propios Hooks para reutilizar el comportamiento con estado entre diferentes componentes.


            -useState-

            


    
    


