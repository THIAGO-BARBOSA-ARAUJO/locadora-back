
export type Filme = { 
    name: string, 
    description: string, 
    category: string 
}

export type FilmeFilter = {
    category: string
}

export type FilmeFilterDeleted = {
    filme: string
}

export type FilmeFilterUpdate = {
    filme: string,
    filmeupdate: string
}