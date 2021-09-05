import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Modal, Text, View } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';

import { Word, WordItem, getDatabase } from '../utils/Database';

export default function Vocabulary({ navigation }: NavigationTabScreenProps): JSX.Element {
  const [language, setLanguage] = useState('German');
  const getSelectedLanguage = (): string => {
    const getLanguage = navigation.getParam('getLanguage') as () => string;
    return getLanguage();
  };

  const [database, setDatabase] = useState<WordItem[]>([]);
  const getWords = () => {
    if (database.length > 0) return database;

    const newDatabase = getDatabase(language, database);
    setDatabase(newDatabase);
    return newDatabase;
  };

  useEffect(() => {
    navigation.addListener('didFocus', () => {
      const selectedLanguage = getSelectedLanguage();
      if (selectedLanguage != language)
      {
        setDatabase([]);
        setLanguage(selectedLanguage);
      }
    });
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [item, setItem] = useState<Word>({ word: '', translation: '' });
  const openModal = (item: Word) => {
    setItem(item); // Set state of modal
    setModalOpen(true); // Open modal
  };

  const addFavorite = () => {
    // TODO: Add word to favorites
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vocabulary{navigation.getParam('language')}</Text>

      <Modal visible={modalOpen} animationType='slide' style={styles.modal}>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={30}
            style={styles.modalClose}
            onPress={() => setModalOpen(false)}
          />
          <View style={styles.modalCard}>
            <Text style={styles.modalWord}>{item.word}</Text>
            <Text style={styles.modalTranslation}>{item.translation}</Text>
          </View>
          <MaterialIcons
            name='favorite-border'
            size={60}
            style={styles.favorite}
            onPress={() => addFavorite()}
          />
        </View>
      </Modal>

      <FlatList
        data={getWords()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <Card>
              <Text style={styles.word}>{item.word}</Text>
              <Text style={styles.translation}>{item.translation}</Text>
            </Card>
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    width: 200,
  },
  modalContent: {
    flex: 1,
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    marginLeft: 'auto',
  },
  modalCard: {
    flex: 1,
    alignItems: 'center',
  },
  modalWord: {
    fontSize: 32,
    color: 'blue',
  },
  modalTranslation: {
    fontSize: 24,
    color: 'gray',
  },
  favorite: {
    paddingBottom: 20,
    alignSelf: 'center',
  },
  word: {
    fontSize: 16,
    color: 'black',
  },
  translation: {
    fontSize: 12,
    color: 'gray',
  },
});
