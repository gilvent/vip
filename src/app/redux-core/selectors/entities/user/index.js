import { createSelector } from 'reselect'

const getUser = (state, props) =>state.entities.user;
const getUserInfo = createSelector(getUser,(user) => user.userInfo);
const getUserBalance = createSelector(getUser,(user) => user.userBalance);

const getIDR = createSelector(getUserBalance,(balance) => balance.idr);

//active means balance/hold that are not 0
const getActiveBalance = createSelector(getUserBalance, filterActiveBalance);
const getActiveHold = createSelector(getUserBalance, filterActiveHold);

function filterActiveBalance(userBalance){
    let activeBalance = {}
    for(var key in userBalance){
        if(userBalance.hasOwnProperty(key) && userBalance[key].balance!=0 && key!="idr"){
            activeBalance[key] = userBalance[key].balance;
        };
    }
    return activeBalance;
}
function filterActiveHold(userBalance){
    let activeHold = {}
    for(var key in userBalance){
        if(userBalance.hasOwnProperty(key) && userBalance[key].hold!=0 && key!="idr"){
            activeHold[key] = userBalance[key].hold;
        };
    }
    return activeHold;
}

export default userSelectors = {
    getUser,
    getUserBalance,
    getUserInfo,
    getIDR,
    getActiveBalance,
    getActiveHold
}