import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    Alert.alert('Password Reset', `Password reset link sent to ${email}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Intern-net</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('./padlock.png')} style={styles.padlockImage} />
        <View style={styles.formContainer}>
          <Text style={styles.text}>
            Enter your Email or Username and we'll send you a link to change a new password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            value={email}
            onChangeText={setEmail}
            autoFocus={true}
          />
          <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.createAccount}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerText: {
    fontSize: 54,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  padlockImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'sans-serif',
  },
  input: {
    width: '100%',
    maxWidth: 400,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 30,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 110,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createAccount: {
    marginRight: 5,
    fontFamily: 'sans-serif',
  },
  signUp: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
});
