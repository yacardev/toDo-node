const fs = require('fs');

let toDoList = [];


const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('_db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar. ', err);
    });
}

const getDB = () => {
    try {
        toDoList = require('../_db/data.json');
    } catch (error) {
        toDoList = [];
    }

}

const getToDoList = () => {
    getDB();
    return toDoList;
}


const updList = (descrip, status = true) => {
    getDB();
    let index = toDoList.findIndex(tarea => tarea.description === descrip)
    if (index >= 0) {
        toDoList[index].status = status;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const delList = (descrip) => {
    getDB();
    let index = toDoList.findIndex(tarea => tarea.description === descrip);
    console.log('index: ', index);
    let filtered = toDoList.filter(tarea => {
        return tarea.description != descrip;
    });
    if (toDoList.length === filtered.length) {
        return false;
    } else {
        toDoList = filtered;
        saveDB();
        return true;
    }

}


const crear = (description) => {
    getDB();

    let to_do = {
        description,
        status: false
    }

    toDoList.push(to_do);
    saveDB();

    return to_do;
}

module.exports = {
    crear,
    getToDoList,
    updList,
    delList
}