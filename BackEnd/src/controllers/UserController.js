const connection = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.viewUser = (req, res) => {
    connection.query('SELECT * FROM User', (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        return res.status(200).json({
            message: 'Usuário exibido com sucesso.',
            success: true,
            data: result
        })
    })
}

exports.createRegister = (req, res) => {
    const {nameUser, emailUser, senhaUser, ageUser} = req.body

    if(!nameUser || !emailUser || !senhaUser || !ageUser){
        return res.status(400).json({
            message: 'Preencha todos os dados.',
            success: false
        })
    }

    connection.query('SELECT * FROM User where nameUser = ? and emailUser = ?', [nameUser, emailUser], async (err,result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        const hashPasword = await bcrypt.hash(senhaUser, 10)

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
                message: 'Cadastro criado com suceso!',
                success: true,
                data: result
            })
        })
    })
}

exports.createLogin = (req, res) => {
    const {emailUser, senhaUser} = req.body 

    if(!emailUser || !senhaUser){
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
        const UnHashPassword =  await bcrypt.compare(senhaUser, resultado.senhaUser)

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
    const {idUser} = req.params
    const {nameUser} = req.body 


    if(!nameUser || !idUser){
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

exports.updateEmailUser = (req, res) => {
    const {emailUser} = req.body 
    const {idUser} = req.params

    if(!emailUser || !idUser){
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
            return res.status(400).json({
                message: 'Este usuário não existe. Verifique os dados e tente novamente.',
                success: false,
                data: err 
            })
        }
        
        connection.query('UPDATE User set emailUser = ? where idUser = ?', [emailUser, idUser], (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            }

            return res.status(201).json({
                message: 'Email do usuário trocado com sucesso.',
                success: true,
                data: result
            })
        })
    })
}

exports.updateSenhaUser = (req, res) => {
    const {idUser} = req.params 
    const antigaSenha = req.body 
    const novaSenha = req.body 

    if(!antigaSenha || !novaSenha || !idUser){
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
            return res.status(400).json({
                message: 'Este usuário não existe. Verifique os dados e tente novamente.',
                success: false,
                data: err 
            })
        }

        const user = result[0]
        const isPasswordTheSame = bcrypt.compare(antigaSenha, user.senhaUser)

        if(!isPasswordTheSame){
            return res.status(400).json({
                message: 'As senha não coincidem, tente novamente.',
                success: false,
                data: err
            })
        }

        const hashPassword = bcrypt.hash(novaSenha, 10)

       connection.query('UPDATE User set senhaUser = ? where idUser = ?', [hashPassword, idUser], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        return res.status(200).json({
            message: 'Senha alterada com sucesso.',
            success: true,
            data: result
        })
       })
    })
}

exports.DeleteUser = (req, res) => {
    const {idUser} = req.params

    connection.query('SELECT * FROM User where idUser = ?', [idUser], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(400).json({
                message: 'Este usuário não existe. Verifique os dados e tente novamente.',
                success: false,
                data: err 
            })
        }

        connection.query('DELETE FROM Experiencies where userId = ?', [idUser], (err,result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar as Experiências do usuário.',
                    success: false,
                    data: err
                })
            }

            connection.query('DELETE FROM Historic where user_id = ?', [idUser], (err,result) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao deletar histórico do usuário.',
                        success: false,
                        data: err
                    })
                }

                connection.query('DELETE FROM User where idUser = ?', [idUser], (err,result) => {
                    if (err) {
                        return res.status(500).json({
                            message: 'Erro ao deletar usuário.',
                            success: false,
                            data: err
                        })
                    }

                    return res.status(201).json({
                        message: 'Succeso ao deletar usuário.',
                        success: true,
                        data: result
                    })
                })
            })
        })

    })
}