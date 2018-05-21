import { DrawerNavigator,StackNavigator,TabNavigator  } from 'react-navigation';
import MarketScreen from '../scenes/main/Market';
import LoginScreen from '../scenes/main/Login';
import AccountScreen from '../scenes/main/Account';
import Sidebar from '../scenes/main/Sidebar';

const SidebarNavigator = DrawerNavigator({
    Market : { screen : MarketScreen},
    Account : { screen : AccountScreen},
    

},
{
    contentComponent: Sidebar
});

const LoggedInNavigator = StackNavigator({
    DrawerStack : { screen : SidebarNavigator}
},
{
    headerMode : 'none',
    
});

const LoggedOutNavigator = StackNavigator({
    Login : { screen : LoginScreen}
},
{
    headerMode : 'none',
    initialRouteName : 'Login'
});

export const AppNavigator = StackNavigator({
    LoggedOut : { screen : LoggedOutNavigator},
    LoggedIn : { screen : LoggedInNavigator}
},
{
    headerMode : 'none',
 
});
