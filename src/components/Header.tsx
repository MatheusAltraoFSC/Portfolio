const Header = () => {
  return (
    <div className="border-b border-gray-800">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between  h-16 px-4">
        <h1 className="text-xl font-bold">Matheus</h1>

        <nav>
          <ul className="lg:flex hidden items-center gap-4  ">
            <li>
              <a href="">Sobre</a>{' '}
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>

        <button className="flex items-center justify-center font-bold bg-sky-400 rounded-md px-4 h-10 hover:bg-sky-500 transition-colors">
          Trabalhar juntos
        </button>
      </div>
    </div>
  );
};

export default Header;
