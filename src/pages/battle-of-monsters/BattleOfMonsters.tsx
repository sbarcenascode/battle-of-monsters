import { useEffect } from 'react';
import { TextStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { PageTitle } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { colors } from '../../constants/colors';
import {
  fetchMonstersData,
  startBattle,
} from '../../reducers/monsters/monsters.actions';
import {
  selectComputerMonster,
  selectMatch,
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  PageContainer,
  BattleSection,
  StartBattleButton,
  StartButtonStyles,
} from './BattleOfMonsters.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectComputerMonster);
  const match = useSelector(selectMatch);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    dispatch(
      startBattle({
        monster1Id: selectedMonster?.id as string,
        monster2Id: computerMonster?.id as string,
      }),
    );
  };

  return (
    <PageContainer>
      <PageTitle>Battle of Monsters</PageTitle>

      <MonstersList monsters={monsters} />

      <BattleSection horizontal>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}
        />
        <MonsterBattleCard title="Computer" monster={computerMonster} />
      </BattleSection>

      {!match.winner ? (
        <StartBattleButton
          color={colors.white}
          dark={false}
          testID="start-battle-button"
          disabled={selectedMonster === null}
          labelStyle={StartButtonStyles as TextStyle}
          uppercase={false}
          onPress={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
      ) : (
        <WinnerDisplay text={match.winner.name} />
      )}
    </PageContainer>
  );
};

export default BattleOfMonsters;
