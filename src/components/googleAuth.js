/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class googleAuth extends PureComponent {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '777557882901-e3gd32u1sc857qkaamseh8fggks736oi.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } if (this.props.isSignedIn) {
      return (
        // eslint-disable-next-line react/button-has-type
        <button onClick={this.onSignOut} className="ui google plus button">
          <i className="google plus icon" />
          Sign Out
        </button>
      );
    }
    return (
      // eslint-disable-next-line react/button-has-type
      <button onClick={this.onSignIn} className="ui google plus button">
        <i className="google plus icon" />
        Sign In With Google
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});
export default connect(mapStateToProps, { signIn, signOut })(googleAuth);
