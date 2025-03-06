import { useState, useEffect } from "react";
import { AnimeInfo } from "./AnimeInfo";
import { SearchBar } from "./SearchBar";
import { api } from "../Services/api";
import { AnimeCard } from "./AnimeCard";

const AnimeList = () => {
    const [animes, setAnimes] = useState<AnimeInfo[]>([]);

    const handleSearch = async (query: string) => {
        const data = await api.fetchAnimes(query);
        setAnimes(data);
    };

    useEffect(() => {}, [animes]);

    return (
        <div className="m-4">
            <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                Buscador de Animes
                </h1>
            <SearchBar onSearch={handleSearch} />
            <div>
                {animes.length > 0 ? (
                    <div className="bg-gray-400 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 p-1 rounded-2xl">
                        {animes.map((anime) => (
                            <AnimeCard key={anime.node.id} anime={anime} />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default AnimeList;
