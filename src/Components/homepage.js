import React from "react";
import logo from "../Images/logo.png";
import "./homepage.css";


class Homepage extends React.Component {
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
                    <div class="content">Log-in to your account</div>
                  </h1>
                  <form class="ui large form">
                    <div class="ui stacked segment">
                      <div class="field">
                        <div class="ui left icon input">
                          <i class="user icon"></i>
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
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="ui fluid large blue submit button"><a style={{textDecoration:'none', color:'white'}} href="/home">Login</a></div>
                    </div>

                    <div class="ui error message"></div>
                  </form>

                  <div class="ui message">
                    <a href="#">Forgotten password?</a>
                  </div>
                  <div class="ui green submit button">Create New Account</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <body></body>
      </div>
    );
  }
}

export default Homepage;
