import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Solucao = () => {
    const location = useLocation();

    const EducacaoRef = useRef(null);
    const reaproveitamentoRef = useRef(null);
    const iluminaçãoRef = useRef(null);

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1); 
            const sectionRef = {
                'Educacao': EducacaoRef,
                'Reaproveitamento': reaproveitamentoRef,
                'Iluminação': iluminaçãoRef
            }[sectionId];
            if (sectionRef?.current) {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="w-full min-h-screen py-16 px-4 bg-green-50">
            <h1 className="text-4xl font-bold text-center mb-16 text-green-600">
                Nossas Soluções
            </h1>
            
            <section ref={EducacaoRef} id="Educacao" className="mb-16 flex flex-col lg:flex-row items-center lg:items-start">
                <img src="/card1.jpeg" alt="Educação e Conscientização sobre Energia Limpa" className="w-full lg:w-1/2 h-80 object-cover rounded mb-6 lg:mb-0 lg:mr-8" />
                <div className="lg:w-1/2 bg-green-100 p-6 rounded shadow-md">
                    <h2 className="text-3xl font-semibold mb-4 text-green-700">
                        Educação e Conscientização sobre Energia Limpa
                    </h2>
                    <p className="text-green-800 mb-4">
                        <strong>Descrição:</strong> Promover campanhas educativas em escolas, universidades e comunidades para aumentar o conhecimento sobre os benefícios da energia renovável e como cada pessoa pode contribuir para a transição energética. Programas interativos podem incluir workshops sobre como instalar painéis solares ou calcular economias com energia limpa.
                    </p>
                    <p className="text-green-800 mb-4">
                        <strong>Efeito:</strong> A conscientização é fundamental para acelerar a adoção de tecnologias limpas. Uma população informada pode pressionar governos e empresas a investirem mais em sustentabilidade, além de tomar decisões pessoais mais conscientes, como optar por energia solar ou reduzir o desperdício de energia.
                    </p>
                    <p className="text-green-800">
                        <strong>Exemplo:</strong> Lançamento de plataformas interativas online e oficinas presenciais que ensinam comunidades a calcular a economia de energia e impacto ambiental com a instalação de painéis solares em suas casas.
                    </p>
                </div>
            </section>

            <section ref={reaproveitamentoRef} id="Reaproveitamento" className="mb-16 flex flex-col lg:flex-row-reverse items-center lg:items-start">
                <img src="/card2.jpeg" alt="Reaproveitamento de Energia de Resíduos Orgânicos" className="w-full lg:w-1/2 h-80 object-cover rounded mb-6 lg:mb-0 lg:ml-8" />
                <div className="lg:w-1/2 bg-green-100 p-6 rounded shadow-md">
                    <h2 className="text-3xl font-semibold mb-4 text-green-700">
                        Reaproveitamento de Energia de Resíduos Orgânicos
                    </h2>
                    <p className="text-green-800 mb-4">
                        <strong>Descrição:</strong> Implementar biodigestores em áreas urbanas e rurais para converter resíduos orgânicos (como restos de alimentos e esterco animal) em biogás e biofertilizantes. Esse biogás pode ser usado para gerar eletricidade ou como combustível em veículos e cozinhas.
                    </p>
                    <p className="text-green-800 mb-4">
                        <strong>Efeito:</strong> Além de reduzir a quantidade de resíduos em aterros sanitários, essa solução contribui para a geração de energia limpa e sustentável, diminui a emissão de metano e promove a economia circular.
                    </p>
                    <p className="text-green-800">
                        <strong>Exemplo:</strong> Construção de biodigestores em comunidades rurais para transformar esterco em energia elétrica e em biofertilizantes, que podem ser usados na agricultura local, reduzindo custos de produção e promovendo a sustentabilidade.
                    </p>
                </div>
            </section>

            <section ref={iluminaçãoRef} id="Iluminação" className="mb-16 flex flex-col lg:flex-row items-center lg:items-start">
                <img src="/card3.jpeg" alt="Iluminação Pública Sustentável" className="w-full lg:w-1/2 h-64 object-cover rounded mb-6 lg:mb-0 lg:mr-8" />
                <div className="lg:w-1/2 bg-green-100 p-6 rounded shadow-md">
                    <h2 className="text-3xl font-semibold mb-4 text-green-700">
                        Iluminação Pública Sustentável
                    </h2>
                    <p className="text-green-800 mb-4">
                        <strong>Descrição:</strong> Substituir a iluminação pública tradicional por postes solares com baterias integradas. Esses postes captam energia solar durante o dia e a utilizam para iluminar ruas e praças à noite, sem depender da rede elétrica.
                    </p>
                    <p className="text-green-800 mb-4">
                        <strong>Efeito:</strong> Reduz significativamente os custos de eletricidade das cidades e promove a transição para uma infraestrutura urbana mais sustentável. Além disso, aumenta a segurança pública em áreas com baixa cobertura energética.
                    </p>
                    <p className="text-green-800">
                        <strong>Exemplo:</strong> Implementação de postes solares em bairros periféricos e áreas rurais sem acesso à rede elétrica, garantindo iluminação noturna e incentivando o uso de energia limpa.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Solucao;


