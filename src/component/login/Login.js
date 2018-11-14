import React from 'react';

class login extends React.Component {
  /* NOTE!
   * binding state to input values requres empty string
   * to be used in order to bind and not display warnings.
   */
  state = {
    user: '',
    pass: '',
    disabled: true,
  };
  setName = event => {
    let disabled =
      event.target.value == '' || this.state.age == '';
    this.setState({
      name: event.target.value,
      disabled,
    });
  };
  setPass = event => {
    let disabled =
      this.state.name == '' || event.target.value == '';
    this.setState({
      pass: event.target.value,
      disabled,
    });
  };
  onLogin = () => {
    this.props.login({
      user: this.state.user,
      pass: this.state.pass,
    });
  };
  resetState = () => {
    this.setState({
      name: '',
      pass: '',
      disabled: true,
    });
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="persons-add">
          <div className="persons-add-title">
            {this.props.title}
          </div>

          <p className="persons-input">
            <input
              className="form-input"
              name="user"
              type="text"
              placeholder={this.props.namePlaceholder}
              onChange={this.setName}
              value={this.state.name}
            />
          </p>
          <p>
            <input
              className="form-input"
              name="password"
              type="password"
              placeholder={this.props.passPlaceholder}
              onChange={this.setPass}
              value={this.state.pass}
            />
          </p>
          <button
            className="btn btn-primary btn-sm"
            onClick={this.onLogin}
            disabled={this.state.disabled}>
            {this.props.btnLabel}
          </button>
        </div>
      </div>
    );
  }
}

export default login;
