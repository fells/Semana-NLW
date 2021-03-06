const express = require("express")
const server = express()

// Pegar o banco de dados
const db = require("./database/db.js")


// Configurar pasta publica
server.use(express.static("public"))


// Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))



// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})




// Configrar caminhos da minha aplicação 
// Página inicial
// req: Requisição
// res: Respostas
server.get("/", (req,res)=>{
    return res.render("index.html")
})


server.get("/create-point", (req,res)=>{
    
    // req.query para jogar a sua "URL" para o DB 
    // console.log(req.query)

    
    return res.render("create-point.html")
})


server.post("/savepoint", (req,res) => {
    
    //req.body: Éo mesmo que o corpo de nosso formulário 
    //console.log(req.body)

    // Inserir dados para o DB

    const query = `
     INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items
     ) VALUES (?,?,?,?,?,?,?);
 `

  const values = [
      req.body.image,
      req.body.name,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.items
  ]



    
// Função callback, irá chamar depois que todos os valores e dados estiverem inseridos
    
 function afteinsertdata(err) {
     if (err) {
        console.log(err)
        return res.render("create-point.html", { saved: false})

    }

    console.log("Cadastrado com sucesso")
    console.log(this)


    return res.render("create-point.html", { saved: true})
}
    
    db.run(query, values, afteinsertdata)
    
})


server.get("/search", (req,res)=>{
         const search = req.query.search
 
         if (search == ""){
             // Pesquisa vazia 
             return res.render(__dirname + "/views/search.html", { total: 0})
         }




    // Pegar os dados do banco de dados
    // S eu colocar % antes e depois do ${search}, ele irá
    // "abreviar" as palavras, ficando mais flexível a pesquisa    
    
    db.all(`SELECT * FROM places WHERE state = '${search}' `, function (err, rows) {
            if (err) {
                return console.log(err)
            }
            
            const total = rows.length
            
            // Mostrar a pagina html com os dados do banco de dados 
            return res.render(__dirname + "/views/search.html", { places: rows, total: total})
        })

})


// Ligar o servidor 
server.listen(3000)
