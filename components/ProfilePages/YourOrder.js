import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';

class YourOrder extends Component {
  products = [
    {
      id: '1',
      name: 'Product 1',
      image: require('../../assets/images/ChanaDal.jpg'),
    },
  ];

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.products.map(product => (
          <Card key={product.id} style={styles.card}>
            <Card.Cover source={product.image} />
            <Card.Content>
              <Title>{product.name}</Title>
              <Paragraph>Product description goes here.</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>View Details</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
  },
});

export default YourOrder;
