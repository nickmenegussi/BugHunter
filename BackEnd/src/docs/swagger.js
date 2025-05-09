const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOption = {
    definition: {
        openapi: '3.0.0', // Versão do OpenAPI
        info: {
            title: 'API de Exemplo',
            version: '1.0.0',
            description: 'Uma simples API de exemplo documentada com Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3001'
            },
        ],
    },
}

const swaggerDocs = swaggerJsDoc(swaggerOption)


module.exports = swaggerDocs
