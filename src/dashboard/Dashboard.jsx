import { Navbar } from 'flowbite-react'
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to="/" style={{}}><h3>Go To Main Page</h3></Link>
    </div>
  )
}

export default Dashboard
// import React from "react";
// import { Button } from "react-native";

// class ViewB extends React.Component {
//   goBack() {
//     const { navigation } = this.props;
//     navigation.goBack();
//     navigation.state.params.onSelect({ selected: true });
//   }

//   render() {
//     return <Button title="back" onPress={this.goBack} />;
//   }
// }
