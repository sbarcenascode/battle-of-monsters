import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { store } from '../../app/store';
import { Monster } from '../../models/interfaces/monster.interface';

import { MonsterBattleCard } from './MonsterBattleCard';
import monstersData from '../../../server/monsters.json';

jest.useFakeTimers();

const monsterBattleCardFactory = (monster: Monster | null) => {
  return render(
    <Provider store={store}>
      <MonsterBattleCard monster={monster} title={'Player'} />
    </Provider>,
  );
};

describe('MonsterBattleCard', () => {
  it('should render selected monster', () => {
    const { getByTestId } = monsterBattleCardFactory(monstersData.monsters[0]);
    expect(getByTestId('card-cover')).not.toBeNull();
    expect(getByTestId('monster-name').props.children).toContain(
      monstersData.monsters[0].name,
    );
  });

  it('should render empty card', () => {
    const { getByTestId } = monsterBattleCardFactory(null);
    expect(getByTestId('empty-title')).not.toBeNull();
  });

  it('should render selected monster stats', () => {
    const { getAllByTestId } = monsterBattleCardFactory(
      monstersData.monsters[0],
    );
    expect(getAllByTestId('progress-bar')).toHaveLength(4);
  });
});
