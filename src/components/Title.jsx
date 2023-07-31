import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: '#212121',
    fontSize: 30,
    // fontWeight: "500",
    fontFamily: 'Roboto_500Medium',
    letterSpacing: 0.3,
    textAlign: 'center',
    paddingBottom: 32,
  },
});

Title.PropTypes = {
  title: PropTypes.string.isRequired,
};
