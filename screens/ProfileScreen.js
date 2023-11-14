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

  const isAuthenticated = false;

  const menuOptions = [
    {id: 'YourOrders', title: 'Your Orders'},
    {id: 'BuyAgain', title: 'Buy Again'},
    {id: 'YourLists', title: 'Your Lists'},
    {id: 'YourAccount', title: 'Your Account'},
    {id: 'Offers', title: 'Offers'},
    {id: 'Coupons', title: 'Coupons'},
    {id: 'CustomerService', title: 'Customer Service'},
  ];

  const handleMenuItemPress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/ChanaDal.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Thalaiva Umar</Text>
          <Text style={styles.email}>umar.bakrudeen@gmail.com</Text>
        </View>
        {isAuthenticated ? (
          <View style={styles.menu}>
            <FlatList
              data={menuOptions}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress(item.id)}>
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          <View style={styles.profileActions}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.loginButtonText}>Login / Signup</Text>
            </TouchableOpacity>
          </View>
        )}
        {isAuthenticated && (
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FFF757',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  menu: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
    paddingLeft: 20,
  },
  menuItemText: {
    fontSize: 15,
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
