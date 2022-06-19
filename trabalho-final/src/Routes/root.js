import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pag1 } from "../pages/pagina1/entrada";
import { Pag2 } from "../pages/pagina2/segunda";

export const Root = () =>{

    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Pag1/>}/>
                <Route path="/p2" element={<Pag2/>}/>
            </Routes>
        </BrowserRouter>
    )
}
