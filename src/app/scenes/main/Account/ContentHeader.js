import React, {Component} from 'react';
import { Image } from 'react-native';
import { Thumbnail,H2,H3,Button,Text,Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import {COLOR_PRIMARY,COLOR_SECONDARY} from '../../../commons/styles';

class ContentHeader extends Component{
    render(){
        let {name} = this.props;
        return (
            <Grid>
                <Row style={{height:200,alignItems:'center',paddingTop:20}}>
                    <Image source={require('../../../../images/default-profile-background.jpg')} style={styles.backgroundImage}/>
                    <Col style={{alignItems: 'center'}} >
                            <Thumbnail circular large 
                                source={{uri: 'https://vip.bitcoin.co.id/v2/images/photos/default_user_icon.jpg'}} 
                                />
                            <H2>{name}</H2>           
                            <Row style={styles.userActionContainer}>
                                <Button small bordered style={{borderColor:COLOR_SECONDARY}}>
                                    <Text style={{color:COLOR_SECONDARY}}>BITCOIN JEDI</Text>
                                </Button>
                            </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    pictureThumbnail:{
        marginBottom:10,
        height:100,
        width:90
    },
    darkgreenText:{
        color: '#007878'
    },
    userActionContainer: {
        marginTop:20,
        alignItems:'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        position: "absolute"
    }
});

export default ContentHeader;