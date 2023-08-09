import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Menu = () => {
  return (
    <View style={styles.menuWrap}>
      <Feather name="grid" size={24} style={styles.icon} />
      <TouchableOpacity style={styles.unionButton}>
        <Feather name="plus" size={13} style={styles.plusIcon} />
      </TouchableOpacity>
      <Feather name="user" size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 39,
    textAlign: 'center',
    paddingVertical: 9,
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
  },

  unionButton: {
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  icon: {
    color: '#21212180',
  },

  plusIcon: {
    color: '#fff',
  },
});
