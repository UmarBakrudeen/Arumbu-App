import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = ({}) => {
  const navigation = useNavigation();

  const isAuthenticated = true;

  const menuOptions = [
    {
      id: 'MyOrder',
      title: 'My Orders',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Profile',
      title: 'Profile',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Address',
      title: 'Address',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Message',
      title: 'Message',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Coupons',
      title: 'Coupons',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Help & Support',
      title: 'Help & Support',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Privacy Policy',
      title: 'Privacy Policy',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Terms & Conditions',
      title: 'Terms & Conditions',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Return Policy',
      title: 'Return Policy',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'About Us',
      title: 'About Us',
      image: require('../assets/images/cartBag.png'),
    },
    {
      id: 'Login',
      title: 'Login',
      image: require('../assets/images/cartBag.png'),
    },
  ];

  const handleMenuItemPress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/avatar.png')}
            style={styles.profileImage}
          />
          <Text style={styles.username}> Guest </Text>
          <Text style={styles.email}> demo@gmail.com </Text>
        </View>
        {isAuthenticated && (
          <View style={styles.menu}>
            <FlatList
              data={menuOptions}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress(item.id)}>
                  <Image source={item.image} style={styles.menuItemImage} />
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {/* {isAuthenticated && (
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>
        )} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f800',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  username: {
    fontSize: 20,
    marginVertical: 10,
    color: 'black',
  },
  email: {
    fontSize: 16,
    color: 'black',
  },
  menu: {
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 13,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemImage: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  menuItemText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  profileActions: {
    alignItems: 'center',
    margin: 20,
  },
  loginButton: {
    backgroundColor: '#005600',
    borderRadius: 5,
    paddingVertical: 15,
    width: 200,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#005600',
    borderRadius: 5,
    margin: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProfileScreen;
