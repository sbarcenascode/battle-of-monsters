import React from 'react';
import { Container, ProgressBar as PaperBar } from './ProgressBar.styled';
import { Text } from 'react-native-paper';
import { colors } from '../../constants/colors';

interface ProgressBarProps {
  label: string;
  progress: number;
}

function ProgressBar({ label, progress }: ProgressBarProps) {
  return (
    <Container testID="progress-bar">
      <Text>{label}</Text>
      <PaperBar progress={progress / 100} color={colors.progressColor} />
    </Container>
  );
}

export default ProgressBar;
