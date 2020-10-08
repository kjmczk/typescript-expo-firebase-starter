import { useFormikContext, FormikProps, FormikValues } from 'formik';
import React from 'react';

import AppTextInput from '../AppTextInput';
import FormErrorMessage from './FormErrorMessage';

type Props = {
  name: string;
  width?: string;

  leftIcon?: string;
  rightIcon?: string;
  handlePasswordVisibility?: () => void;

  autoCapitalize?: string;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  keyboardType?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: string;
};

const FormField: React.FC<Props> = ({ name, width, ...otherProps }: Props) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  }: FormikProps<FormikValues> = useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        onChangeText={(text: string) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default FormField;
