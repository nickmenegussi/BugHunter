const connection = require('../config/db')



exports.createHitoric = (req, res) => {
    const {user_id, xp_ganho, bugs_resolvidos, foco_gasto, vida_restante, tentativasErradas, encerradoPor} = req.body

    if(!user_id || !xp_ganho || !bugs_resolvidos || !foco_gasto || !vida_restante || !tentativasErradas, encerradoPor){
        return res.status(400).json({
            message: 'Preencha todos os dados.',
            success: false
        })
    }

    if (encerradoPor !== 'Falta de vida' && encerradoPor !== 'Muitas Tentativas') {
        return res.status(400).json({
            message: 'Por favor, digite uma posição válida para encerramento.',
            success: false
        });
    }

    connection.query('SELECT * FROM Historic WHERE user_id = ? AND xp_ganho = ? AND foco_gasto = ? AND bugs_resolvidos = ? AND encerradoPor = ? AND tentativasErradas = ? AND vida_restante = ?',
  [user_id, xp_ganho, foco_gasto, bugs_resolvidos, encerradoPor, tentativasErradas, vida_restante], (err,result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }


        if(result.length > 0){
            return res.status(422).json({
                message: 'Este histórico já existe, por favor, tente outro ou vá para a sessão de histórico',
                success: false
            })
        }

        connection.query('INSERT INTO Historic(user_id, xp_ganho, bugs_resolvidos, foco_gasto, vida_restante) VALUES(?, ?, ?, ?)', [nameUser, emailUser, hashPasword ,foco_gasto, vida_restante], (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            } 

            return res.status(201).json({
                message: 'Histórico criado com suceso!',
                success: true,
                data: result
            })
        })
    })
}

exports.viewHistoric = (req, res) => {
    const {idUser} = req.params

    if(!idUser){
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
                message: "Usuário não existe.",
                success: false,
                data: err
            })
        }

        connection.query('SELECT * FROM Historic where user_id = ?', [idUser] ,(err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            }
    
            return res.status(200).json({
                message: 'Sucesso ao exibir o histórico do usuário.',
                success: true,
                data: result
            })
        })
    })
}

exports.DeleteHistoric = (req, res) => {
    const {idHistoric} = req.params

    if(!idHistoric){
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    connection.query('SELECT * FROM Historic where idHistoric = ?', [idHistoric], (err,result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(404).json({
                message: 'Histórico não existe, por favor, tente novamente.',
                success: false,
                data: err 
            })
        }

        connection.query('DELETE FROM Historic where idHistoric = ?', [idHistoric], (err,result) => {
            if(err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            }

            return res.status(201).json({
                message: 'Succeso ao deletar a Experiência do usuário.',
                success: true,
                data: result
            })
        })

    })
}

