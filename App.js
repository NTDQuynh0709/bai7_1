import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function SignInScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    const phoneRegex = /^0\d{9}$/;

    if (phone.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại');
    } else if (!phoneRegex.test(phone)) {
      Alert.alert('Thông báo', 'Số điện thoại không đúng định dạng');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Chào mừng bạn đến Trang chủ</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'Đăng nhập' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trang chủ' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40,
  },
  label: {
    fontSize: 24,
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#555',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});