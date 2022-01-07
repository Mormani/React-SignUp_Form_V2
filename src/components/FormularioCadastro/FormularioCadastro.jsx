import React, {useState, useEffect} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {Step, StepLabel, Stepper, Typography} from "@material-ui/core";

function FormCadastro({aoEnviar, validacoes}) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    function proxEtapa() { setEtapaAtual(etapaAtual + 1) };

    const [dadosColetados, setDados] = useState({});
    function coletarDados(dados) { setDados( {...dadosColetados, ...dados} ); proxEtapa(); };

    useEffect(() => { if(etapaAtual === (forms.length - 1)) aoEnviar(dadosColetados); });

    const forms = [
        <DadosUsuario  aoEnviar={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosEntrega  aoEnviar={coletarDados} validacoes={validacoes}/>,
        <Typography variant="h5" align="center">Obrigado pelo Cadastro!</Typography>
    ];

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            { forms[etapaAtual] }
        </>
    );
}

export default FormCadastro;
