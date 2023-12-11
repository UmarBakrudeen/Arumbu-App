import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../CustomComponent/Input';
import CustomButton from '../CustomComponent/Button';

const SignupScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  const onGoogle = () => {
    console.warn('onGoogle');
  };
  const onFaceBook = () => {
    console.warn('onFaceBook');
  };
  const onTermsOfUse = () => {
    console.warn('onTermsOfUse');
  };
  const onPrivacyPolicy = () => {
    console.warn('onPrivacyPolicy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> Create An Account </Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="black" style={styles.icon} />
          <CustomInput
            placeholder="User Name"
            value={userName}
            setValue={setUserName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="black" style={styles.icon} />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="black" style={styles.icon} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="black" style={styles.icon} />
          <CustomInput
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <CustomButton text="Register" onPress={onSignInPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onTermsOfUse}>
            {' '}
            Terms of Use
          </Text>{' '}
          and
          <Text style={styles.link} onPress={onPrivacyPolicy}>
            {' '}
            Privacy Policy
          </Text>
        </Text>

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

        <CustomButton text="Don't have an " type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    minHeight: '100%',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    lineHeight: 20,
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 3,
    marginRight: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default SignupScreen;
