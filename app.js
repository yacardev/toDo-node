const argv = require('./config/yargs').argv;
const toDo = require('./_to-do/to-do');
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');
        let tare = toDo.crear(argv.description)
        break;
    case 'listar':
        let listado = toDo.getToDoList();
        for (let tarea of listado) {
            console.log('============== To Do List =============='.green);
            console.log(tarea.description);
            console.log('Estado', tarea.status);
            console.log('============== ========== =============='.green);
        }
        break;
    case 'actualizar':
        let status = toDo.updList(argv.description, argv.status);
        console.log('status: ', status);
        break;
    case 'eliminar':
        let vDelete = toDo.delList(argv.description);
        console.log('Eliminado: ', vDelete);
        break;
    default:
        console.log('comando no reconocido');

}