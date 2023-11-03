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
import React from 'react';
import {CATEGORIES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const ListCategory = () => {
  const navigation = useNavigation();

  const window = useWindowDimensions();
  const CARD_SIZE = (window.width - 2 * 24 - 24 - 12) / 4;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        {
          width: CARD_SIZE,
        },
      ]}
      onPress={() => navigation.navigate('Category')}>
      <View
        style={{
          padding: 10,
          borderColor: 'gray',
          borderRadius: 10,
          borderWidth: 1,
          backgroundColor: '#ccc',
        }}>
        <Image source={item.img} style={styles.categoryImage} />
      </View>
      <Text
        style={{
          width: CARD_SIZE - 12,
          fontFamily: 'Lato-Regular',
          fontSize: 12,
          marginTop: 5,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES}
        horizontal
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
  },
});
