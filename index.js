require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  inquirerPause,
  leerInput,
  listaBorrarTarea,
  confirm,
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
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        break;
      case "6":
        const id = await listaBorrarTarea(tareas.listadoArr);
        const ok = await confirm("¿Estás seguro?");
        if (ok) {
          tareas.borrarTarea(id);
          console.log(`Se ha borrado la tarea seleccionada`);
        } else {
          console.log(`No se ha borrado ninguna tarea`);
        }
        break;
    }

    guardarDB(tareas.listadoArr);

    await inquirerPause();
  } while (opt !== "0");
};

main();
