import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {CATEGORIES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const ListCategory = () => {
  const navigation = useNavigation();
  const window = useWindowDimensions();
  const CARD_SIZE = (window.width - 2 * 24 - 24 - 12) / 4;

  const renderCategory = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        {
          width: CARD_SIZE,
        },
      ]}
      onPress={() =>
        navigation.navigate('Category', {selectedCategory: item.name})
      }>
      <View style={styles.categoryCard}>
        <View style={styles.imageContent}>
          <Image source={item.img} style={styles.categoryImage} />
        </View>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={renderCategory}
      />
    </SafeAreaView>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 3,
    marginTop: 10,
  },
  imageContent: {
    width: 70,
    height: 70,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    objectFit: 'contain',
  },
  categoryName: {
    fontSize: 13,
    marginTop: 8,
    color: '#000',
  },
});
