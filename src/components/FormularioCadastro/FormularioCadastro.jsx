import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormCadastro({aoEnviar, validarCPF}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");

    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form
            onSubmit={(evento) => {
                evento.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
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
                onBlur={() => {
                    const ehValido = validarCPF(cpf);
                    setErros({ cpf: ehValido });
                }}

                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}

                id="CPF"
                label="CPF"
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

export default FormCadastro;
