import { Filme, FilmeFilter, FilmeFilterDeleted, FilmeFilterUpdate } from "../protocols/filmes.js"
import connection from "../databases/data.js"
import { QueryResult } from "pg"


async function findMany(): Promise<QueryResult<Filme>> {
    return connection.query(`SELECT * FROM filmes;`)
}

async function findFilter(filter: FilmeFilter): Promise<QueryResult<FilmeFilter>> {
    return connection.query(`SELECT * FROM filmes Where filmes.category ~* $1;`, [filter.category])
}

async function inserted(filme: Filme): Promise<QueryResult> {
    return connection.query(`
        INSERT INTO filmes (name, description, category) VALUES ($1, $2, $3);
    `, [filme.name, filme.description, filme.category])
}

async function deletedFilme(filter: FilmeFilterDeleted): Promise<QueryResult> {
    return connection.query(`
    DELETE FROM filmes WHERE name=$1;
    `, [filter.filme])
}

async function updatedFilme(filter: FilmeFilterUpdate): Promise<QueryResult> {
    return connection.query(`
    UPDATE filmes SET name=$1 WHERE name=$2;
    `, [filter.filmeupdate, filter.filme])
}


export { 
        findMany, 
        inserted,
        findFilter,
        deletedFilme,
        updatedFilme  
    }