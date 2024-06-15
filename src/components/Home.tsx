const Home = () => {
  return (
    <div className="border-b border-gray-800">
      <div className="h-[90vh] max-w-[1200px] px-4 mx-auto flex items-center justify-center flex-col gap-8  ">
        <div className="space-y-4 text-center">
          <h1 className="title">Transformando Ideias </h1>
          <p className="subtitle max-w-[645px]">
            Construindo aplicações de ponta a ponta com excelência utilizando Next.js, Tailwind CSS,
            Supabase e Firebase
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className=" flex items-center justify-center font-bold bg-transparent border border-gray-700 rounded-md px-3 h-10 hover:bg-gray-700 transition-colors">
            GitHub
          </button>
          <button className="flex items-center justify-center font-bold bg-gray-700 border border-gray-700 rounded-md px-3 h-10 hover:bg-transparent transition-colors">
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
