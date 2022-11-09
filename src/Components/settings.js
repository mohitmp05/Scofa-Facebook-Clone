import React from "react";
import Navbar from "./navbar";
import { userDelete } from "../actions/scofaActions";
import { connect } from "react-redux";

class Settings extends React.Component {
  deleteItem(id) {
    console.log(id);
    this.props.dispatch(userDelete(id));
  }
  render() {
    return (
      <div>
        <Navbar />
        <h2 class="ui header">
          <i class="settings icon"></i>
          <div class="content">Account Settings</div>
        </h2>
        <br></br>
        <button
          className="ui large green submit button"
          type="submit"
          id="submit-btn"
        >
          <a href="/update" style={{ textDecoration: "none", color: "white" }}>
            Update AccInfo
          </a>
        </button>
        <button
          className="ui large red submit button"
          type="submit"
          id="submit-btn"
          onClick={() => {
            this.deleteItem(this.props.item.id);
          }}
        >
          <a style={{ textDecoration: "none", color: "white" }}>
            Delete Account
          </a>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { users } = state;
  return {
    users,
  };
}

export default connect(mapStateToProps)(Settings);
