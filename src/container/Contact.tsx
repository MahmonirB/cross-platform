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
import { useToast } from 'react-native-toast-notifications';
import LazyImage from '@app/components/LazyImage';

export default function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const onSubmit = ({ name, mobile }: { name: string; mobile: string }) =>
    toast.show(`${name} has registered with ${mobile}`);

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
              placeholderTextColor={colors.GrayTextDisable}
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
              placeholderTextColor={colors.GrayTextDisable}
            />
          )}
          name="mobile"
          defaultValue=""
        />
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          color={colors.primary}
        />
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
    outlineColor: colors.primary,
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
