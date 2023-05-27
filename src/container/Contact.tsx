import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { colors } from '@app/styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import LazyImage from '@app/components/LazyImage';

export default function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>
      <ScrollView>
        <LazyImage name="contact" />
        <Text style={styles.title}>Contact us, we'll call you</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name e.g Jack Tailor"
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Mobile e.g 049171212123421"
            />
          )}
          name="mobile"
          defaultValue=""
        />
      </ScrollView>
      <View style={styles.footer}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    marginVertical: 24,
    textAlign: 'center',
  },
  input: {
    maxWidth: 250,
    height: 40,
    borderWidth: 1,
    borderColor: colors.borderGray,
    marginBottom: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
