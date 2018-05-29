import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../commons/styles';

export default class FooterNav extends Component{
    render(){
        const {navigate, scene}=this.props;
        return (
            <Footer >
                <FooterTab tabActive style={{borderStyle:"solid",borderColor:COLOR_PRIMARY,backgroundColor:'#FFFFFF'}}>
                    <Button vertical onPress={()=>navigate("Market")}>
                        <Icon name="pricetags" style={[styles.inactive,scene=='Market' && styles.active]}/>
                        <Text style={[styles.inactive,scene=='Market' && styles.active]}>Market</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="book" style={[styles.inactive,scene=='History' && styles.active]}/>
                        <Text style={[styles.inactive,scene=='History' && styles.active]}>History</Text>
                    </Button>
                    <Button vertical onPress={()=>navigate("Account")}>
                        <Icon name="person" style={[styles.inactive,scene=='Account' && styles.active]}/>
                        <Text style={[styles.inactive,scene=='Account' && styles.active]}>Account</Text>
                    </Button>
                </FooterTab>
            </Footer>    
            
        )
    }
}

const styles = StyleSheet.create({
    inactive: {
        color:COLOR_PRIMARY
    },
    active: {
        color:COLOR_SECONDARY
    }
})


