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
        <Image source={item.img} style={styles.categoryImage} />
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
    marginHorizontal: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 7,
    borderRadius: 4,
  },
  categoryImage: {
    width: 60,
    height: 60,
  },
  categoryName: {
    fontSize: 14,
    marginTop: 8,
    color: '#000',
    fontWeight: 'bold',
  },
});
