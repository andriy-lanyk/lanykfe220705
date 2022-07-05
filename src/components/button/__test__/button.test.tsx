import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../button';

jest.spyOn(console, 'error').mockImplementation(() => { });

const mockFunction = function (arg0: { name: string; time: number; }[]): void {
  throw new Error('Function not implemented.');
};

afterEach(cleanup);

it('Button is displayed', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button setData={mockFunction} text="Change chart" />, div);
});

it('Button render correctly', () => {
  const { getByTestId } = render(<Button setData={mockFunction} text="Change chart" />);
  expect(getByTestId('button')).toHaveTextContent('Change chart');
});

it('Button click', () => {
  const handleClickButton = jest.fn();
  const { getByTestId } = render(<button className="App__button" type="button" onClick={handleClickButton} data-testid="button">Change chart</button>);
  const button = getByTestId('button');
  fireEvent.click(button);

  expect(handleClickButton).toHaveBeenCalledTimes(1);
});
