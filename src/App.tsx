import { FC, useState } from 'react';
import './App.css';
import Chart from './components/chartContainer/chart';
import Button from './components/button/button';
import getData from './utils/getData/getData';

interface DataType {
    name: string;
    time: number;
}

const App: FC = () => {
  const [data, setData] = useState<DataType[]>(getData());

  return (
    <div className="App">
      <h1 className="App__title">Spent time (seconds)</h1>
      <Chart data={data} />
      <Button setData={setData} text="Change chart" />
    </div>
  );
};

export default App;
