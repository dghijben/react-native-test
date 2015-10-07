'use strict';

var Main = require('./App/Components/Main');

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
});

class Bookhub extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Bookhub',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('Bookhub', () => Bookhub);