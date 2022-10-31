import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
      <div class="ui secondary pointing menu">
  <a class="item" href="/home">
    Home
  </a>
  <a class="item" href="/messages" >
    Messages
  </a>
  <a class="item" href="/friends">
    Friends
  </a>
  <a class="item" href="/requests">
    Friend Requests
  </a>
  <div class="right menu">
    <a class="ui item active" href="/logout">
      Logout
    </a>
  </div>
</div>
</div>
    )
  }
}

export default Navbar;