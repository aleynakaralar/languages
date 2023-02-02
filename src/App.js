
import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import { data } from './util/data';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        {data.map((item, index) => {
          const {name,img,options} = item
          return <div className='card-info'> <Card key={index} name={name} img={img} options={options}/> </div>
        })}
        
      </div>
      
    </div>
  );
}

export default App;
