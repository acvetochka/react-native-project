import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { posts } from '../data/posts';
import { useNavigation } from '@react-navigation/native';

export const CreatePostScreen = () => {
  const [photo, setPhoto] = useState('');
  // const [postArr, setPostArr] = useState(posts);
  const [title, setTitle] = useState('');
  const [locate, setLocate] = useState('');
  const disable = !(title && locate);
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();

        setHasPermission(status === 'granted');
      } catch (err) {
        console.log(err.message);
        navigation.navigate('Home');
      }
    })();

    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    } catch (err) {
      console.log(err.message);
      navigation.navigate('Home');
    }
  };

  const takePhoto = async () => {
    try {
      if (cameraRef) {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        await getLocation();
        setPhoto(uri);
      }
    } catch (err) {
      console.log(err.message);
      navigation.navigate('Home');
    }
  };

  const addPost = () => {
    const post = {
      id: Math.random(),
      photo: { uri: photo },
      title,
      comments: 0,
      likes: 0,
      place: locate,
      location,
    };
    posts.push(post);
    deleteAll();

    navigation.navigate('PostsScreen', { post });
  };

  const deleteAll = () => {
    setPhoto('');
    setTitle('');
    setLocate('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.camera} />
            ) : (
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <TouchableOpacity onPress={takePhoto} style={styles.circle}>
                  <MaterialIcons
                    name="camera-alt"
                    size={24}
                    color={'#BDBDBD'}
                    style={styles.iconCamera}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                  style={styles.flip}
                >
                  <MaterialIcons
                    name="flip-camera-ios"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </Camera>
            )}
          </View>
          <Text style={styles.text}>
            {photo ? 'Peдагувати фото' : 'Завантажте фото'}
          </Text>
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
            onPress={addPost}
          >
            <Text style={[styles.buttonText, !disable && { color: '#FFFFFF' }]}>
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.trashButton} onPress={deleteAll}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    minHeight: '100hv',
    backgroundColor: '#fff',
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  imageWrapper: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    marginBottom: 8,
  },
  circle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#ffffff50',
  },
  iconCamera: {
    // color: '##BDBDBD',
  },
  flip: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 999,
    // alignSelf: 'flex-end',
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
    marginTop: 'auto',
  },
});
