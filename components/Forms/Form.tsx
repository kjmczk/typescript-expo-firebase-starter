import { Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react';
import { ObjectSchema, Shape } from 'yup';

type Props = {
  children: React.ReactNode;
  initialValues: FormikValues;
  onSubmit: (
    values: FormikValues,
    actions?: FormikHelpers<FormikValues>
  ) => Promise<void>;
  validationSchema: ObjectSchema<Shape<object | undefined, object>, object>;
};

const Form: React.FC<Props> = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
};

export default Form;
