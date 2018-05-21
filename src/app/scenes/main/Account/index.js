import React, {Component} from 'react';
import {Container,Content,H2, Title,Text,Header, Left,Body,Right,Icon, Button, Tabs, Tab } from'native-base';
import {StyleSheet,Image} from 'react-native';
import {COLOR_PRIMARY} from '../../../commons/styles';
import ContentHeader from './ContentHeader';
import InfoTabContent from './InfoTabContent';
import BalanceTabContent from './BalanceTabContent';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import userSelectors from '../../../redux-core/selectors/entities/user';
import userAction from '../../../redux-core/actions/user';
class Account extends Component{
    componentWillMount(){
        let {GetUser}  = this.props;
        GetUser();
    }
    render(){
        const {LogoutSuccess, userInfo, idr,activeBalance,activeHold} = this.props;
        
        return (
            <Container>
                <Header style={styles.header} hasTabs>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Account</Title>
                    </Body>
                </Header>
                <Content>
                    <ContentHeader name={userInfo.name}/> 
                     <Tabs tabBarUnderlineStyle={{backgroundColor:COLOR_PRIMARY}}>
                        <Tab heading="Info" 
                        tabStyle={{backgroundColor: "#FFFFFF"}} 
                        activeTabStyle={{backgroundColor: '#FFFFFF'}} 
                        textStyle={{color:COLOR_PRIMARY}} 
                        activeTextStyle={{color: COLOR_PRIMARY, fontWeight: 'normal'}}>
                            <InfoTabContent userInfo={userInfo}/>
                        </Tab>
 
                        <Tab heading="Balance" 
                        tabStyle={{backgroundColor: "#FFFFFF"}} 
                        activeTabStyle={{backgroundColor: '#FFFFFF'}} 
                        textStyle={{color:COLOR_PRIMARY}} 
                        activeTextStyle={{color: COLOR_PRIMARY, fontWeight: 'normal'}}>
                            <BalanceTabContent 
                                activeBalance={activeBalance} activeHold={activeHold} idr={idr}/>
                        </Tab>
                    
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state){
    return {
        userInfo : userSelectors.getUserInfo(state),
        activeHold : userSelectors.getActiveHold(state),
        activeBalance : userSelectors.getActiveBalance(state),
        idr : userSelectors.getIDR(state)

    };
}

function mapDispatchToProps(dispatch){
    return {
        GetUser : () => dispatch(userAction.GetUser())
    }
}

const styles = StyleSheet.create({
    header : {
        backgroundColor : COLOR_PRIMARY
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        position: "absolute"
      },
      commonImage: {
        flex:1,
        width: undefined,
        height: undefined,
        resizeMode: "stretch"
      },
});

export default connect(mapStateToProps,mapDispatchToProps)(Account);