/**
 * @file languages.js
 * @description Datos estáticos de los lenguajes de programación que se
 *   mostrarán en las tarjetas. Centralizar los datos aquí facilita
 *   agregar, quitar o modificar entradas sin tocar los componentes.
 */

const LANGUAGES = [
  {
    id: 1,
    nombre: "JavaScript",
    anio: 1995,
    tipo: "Interpretado",
    descripcion:
      "Lenguaje de scripting ligero, interpretado y orientado a objetos. Es el lenguaje de la web por excelencia.",
    emoji: "🟨",
    color: "#f7df1e",
  },
  {
    id: 2,
    nombre: "Python",
    anio: 1991,
    tipo: "Interpretado",
    descripcion:
      "Lenguaje de alto nivel con sintaxis clara y legible. Muy popular en ciencia de datos, IA y automatización.",
    emoji: "🐍",
    color: "#306998",
  },
  {
    id: 3,
    nombre: "Java",
    anio: 1995,
    tipo: "Compilado (JVM)",
    descripcion:
      'Lenguaje orientado a objetos con filosofía "write once, run anywhere". Dominante en aplicaciones empresariales.',
    emoji: "☕",
    color: "#f89820",
  },
  {
    id: 4,
    nombre: "C#",
    anio: 2000,
    tipo: "Compilado (.NET)",
    descripcion:
      "Lenguaje moderno de Microsoft, parte del ecosistema .NET. Muy usado en desarrollo empresarial y videojuegos con Unity.",
    emoji: "💜",
    color: "#9b4993",
  },
  {
    id: 5,
    nombre: "Kotlin",
    anio: 2011,
    tipo: "Compilado (JVM)",
    descripcion:
      "Lenguaje moderno que corre en la JVM. Lenguaje oficial para el desarrollo de aplicaciones Android.",
    emoji: "🟣",
    color: "#7F52FF",
  },
  {
    id: 6,
    nombre: "TypeScript",
    anio: 2012,
    tipo: "Transpilado",
    descripcion:
      "Superset de JavaScript desarrollado por Microsoft que agrega tipado estático. Mejora la mantenibilidad en proyectos grandes.",
    emoji: "🔷",
    color: "#3178c6",
  },
];

export default LANGUAGES;
