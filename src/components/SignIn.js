import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <Form>
        <Form.Group>
          <Form.Input label='Enter you email' placeholder='email' width={2} required/>
        </Form.Group>
        <Form.Group>
          <Form.Input label='Enter your password' placeholder='password' width={2} required />
       </Form.Group>
       <Button primary compact>Sign In!</Button>
       <Button negative compact>Forgot Password?</Button>
      </Form>

    </div>
    );
  };
};

export default SignIn;