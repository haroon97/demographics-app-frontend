import React from 'react';
import { Header, Input } from 'semantic-ui-react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1'>Welcome Haroon!</Header>
        <Header as='h3'>Enter the image url below</Header>
        <Input action='Find' placeholder='enter url' />
      </div>
    );
  };
};

export default Dashboard;