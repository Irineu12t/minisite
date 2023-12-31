const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require('body-parser');

const mensagem = require("./mensagememail");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'))

//chat
app.post('/sendemail', (req, res) => {

    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"irineu.studiomsbeauty@gmail.com",
            pass:"ytjisvanprizaehk",
        }
    })
    
    let options = {
        from: 'Lista de Espera <irineu.studiomsbeauty@gmail.com>',
        to: `irineufarias15@gmail.com`,
        subject:`Cliente: ${req.body.name}`,
        //text: `Teste e Teste `,
        text: `Nome: ${req.body.name}, WhatsApp: ${req.body.whatsapp}, Email: ${req.body.email}`,
    }

    let optionsTwo = {
        from: 'Studio MS Beauty <irineu.studiomsbeauty@gmail.com>',
        to: `${req.body.email}`,
        subject:`Lista de Espera`,
        //text: `Teste e Teste `,
        html:mensagem
    }

     const sendEmail = async () =>{
        try{
            console.log('Enviando Email')
            await transporter.sendMail(options);
            await transporter.sendMail(optionsTwo);
            res.sendFile(__dirname+'/agrad.html');
            console.log("Email Enviado com Sucesso")
            
        }catch(error){
            console.log('Deu Erro')
            console.log(error)
            
        }
    }

    sendEmail()

    
    });


    
    
    /*const sendEmail = async () =>{
        try{
            console.log('Enviando Email')
            await transporter.sendMail(options);
            console.log("Email Enviado com Sucesso")
        }catch(error){
            console.log('Deu Erro')
            console.log(error)
        }
    }*/

    //sendEmail()
    
//chat

<<<<<<< HEAD
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
=======
const porta = 3000;

app.listen(porta, () => {
    console.log('Servidor rodando na porta '+porta);
});
>>>>>>> df5579eec9d8e3f4e46008631b02dee3f86d3590
