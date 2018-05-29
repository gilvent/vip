import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { reduxForm, Field, reset } from 'redux-form';
import { Form, Item, Input, Button,Text,Label,Content} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { COLOR_SECONDARY,COLOR_PRIMARY } from '../../../commons/styles';


//validation variable
const required = value => value ? undefined : 'required';

class LoginForm extends Component{
    renderInput({input,label,meta: { touched, error, warning }}){
        var hasError= false;
        if(error !== undefined){
            hasError= true;
        }
        return (
            <Item error= {hasError} inlineLabel>
                <Label>{input.name}</Label>
                <Input {...input}
                    onChangeText = {input.onChangeText} 
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    value={input.value} />
                {hasError ? <Text style={styles.errorText}>{error}</Text> : <Text />}
            </Item>
        )
    }
    render(){
        const {handleSubmit,login} = this.props;
        return (
           <Content>
                <Form>
                    <Field
                        label={'API Key'}
                        name={'APIKey'}
                        component={this.renderInput}
                        validate={[required]}
                    /> 
                    <Field
                        label={'Secret'}
                        name={'Secret'}
                        component={this.renderInput}
                        validate={[required]}
                    />
                    
                    <Button style={styles.loginButton} onPress={handleSubmit(login)}>
                        <Text>Login</Text>
                    </Button>
                    
                </Form>
               
            </Content>
        );
    }
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('LoginForm'));


export default reduxForm({
    form : 'LoginForm',
    onSubmitSuccess: afterSubmit
})(LoginForm);

const styles = StyleSheet.create({
    loginButton :{
        alignSelf: "center",
        backgroundColor :COLOR_PRIMARY,
        marginTop: 10
    },
    errorText:{
        color: COLOR_SECONDARY
    }
});

