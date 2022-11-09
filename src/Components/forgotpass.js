import React from "react";
import "./homepage.css";
import logo from "../Images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

class ForgotPass extends React.Component {
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
                    <div class="content">Reset Password</div>
                  </h1>
                  <form class="ui large form">
                    <div class="ui stacked segment">
                      <div class="field">
                        <div class="ui left icon input">
                        <i class="envelope icon"></i>
                          <input
                            type="text"
                            name="email"
                            placeholder="E-mail address"
                          />
                        </div>
                      </div>
                      <div class="field">
                        <div class="ui left icon input">
                          <i class="lock icon"></i>
                          <input
                            type="password"
                            name="newpassword"
                            placeholder="New Password"
                          />
                        </div>
                      </div>
                      <div class="field">
                        <div class="ui left icon input">
                          <i class="key icon"></i>
                          <input
                            type="password"
                            name="repassword"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                      <div class="ui fluid large blue submit button"><a style={{textDecoration:'none', color:'white'}} href="/home">Reset Password</a></div>
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

export default ForgotPass;
