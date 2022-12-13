require("colors");

const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor(desc) {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const i = (index + 1 + ".").green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${i} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    const tareas = [];
    this.listadoArr.forEach((tarea) => {
      if ((tarea.completadoEn != null) == completadas) {
        tareas.push(tarea);
      }
    });

    tareas.forEach((tarea, index) => {
      const i = (index + 1 + ".").green;
      const { desc } = tarea;
      const estado = completadas ? "Completada".green : "Pendiente".red;

      console.log(`${i} ${desc} :: ${estado}`);
    });
  }
}

module.exports = Tareas;
