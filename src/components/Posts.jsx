import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Posts = ({ item }) => {
  const navigation = useNavigation();
  const { photo, title, comments, likes, place, location } = item;
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.image}></Image>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.description}>
        <View style={styles.rating}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate('Comments')}
          >
            <FontAwesome
              name={comments ? 'comment' : 'comment-o'}
              size={24}
              style={[
                styles.icon,
                !comments && { backgroundColor: '#fff', color: '#BDBDBD' },
              ]}
            />
            <Text style={styles.text}>{comments}</Text>
          </TouchableOpacity>
          <View style={styles.iconWrapper}>
            <Feather
              name="thumbs-up"
              size={24}
              style={[styles.icon, !likes && { color: '#BDBDBD' }]}
            />
            <Text style={styles.text}>{likes}</Text>
          </View>
        </View>
        <View style={styles.locateWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Map', { location })}
          >
            <Feather name="map-pin" size={18} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={[styles.text, styles.location]}>{place}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 32,
    paddingHorizontal: 16,
    gap: 8,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 16,
  },
  image: {
    width: '100%',
    borderRadius: 8,
    height: 240,
  },
  rating: {
    flexDirection: 'row',
    gap: 24,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    color: '#FF6C00',
  },
  locateWrapper: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  location: {
    textDecorationLine: 'underline',
  },
});
