require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { inquirerMenu, inquirerPause } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  console.log("");

  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });
    await inquirerPause();
  } while (opt !== "0");
};

main();
