var express = require("express") // Criando módulo express

var aplicacao = express() //Executador do express

const rotas = require('./routes/router') // Include do modulo router para navegação

// Criar o objeto bodyParser para ler os dados do formulario
const bodyParser = require('body-parser')

/*
express.json() analisa os dados do formulario que  ficam no corpo de solicitação (POST),
também chamado de request de entrada, para ser enviado ao servidor web
 */
aplicacao.use(express.json())

/* utiliza o objeto rotas que define os caminhos das páginas*/
aplicacao.use('/', rotas)

/* bodyParser serve para trabalhar com os dados vindo do formulario, ou seja, ele transforma
e formata esse pacote de dados para o formato de objeto Javacript
 */
aplicacao.use(bodyParser.urlencoded({extended:false}))

/* include (utilizar) um arquivo externo */
aplicacao.use(express.static(__dirname +'/public'))

/* desmontrar que será utilizado o objeto ejs para interpretarvo template HTML no servidor web */
aplicacao.set('view engine', 'ejs')

/* servidor web fica na escuta da solicitação do cliente (computador q possui navegador) na  porta 3000 */
aplicacao.listen(3000, function(req, res) {
    console.log("##########")
    console.log("Servidos aberto")
    console.log("##########")
})