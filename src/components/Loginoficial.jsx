import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link
import styles from './Loginoficial.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar o login

    const url = "https://revista-back-end.vercel.app/";

    const validarLogin = async () => {
        try {
            console.log("Iniciando validação de login...");
            // Fazendo a requisição para verificar o usuário
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error("Erro ao conectar à API.");
            }

            const data = await response.json();
            console.log("Dados recebidos da API:", data);

            // Verifica se email e senha existem no banco de dados
            const usuarioValido = data.find(
                (usuario) => usuario.email === email && usuario.senha === senha
            );

            if (usuarioValido) {
                console.log("Usuário válido:", usuarioValido);
                setIsLoggedIn(true); // Altera o estado de login
            } else {
                console.log("Credenciais inválidas.");
                alert("Conta inválida! Verifique o email e a senha.");
            }
        } catch (error) {
            console.error("Erro ao verificar o login:", error);
            alert("Erro ao tentar fazer o login. Tente novamente mais tarde.");
        }
    };

    return (
        <div className={styles.fundo}>
            <div className={styles.quadrado}>
                <h1>Login</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        validarLogin();
                    }}
                >
                    <div className={styles['form-group']}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Senha:</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Entrar</button>
                </form>

                {/* Exibe o Link para a página /home se o usuário estiver logado */}
                {isLoggedIn && (
                    <div>
                        <p>Login bem-sucedido! Vá para a <Link to="/home">Entrar</Link>.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
