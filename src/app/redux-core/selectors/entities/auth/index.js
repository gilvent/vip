import { createSelector } from 'reselect';

const getAuth = (state) => state.entities.auth;
const getLoggedIn = createSelector(getAuth,(auth) => auth.loggedIn);
const getFirstLogin = createSelector(getAuth,(auth) => auth.firstLogin)

export default authSelectors = {
    getLoggedIn,
    getFirstLogin
};