import React from 'react';

const Sobre = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-8">
        {/* Cabeçalho */}
        <header className="text-center mb-8">
          <img 
            src="/public/logo.png" 
            alt="Logo da GreenSolutions" 
            className="w-24 h-24 mx-auto mb-4 rounded-full shadow-md" 
          />
          <h1 className="text-4xl font-bold text-green-700">GreenSolutions</h1>
          <p className="text-gray-600 italic mt-2">
            "Construindo soluções hoje para energizar um amanhã sustentável."
          </p>
        </header>

        {/* Seções de Conteúdo */}
        <div className="space-y-12">
          {/* Missão */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Nossos Objetivos</h2>
            <p className="text-gray-700 leading-relaxed">
              Inspirar e viabilizar a adoção de práticas sustentáveis em larga escala, fornecendo soluções acessíveis
              que promovam a utilização de energias renováveis em diversos setores da sociedade.
            </p>
          </section>

          {/* Visão */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">O que nós visamos ser</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser reconhecidos globalmente como líderes na criação de tecnologias que transformam desafios ambientais
              em oportunidades para um desenvolvimento mais equilibrado e sustentável.
            </p>
          </section>

          {/* Valores */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Nossos Valores</h2>
            <p className="text-gray-700 leading-relaxed">
              Alinhamos nossas ações com os valores de inovação, respeito ao meio ambiente e compromisso com a construção
              de um futuro sustentável para todos.
            </p>
          </section>
        </div>

        {/* Imagem de Fundo */}
        <div className="mt-12">
          <img 
            src="/sobre.jpg" 
            alt="Escritório e equipe da GreenSolutions" 
            className="w-full h-64 object-cover rounded-lg shadow-md" 
          />
        </div>
      </div>
    </div>
  );
};

export default Sobre;


