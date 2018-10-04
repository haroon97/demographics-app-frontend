import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button, Header } from 'semantic-ui-react';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <Form>
        <Header as='h2'>Sign In!</Header>
        <Form.Group>
          <Form.Input label='Email' placeholder='enter your email' width={2} required/>
        </Form.Group>
        <Form.Group>
          <Form.Input label='Password' placeholder='enter your password' width={2} required />
       </Form.Group>
       <Button primary compact>Sign In!</Button>
       <Button negative compact>Forgot Password?</Button>
      </Form>
    </div>
    );
  };
};

export default SignIn;