import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        {this.props.userCount} users have an account.
        <ul>

        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    return {users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users);
