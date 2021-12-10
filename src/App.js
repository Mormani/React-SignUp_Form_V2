import {Component} from 'react';
import './App.css';
import FormCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import "fontsource-roboto"

class App extends Component {

    render() {

        return (
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
                <FormCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
            </Container>
        );
    }
}

function aoEnviarForm(dados) {

    console.log(dados);
}

function validarCPF(cpf) {

    console.log(cpf.length);
    if(cpf.length !== 11)
        return ( { valido:false, texto: "CPF deve ter 11 digitos" } );
    else
        return( { valido:true, texto: "" } );
}

export default App;
