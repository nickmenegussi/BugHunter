const connection = require('../config/db')

exports.createExperiences = (req, res) => {
    const {degree, amountOfExperiencie, currentPosition, areaAtuation, userId} = req.body 

    if(!degree || !amountOfExperiencie || !currentPosition || !areaAtuation || !userId){
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    if(currentPosition !== 'Dev Júnior' && currentPosition !== 'Dev Pleno' && currentPosition !== 'Dev Sênior'){
        return res.status(400).json({
            message: 'Por favor, digite uma posição válida do nosso menu.',
            success: false
        })
    }

    if(areaAtuation !== 'Front-End' && areaAtuation !== 'Back-End' && areaAtuation !== 'Full Stack' && areaAtuation !== 'Mobile'){
        return res.status(400).json({
            message: 'Por favor, digite uma area de atuação válida do nosso menu.',
            success: false
        })
    }

    connection.query('SELECT * FROM Experiencies where degree = ? and amountOfExperiencie = ? and currentPosition = ? and areaAtuation = ? and userId = ?', [degree, amountOfExperiencie, currentPosition, areaAtuation, userId] ,(err,resultCreate) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        if(resultCreate.length > 0){
            return res.status(422).json({
                message: 'Esse usuário já possui essas experiências, portanto, ele só pode altera-las.',
                success: false,
            })
        }

        connection.query('INSERT INTO Experiencies(degree,amountOfExperiencie, currentPosition, areaAtuation, userId) VALUES(?, ?, ? ,? ,?)', [degree, amountOfExperiencie, currentPosition, areaAtuation, userId], (err, result) => {
            if (err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            }

            return res.status(201).json({
                message: 'Experiência criada com sucesso.', 
                success: true,
                data: resultCreate
            })
        })
    })
}

exports.viewExperiencies = (req, res) => {
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

        connection.query('SELECT * FROM Experiencies where userId = ?', [idUser] ,(err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Erro ao se conectar com o servidor.',
                    success: false,
                    data: err
                })
            }
    
            return res.status(200).json({
                message: 'Sucesso ao exibir as experiências do usuário.',
                success: true,
                data: result
            })
        })
    })
}

exports.updateDegree = (req, res) => {
    const { degree } = req.body
    const { idExperiencies } = req.params

    if (!degree || !idExperiencies) {
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    if(degree !== 'Técnico' && degree !== 'Graduação' && degree !== 'Pós-Graduação' && degree !== 'Doutorado' && degree !== 'Mestrado'){
        return res.status(400).json({
            message: 'Opção inválida, informe uma opção válida.',
            success: false
        })   
    }

    connection.query('SELECT * FROM Experiencies WHERE idExperiencies = ?', [idExperiencies], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao atualizar o grau de formação.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(404).json({
                message: 'Experiência não existe, por favor, tente novamente.',
                success: false,
                data: err 
            })
        }
        connection.query('UPDATE Experiencies SET degree = ? WHERE idExperiencies = ?', [degree, idExperiencies], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao atualizar o grau de formação.',
                    success: false,
                    data: err
                })
            }
    
            return res.status(200).json({
                message: 'Grau de formação atualizado com sucesso.',
                success: true,
                data: result
            })
        })
    })
}

exports.updateAmountOfExperiencie = (req, res) => {
    const { amountOfExperiencie } = req.body
    const { idExperiencies } = req.params

    if (!amountOfExperiencie || !idExperiencies) {
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    connection.query('SELECT * FROM Experiencies where idExperiencies = ?', [idExperiencies], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao atualizar o grau de formação.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(404).json({
                message: 'Experiência não existe, por favor, tente novamente.',
                success: false,
                data: err 
            })
        }

        connection.query('UPDATE Experiencies SET amountOfExperiencie = ? WHERE idExperiencies = ?', [amountOfExperiencie, idExperiencies], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao atualizar a quantidade de experiência.',
                    success: false,
                    data: err
                })
            }
    
            return res.status(200).json({
                message: 'Quantidade de experiência atualizado com sucesso.',
                success: true,
                data: result
            })
        })
    })
}
exports.updateAreaAtuation = (req, res) => {
    const { areaAtuation } = req.body
    const { idExperiencies } = req.params

    if (!areaAtuation || !idExperiencies) {
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    if(areaAtuation !== 'Front-End' && areaAtuation !== 'Back-End' && areaAtuation !== 'Full-Stack' && areaAtuation !== 'Mobile'){
        return res.status(400).json({
            message: 'Opção inválida, informe uma opção válida.',
            success: false
        }) 
    }

    connection.query('SELECT * FROM Experiencies where idExperiencies = ?', [idExperiencies], (err,result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao atualizar o grau de formação.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(404).json({
                message: 'Experiência não existe, por favor, tente novamente.',
                success: false,
                data: err 
            })
        }

        connection.query('UPDATE Experiencies SET areaAtuation = ? WHERE idExperiencies = ?', [areaAtuation, idExperiencies], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao atualizar área de atuação.',
                    success: false,
                    data: err
                })
            }
    
            return res.status(200).json({
                message: 'Área de atuação atualizada com sucesso.',
                success: true,
                data: result
            })
        })
    })
}

exports.updateCurrentPosition = (req, res) => {
    const { currentPosition } = req.body
    const { idExperiencies } = req.params

    if (!currentPosition || !idExperiencies) {
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    if(currentPosition !== 'Dev Júnior' && currentPosition !== 'Dev Pleno' && currentPosition !== 'Dev Sênior' && currentPosition !== 'Técnico' && currentPosition !== 'Estágiario'){
        return res.status(400).json({
            message: 'Opção inválida, informe uma opção válida.',
            success: false
        }) 
    }

    connection.query('SELECT * FROM Experiencies WHERE idExperiencies = ?', [idExperiencies], (err, result) => {
        if(err){

        }

        if(result.length === 0){
            return res.status(404).json({
                message: 'Experiência não existe, por favor, tente novamente.',
                success: false,
                data: err 
            })
        }

        connection.query('UPDATE Experiencies SET currentPosition = ? WHERE idExperiencies = ?', [currentPosition, idExperiencies], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao atualizar cargo atual.',
                    success: false,
                    data: err
                })
            }
    
            return res.status(200).json({
                message: 'Cargo atual atualizado com sucesso.',
                success: true,
                data: result
            })
        })
    })
    
}

exports.deleteExperiencies = (req, res) => {
    const {idExperiencies} = req.params 

    if(!idExperiencies){
        return res.status(400).json({
            message: 'Preencha todos os campos.',
            success: false
        })
    }

    connection.query('SELECT * FROM Experiencies where idExperiencies = ?', [idExperiencies], (err,result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                data: err
            })
        }

        if(result.length === 0){
            return res.status(404).json({
                message: 'Experiência não existe, por favor, tente novamente.',
                success: false,
                data: err 
            })
        }

        connection.query('DELETE FROM Experiencies where idExperiencies = ?', [idExperiencies], (err,result) => {
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