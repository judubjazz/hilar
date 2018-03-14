import React, {Component} from 'react'
import {Router, Route} from 'react-router-dom'
import {HomePage} from './containers/Home'
import {Login} from './components/Login/Login'
import {Register} from './components/Register/Register'
import {history} from './helpers';
import {connect} from 'react-redux';
import {alertActions} from './actions';


class App extends Component {
    constructor(props) {
        super(props);

        // this line is required to work on plunker because the app preview runs on a subfolder url
        history.push('/');

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        // const basePath = '/' + location.pathname.split('/')[1];
        const {alert} = this.props;
        return (

            <Router history={history}>
                <div>
                    <Route exact path='/' component={HomePage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </Router>

        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedMain = connect(mapStateToProps)(App);
export {connectedMain as App};


