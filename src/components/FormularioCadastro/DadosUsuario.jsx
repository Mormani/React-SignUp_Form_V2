import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";

function DadosUsuario({aoEnviar, validacoes}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });


    function validarCampos(event) {

        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {

        for(let campos in erros) {
            if(!erros[campos].valido)
                return false;
        }
        return true
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()) aoEnviar({email, senha});
        }}>
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                onBlur={validarCampos}

                error={!erros.senha.valido}
                helperText={erros.senha.texto}

                id="senha"
                label="Senha"
                type="password"
                name="senha"
                required

                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;
