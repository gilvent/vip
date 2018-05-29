import React, {Component} from 'react';
import { Container, Content, Text, List, ListItem, Button, Thumbnail,Icon,Left,Right,Body } from "native-base";
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import authAction from '../../../redux-core/actions/auth';
import { Col, Row, Grid } from 'react-native-easy-grid';
import userSelectors from '../../../redux-core/selectors/entities/user';
import user from '../../../redux-core/actions/user';
import {COLOR_PRIMARY,GRAY_TEXT, COLOR_SECONDARY} from '../../../commons/styles';

const routes = ["Info"];

class SideBar extends Component {
  render() {
    let {asset,name} = this.props;
    return (
      <Container>
          <Content>
            <Grid>
                <Image
                  square
                  style={styles.commonImage}
                  source={require('../../../../images/sidebar-background.jpg')}
                />
              <Row>
                  <Col style={{alignItems:"center",padding:10}}>
                        <Thumbnail circular medium 
                            source={require('../../../../images/tinker.png')} />
                  </Col>
              </Row>
              <Row>
                  <Col style={{alignItems:"center"}}>
                      <Text style={{fontSize:20}}>{name}</Text>
                  </Col>
              </Row>
              <Row>
                  <Col style={{paddingLeft:10,paddingTop:10}}>
                    <Row><Text style={{color: GRAY_TEXT}}>Estimated Asset</Text></Row>  
                    <Row><Text style={{color: COLOR_PRIMARY}}>Rp. {asset}</Text></Row>
                  </Col>
              </Row>
              <Row>
                  <Col style={{padding:10}}>
                        <Row style={styles.limiter}></Row>
                  </Col>
              </Row>
              <Row style={styles.navContainer}>
                  <List
                    dataArray={routes}
                    renderRow={data => {
                      return (
                        <ListItem icon
                          button
                          onPress={() => this.props.navigation.navigate(data)}>
                          <Left><Icon name="information" /></Left>
                          <Body><Text style={{color:COLOR_PRIMARY}}>{data}</Text></Body>
                          <Right><Icon name="arrow-forward" /></Right>
                        </ListItem>
                      );
                    }}
                  />
              </Row>
              <Row>
                  <Col style={styles.logoutContainer}>
                      <Button onPress={() => this.props.Logout()} style={styles.btnLogout}>
                          <Text>Logout</Text>
                      </Button>
                  </Col>
              </Row>
            </Grid>
          </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
    return {
        asset : userSelectors.getEstimatedAsset(state),
        name : userSelectors.getUserInfo(state).name
    };
}
function mapDispatchToProps(dispatch){
    return {
        Logout : () => dispatch(authAction.Logout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);

const styles = StyleSheet.create({
    commonImage: {
      //flex:1,
      width: undefined,
      height: 100,
      resizeMode: "stretch"
    },
    logoutContainer: {
      justifyContent: "flex-end",
      alignSelf : "center",
      margin: 1,
      paddingTop:20
    },
    btnLogout:{
      alignSelf:"center",
    },
    limiter:{
        borderBottomWidth:2,
        borderBottomColor:COLOR_SECONDARY
    },
    navContainer:{
        paddingTop:5
    }

})