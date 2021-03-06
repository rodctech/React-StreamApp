import React, {Component} from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {
    //state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "1040446551513-7dobs57g8pigg4brvv8rjfrescg6k3d6.apps.googleusercontent.com",
                    scope: "email"
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    // this.setState({isSignedIn: this.auth.isSignedIn.get()});
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = isSignedIn => {
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                //Separate lines below will break
                <button
                    onClick={this.onSignOutClick}
                    className={"ui red google button"}
                >
                    <i className={"google icon"}/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className={"ui red google button"}>
                    <i className={"google icon"}/>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapSateToProps = state => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(
    mapSateToProps,
    {signIn, signOut}
)(GoogleAuth);
