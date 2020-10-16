import {
  setDeckReadyToSubmit,
  setDeckTags,
} from '@context/deck-creator/deck-creator.action-creators';
import { useDeckCreatorState } from '@hooks/use-deck-creator-state/use-deck-creator-state.hook';
import { FormikField } from '@ui/formik-field/formik-field.component';
import { Button, Select } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { CheckOutlined } from '@ant-design/icons';
import { StyledForm } from './deck-tags.styles';

interface FormPayload {
  tags: string[];
}

export const DeckTags = () => {
  const {
    dispatch,
    state: { tags },
  } = useDeckCreatorState();

  const handleSubmit = (values: FormPayload) => {
    dispatch(setDeckTags(values.tags));
    dispatch(setDeckReadyToSubmit(true));
  };

  const formik = useFormik<FormPayload>({
    initialValues: {
      tags,
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object({
      tags: Yup.array(Yup.string().trim().required()).min(1),
    }),
    validateOnMount: true,
  });

  const handleSelectChange = (value: string[]) => {
    formik.setFieldValue('tags', value);
    formik.touched.tags = true;
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormikField
        label="Deck tags"
        touched={formik.touched.tags}
        error={formik.errors.tags as string}
      >
        <Select
          mode="tags"
          allowClear
          style={{ width: '100%', margin: '0 auto', display: 'block' }}
          placeholder="Enter deck tags..."
          {...formik.getFieldProps('tags')}
          onChange={handleSelectChange}
        >
          []
        </Select>
      </FormikField>
      <Button icon={<CheckOutlined />} type="primary" htmlType="submit">
        Create deck
      </Button>
    </StyledForm>
  );
};
