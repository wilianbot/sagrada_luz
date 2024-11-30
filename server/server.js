const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

//Middleware    
app.use(express.json());

// Rota para buscar um capitulo especifico
app.get('/api/bible/:book/:chapter', async (req, res) => {
    const { book, chapter } = req.params;
    try {
        const response = await axios.get(`https://bible-api.com/${book} ${chapter}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor esta rodando na porta http://localhost:${port}`);
});