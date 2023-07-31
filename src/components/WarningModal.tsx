import { colors } from '@app/styles/colors';
import typography from '@app/styles/typography';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface WarningModalProps {
  onPress: (event: GestureResponderEvent) => void;
}

const WarningModal = ({ onPress }: WarningModalProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.backdropContainer}>
        <View style={styles.modalContainer}>
          <Text style={typography.h2}>Test Version</Text>
          <Text style={[typography.h3, styles.content]}>
            Modal is developed to display test version
          </Text>
          <Text style={[styles.caption, typography.caption]}>
            development is in progress
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
    width: '50%',
    height: '50%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'center',
  },
  caption: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.captionGray,
  },
});

export default WarningModal;
