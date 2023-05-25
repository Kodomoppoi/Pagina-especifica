import Image from 'next/image';
import Botoes from './Botoes';

function MovieImage(Props) {
  return (
    <div className="w-2/3 bg-purple-900 p-8">
      {/* Imagem do Filme */}
      <div className="w-full h-full">
        <Image
          src="/Image/vinga1.webp"
          alt="Imagem do Filme"
          width={500}
          height={500}
          style={{
            width: '100%',
            height: '65%',
            objectFit: 'cover',
          }}
        />
        <Botoes />
      </div>
    </div>
  );
}
export default MovieImage;
