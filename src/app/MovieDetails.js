import Image from 'next/image';

function MovieDetails(Props) {
  const movieName = 'Vingadores: Ultimato';
  const movieGenre = 'Ação e Aventura';
  const movieDuration = '180 min';
  const movieRating = '/Image/classificacao-18-anos-logo-1.png';
  const movieSynopsis =
    'Sinopse: Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.';
  const movieRatingScore = '8,5';

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-2">{movieName}</h2>
      <div className="flex items-center mb-2">
        <span className="mr-2">Gênero:</span>
        <span>{movieGenre}</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">Duração:</span>
        <span>{movieDuration}</span>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src={movieRating}
          alt="Classificação Indicativa"
          className="w-6 h-6 mr-2"
          width={'100'}
          height={'100'}
        />
        <span>Classificação Indicativa</span>
      </div>
      <p className="text-lg">{movieSynopsis}</p>
      <p className="text-lg mt-2">Nota da crítica: {movieRatingScore}</p>
      <button className="bg-purple-950 text-white px-4 py-2 mt-6 rounded-lg">
        Adicionar à Minha Lista
      </button>
      <div className="mt-12">
        {/* Espaço para o trailer do filme */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g6ng8iy-l0U"
          title="Trailer do Filme"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default MovieDetails;
