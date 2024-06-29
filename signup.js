import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = () => {
    if (role === '') {
      Alert.alert('Error', 'Please select a role.');
      return;
    }
  
    // Replace '192.168.0.10' with your development machine's IP address and 8081 with your Node.js server port
    const serverUrl = 'http://192.168.0.10:3000';
  
    fetch(`${serverUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role,
        email,
        fullName,
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'User registered') {
          Alert.alert('Success', 'User registered successfully');
          navigation.navigate('App');
        } else {
          Alert.alert('Error', data.message || 'An error occurred');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to connect to server');
        console.error('Fetch Error:', error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Intern-net</Text>
        <Text style={styles.text}>Real-World Experience for Future Professionals </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={role}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setRole(itemValue);
            }}
          >
            <Picker.Item label="Sign up as..." value="" color="#aaa" />
            <Picker.Item label="Intern" value="Intern" />
            <Picker.Item label="OJT Coordinator" value="OJT Coordinator" />
            <Picker.Item label="Internship Supervisor" value="Internship Supervisor" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.haveAccountText}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>Log in</Text>
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
    padding: 16,
  },
  header: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 54,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 25,
  },
  pickerContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    marginBottom: 16,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  haveAccountText: {
    fontFamily: 'sans-serif',
    marginRight: 5,
  },
  loginText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
