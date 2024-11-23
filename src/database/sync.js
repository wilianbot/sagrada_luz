import sequelize from '../models/config/database';


// Sincroniza as tabelas no banco de dados
(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Tabelas sincronizadas');
    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    } finally {
        sequelize.close();
    }
})