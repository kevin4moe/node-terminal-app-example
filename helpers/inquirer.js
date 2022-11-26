const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Listar tarea",
      },
      {
        value: "3",
        name: "3. Listar tarea completadas",
      },
      {
        value: "4",
        name: "4. Listar pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("________________________\n".green);
  console.log(" Seleccione una opción".green);
  console.log("________________________\n".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const inquirerPause = async () => {
  const question = {
    type: "input",
    name: "select",
    message: "Presiona enter para continuar",
  };
  console.log("\n");
  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  inquirerPause,
};
