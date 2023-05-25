function Botoes(props) {
  return (
    <div>
      <div className="flex items-center space-x-10">
        <a href="#">
          <button class=" bg-red-700 px-40 py-10 mt-10 rounded-lg">
            Netflix
          </button>
        </a>

        <a href="#">
          <button class=" bg-slate-700 px-40 py-10 mt-10 rounded-lg">
            Amazon
          </button>
        </a>

        <a href="#">
          <button class=" bg-blue-700 px-40 py-10 mt-10 rounded-lg">
            Disney
          </button>
        </a>
      </div>
    </div>
  );
}

export default Botoes;
