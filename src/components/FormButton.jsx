import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export const FormButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    width: '100%',
    borderRadius: 100,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
};
