import {AnimeInfo} from './AnimeInfo';

interface AnimeInfoProps {
    anime: AnimeInfo
}

export const AnimeCard = ({anime}: AnimeInfoProps) => {
    console.log("Teste anime Card")
    return(
            <div className='flex flex-col bg-gray-600 w-[250px] h-auto p-4 m-3 gap-2 rounded-lg
            hover:bg-gray-500 font-kanit'>
                <img className='w-[250px] h-[250px] shadow-xl rounded-md' src={anime.node.main_picture.large} alt={`Anime imagem ${anime.node.title}`} />
                <h1 className='text-blue-400 text-lg font-semibold'>
                ID: <span className='text-white'>{anime.node.id}</span>
                </h1>
                <h2 className='text-green-400 text-lg font-semibold'>
                Título: <span className='text-white'>{anime.node.title}</span>
                </h2>
            </div>
    )
}
