import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormCadastro({aoEnviar, validarCPF}) {

    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
            <DadosUsuario />
            <DadosEntrega />
        </>
    );
}

export default FormCadastro;
