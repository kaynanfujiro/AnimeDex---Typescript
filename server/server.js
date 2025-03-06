import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS para permitir apenas o frontend em localhost:5173
const allowedOrigins = ['http://localhost:5173'];

app.use(
    cors({
        origin: (origin, callback) => {
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, true); // Permite o acesso
            } else {
                callback(new Error("Not allowed by CORS")); // Bloqueia o acesso
            }
        },
        methods: ['GET', 'POST'], // Métodos permitidos
        allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    })
);

// Configuração da API do MyAnimeList
const API_URL = "https://api.myanimelist.net/v2";
const CLIENT_ID = process.env.MAL_CLIENT_ID; 

// Rota para buscar animes
app.get("/anime", async (req, res) => {
    try {
        const { q, limit } = req.query;
        
        const response = await axios.get(`${API_URL}/anime`, {
            params: { q, limit },
            headers: { "X-MAL-CLIENT-ID": CLIENT_ID },
        });

        res.json(response.data);
    } catch (error) {
        console.error("Erro ao buscar animes:", error.message);
        res.status(500).json({ error: "Erro ao buscar animes" });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
