import {Component, Fragment} from 'react';
import './App.css';
import FormCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@material-ui/core';

class App extends Component {

    render() {

        return (
            <Container component="article" maxWidth="sm">
                <h1>Formulário de Cadastro</h1>
                <FormCadastro/>
            </Container>
        );
    }
}

export default App;
