import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function FormCadastro() {

    return (
    <form>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>
        <TextField id="sobrenome" label="SobreNome" variant="outlined" fullWidth margin="normal"/>
        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>

        <FormControlLabel label="Promoções" control={<Switch name="promocoes" color="primary" defaultChecked />}/>
        <FormControlLabel label="Novidades" control={<Switch name="novidades" color="primary" defaultChecked />}/>

        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
    );
}

export default FormCadastro;