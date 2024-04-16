import './App.css';
import Statistics from './components/Statistics';
import GivenText from './components/GivenText';
import InputText from './components/InputText';

export default function App() {
  return (
    <div className='app-container'>
      <Statistics />
      <GivenText />
      <InputText />
    </div>
  )
}