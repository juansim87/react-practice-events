# 🧪 Ejercicios de React con Eventos

## 🎯 Objetivo

Practicar la gestión de eventos en React utilizando props como `onClick`, `onChange`, `onSubmit`, etc., así como reforzar el uso del `SyntheticEvent` y su aplicación en interfaces reales.

Puedes reutilizar todo lo que hiciste en el proyecto anterior. Los nuevos componentes se pueden añadir a la misma carpeta `componentes`.

Eso sí, en algunos ejercicios puede que encuentres conceptos no vistos aún. ¡Investigar también es parte del proceso! Intenta resolver los ejercicios por tu cuenta antes de pedir ayuda.

Tendrás que usar state en algunos de los ejercicios. Úsalo sin miedo, ¡es una herramienta poderosa y no muerde!

---

## 🚀 Pasos iniciales

### 1. Crear un nuevo repositorio en tu propia cuenta de GitHub

Sube tu código utilizando Git con commits claros, como aprendiste en la clase de GitHub avanzado.

### 2. Crear un proyecto React con Vite

```bash
npm create vite@latest
# Elige React (con JavaScript)
```

### 3. Limpieza inicial

-   Borra componentes, estilos y logos que no necesites.
-   Mantén lo básico: `main.jsx`, `App.jsx` y la carpeta `components`.

---

## 🧩 Ejercicios

Crea estos 15 componentes que usen distintos eventos:

1. **Contador de clicks**

    - Muestra cuántas veces se ha hecho clic en un botón.

2. **Espejo del Input**

    - Muestra un input de texto y debajo refleja lo que el usuario escribe en tiempo real.

3. **Formulario de Login (simulado)**

    - Muestra dos inputs (usuario y contraseña) y al enviar el formulario muestra una alerta con los datos.

4. **Mostrar u ocultar texto**

    - Un botón que alterna entre mostrar y ocultar un texto.
    - Si el texto está oculto, el botón debe mostrar "Mostrar texto", y si está visible, "Ocultar texto".

5. **Contador doble click**

    - Muestra un contador que solo aumenta cuando haces doble clic sobre el botón.

6. **Caja del hover**

    - Una caja que cambia de color cuando el mouse entra y vuelve al original cuando el mouse sale. Puedes usar una clase de CSS. Recuerda, que puedes acceder a `event.target.classList` para añadir o quitar clases.

7. **Contador de teclas**

    - Un input que al presionar una tecla muestra el código de la tecla (en un elemento aparte fuera del input) y lleva un contador de cuántas teclas se han presionado.

8. **Focus en input**

    - Un input que cambia su borde o estilo cuando está enfocado y vuelve a la normalidad al perder el foco.

9. **Formulario**

    - Un formulario que no recarga la página y muestra un mensaje por consola al enviarse. También puede mostrar un alert. Lo que prefieras.

10. **Imagen Errónea**
    - Muestra una imagen que si falla en cargar muestra un mensaje alternativo o imagen fallback.

### Bonus

11. **Logger de scroll**

    -   Un div con overflow que loguea en consola cada vez que el usuario hace scroll dentro de él. Puedes ponerle height 4000px para que tenga scroll

12. **Checkbox con estados**

    -   Un checkbox que alterna entre dos estados (“Activado” y “Desactivado”) y los muestra como texto.

13. **Select personalizado**

    -   Un select que muestra el valor elegido del menú desplegable. Debe mostrar el valor seleccionado en un párrafo debajo del select.

14. **Texto editable**

    -   Un texto que se vuelve input al hacer doble clic, y vuelve a texto cuando se presiona Enter o se pierde el foco.
    - Es decir, si le hago doble clic, se convierte en un input editable, y al hacer Enter o perder el foco, vuelve a ser un texto normal co el valor actualizado.

15. **BotonConParametros**
    -   Muestra una lista de nombres con un botón y cada botón asociado lanza un saludo personalizado al hacer clic. Debes pasar el nombre como parámetro al handler del evento. Un handler es una función que se ejecuta al ocurrir un evento, como un clic. (el callback del event listener)

---

## ✅ Requisitos

-   Cada componente debe funcionar de forma independiente.
-   Usa nombres de componentes en inglés.
-   Organiza bien tu código y aplica estilos simples.
-   Añade todos los componentes a `App.jsx` para poder probarlos.