# Proyecto de React

## Pasos realizados

1. **Instalación de React**:
   - Se utilizó `create-react-app` para crear un nuevo proyecto en React, en este caso, llamado `proyecto-lab`. 
   - Este comando inicializa un entorno de desarrollo con configuraciones predeterminadas que simplifican el inicio de proyectos de React.
   - Comando ejecutado:
   - npx create-react-app proyecto-lab
   - Luego una ves creado el proyecto nos dirigimos a la carpeta proyecto-lab abriendo una terminal
   - Ejecutamos el comando cd como se muestra acontinuacion: cd .\proyecto-lab\
   - Una ves estamos en la carptea proyecto lab inicializamos el proyecto con el comando npm start

2. **Creación del componente `Header`**:
   - Se desarrolló un componente funcional llamado `Header` para mostrar un encabezado en la interfaz de usuario. 
   - Los componentes son bloques de construcción en React que permiten dividir la interfaz en partes reutilizables.
   - Código:
     ```jsx
     // src/componentes/encabezado.js
    import React from 'react';

    const Header = () => {
     return <h1>Bienvenido a mi Aplicación React</h1>;
      };

      export default Header;

   - Este componente es simple y devuelve un encabezado (`<header>`) con un título. 

3. **Uso de JSX en componentes**:
   - Se utilizó JSX para definir la estructura del componente `Header`. JSX es una extensión de sintaxis que permite escribir 
   - código similar a HTML dentro de JavaScript, lo que facilita la creación de componentes visuales.
   - **Diferencias entre JSX y HTML**:
     - **HTML**:
       ```html
       <div class="container">
           <h1>Bienvenido a mi sitio</h1>
       </div>
       ```
       - En HTML, se utiliza `class` para definir clases CSS.
     - **JSX**:
       ```jsx
       <div className="container">
           <h1>Bienvenido a mi sitio</h1>
       </div>
       ```
       - En JSX, se utiliza `className` en lugar de `class`, ya que `class` es una palabra reservada en JavaScript.

4. **Implementación del contador en `Counter`**:
   - Se creó un componente `Counter` que utiliza el estado para contar los clics en un botón. 
   - El uso del estado en React permite que los componentes respondan a interacciones del usuario y actualicen la interfaz en consecuencia.
   - Código:
     ```jsx
     // src/componentes/contador.js
     import React, { useState } from 'react';

     const Counter = () => {
         const [count, setCount] = useState(0);

         return (
             <div>
                 <p>Contador: {count}</p>
                 <button onClick={() => setCount(count + 1)}>Incrementar</button>
             </div>
         );
     };

     export default Counter;
     ```

5. **Creación del componente `Greeting` con Props**:
   - Se desarrolló un segundo componente llamado `Greeting` que recibe un prop `name` y muestra un saludo. Las props son datos que 
   - se pasan a los componentes desde su componente padre, lo que permite personalizar la información presentada.
   - Código:
     ```jsx

     // src/componentes/saludo.js
     import React from 'react';
    const Hola = ({ nombre }) => {
    return <p>Hola, {nombre}!</p>;
    };
  
    export default Hola;
     ```
   - Este componente utiliza desestructuración para extraer el prop `name` y mostrar un saludo personalizado.

6. **Explicación del flujo de datos unidireccional**:
   - En React, el flujo de datos es unidireccional, lo que significa que los datos fluyen de los componentes padre a los hijos. 
   - Esto facilita la gestión del estado y hace que el seguimiento de los cambios en la interfaz sea más predecible.

7. **Manejo de eventos en el componente `Counter`**:
   - Se añadió un botón en el componente `Counter` que captura eventos de clic para modificar el estado del contador. 
   - El manejo de eventos en React se realiza mediante propiedades como `onClick`, que ejecutan funciones en respuesta a interacciones del usuario.
   - Código del evento:
     ```jsx
     <button onClick={() => setCount(count + 1)}>Incrementar</button>
     ```

  <!-- // src/componentes/App.css -->
8. **Se aplico un poco de estilo**
   - Eso para darle un poco de estilo a la pagina

    ```jsx
    .App {
  text-align: center;
  background-color: antiquewhite;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  }
  ```

9. **Aprendido de la guia**
  - Me parecio muy interesante la guia el como podemos desarrollar aplicaciones con React
  - Las diferentes formas en que se puede estruturar el proyecto
  - En como manejar datos como importar archivos
  - Ya que React es un enterno muy diferente a una programacion como html