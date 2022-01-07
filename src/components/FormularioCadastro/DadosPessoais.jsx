import React, {useState} from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function DadosPessoais({aoEnviar, validacoes}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");

    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

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
        <form
            onSubmit={(evento) => {
                evento.preventDefault();
                if(possoEnviar()) aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }}
        >
            <TextField
                value={nome}
                onChange={(evento) => { setNome(evento.target.value); }}
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                onChange={(evento) => { setSobrenome(evento.target.value); }}
                value={sobrenome}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={cpf}
                onChange={(evento) => { setCpf(evento.target.value); }}
                onBlur={validarCampos}

                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}

                id="CPF"
                label="CPF"
                name="cpf"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(evento) => { setPromocoes(evento.target.checked); }}
                        name="promocoes"
                        color="primary"
                    />
                }
            />
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(evento) => { setNovidades(evento.target.checked); }}
                        name="novidades"
                        color="primary"
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosPessoais;
