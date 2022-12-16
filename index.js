require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  inquirerPause,
  leerInput,
  listaBorrarTarea,
  confirm,
  mostrarListadoChecklist,
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
      case "1": // Crear tarea
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        console.log(desc);
        break;
      case "2": // Mostrar la lista completa de tareas
        tareas.listadoCompleto();
        break;
      case "3": // Mostrar solo las tareas completadas
        tareas.listarPendientesCompletadas(true);
        break;
      case "4": // Mostrar solo las tareas pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case "5": // Marcar una tarea como completada o pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        console.log(ids);
        break;
      case "6": // Borrar una tarea especifica
        const id = await listaBorrarTarea(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirm("¿Estás seguro?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log(`Se ha borrado la tarea seleccionada`);
          } else {
            console.log(`No se ha borrado ninguna tarea`);
          }
        }
        break;
    }

    guardarDB(tareas.listadoArr);

    await inquirerPause();
  } while (opt !== "0");
};

main();
