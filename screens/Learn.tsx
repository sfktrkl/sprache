import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';

import Card from '../components/Card';

import { GlobalStyles } from '../styles/Global';
import { WordItem, getDatabase } from '../utils/Database';

export interface Lesson {
  key: string;
  name: string;
  words: WordItem[];
}

export default function Learn({ navigation }: NavigationTabScreenProps): JSX.Element {
  const [language, setLanguage] = useState('German');
  const getSelectedLanguage = (): string => {
    const getLanguage = navigation.getParam('getLanguage') as () => string;
    return getLanguage();
  };

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [database, setDatabase] = useState<WordItem[]>([]);
  const getLessons = () => {
    // didFocus listener checks for the current language and if the selected
    // language is changed database and lessons are cleared.
    // Hence, it is possible checking length of the database to understand
    // whether new lessons for new language should be created or not.
    if (database.length > 0) return lessons;

    const newDatabase = getDatabase(language);
    setDatabase(newDatabase);

    const newLessons: Lesson[] = [];
    const lessonWordCount = 20;
    let key = 1;
    for (let i = 0; i < newDatabase.length; i += lessonWordCount)
    {
      const newLesson: Lesson = {
        key: key.toString(),
        name: 'Words ' + key.toString(),
        words: newDatabase.slice(i, i + lessonWordCount),
      };
      key = key + 1;
      newLessons.push(newLesson);
    }
    setLessons(newLessons);
    return newLessons;
  };

  useEffect(() => {
    navigation.addListener('didFocus', () => {
      const selectedLanguage = getSelectedLanguage();
      if (selectedLanguage != language)
      {
        setLessons([]);
        setDatabase([]);
        setLanguage(selectedLanguage);
      }
    });
  });

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Lessons</Text>

      <FlatList
        data={getLessons()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card>
              <Text style={styles.lesson}>{item.name}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  lesson: {
    fontSize: 16,
    color: 'black',
    marginVertical: 12,
  },
});

