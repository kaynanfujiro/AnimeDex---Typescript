import axios from 'axios';
import { AnimeInfo } from '../Components/AnimeInfo'

const API_BASE_URL = "http://localhost:5000"; // Substitua pela URL real da sua API

export const api = {
    fetchAnimes: async (query: string, limit: number = 12): Promise<AnimeInfo[]> => {
        try {
            const response = await axios.get<{ data: AnimeInfo[] }>(`${API_BASE_URL}/anime`, {
                params: { q: query, limit },
            });
            return response.data.data;
        } catch (error) {
            console.error("Erro ao buscar animes:", error);
            return []; 
        }
    }
};
