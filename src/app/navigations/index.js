import { DrawerNavigator,StackNavigator,TabNavigator  } from 'react-navigation';
import MarketScreen from '../scenes/main/Market';
import LoginScreen from '../scenes/main/Login';
import AccountScreen from '../scenes/main/Account';
import Sidebar from '../scenes/main/Sidebar';
import InfoScreen from '../scenes/main/Info';

const SidebarNavigator = DrawerNavigator({
    Market: { screen: MarketScreen},
    Account: { screen: AccountScreen},
    Info: { screen: InfoScreen}
},
{
    contentComponent: Sidebar
});

const LoggedInNavigator = StackNavigator({
    DrawerStack: { screen: SidebarNavigator}
},
{
    headerMode: 'none',
    
});

const LoggedOutNavigator = StackNavigator({
    Login: { screen: LoginScreen},
    Market: { screen: MarketScreen},
    Info: { screen: InfoScreen}
},
{
    headerMode: 'none',
    initialRouteName: 'Login'
});

export const AppNavigator = StackNavigator({
    LoggedOut: { screen: LoggedOutNavigator},
    LoggedIn: { screen: LoggedInNavigator}
},
{
    headerMode: 'none',
 
});
