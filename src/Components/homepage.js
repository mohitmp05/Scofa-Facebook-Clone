import React from "react";
import logo from "../Images/logo.png";
import "./homepage.css";
import { connect } from "react-redux";
import { userAuth } from "../actions/scofaActions";

class Homepage extends React.Component {
  user = { email: "", password: "" };

  handleForm = (e) => {
    e.preventDefault();
    this.setState({email:this.user.email,password:this.user.password})
    this.props.dispatch(userAuth(Object.assign({}, this.user)));
    e.target.reset();
  };

  render() {
    return (
      <div id="body" className="ui two column grid">
        <div className="row">
          <div id="brand" className="column">
            <img src={logo} className="ui small image" />
            <h3 className="ui header">
              Scofa helps you connect and
              <br />
              share with the people in your life.
            </h3>
          </div>

          <div id="login" className="column">
            <div
              id="container"
            >
              <div className="ui middle aligned center aligned grid">
                <div className="column">
                  <h1 className="ui blue header">
                    <div className="content">Log-in to your account</div>
                  </h1>
                  <form className="ui large form" onSubmit={this.handleForm}>
                    <div className="ui stacked segment">
                      <div className="field">
                        <div className="ui left icon input">
                        <i className="envelope icon"></i>
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
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="lock icon"></i>
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
                      <button className="ui fluid large blue submit button" type="submit">Login</button>
                    </div>

                    <div className="ui error message"></div>
                  </form>

                  <div className="ui message">
                    <a style={{textDecoration:'none'}} href="/reset">Forgotten password?</a>
                  </div>
                  <div className="ui green submit button"><a style={{textDecoration:'none', color:'white'}} href="/register">Create New Account</a></div>
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

export default connect(mapStateToProps)(Homepage);
