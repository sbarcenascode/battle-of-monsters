import React from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  CardCover,
  MonsterName,
} from './MonsterBattleCard.styled';
import { Divider } from 'react-native-paper';
import ProgressBar from '../ProgressBar/ProgressBar';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard>
      {!monster ? (
        <BattleMonsterTitle testID={'empty-title'}>{title}</BattleMonsterTitle>
      ) : (
        <>
          <CardCover source={{ uri: monster.imageUrl }} testID={'card-cover'} />
          <MonsterName testID={'monster-name'}>{monster.name}</MonsterName>
          <Divider />
          <ProgressBar label={'HP'} progress={monster.hp} />
          <ProgressBar label={'Attack'} progress={monster.attack} />
          <ProgressBar label={'Defense'} progress={monster.defense} />
          <ProgressBar label={'Speed'} progress={monster.speed} />
        </>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
