import sequelize from '../models/config/database';

// Sincroniza as tabelas no banco de dados
sequelize.sync({ force: true }).then(() => {
    console.log('Tabelas criadas ou atualizadas');
}).catch((err) => {
    console.error('Erro ao criar ou atualizar tabelas:', err);
})