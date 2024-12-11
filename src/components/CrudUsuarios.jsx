import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CrudUsuarios.module.css"; // Importando CSS Modules

export default function CrudUsuarios() {
  const [usuarios, setUsuarios] = useState("");
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");

  const url = "https://revista-back-end.vercel.app/";

  useEffect(() => {
    fetch(url)
      .then((respFetch) => respFetch.json())
      .then((respJson) => setUsuarios(respJson))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <img
          src="https://live.staticflickr.com/65535/53664487441_763a5c92d1_k.jpg"
          className={styles.banner}
        />
        <h1 className={styles.siteTitle}>Asas do Brasil</h1>
      </div>

      <p className={styles.introText}>
        A Força Aérea Brasileira (FAB) é um símbolo de coragem e inovação,
        protegendo os céus do Brasil com sua frota de aviões icônicos. Com
        Asas do Brasil, você pode trazer essa história para sua coleção. A
        cada edição, receba uma miniatura exclusiva e detalhada dos modelos que
        marcaram a trajetória da FAB, acompanhada de uma revista com
        curiosidades e histórias fascinantes. Assine agora e monte sua esquadra
        de lendas da aviação brasileira! <br />
        Asas do Brasil
      </p>

      <div className={styles.buttonContainer}>
        <Link to="/login">
          <button className={styles.button}>Criar conta</button>
        </Link>
        <Link to="/loginoficial">
          <button className={styles.button}>Login</button>
        </Link>
      </div>
   
     
    </div>
  );
}
