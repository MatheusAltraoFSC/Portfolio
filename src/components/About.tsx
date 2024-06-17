const About = () => {
  return (
    <div className="border-b border-gray-800">
      <div className="py-32 px-4 flex-col-reverse lg:flex-row  gap-16 flex items-center justify-between  max-w-[1200px] mx-auto">
        <div className="space-y-4">
          <h2 className="title">Sobre nós</h2>
          <p className="subtitle max-w-[520px]">
            Sou um desenvolvedor front-end apaixonado por criar experiências de usuário envolventes
            e modernas. Especializei-me no uso do framework Next.js, que me permite construir
            aplicações web robustas e otimizadas. Utilizo JavaScript como minha principal linguagem
            de programação, o que me dá a flexibilidade e a potência
          </p>
        </div>

        <div className=" w-full max-w-[430px] h-[370px] rounded-md bg-sky-500"></div>
      </div>
    </div>
  );
};

export default About;
