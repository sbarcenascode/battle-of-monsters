import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import monstersData from '../../../server/monsters.json';
import { WinnerDisplay } from './WinnerDisplay';

const TEXT = monstersData.monsters[0].name;
const winnerDisplayFactory = () => {
  return render(
    <Provider store={store}>
      <WinnerDisplay text={TEXT} />
    </Provider>,
  );
};

describe('WinnerDisplay', () => {
  it('should  render winner', () => {
    const { getByText } = winnerDisplayFactory();
    expect(getByText(`${TEXT} wins!`)).not.toBeNull();
  });
});
