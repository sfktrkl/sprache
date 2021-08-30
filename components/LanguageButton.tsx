import React from 'react';
import { StyleSheet, ImageSourcePropType, View, Image } from 'react-native';

import GermanFlag from '../assets/languages/german.png';
import SpanishFlag from '../assets/languages/spanish.png';
import FrenchFlag from '../assets/languages/french.png';
import RussianFlag from '../assets/languages/russian.png';

export interface LanguageButtonProps {
  language: string;
  active: boolean;
  size: number;
}
export type Images = {
  languages: {
    [key: string]: ImageSourcePropType;
  };
};

export const images: Images = {
  languages: {
    German: GermanFlag as ImageSourcePropType,
    Spanish: SpanishFlag as ImageSourcePropType,
    French: FrenchFlag as ImageSourcePropType,
    Russian: RussianFlag as ImageSourcePropType,
  },
};

export default function LanguageButton({ language, active, size }: LanguageButtonProps): JSX.Element {
  return (
    <View style={[styles.card, active ? styles.cardActivate : styles.cardDeactivate]}>
      <Image style={{ resizeMode: 'stretch', width: size, height: size }} source={images.languages[language]} />
    </View>
  );
}

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 8,
  },
  cardActivate: {
    backgroundColor: 'blue',
  },
  cardDeactivate: {
    backgroundColor: 'gray',
  },
});
