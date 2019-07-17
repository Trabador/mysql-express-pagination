const mysql = require('mysql');

const itemsPerPage = 10;

const getTotal = (req, res) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "pruebas"
    });

    const query = "SELECT COUNT(*) FROM users";
    con.query(query, (err, result, fields) => {
        const totalItems = result[0]['COUNT(*)']
        const totalPages = Math.ceil(totalItems/itemsPerPage)
        const data = {
            totalItems,
            totalPages
        };
        res.send(data)
    });
}

const getUsers = (req, res) => {
    const page = req.params.page;
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "pruebas"
    });

    const queryPaginated = `SELECT * FROM users LIMIT ${page*itemsPerPage-itemsPerPage}, ${itemsPerPage}`

    con.query(queryPaginated, (err, result, fields) => {
        const data = {
            currentPage: page,
            list: result
        }
        res.send(data)
    });
    
}

const userController = {
    getTotal,
    getUsers
};

module.exports = userController;