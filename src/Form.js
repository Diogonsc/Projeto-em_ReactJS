import React from 'react';
import './css/Form.css';

const Form = () => {
  return (
    <div className="form">
      <div className="usuario">
        <p>INSERIR NOVO USUÁRIO</p>
      </div>
      <div className="formulario">
        <form method="get" action="">
          <input type="text" name="nome" placeholder="Nome" />
          <input type="senha" name="senha" placeholder="Senha" />
          <input type="email" name="email" placeholder="E-mail" />
          <input
            className="btn"
            type="submit"
            name="cadastrar"
            value="Cadastrar"
          />
        </form>
      </div>
      <div className="imagem">
        <img src="/images/img.svg" alt="" />
      </div>
    </div>
  );
};

export default Form;
