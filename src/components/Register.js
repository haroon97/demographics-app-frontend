import React from 'react';
import {Button, Form, Header} from 'semantic-ui-react';

class Register extends React.Component {
  render() {
    return (
      <div>
        <Form>
         <Header as='h2'>Register!</Header>
         <Form.Group>
           <Form.Input label='Name' placeholder='enter your name' width={2} required/>
         </Form.Group>
         <Form.Group>
           <Form.Input label='Email' placeholder='enter your password' width={2} required />
         </Form.Group>
         <Form.Group>
           <Form.Input label='Password' placeholder='enter your password' width={2} required />
         </Form.Group>
        <Button primary compact>Register!</Button>
       </Form>
      </div>
    );
  };
};

export default Register;