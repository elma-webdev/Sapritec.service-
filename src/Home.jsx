import { Footer } from "./components/footer/Footer"
import Header from "./components/header/Header"
import { TelaImagem } from "./components/tela-de-imagem/telaImagem"
import { PaginaDeBusca } from "./components/tela-de-pesquisa/PaginaDeBusca."


function Home() {

  return (
    <>
      <TelaImagem />
      <PaginaDeBusca />
    </>
   
  );
}

export default Home