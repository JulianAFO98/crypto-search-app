Proyecto: Buscador de Criptomonedas en Tiempo Real
Descripción
Desarrollarás una aplicación en React que permita buscar criptomonedas y ver su precio en tiempo real. => 1
La aplicación tendrá un campo de búsqueda donde el usuario podrá escribir el nombre o símbolo de una criptomoneda. => 2
La lista de resultados se filtrará automáticamente => 3
Al seleccionar una criptomoneda, se mostrará información detallada sobre su precio actual => 4.

Requisitos Técnicos
useEffect → Para obtener los datos de la API de criptomonedas.
useState → Para manejar el estado de la lista de criptos y el input de búsqueda.
useRef → Para optimizar el rendimiento evitando renderizados innecesarios en el input de búsqueda.
useMemo → Para optimizar la búsqueda filtrando los datos sin recalcular en cada render.
API Gratuita (sin API key)
Puedes usar la API de CoinGecko;
Esta API devuelve una lista de criptomonedas con su nombre, símbolo, precio y más información.

Funcionalidades
Carga de datos desde la API → Se obtienen los datos con useEffect y fetch.
Búsqueda de criptomonedas → Se filtran los resultados según lo que el usuario escriba en un input.
Selección de una criptomoneda → Al hacer clic en una, se muestra información más detallada.
Optimización con useMemo → Para evitar filtrar la lista en cada render innecesariamente.
Uso de useRef → Para manejar el campo de búsqueda sin que cause renderizados extra.
📢 Extras si quieres más desafío:

Agrega un gráfico con la evolución del precio en los últimos días.
Usa localStorage para guardar la última cripto seleccionada.
Agrega estilos con Tailwind o CSS puro.
