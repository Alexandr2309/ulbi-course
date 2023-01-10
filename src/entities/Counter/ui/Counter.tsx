import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { increment, decrement, add } = useCounterActions();
  const { t } = useTranslation();

  const incrementHandler = () => {
    increment();
  };
  const decrementHandler = () => {
    decrement();
  };
  const add5Handler = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={add5Handler} data-testid="add5-btn">
        {t('Add5')}
      </Button>
      <Button onClick={incrementHandler} data-testid="increment-btn">
        {t('Increment')}
      </Button>
      <Button onClick={decrementHandler} data-testid="decrement-btn">
        {t('Decrement')}
      </Button>
    </div>
  );
};
