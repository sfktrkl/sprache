import German from '../assets/languages/german.json';
import Spanish from '../assets/languages/spanish.json';
import French from '../assets/languages/french.json';
import Russian from '../assets/languages/russian.json';

export interface Word {
  word: string;
  translation: string;
}

export interface WordItem {
  key: string;
  word: string;
  translation: string;
}

export const getDatabase = (language: string): WordItem[] => {
  let loadedDatabase: Word[] = German as Word[];
  if (language == 'Spanish') loadedDatabase = Spanish as Word[];
  if (language == 'French') loadedDatabase = French as Word[];
  if (language == 'Russian') loadedDatabase = Russian as Word[];

  const languageDatabase: WordItem[] = [];
  let key = 1;
  loadedDatabase.forEach((element: Word) => {
    const newWord: WordItem = {
      key: key.toString(),
      word: element.word,
      translation: element.translation,
    };
    key = key + 1;
    languageDatabase.push(newWord);
  });
  return languageDatabase;
};
