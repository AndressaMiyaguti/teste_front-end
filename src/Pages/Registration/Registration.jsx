import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Registration.css";

export default function Registration() {
  /* https://viacep.com.br/ws/cep/json/ */
  const apiUrl = "https://viacep.com.br/ws/";

  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState({});
  console.log(cep);
  const consultar = async (event) => {
    event && event.preventDefault();

    const response = await fetch(`${apiUrl}${cep}/json/`);
    setResultado(await response.json());
    console.log(resultado);
  };
  const digitaCep = (event) => {
    setCep(event.target.value);
  };

  useEffect(() => {
    if (cep.length === 8) {
      consultar();
    }
  }, [cep]);

  return (
    <div className="container_form">
      <div class="form">
        <div className="title">
          <h1 id="title">Cadastro</h1>
        </div>
        <form onSubmit={consultar} id="survey">
          <label id="name-label" for="name">
            Nome
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Digite seu nome "
            required
          />
          <div className="bloco_formI">
            <label id="cpf-label" for="cpf">
              CPF
            </label>
            <input
              id="cpf"
              type="number"
              name="cpf"
              placeholder="00000000000"
              maxLength="11"
              required
            />

            <label id="date-label" for="date">
              Data de Nascimento
            </label>
            <input id="date" type="date" name="date" required />
          </div>
          <div className="bloco_formI">
            <label id="cep-label" for="cep">
              CEP
            </label>
            <input
              onChange={digitaCep}
              id="cep"
              value={cep}
              type="number"
              maxLength="8"
              name="cep"
              placeholder="00000000"
              required
            />
            <label id="compl-label" for="compl">
              Complemento
            </label>
            <input id="compl" type="text" name="compl" />
          </div>
          <div className="bloco_formI">
            <label id="logradouro-label" for="logradouro">
              Logradouro
            </label>
            <input
              id="logradouro"
              type="text"
              name="logradouro"
              readOnly="readonly"
              value={resultado.logradouro}
            />
            <label id="number-label" for="number">
              N°
            </label>
            <input id="number" type="number" name="number" required />
          </div>
          <div className="bloco_formI">
            <label id="bairro-label" for="bairro">
              Bairro
            </label>
            <input
              id="bairro"
              type="text"
              name="bairro"
              value={resultado.bairro}
              readOnly="readonly"
            />

            <label id="cidade-label" for="cidade">
              Cidade
            </label>
            <input
              id="cidade"
              type="text"
              name="cidade"
              value={resultado.localidade}
              readOnly="readonly"
            />

            <label id="estado-label" for="estado">
              Estado
            </label>
            <input
              id="estado"
              type="text"
              name="estado"
              value={resultado.uf}
              readOnly="readonly"
            />
          </div>
          <div className="bloco_formI button">
            <button className="form_button" type="button">
              Enviar
            </button>
            <Link to="/">
              <button className="form_button" type="button">
                Voltar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
