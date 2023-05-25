import Image from 'next/image';
import Header from './header';
import MovieDetails from './MovieDetails';
import MovieImage from './MovieImage.js';
import Botoes from './Botoes';

function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-1/3  bg-gradient-to-r from-purple-950 to-purple-900 p-8">
          <MovieDetails />
        </div>
        <MovieImage />
      </div>
    </div>
  );
}

export default Home;
