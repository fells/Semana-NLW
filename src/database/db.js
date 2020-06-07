// importar a dependencia do SQLITE3
const sqlite3 = require("sqlite3").verbose()

// Criar o obejto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Vamos utilizar o objeto de banco e dados para nossas operações

db.serialize(() => {
    
// Com comandos SQL eu vou:
    
    
// 1- Criar uma tabela
//db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
//`)   

    
// 2- Inserir dados na tabela 
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `

// const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//     "PaperSider",
//     "Guilherme Gembralla, Jardîm América",
//     "Nº 260 ",
//     "Santa catarina",
//    "Rio do Sul",
//    "Resíduos Orgânicos, Óleo de cozinha"
// ]
    
// Função callback, irá chamar depois que todos os valores e dados estiverem inseridos
    
// function afteinsertdata(err) {
//     if (err) {
//         return console.log(err)
//    }

//    console.log("Cadastrado com sucesso")
//    console.log(this)
//}
    
// db.run(query, values, afteinsertdata)

     
// 3- Consultar dados da tabela

// db.all(`SELECT * FROM places`, function (err, rows) {
//    if (err) {
//        return console.log(err)
//    }

//     console.log("Aqui estão seus registros:")
//    console.log(rows)
//})
    
    
// 4- Deletar um dado da tabela
//db.run(`DELETE FROM places WHERE id = ?`, [26], function(err){
//   if (err) {
//       return console.log(err)
//   }

//   console.log("Registro deletado com sucesso!")
//})
})




// https://images.pexels.com/photos/3850588/pexels-photo-3850588.jpeg?cs=srgb&dl=black-smartphone-3850588.jpg&fm=jpg Cole  -- Colectoria
// https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80 -- Papersider
// https://jornaloimparcial.com.br/wp-content/uploads/2019/09/orga-768x512.jpg -- Orglector