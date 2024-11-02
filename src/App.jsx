import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer"
import Header from "./components/header/Header"
import { TelaImagem } from "./components/tela-de-imagem/telaImagem"
import { PaginaDeBusca } from "./components/tela-de-pesquisa/PaginaDeBusca."


function App() {

  return (
    <div className="">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App
