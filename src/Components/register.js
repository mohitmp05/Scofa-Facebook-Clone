import React from "react";
import "./homepage.css";
import logo from "../Images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { connect } from "react-redux";
import { userAdd } from "../actions/scofaActions";

class Register extends React.Component {

  user = { name: "", email: "", password: "" };

  handleForm = (e) => {
    e.preventDefault();
    this.props.dispatch(userAdd(Object.assign({}, this.user)));
    e.target.reset();
  };

  render() {
    return (
      <div id="body" className="ui two column grid">
        <div className="row">
          <div id="brand" className="column">
            <img src={logo} class="ui small image" />
            <h3 class="ui header">
              Scofa helps you connect and
              <br />
              share with the people in your life.
            </h3>
          </div>

          <div id="login" className="column">
            <div
              id="container"
            >
              <div class="ui middle aligned center aligned grid">
                <div class="column">
                  <h1 class="ui blue header">
                    <div class="content">Create a new account</div>
                  </h1>
                  <form class="ui large form" onSubmit={this.handleForm}>
                    <div class="ui stacked segment">
                    <div class="field">
                        <div class="ui left icon input">
                          <i class="user icon"></i>
                          <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            onChange={(e) => {
                              this.user.name = e.target.value;
                            }}
                          />
                        </div>
                      </div>
                      <div class="field">
                        <div class="ui left icon input">
                        <i class="envelope icon"></i>
                          <input
                            type="text"
                            name="email"
                            placeholder="E-mail address"
                            onChange={(e) => {
                              this.user.email = e.target.value;
                            }}
                          />
                        </div>
                      </div>
                      <div class="field">
                        <div class="ui left icon input">
                          <i class="lock icon"></i>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => {
                              this.user.password = e.target.value;
                            }}
                          />
                        </div>
                      </div>
                      <div class="field">
                        <div class="ui left icon input">
                          <i class="key icon"></i>
                          <input
                            type="password"
                            name="repassword"
                            placeholder="Repeat your Password"
                          />
                        </div>
                      </div>
                      <button className="ui fluid large blue submit button" type="submit" id="submit-btn">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Register);
