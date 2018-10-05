import React from 'react';
import { Header, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <NavLink exact={true} to='/profile'>Profile</NavLink>
        <Header as='h1'>Welcome Haroon!</Header>
        <Header as='h3'>Enter the image url below</Header>
        <Input action='Find' placeholder='enter url'/>
      </div>
    );
  };
};

export default Dashboard;