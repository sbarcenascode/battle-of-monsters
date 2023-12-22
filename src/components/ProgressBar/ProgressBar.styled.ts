import styled from '@emotion/native';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';
import { colors } from '../../constants/colors';
import { View } from 'react-native';

export const ProgressBar = styled(PaperProgressBar)`
  background-color: ${colors.progressBarBackground};
  border-radius: 4px;
  height: 7px;
`;

export const Container = styled(View)`
  margin-top: 8px;
`;
