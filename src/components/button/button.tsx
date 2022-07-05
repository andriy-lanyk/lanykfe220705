import { FC, useEffect } from 'react';
import getRandomNumber from '../../utils/getRandomNumber/getRandomNumber';
import getData from '../../utils/getData/getData';

interface DataSet {
    setData: (arg0: {
    name: string;
    time: number;
  }[]) => void
  text:string
}

const Button: FC<DataSet> = ({ setData, text }) => {
  useEffect(() => {
    const intervalId = setInterval(handleChangeChart, 30000);

    return (() => clearInterval(intervalId));
  }, []);

  function handleChangeChart() {
    const deal = getRandomNumber();
    const checkOut = getRandomNumber();
    const configurator = getRandomNumber();
    const landingPage = getRandomNumber();
    setData(getData(deal, checkOut, configurator, landingPage));
  }
  return <button className="App__button" type="button" onClick={handleChangeChart} data-testid="button">{ text}</button>;
};

export default Button;
