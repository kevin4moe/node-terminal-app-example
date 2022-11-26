require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { inquirerMenu, inquirerPause } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
const Tarea = require("./models/tarea");

console.clear();

const main = async () => {
  console.log("");

  let opt = "";

  do {
    // opt = await inquirerMenu();
    // console.log({ opt });
    const tareas = new Tareas();
    const tarea = new Tarea("Comprar comida");

    tareas._listado[tarea.id] = tarea;

    console.log(tareas);

    await inquirerPause();
  } while (opt !== "0");
};

main();
