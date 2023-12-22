import styled from '@emotion/native';
import {
  Card,
  Title,
  ProgressBar as PaperProgressBar,
  Text,
} from 'react-native-paper';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card)`
  padding: 13px 10px;
  width: 255px;
  height: 350px;
  background: ${colors.white};
  border-radius: 7px;
  border: 0.5px solid #dddddd;
  flex-direction: column;
  display: flex;
  margin-right: 16px;
  margin-bottom: 16px;
  elevation: 5;
`;

export const BattleMonsterTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  margin: auto;
  color: ${colors.black};
`;

export const CardCover = styled(Card.Cover)`
  width: 235px;
  height: 148px;
  border-radius: 7px;
`;

export const MonsterName = styled(Text)`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  margin-top: 12px; //2*6
  margin-bottom: 4px; // 2*2
`;
