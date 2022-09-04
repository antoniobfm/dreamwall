/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Container } from './styles';

interface IInput {
  dataTest?: string;
  register?: any;
}

const Input: React.FC<IInput> = ({ dataTest, register }: IInput) => {
  return (
    <Container>
      <input data-test={dataTest} {...register} type="number" />
      <span>CM</span>
    </Container>
  );
};

export default Input;
