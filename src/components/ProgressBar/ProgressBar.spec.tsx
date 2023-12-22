import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ProgressBar from './ProgressBar';

const LABEL = 'HP';
const progressBarFactory = () => {
  return render(
    <Provider store={store}>
      <ProgressBar label={LABEL} progress={30} />
    </Provider>,
  );
};

jest.useFakeTimers();
describe('ProgressBar', () => {
  it('should render the ProgressBar', () => {
    const { getByTestId } = progressBarFactory();
    expect(getByTestId('progress-bar')).not.toBeNull();
  });

  it('should render the Label', () => {
    const { getByText } = progressBarFactory();
    expect(getByText(LABEL)).not.toBeNull();
  });
});
