# INFORME PRACTICA 5
## Objetos, clases e interfaces
### ALBERTO RIOS DE LA ROSA
### alu0101235929@ull.edu.es

### INTRODUCCIÓN

Esta práctica tiene como objetivo principal continuar en la realización de ejercicios de programación en TypeScript, centrándonos más en ejercicios relacionados con objetos, clases e interfaces, para así seguir evolucionando en nuestro aprendizaje. Al igual que las siguientes practicas se deberá desarrollar la documentación y la realización de pruebas mediante la metodología TDD. Primero explicaremos en un principio como crear este método de manera breve, y más tarde mostraremos la solución de cada uno de los ejercicios propuestos, que al tener varios ficheros cada ejercicio se encontrará resuelto en una carpeta dentro de la src para cada ejercicio, con una breve explicación de cada uno y unas capturas de pantalla en el que se muestra que se han superado las distintas pruebas de ese ejercicio junto al link de donde se crearon las pruebas. Si desea leer los enunciados de cada ejercicio los podrás encontrar pinchando [aqui](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/)

### CREACION DEL PROYECTO CON LA ESTRUCTURA REQUERIDA

Para crear el proyecto primero debemos realizar un git clone, de la estructura de git dada para el desarrollo y la entrega del mismo, mas tarde al igual que la práctica anterior debemos seguir los pasos de la creacion de un proyecto para trabajar en TypeScript a partir del siguiente [enlace](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html). Ya creado el proyecto inicial, lo siguiente que vamos a crear es los ficheros y carpetas necesarios para poder elaborar la documentación de cada uno de los ejercicios, encontrandolos en este [video](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view). Después por último para ya tener la estructura de nuestro proyecto terminada, a través de mocha y chai, crearemos lo necesario para poder seguir la metodología TDD, en el que se desarrolla la prueba y luego el método, teniendolo disponible en este [video](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view). Para hacernos una idea de la estructura final del proyecto, debe ser algo parecido a lo siguiente:



### ELABORACIÓN DE LOS EJERCICIOS

### Ejercicio 1 - Pokedex

 - ___Carpeta con el código resuelto___ = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-Espinette/tree/master/src/ejercicio-1)

 - ___Explicación de cada clase___

    1. ___Clase Pokemon___:
      
        Esta clase sirve para crear un objeto de tipo pokemon, su constructor recibe el nombre del pokemon, su peso, la altura, el tipo de pokemon y un vector con uns estadisticas básicas, que son su ataque, defensa, velocidad y vida. Además, hemos creado los metodos getters y setters para así poder acceder a los atributos ya que son privados de la clase. Encontrará la clase pulsando [aquí.](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-Espinette/blob/master/src/ejercicio-1/pokemon.ts)
        
    2. ___Clase Pokedex___:

        Esta clase sirve para introcuir en un objeto pokedex todos los pokemons que queramos tener dentro de esta, por lo que su constructor solo recibre un parametro que es un vector de pokemons, además creamos los metodos get y set para la clase, además de un metodo `findPokemon` que sirve para ver si un pokemon se encuentra dentro de la pokedex y una funcion `mostrarPokedex` que muestra una tabla con los pokemons y sus atributos en el objeto. En este caso la tabla resultante sería:
        
        
