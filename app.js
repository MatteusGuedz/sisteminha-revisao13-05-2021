const express = require('express');

const app = express();
const Anuncio = require('./models/Anuncio');

app.use(express.json())
// const db = require('./models/db');


app.get('/listar',(req, res)=>{
     Anuncio.findAll({order:[['id','DESC']]}).then((anuncios)=>{
         res.json({anuncios:anuncios});
     })
})

app.post('/cadastrar', async (req, res)=>{
    const {titulo, descricao} = req.body;
    const resultCad = await Anuncio.create({
        titulo:titulo,
        descricao: descricao
    }).then(()=>{
       
        return res.json({
            error: false,
            message: "Anuncio cadastrado com Sucesso!"
        })
    })
    .catch((err)=>{
        return res.status(400).json({
            error:true,
            message:"ERRO: anuncio nao cadastrado"
        })
    })
}) 

app.listen(3333,()=>{
    console.log("rodando na porta 3333");
})


