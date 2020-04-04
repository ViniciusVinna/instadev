import React from 'react';
import './Feed.scss';

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      avatar: "",
      username: "",
      email: "",
    }
  }

  setName(event) {
    const { value } = event.target;

    this.setState({ name: value });
  }

  setAvatar(event) {
    const { value } = event.target;

    this.setState({ avatar: value });
  }

  setUserName(event) {
    const { value } = event.target;

    this.setState({ username: value });
  }

  setEmail(event) {
    const { value } = event.target;

    this.setState({ email: value });
  }

  render() {
    const { name } = this.state;

    return (
      <div className="container">
        <section className="feed">
          <article className="post new-user">
            <header className="post__header">
              <h1>Novo usuário:</h1>
            </header>

            <div className="user">
              <div className="user__thumb">
                <img src="http://placehold.it/200x200" alt="" />
              </div>

              <p className="user__name">{name}</p>
            </div>

            <div className="post__form">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Ex: Fulano da Silva"
                onChange={(event) => this.setName(event)}
              />

              <label>Usuário</label>
              <input
                type="text"
                placeholder="Ex: fulano_da_silva"
              />

              <label>Email</label>
              <input
                type="email"
                placeholder="Ex: fulano@provedor.com"
              />

              <label>Url da Imagem de Perfil</label>
              <input
                type="text"
                placeholder="http://..."
              />

              <button type="button">
                Cadastrar
              </button>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default NewUser;
