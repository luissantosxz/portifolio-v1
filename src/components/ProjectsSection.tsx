import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import '../components/ProjectSection.css';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ProjectSection() {
  useEffect(() => {
    register();
  }, []);

  const data = [
    {
      id: 1,
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7MbEDBGUV0eqfdngw6YpX92x6zRtpW2gkA&s",
    },
    {
      id: 2,
      imagem:
        "https://static.wikia.nocookie.net/animegirls/images/9/9f/Asuna.png/revision/latest?cb=20150301154101&path-prefix=pt-br",
    },
    {
      id: 3,
      imagem:
        "https://static.vecteezy.com/ti/fotos-gratis/t2/3734336-aplicativo-programacao-interface-api-software-ferramenta-de-desenvolvimento-ferramenta-tecnologia-tecnologia-conceito-empresario-presses-api-texto-icone-em-uma-interface-virtual-foto.jpg",
    },
    { id: 4, imagem: "https://via.placeholder.com/150" },
    { id: 5, imagem: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="container">
        <h1 className="title-project">PROJETOS</h1>
      <Swiper slidesPerView={1} pagination={{clickable: true}} navigation={true}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.imagem}
              alt="Imagem do projeto"
              className="slide-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
