import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {PRODUCTS} from '../constants';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(PRODUCTS);

  const addCart = () => [console.log('Clicked')];

  const handleSearch = text => {
    const filtered = PRODUCTS.filter(
      item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.pricePerKg.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchQuery(text);
    setFilteredData(filtered);
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.Img} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>Rs.{item.pricePerKg}</Text>
      </View>
      <TouchableOpacity onPress={() => addCart()}>
        <Image source={require('../assets/icons/add.png')} />
      </TouchableOpacity>
    </View>
  );

  const renderEmptySearch = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>No Results Found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search Products"
      />

      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptySearch}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 20,
    color: '#ccc',
    marginTop: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
});
