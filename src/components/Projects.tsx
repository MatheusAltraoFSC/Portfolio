import Card from './Card';

const Projects = () => {
  return (
    <div className="border-b border-gray-800">
      <div className="py-32 px-4 flex flex-col items-center gap-16 justify-center max-w-[1200px] mx-auto">
        <div className="text-center space-y-4">
          <h2 className="title">Criando Projetos</h2>
          <p className="subtitle max-w-[630px]">
            Navegue pela nossa coleção de projetos e veja a paixão e a criatividade em cada detalhe
          </p>
        </div>

        <div className="grid grid-col-1  lg:grid-cols-3 w-full gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
