const Contact = () => {
  return (
    <div className="border-b border-gray-800">
      <div className="py-32 px-4 flex flex-col items-center gap-16  justify-center max-w-[1200px] mx-auto">
        <div className="text-center space-y-4">
          <h2 className="title">Vamos conversar!</h2>
          <p className="subtitle max-w-[630px]">
            Preencha os campos abaixo com seu nome, e-mail e a mensagem que deseja nos enviar. Estou
            ansioso para ouvir suas ideias.
          </p>
        </div>

        <form className="w-full max-w-[770px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <div>
              <input
                className="input"
                placeholder="Inserir o e-mail"
                name="email"
                type="email"
              />
            </div>

            <div>
              <input
                className="input"
                placeholder="Inserir o seu nome"
                name="name"
                type="text"
              />
            </div>

            <textarea
              className="textarea lg:col-span-2 "
              placeholder="Escreva a sua mensagem"
              name="message"
              id="message"
            />

            <button className="flex items-center justify-center font-bold lg:col-span-2 gap-2 bg-sky-400 rounded-md px-4 h-10 hover:bg-sky-500 transition-colors">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
