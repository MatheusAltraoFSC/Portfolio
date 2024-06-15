const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 text-xs">
      <div className="px-4 py-5 flex  items-center gap-16  justify-between max-w-[1200px] mx-auto">
        <div>
          <p className="text-gray-400">
            Design feito por <span className="text-sky-400">Matheus Altrão</span>
          </p>
          <p className="text-gray-400">©️Todos os direitos reservados</p>
        </div>

        <p className="text-gray-400">Voltar para o topo</p>
      </div>
    </footer>
  );
};

export default Footer;
