import React, { Component } from 'react'
import {
  View,
  Animated,
  Text,
  PanResponder
} from 'react-native'


class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {}
    });

    this.panResponder = panResponder;

  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item)
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )l
  }
}

export default Deck
