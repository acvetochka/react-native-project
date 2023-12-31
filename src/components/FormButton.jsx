import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const FormButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
