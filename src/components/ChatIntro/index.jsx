import introWhatsAppImage from '../../assets/intro-whatsapp.jpg'

import './styles.css';

export const ChatIntro = () => {
  return (
    <div className="chatIntro">
      <img src={introWhatsAppImage} alt="" />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.
        <br /> Para reduzir o uso de dados, conecte seu telefone a uma rede
        Wi-Fi
      </h2>
    </div>
  );
};
