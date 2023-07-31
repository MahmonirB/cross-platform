import WarningModal from '@app/components/WarningModal';
import { Portal } from '@gorhom/portal';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  const [showModal, setShowModal] = React.useState(true);

  const handleOnModalPress = React.useCallback(() => {
    setShowModal(state => !state);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {showModal && (
        <Portal name="modal">
          <WarningModal onPress={handleOnModalPress} />
        </Portal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
