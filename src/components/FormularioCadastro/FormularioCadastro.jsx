import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {Typography} from "@material-ui/core";

function FormCadastro({aoEnviar, validarCPF}) {

    const [etapaAtual, setEtapaAtual] = useState(0);

    function proxEtapa() { setEtapaAtual(etapaAtual + 1) };

    function formularioAtual(etapa) {

        switch(etapa) {
            case 0: return  ( <DadosUsuario  aoEnviar={proxEtapa} /> );
            case 1: return  ( <DadosPessoais aoEnviar={proxEtapa} validarCPF={validarCPF} /> );
            case 2: return  ( <DadosEntrega  aoEnviar={aoEnviar} /> );
            default: return ( <Typography>Erro ao selecionar formulário</Typography> );
        }
    }

    return (
        <>
            { formularioAtual(etapaAtual) }
        </>
    );
}

export default FormCadastro;
