import { createSelector } from 'reselect';

const getLoginUI = (state) => state.ui.loginUI;
const getIsLoading = createSelector(getLoginUI,(loginUI) => loginUI.isLoading)

export default uiSelectors = {
    getLoginUI,
    getIsLoading
}