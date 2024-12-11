import React from "react";
import styles from "./Pagina.module.css"; // Importando o CSS Module

export default function Pagina() {
  return (
    <div className={styles.pagina}>
      {/* Menu */}
      <nav className={styles.menu}>
        <h1>Revista Asas do Brasil Coleção Especial</h1>
        <div className={styles.perfil}>
          <img
            src="https://images-ext-1.discordapp.net/external/PJgu9lAa5m0o-OCzjn4ITDSbK7I9srL9CSXKz1a1grs/https/cdn-icons-png.flaticon.com/512/3607/3607444.png?format=webp&quality=lossless" /* Substitua pelo caminho do seu ícone */
            alt="Perfil"
            className={styles.iconePerfil}
          />
        </div>
      </nav>

      {/* Imagem */}
      <div className={styles.imagem}>
        <img
          src="https://live.staticflickr.com/65535/53569967274_3fc42e3a9d_k.jpg"
          alt="Imagem da Força Aérea Brasileira"
        />
      </div>

      {/* Parágrafo */}
      <div className={styles.descricao}>
        <h2 className={styles.titulo2}>CONHEÇA NOSSOS PLANOS</h2>
        <p>
          Descubra o universo fascinante da Força Aérea Brasileira e leve para
          casa a emoção dos céus com nossa assinatura exclusiva! Com Asas do
          Brasil, você terá acesso a miniaturas detalhadas de aviões icônicos e
          conteúdos ricos que celebram a história e os bastidores da aviação
          militar brasileira. Escolha um dos nossos planos e receba mensalmente
          as melhores réplicas acompanhadas de uma revista cheia de
          curiosidades, entrevistas e análises. Quanto mais completo o plano,
          mais benefícios exclusivos você terá, como miniaturas de edições
          limitadas, acesso a conteúdo digital premium e brindes colecionáveis.
          Assine agora e embarque nessa jornada incrível pelos céus do Brasil!
        </p>
      </div>

      {/* Planos de Assinatura */}
      <div className={styles.planos}>
        <div className={styles.plano}>
          <h3>Asa de Prata</h3>
          <p className={styles.preco}>R$ 49,90/mês</p>
          <ul className={styles.detalhes}>
            <li>1 miniatura exclusiva por mês de um avião histórico da FAB.</li>
            <li>
              Revista com curiosidades e histórias detalhadas sobre o modelo.
            </li>
            <li>Acesso ao conteúdo digital básico no site.</li>
          </ul>
          <button>Assinar</button>
        </div>
        <div className={styles.plano}>
          <h3>Asa de Ouro</h3>
          <p className={styles.preco}>R$ 89,90/mês</p>
          <ul className={styles.detalhes}>
            <li>2 miniaturas por mês, sendo uma de edição especial.</li>
            <li>
              Revista com informações aprofundadas e entrevistas exclusivas.
            </li>
            <li>
              Acesso completo ao conteúdo digital, incluindo vídeos e galerias
              interativas.
            </li>
            <li>Um pôster colecionável por trimestre.</li>
          </ul>
          <button>Assinar</button>
        </div>
        <div className={styles.plano}>
          <h3>Asa de Platina</h3>
          <p className={styles.preco}>R$ 149,90/mês</p>
          <ul className={styles.detalhes}>
            <li>
              3 miniaturas por mês, incluindo uma edição limitada com pintura
              especial.
            </li>
            <li>
              Revista com conteúdo exclusivo, histórias raras e análises
              técnicas.
            </li>
            <li>
              Acesso VIP ao site com recursos extras, como webinars e eventos
              virtuais.
            </li>
            <li>
              Brindes temáticos trimestrais, como camisetas, pins e certificados
              de colecionador.
            </li>
          </ul>
          <button>Assinar</button>
        </div>
      </div>
    </div>
  );
}
