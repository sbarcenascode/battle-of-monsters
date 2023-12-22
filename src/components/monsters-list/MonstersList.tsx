import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  setComputerMonster,
  setSelectedMonster,
} from '../../reducers/monsters/monsters.actions';
import {
  MonsterCardContainer,
  Img,
  ListTitle,
  MonsterCard,
  MonsterName,
  MonstersSection,
} from './MonstersList.styled';

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null,
  );

  const handleMonsterClick = (monster: Monster) => {
    const value = selectedMonsterId === monster.id ? null : monster.id;
    setSelectedMonsterId(value);
    const filteredMonsterList = monsters.filter(el => el.id !== monster.id);
    const computerMonsterIndex = Math.floor(
      Math.random() * filteredMonsterList.length,
    );
    dispatch(
      setComputerMonster(
        !value ? null : filteredMonsterList[computerMonsterIndex],
      ),
    );
    dispatch(setSelectedMonster(!value ? null : monster));
  };

  return (
    <>
      <ListTitle>
        {monsters.length > 0 ? 'Select your monster' : 'No monsters available'}
      </ListTitle>

      <MonstersSection horizontal testID="monsters-list-section">
        {monsters.map(monster => (
          <MonsterCardContainer
            testID="monsters-card"
            key={monster.id}
            onPress={() => handleMonsterClick(monster)}>
            <MonsterCard
              selected={monster.id === selectedMonsterId}
              testID={monster.id}>
              <Img source={{ uri: monster.imageUrl }} />
              <MonsterName>{monster.name}</MonsterName>
            </MonsterCard>
          </MonsterCardContainer>
        ))}
      </MonstersSection>
    </>
  );
};

export { MonstersList };
