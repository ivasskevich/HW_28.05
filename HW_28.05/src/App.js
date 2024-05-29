import './App.css';
import { TariffCard } from './components/task_card/TariffCards';

function App() {
  return (
    <div className='box-main'>
      <TariffCard tarif="basic" price="$8.99" information="Lorem ipsum dolor amet icing elit."></TariffCard>
      <TariffCard tarif="standart" price="$12.99" information="Lorem ipsum sit amet consectetur." ></TariffCard>
      <TariffCard tarif="premium" price="$20.99" information="Lorem dolor sit amet."></TariffCard>
    </div>
  );
}

export default App;
