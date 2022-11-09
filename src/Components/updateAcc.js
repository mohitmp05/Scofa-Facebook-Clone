import React, { Component } from "react";
import Navbar from "./navbar";
import { connect } from "react-redux";
import { userUpdate, getuser } from "../actions/scofaActions";

class UpdateAcc extends Component {
  id= 0; 
  name= "";
   email= "";
    password= "";

    componentDidMount() {
      this.id = this.props.match.params.id;
      this.props.dispatch(getuser(this.id));
    }

    handleForm = (e) => {
      e.preventDefault();
      this.props.dispatch(
        userUpdate({
          id: this.id,
          name: this.name,
          email: this.email,
          password: this.password,
        })
      );
    };

  render() {
    this.id = this.props.id;
    this.name = this.props.name;
    this.email = this.props.email;
    this.password = this.props.password;
    return (
      <div>
        <Navbar />
        <h2 class="ui header">
          <i class="settings icon"></i>
          <div class="content">
            Account Settings
            <div class="sub header">Update your info</div>
          </div>
        </h2>
        <div style={{ width: "25%", marginLeft: "37%", marginTop: "20px" }}>
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter new Name" defaultValue={this.props.name} onChange={(e) => {
                this.name = e.target.value;
              }} />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter new Email" defaultValue={this.props.email}
              onChange={(e) => {
                this.email = e.target.value;
              }} />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter new Password"
                defaultValue={this.props.password}
              onChange={(e) => {
                this.password = e.target.value;
              }}
              />
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden" />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <button className="ui blue button" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { user } = state;
  return {
    ...user,
  };
}

export default connect(mapStateToProps)(UpdateAcc);
