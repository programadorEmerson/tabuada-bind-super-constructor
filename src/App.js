import React from "react";
import "./styles/app.css";

const reference = 8;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
    };

    this.handleModify = this.handleModify.bind(this);
  }

  handleModify() {
    this.setState((estadoAnterior) => ({
      valor: estadoAnterior.valor + 1,
    }));
  }

  render() {
    const { valor } = this.state;

    return (
      <div className="App">
        <div className="conteudo">
          <span>{`Tabuada do ${reference}`}</span>
          <span>{`${reference} x ${reference * valor}`}</span>
          <button onClick={() => this.handleModify()}>Modificar</button>
        </div>
      </div>
    );
  }
}

export default App;
