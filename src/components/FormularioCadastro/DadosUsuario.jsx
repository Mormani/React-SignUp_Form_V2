import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({aoEnviar}) {

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField
                id="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
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
