import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/images/Logo.png';
import CustomInput from '../CustomComponent/Input';
import CustomButton from '../CustomComponent/Button';

import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  const onForgetPass = screenName => {
    console.warn('onForgetPass');
  };

  const onGoogle = () => {
    console.warn('onGoogle');
  };
  const onFaceBook = () => {
    console.warn('onFaceBook');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="User Name"
          value={userName}
          setValue={setUserName}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Log In" onPress={onSignInPressed} />
        <CustomButton
          text="Forget Password"
          onPress={onForgetPass}
          type="TERTIARY"
        />

        <CustomButton
          text="Sign In with Google"
          onPress={onGoogle}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with FaceBook"
          onPress={onFaceBook}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <CustomButton
          text="Don't have an account ? Create One"
          onPress={() => navigation.navigate('Signup')}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: '100%',
    padding: 20,
    backgroundColor: '#f9fbfc',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
