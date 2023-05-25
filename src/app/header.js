import Image from 'next/image';
import logo from '/public/Image/786c4307-3216-468b-ae38-c44d6b7369f1.jpg';

function Header(Props) {
  return (
    <header className="flex items-center justify-between py-0 px-0 bg-gradient-to-r from-purple-950 to-purple-900 text-black">
      <Image
        class="object-contain w-16 md:w-16 lg:w-16"
        src={logo}
        alt="Logo do site"
      />

      <div className="flex items-center space-x-20  ">
        <a href="#" className="text-white hover:text-gray-300">
          Inicio
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Menu
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Filme
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Minha Lista
        </a>
      </div>
      <div>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="px-20 py-2 rounded-lg"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Pesquisar
        </button>
      </div>

      <div>
        <a href="/pagina-de-login" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-20 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
export default Header;
