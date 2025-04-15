const connection = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createRegister = (req, res) => {
    const {nameUser, emailUser, senhaUser, ageUser} = req.body

    if(!nameUser || !emailUser || !senhaUser || !ageUser){
        return res.status(400).json({
            message: 'Preencha todos os dados.',
            success: false
        })
    }

    connection.query('SELECT * FROM User where nameUser = ? and emailUser = ?', [nameUser, emailUser], (err,result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        const hashPasword = bcrypt.hash(senhaUser, 10)

        if(result.length > 0){
            return res.status(422).json({
                message: 'Este usuário já existe, por favor, tente outro ou vá para a sessão de login.',
                success: false
            })
        }
        connection.query('INSERT INTO User(nameUser, emailUser, senhaUser, ageUser) VALUES(?, ?, ?, ?)', [nameUser, emailUser, hashPasword ,ageUser], (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            } 

            return res.status(201).json({
                message: 'Cadatro criado com suceso!',
                success: true,
                data: result
            })
        })
    })
}

exports.createLogin = (req, res) => {
    const {emailUser, senhaUser} = req.body 

    if(!emailUser || senhaUser){
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }
    connection.query('SELECT * FROM User WHERE emailUser = ? ', [emailUser], async (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(400).json({
                message: "Usuário não existe.",
                success: false,
                data: err
            })
        }

        const resultado = result[0]
        const UnHashPassword =  await bcrypt.compare(senhaUser, resultado.senha)

        if(!UnHashPassword){
            return res.status(400).json({
                message: "Email ou senha estão incorretos.",
                success: false,
                body: err,
            })
        }

        const token = jwt.sign({id: resultado.nameUser, email: resultado.emailUser}, process.env.JWT_SECRET, 
            {expiresIn: '2h'}
        )

        return res.status(201).json({
            message: "Login realizado com sucesso",
            success: true,
            data: { user: resultado, token: token }
        })
    })
}

exports.updatNameUser = (req, res) => {
    const {idUser} = req.parans
    const {nameUser} = req.body 


    if(!nameUser){
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    connection.query('SELECT * FROM User where idUser = ?', [idUser], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(404).json({
                message: 'Este usuário não existe. Verifique os dados e tente novamente.',
                success: false
            })
        }

        connection.query('UPDATE User set nameUser = ? where idUser = ?', [nameUser, idUser], (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            }

            return res.status(200).json({
                message: 'Sucesso ao alterar o nome do usuário.',
                success: true,
                data: result
            })
        })
    })
}