"use client"
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

export default function CardFilme({ filme }) {
  const [favorito, setFavorito] = useState(false)
  const poster = 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/' + filme.poster_path

  function favoritar() {
    setFavorito(true);
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.push(filme);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
  function desfavoritar() {
    setFavorito(false);
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritosAtt = favoritos.filter((f) => f.titulo !== filme.titulo);
    localStorage.setItem("favoritos", JSON.stringify(favoritosAtt));
  }

  return (
    <div className="flex flex-col w-40 items-center relative">
      { favorito ?
      <FavoriteIcon className='absolute right-2 top-2 cursor-pointer text-red-500' onClick={desfavoritar}/> :
      <FavoriteBorderIcon className='absolute right-2 top-2 cursor-pointer text-red-500' onClick={favoritar}/>
      }
      <img className="rounded" src={poster} alt="poster" />
      <span className="text-zinc-400 font-medium text-center line-clamp-1">
        {filme?.title}
      </span>
      <div>
        <span><StarIcon className=' text-amber-500'/></span>
        <span className="text-zinc-400 ">{filme?.vote_average.toFixed(1)}</span>
      </div>
      <a href="" className="bg-cyan-600 w-full text-center rounded m-1 py-1">
        detalhes
      </a>
    </div>
  );
}
