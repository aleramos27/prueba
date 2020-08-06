import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);
    // ENVIANDO EL JSON DE RESPUESTA
    res.send(users);
}

export const createUser = (req, res) => {  
    // RECIBE LOS PARAMETROS PARA EL USUARIO NUEVO
    const user = req.body;
    // AGREGA NUEVO USUARIO EN ARRAY users
    users.push({...user, id: uuid()});
    // ENVIANDO EL JSON DE RESPUESTA
    res.send(users);
    
    console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};