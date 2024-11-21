import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-green-100 via-white to-blue-50">
            {/* Banner */}
            <div className="w-full h-72 mb-12">
                <Slider {...settings}>
                    <div>
                        <img 
                            src="/banner1.png" 
                            alt="Banner 1" 
                            className="w-full h-72 object-cover border-4 border-green-500 rounded-lg shadow-lg" 
                        />
                    </div>
                    <div>
                        <img 
                            src="/banner2.jpeg" 
                            alt="Banner 2" 
                            className="w-full h-72 object-cover border-4 border-green-500 rounded-lg shadow-lg" 
                        />
                    </div>
                    <div>
                        <img 
                            src="/banner3.png" 
                            alt="Banner 3" 
                            className="w-full h-72 object-cover border-4 border-green-500 rounded-lg shadow-lg" 
                        />
                    </div>
                </Slider>
            </div>



            {/* Cards Section */}
            <div className="flex-grow flex flex-col items-center justify-center mb-16 px-4">
                <h2 className="text-4xl font-bold mb-12 text-green-800">Soluções Sustentáveis</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
                    <Link
                        to="/solucao#Educacao"
                        className="bg-green-100 shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-green-300"
                    >
                        <img
                            src="/card1.jpeg"
                            alt="Educação e Conscientização sobre Energia Limpa"
                            className="w-full h-40 object-cover rounded mb-6"
                        />
                        <h3 className="text-2xl font-semibold mb-4 text-green-900">
                            Educação e Conscientização
                        </h3>
                        <p className="text-green-700">
                            Promovendo conhecimento sobre energia limpa.
                        </p>
                    </Link>

                    <Link
                        to="/solucao#Reaproveitamento"
                        className="bg-green-100 shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-green-300"
                    >
                        <img
                            src="/card2.jpeg"
                            alt="Reaproveitamento de Energia de Resíduos Orgânicos"
                            className="w-full h-40 object-cover rounded mb-6"
                        />
                        <h3 className="text-2xl font-semibold mb-4 text-green-900">
                            Reaproveitamento de Energia
                        </h3>
                        <p className="text-green-700">
                            Transformando resíduos em fontes de energia.
                        </p>
                    </Link>

                    <Link
                        to="/solucao#Iluminação"
                        className="bg-green-100 shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-green-300"
                    >
                        <img
                            src="/card3.jpeg"
                            alt="Iluminação Pública Sustentável"
                            className="w-full h-40 object-cover rounded mb-6"
                        />
                        <h3 className="text-2xl font-semibold mb-4 text-green-900">
                            Iluminação Sustentável
                        </h3>
                        <p className="text-green-700">
                            Melhorando iluminação com energia limpa.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

