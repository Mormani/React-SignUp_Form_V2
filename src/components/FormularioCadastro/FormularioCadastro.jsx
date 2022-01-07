import React, {useState} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormCadastro({aoEnviar, validarCPF}) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    function proxEtapa() { setEtapaAtual(etapaAtual + 1) };

    const forms = [
        <DadosUsuario  aoEnviar={proxEtapa} />,
        <DadosPessoais aoEnviar={proxEtapa} validarCPF={validarCPF} />,
        <DadosEntrega  aoEnviar={aoEnviar} />
    ];

    return ( <>{ forms[etapaAtual] }</> );
}

export default FormCadastro;
