import { useState } from 'react'
import SearchIcon from '../assets/images/search.png'

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar = ({onSearch}:SearchBarProps) => {

    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(query.trim() !== "") {
            onSearch(query)
        }
    }

    return(
        <div className="flex flex-row justify-center items-center">
        <form onSubmit={handleSubmit} className="flex items-center gap-1">
            <input type="text" placeholder="Digite o nome do Anime" value={query} 
            onChange={(e) => setQuery(e.target.value)}
            className=" p-2 m-3 text-left font-serif font-bold rounded-lg w-[300px] hover:shadow-lg
            placeholder:text-gray-600 placeholder:italic
            "/>
            <button className="px-3 py-2 bg-white border-2 border-blue-500 text-blue-500
                      font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white
                      hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <img className="w-5 h-5" src={SearchIcon} alt="Icone de Busca"/>
            </button>
        </form>
        </div>
    )
}