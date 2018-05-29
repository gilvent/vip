import React, {Component} from 'react';
import {Container,Content,Title,Header,Left,Body,Right,Icon,Button,Tabs,Tab,Text } from'native-base';
import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY, GRAY_TEXT} from '../../../commons/styles';
import { connect } from 'react-redux';

import marketAction from '../../../redux-core/actions/market';
import marketSelector from '../../../redux-core/selectors/entities/market';

import PricesContent from './PricesContent';
import FooterNav from '../../../components/FooterNav';


var ticker;
class Market extends Component{
    
    componentDidMount(){
        this.props.StartTicker();
    }

    componentWillUnmount(){
        //clearInterval(ticker);
        this.props.StopTicker();
    }
    render(){
        const {navigate} = this.props.navigation;
        const {Prices,navState} = this.props;
        let loggedIn = navState.stateForLoggedIn ? true : false;
        return (
            <Container>
                <Header style={styles.header}>
                <Left>
                    {
                        loggedIn &&
                        <Button
                        transparent
                        onPress={() => navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    }
                    {
                        !loggedIn &&
                        <Button
                        transparent
                        onPress={() => navigate("Login")}>
                            <Icon name="arrow-back" />
                        </Button>
                    }
                </Left>
                    <Body>
                        <Title>Marketplace</Title>
                    </Body>
                </Header>
                <Content>
                    <Tabs tabBarUnderlineStyle={{backgroundColor:COLOR_PRIMARY}}>
                        <Tab heading="Prices" 
                        tabStyle={{backgroundColor: "#FFFFFF"}} 
                        activeTabStyle={{backgroundColor: '#FFFFFF'}} 
                        textStyle={{color:COLOR_PRIMARY}} 
                        activeTextStyle={{color: COLOR_PRIMARY, fontWeight: 'normal'}}>
                            <PricesContent prices={Prices}/>
                        </Tab>
 
                        <Tab heading="Trades" 
                        tabStyle={{backgroundColor: "#FFFFFF"}} 
                        activeTabStyle={{backgroundColor: '#FFFFFF'}} 
                        textStyle={{color:COLOR_PRIMARY}} 
                        activeTextStyle={{color: COLOR_PRIMARY, fontWeight: 'normal'}}>
                            <Text style={{textAlign:"center",paddingTop:40,color:GRAY_TEXT}}>
                                In development
                            </Text>
                        </Tab>
                    </Tabs>
                </Content>

                {
                    loggedIn &&
                    <FooterNav navigate={navigate} scene="Market"/>
                }

            </Container>
        );
    }
}

function mapStateToProps(state){
    return {
        Prices : marketSelector.getPrices(state),
        navState : state.nav
    }
}
function mapDispatchToProps(dispatch){
    return {
        GetTicker : () => dispatch(marketAction.GetTicker()),
        StartTicker : () => dispatch(marketAction.StartTickCycle()),
        StopTicker : () => dispatch(marketAction.StopTickCycle())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Market);


const styles = StyleSheet.create({
    header : {
        backgroundColor : COLOR_PRIMARY
    }
});
