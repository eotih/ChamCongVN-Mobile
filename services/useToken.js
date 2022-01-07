import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useToken() {

  const [token, setToken] = useState('');
  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token', (err, result) => {
        if (err) {
          console.log(err);
        } else {
          setToken(result);
          return (result);
        }
      })
      return (jsonValue != null ? JSON.parse(jsonValue) : null);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [])

  const saveToken = async (userToken) => {
    try {
      await AsyncStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken);
    }
    catch (error) {
      console.log(error);
    }
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken(null);
    }
    catch (error) {
      console.log(error);
    }
  };
  return {
    removeToken,
    setToken: saveToken,
    token
  };
}
