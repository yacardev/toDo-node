const description = {
    demand: true,
    alias: 'd'
}

const status = {
    alias: 's',
    default: false
}

const argv = require('yargs')
    .command('crear', 'Crea un to-do.', { description, status })
    .command('actualizar', 'Actualiza el estado completado.', { description, status })
    .command('eliminar', 'Elimina el registro.', { description })
    .help()
    .argv;

module.exports = {
    argv
}