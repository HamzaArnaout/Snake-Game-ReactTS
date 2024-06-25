import './App.css'
import Game from './game/Game';
import { FC } from 'react';
import './App.css';

type AppProps = {
  title: string;
};

const App: FC<AppProps> = () => {
  return <Game />;
}

export default App
 