import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import React from 'react';

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.profileimage}
          source={{uri: 'https://avatars.githubusercontent.com/u/46695094?v=4'}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 24, marginTop: 20}}>
          Hi 👋, I'm Muhammet Yusuf Piroğlu
        </Text>
        <Text style={{fontSize: 18, marginTop: 10}}>
          Mid. React Native Developer
        </Text>

        <Text style={{fontSize: 18, marginTop: 20}}>Connect with me:</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL('https://github.com/mypiroglu')}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
              }}
              style={{width: 40, height: 40, margin: 5}}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/mypiroglu/')
            }>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-icon/linkedin_318-246161.jpg',
              }}
              style={{width: 40, height: 40, margin: 5}}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() =>
              Linking.openURL('https://www.instagram.com/my.piroglu/')
            }>
            <Image
              source={{
                uri: 'https://assets.stickpng.com/images/5ecec6ef73e4440004f09e75.png',
              }}
              style={{width: 48, height: 48}}
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={{fontSize: 18, marginTop: 20}}>Languages and Tools:</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
            }}
            style={{width: 40, height: 40, margin: 5}}
          />
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
            }}
            style={{width: 40, height: 40, margin: 5}}
          />
          <Image
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
            }}
            style={{width: 40, height: 40, margin: 5}}
          />
          <Image
            source={{
              uri: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png',
            }}
            style={{width: 40, height: 40, margin: 5}}
          />
          <Image
            source={{
              uri: 'https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png',
            }}
            style={{width: 40, height: 40, margin: 5}}
          />
          <Image
            source={{
              uri: 'https://www.drupal.org/files/project-images/screenshot_361.png',
            }}
            style={{width: 40, height: 40, margin: 5}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileimage: {
    height: 200,
    width: 200,
    borderRadius: 30,
    borderWidth: 2,
  },
  desctitle: {
    textAlign: 'center',
    marginTop: 20,
  },
});
