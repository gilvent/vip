import React, {Component} from 'react';
import {Container,Content, Title,Header,Left,Body,Right,Icon,Button,Tabs,Tab } from'native-base';
import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY} from '../../../commons/styles';
import { connect } from 'react-redux';

import marketAction from '../../../redux-core/actions/market';
import marketSelector from '../../../redux-core/selectors/entities/market';

import PricesContent from './PricesContent';

 var ticker;
 class Market extends Component{
    
    componentDidMount(){
        //bug
        //interval run before complete transition
        // const tick = this.props.GetTicker;
        // tick();
        // ticker = setInterval(function(){
        //     tick();
        // },5000)
        this.props.StartTicker();
    }

    componentWillUnmount(){
        //clearInterval(ticker);
        this.props.StopTicker();
    }
    render(){
        const {navigate} = this.props.navigation;
        const {Prices} = this.props;
        return (
            <Container>
                <Header style={styles.header}>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                    </Button>
                </Left>
                    <Body>
                        <Title>Marketplace</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => navigate("Profile")}>
                            <Icon name='person' />
                        </Button>
                    </Right>
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
                            
                        </Tab>
                    
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state){
    return {
        Prices : marketSelector.getPrices(state)
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
