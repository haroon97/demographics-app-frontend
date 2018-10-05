import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Profile extends React.Component {
  render() {
    return (
      <div>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
      <Button>Update your info</Button>
      <Button>Delete Account</Button>
      </div>
    );
  };
};

export default Profile;