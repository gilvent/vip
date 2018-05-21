import React, {Component} from 'react';
import { Container, Content, Text, List, ListItem, Button } from "native-base";
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import authAction from '../../../redux-core/actions/auth';
import { Col, Row, Grid } from 'react-native-easy-grid';

const routes = ["Market","Account"];

class SideBar extends Component {
  render() {
    return (
      <Container>
          <Content >
            <Grid>
                <Image
                  square
                  style={styles.commonImage}
                  source={require('../../../../images/sidebar-background.jpg')}
                />
              
              <Row>
                  <List
                    dataArray={routes}
                    renderRow={data => {
                      return (
                        <ListItem
                          button
                          onPress={() => this.props.navigation.navigate(data)}>
                          <Text>{data}</Text>
                        </ListItem>
                      );
                    }}
                  />
              </Row>
              <Row style={styles.btnLogout}>
                  <Col style={styles.btnLogout}>
                      <Button onPress={() => this.props.Logout()}>
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
    return {};
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
    btnLogout: {
      alignSelf : "center",
      margin: 1
    }

})