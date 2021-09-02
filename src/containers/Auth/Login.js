import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
// import * as actions from "../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassWord: false,
    };
  }

  handleShowHidePassWord = () => {
    this.setState({
      isShowPassWord: !this.state.isShowPassWord,
    });
  };

  handleLogin = () => {
    console.log(">>>username: ", this.state.username);
    console.log(">>> password: ", this.state.password);
  };

  handleOnChangeInputUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
    console.log(e.target.value);
  };

  handleOnChangeInputPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-center text-login">Login</div>
            <div class="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(e) => this.handleOnChangeInputUsername(e)}
              />
            </div>
            <div class="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassWord ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(e) => this.handleOnChangeInputPassword(e)}
                />
                <span onClick={() => this.handleShowHidePassWord()}>
                  <i
                    class={
                      this.state.isShowPassWord
                        ? "far fa-eye"
                        : "fas fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button className="btn-login" onClick={() => this.handleLogin()}>
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-login mt-3">
              <span className="text-login">Or Login With:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
