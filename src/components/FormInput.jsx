import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export const FormInput = ({ placeholder, name }) => {
  const [focus, setFocus] = useState(null);
  return (
    <TextInput
      style={[styles.input, focus === name && styles.activeInput]}
      name={name}
      placeholder={placeholder}
      onFocus={() => setFocus(name)}
      onBlur={() => setFocus(null)}
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

FormInput.PropTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
