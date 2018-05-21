import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import getStore , {addListener} from './redux-core/store';
import {AppNavigator} from './navigations';
import authSelectors from './redux-core/selectors/entities/auth';

//map
const mapStateToProps = (state) => ({
    nav : state.nav,
    loggedIn : authSelectors.getLoggedIn(state)
});

class App extends Component{
    componentWillMount(){
        
    }
    render(){
        let { loggedIn,nav } = this.props;
        let state = loggedIn ? nav.stateForLoggedIn : nav.stateForLoggedOut;   

        return (
            <AppNavigator navigation={
                addNavigationHelpers({
                dispatch : this.props.dispatch,
                state : state,
                addListener
            })} />
            
        )
    }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore();

export default Root = () => {
    return (
        <Provider store = {store}>
            <AppWithNavigationState />
        </Provider>
    );
}