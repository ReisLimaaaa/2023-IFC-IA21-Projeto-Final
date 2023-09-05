import { Link } from "react-router-dom"
import { styled } from "styled-components"

const MyForm = styled.form`
    font-family: 'Anton', sans-serif;
    font-family: 'Hind Madurai', sans-serif;
    border: 1px solid #D4D4D4;
    box-shadow: 3px 3px 3px #0000007d;
    font-size: 1.5rem;
    display: inline-block;
    color: #1f1f1f;
    background-color: #FFFFFF;

    .conteiner {
        padding: 2rem;
    }

    .title {
        margin-bottom: 2rem;

        h1,h2 {
            line-height: 1em;
            margin: 0;
            padding: 0;
        }

        h2 {
            font-size: 60%;
            color: #323232;
            font-weight: 3000;
        }
    }

    .input {
        margin-block: 1rem;

        * {
            color: #5d5d5d;
        }

        label {
            display: block;
            font-size: 40%;
        }

        input {
            font-size: 90%;
            border: 0;
            border-bottom: 1px solid #D4D4D4;
            width: 100%;
            outline: none;
            padding: .5rem;
        }
    }

    .sign-up {
        background-color: #f3f3f3;
        padding: 2rem;
        color: #a4a4a4;

        a {
            color: #006891;
            text-decoration: none;
        }
    }
`
const AccentButton = styled.button`
    border: 3px solid #006891; 
    color: #006891;
    background-color: transparent;
    font-size: 1.25rem;
    padding: 1rem;
    border-radius: 5px;
`
const HiddenButton = styled.button`
    border: 0 none;
    color: #222222;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 5px;
`

export default () => <>
    <MyForm>
        <div className="conteiner">
            <div className="title">
                <h1>Cadastro</h1>
                <h2>Bem vindo, bien vindo</h2>
            </div>
            <div className="input">
                <label>E-mail</label>
                <input name="email" />
            </div>
            <div className="input">
                <label>Login</label>
                <input name="login" />
            </div>
            <div className="input">
                <label>Senha</label>
                <input type="password" name="password" />
            </div>
            <div className="input">
                <label>Confirme sua senha</label>
                <input type="password" name="password" />
            </div>
            <div>
                <AccentButton>Cadastrar</AccentButton>
            </div>
        </div>
    </MyForm>
</>