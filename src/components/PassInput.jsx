import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';

export const PassInput = ({ onChange, value }) => {
  const [visiblePass, setVisiblePass] = useState(true);
  const [focus, setFocus] = useState(null);

  const showPassword = () => {
    setVisiblePass(!visiblePass);
  };

  return (
    <View>
      <TextInput
        style={[styles.input, focus === 'password' && styles.activeInput]}
        name="password"
        placeholder="Пароль"
        secureTextEntry={visiblePass}
        onFocus={() => setFocus('password')}
        onBlur={() => setFocus(null)}
        onChangeText={onChange}
        value={value}
      />
      <TouchableOpacity onPress={showPassword} style={styles.show}>
        <Text>{visiblePass ? 'Показати' : 'Приховати'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    position: 'relative',
  },

  activeInput: {
    borderColor: '#FF6C00',
    backgroundColor: '#fff',
  },

  show: {
    position: 'absolute',
    right: 16,
    top: '100%',
    transform: [{ translateY: -50 }],
    color: '#1B4371',
  },
});
