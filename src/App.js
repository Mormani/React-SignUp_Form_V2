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
                <FormCadastro/>
            </Container>
        );
    }
}

export default App;
