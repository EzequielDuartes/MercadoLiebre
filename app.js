const express = require('express')
const path = require('path')

//Express basics
const app = express();
const expressPort = 3000;

// Ruta de archivos estaticos y uso
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

// Server start
app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor iniciado en el puerto: ${ stexpressPort}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req,res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.post('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'))
})