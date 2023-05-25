import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ActionItem from './ActionItem';
import Icon from 'react-native-vector-icons/AntDesign';

function LanguageOption() {
  const { t, i18n } = useTranslation();

  const handleLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <TouchableOpacity onPress={handleLanguage}>
      <ActionItem
        text={t('selectLanguage')}
        icon={<Icon name="earth" size={14} />}>
        <Text style={styles.link}>{i18n.language}</Text>
      </ActionItem>
    </TouchableOpacity>
  );
}
export default LanguageOption;

const styles = StyleSheet.create({
  link: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
