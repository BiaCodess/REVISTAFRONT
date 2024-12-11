import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 
import styles from "./Login.module.css"; // Importando o CSS Module


// Seu código continua igual
function Login() {
    const [usuarios, setUsuarios] = useState("");
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setsenha] = useState("");
    const [operacao, setOperacao] = useState("");
    
    const url = "https://revista-back-end.vercel.app/";

    function limparDados() {
        setId("");
        setNome("");
        setEmail("");
        setsenha("");
    }

    function novosDados() {
        setOperacao("criarRegistro");
    }

    function gravarDados() {
        if (nome !== "" && email !== "" && senha !== "") {
            if (operacao === "criarRegistro") {
                axios
                    .post(url, { nome: nome, email: email, senha: senha })
                    .then((response) => atualizaListaComNovoUsuario(response))
                    .catch((err) => console.log(err));
            } 
        } else {
            console.log("Preencha os campos");
            alert("Preechar todos os campos"); 
        }
    }

    function atualizaListaComNovoUsuario(response) {
        console.log(response);
        let { id, nome, email, senha } = response.data;
        let obj = {
            "id": id, "nome": nome, "email": email, "senha": senha
        };
        let users = usuarios;
        users.push(obj);
        setUsuarios(users);
    }
  
  return (
    <div className={styles.fundo}>
        <div className={styles.container}>
            <h1>Cadastro</h1>
            <p>Crie sua conta.</p>
            <button type="button" onClick={novosDados}>Novo Usuario</button>
            <div className={styles["form-group"]}>
                <label htmlFor="txtNome">Nome:</label>
                <input
                    type="text"
                    id="txtNome"
                    name="txtNome"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value); }}
                />
            </div>

            <div className={styles["form-group"]}>
                <label htmlFor="txtEmail">Email:</label>
                <input
                    type="email"
                    id="txtEmail"
                    name="txtEmail"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                />
            </div>

            <div className={styles["form-group"]}>
                <label htmlFor="txtsenha">Senha:</label>
                <input
                    type="password"
                    id="txtsenha"
                    name="txtsenha"
                    value={senha}
                    onChange={(e) => setsenha(e.target.value)}
                />
            </div>

            <div className={styles["button-container"]}>
  <button type="button" onClick={limparDados}>Limpar</button>
  <Link to="/home">
    <button type="button" onClick={gravarDados}>Criar Usuário</button>
  </Link>
</div>
        </div>
    </div>
  );
}

export default Login;