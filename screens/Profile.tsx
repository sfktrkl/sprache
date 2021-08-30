import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';

import LanguageButton from '../components/LanguageButton';

interface Language {
  key: string;
  language: string;
}

export default function Profile({ navigation }: NavigationTabScreenProps): JSX.Element {
  const languages: Language[] = [
    { key: '1', language: 'German' },
    { key: '2', language: 'Spanish' },
    { key: '3', language: 'French' },
    { key: '4', language: 'Russian' },
  ];
  const [language, setLanguage] = useState('German');

  const pressHandler = (language: string) => {
    setLanguage(language);
    const setSelectedLanguage = navigation.getParam('setLanguage') as (language :string) => void;
    setSelectedLanguage(language);
  };

  // Use dimensions of the window to determine the image size.
  // Use width as a size of the rendered item in the flat list
  // and also the size of the button while stretching the image.
  const imageSize = Dimensions.get('window').width * 0.3;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your profile</Text>
      <Text style={styles.title2}>
        Name: <Text style={styles.information}>Name Surname</Text>
      </Text>

      <Text style={styles.title2}>
        E-mail: <Text style={styles.information}>email@email.com</Text>
      </Text>

      <Text style={styles.title}>Select a language</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.key}
        style={styles.flatList}
        data={languages}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.flatListItem, { width: imageSize, height: imageSize }]}
            onPress={() => pressHandler(item.language)}
          >
            <LanguageButton
              language={item.language}
              active={language == item.language}
              size={imageSize}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 25,
  },
  title: {
    textAlign: 'center',
    color: 'green',
    fontSize: 24,
    padding: 10,
  },
  title2: {
    color: 'blue',
    fontSize: 16,
  },
  information: {
    color: 'black',
    fontSize: 16,
  },
  flatList: {
    alignSelf: 'center',
  },
  flatListItem: {
    marginBottom: 20,
    marginRight: 20,
  },
});
