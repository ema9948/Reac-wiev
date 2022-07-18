    $ REACT Hooks formularios $

    Formulario no controlado

        En la mayoría de los casos, te recomendamos usar Componentes controlados para implementar formularios.
        En un componente controlado, los datos del formulario son manejados por un componente React.
        La alternativa son los componentes no controlados, donde los datos del formulario son manejados por el propio DOM.
        Para escribir un componente no controlado, puedes usar una referencia para que obtengas los valores del formulario desde el DOM. 

        Referencias y el DOM

            refs : Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.

            useRef : useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente. 
        
            Textarea se puede representar en una sola linea

    Formularios controlados

        Los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario.
        Ahora vamos a poder detectar los campos input en tiempo real.

