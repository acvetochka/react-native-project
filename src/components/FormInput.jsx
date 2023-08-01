import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const FormInput = ({ placeholder, name, onChange, value }) => {
  const [focus, setFocus] = useState(null);

  return (
    <TextInput
      style={[styles.input, focus === name && styles.activeInput]}
      name={name}
      placeholder={placeholder}
      onFocus={() => setFocus(name)}
      onBlur={() => setFocus(null)}
      onChangeText={onChange}
      value={value}
    />
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
});
