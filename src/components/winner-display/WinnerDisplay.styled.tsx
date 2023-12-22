import styled from '@emotion/native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../constants/colors';

export const WinnerDisplayContainer = styled(View)`
  background-color: ${colors.lightBlue};
  border: 1px solid ${colors.black};
  elevation: 5;
  border-radius: 4px;
  padding: 17px 28px;
  width: 90%;
  align-self: center;
`;

export const WinnerText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
`;
