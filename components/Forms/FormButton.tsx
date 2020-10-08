import { useFormikContext } from 'formik';
import React from 'react';

import AppButton from '../AppButton';

type Props = {
  title: string;
};

const FormButton: React.FC<Props> = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default FormButton;
