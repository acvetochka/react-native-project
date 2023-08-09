import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CreatePostScreen = () => {
  //   const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [locate, setLocate] = useState('');
  const disable = !(title && locate);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <View style={styles.circle}>
              <MaterialIcons
                name="camera-alt"
                size={24}
                color={'#BDBDBD'}
                style={styles.iconCamera}
              />
            </View>
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              name="name"
              placeholder="Назва..."
              placeholderTextColor={'#BDBDBD'}
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />
            <View style={styles.locationWrapper}>
              <TextInput
                name="location"
                placeholder="Місцевість..."
                placeholderTextColor={'#BDBDBD'}
                style={styles.inputLocation}
                value={locate}
                onChangeText={setLocate}
              />
              <Feather
                name="map-pin"
                size={24}
                color={'#BDBDBD'}
                style={styles.iconMap}
              />
            </View>
          </View>
          <TouchableOpacity
            disabled={disable}
            style={[
              styles.button,
              disable ? styles.disabledButton : styles.activeButton,
            ]}
          >
            <Text style={[styles.buttonText, !disable && { color: '#FFFFFF' }]}>
              Опублікувати
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.trashButton}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  imageWrapper: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 8,
  },
  circle: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    // borderRadius: '50%',
    backgroundColor: '#fff',
  },
  iconCamera: {
    // color: '##BDBDBD',
    //   position: 'absolute',
  },
  text: {
    color: '#BDBDBD',
    fontSize: 16,
  },
  inputWrapper: {
    paddingVertical: 32,
  },
  input: {
    height: 50,
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    fontSize: 16,
    marginBottom: 16,
  },
  locationWrapper: {
    justifyContent: 'center',
  },
  inputLocation: {
    height: 50,
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    paddingLeft: 28,
    fontSize: 16,
  },
  iconMap: {
    position: 'absolute',
  },
  button: {
    paddingVertical: 16,
    width: '100%',
    borderRadius: 100,
    marginBottom: 20,
  },
  activeButton: {
    backgroundColor: '#FF6C00',
  },
  disabledButton: {
    backgroundColor: '#F6F6F6',
  },
  buttonText: {
    textAlign: 'center',
    color: '#BDBDBD',
  },
  trashButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
