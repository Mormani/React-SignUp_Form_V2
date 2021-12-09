import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

function FormCadastro() {

    return (
    <form>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>
        <TextField id="sobrenome" label="SobreNome" variant="outlined" fullWidth margin="normal"/>
        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>

        <label>Promoções:</label>
        <input type="checkbox"/>

        <label>Novidades:</label>
        <input type="checkbox"/>

        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
    );
}

export default FormCadastro;