import React from "react";
import { Header } from "../../components/headerPage";
import { Logar } from "../../components/login/formLogin";
import { Footer } from "../../components/footer/footerPage";
import { Card2, Cards, WrapperLogin, Container } from "../../pages/pagina1/style.js"


export const Pag2 = () => {
    return(
        <>
        <Header/>
        <Container/>
      <Cards>
        <WrapperLogin>
          <Card2>
          <Logar/>
          </Card2>
        </WrapperLogin>
      </Cards>

      <Footer />
        </>

    );
}