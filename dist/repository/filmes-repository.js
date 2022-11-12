import connection from "../databases/data.js";
// importar o banco
function inserted(task) {
    connection.query("\n\n        INSERT INTO filmes () VALUES ($1, $2, $3)\n    ", []);
}
export { inserted };
