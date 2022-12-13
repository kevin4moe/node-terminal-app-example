require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  inquirerPause,
  leerInput,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  console.log("");

  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        console.log(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        break;
      case "4":
        break;
    }

    guardarDB(tareas.listadoArr);

    await inquirerPause();
  } while (opt !== "0");
};

main();
