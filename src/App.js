import './App.scss';

//React Query and DataFetcher
import { useQuery } from 'react-query';
import FetchFarmAside from './Fetch/DataFarmAside';
import FetchDataNotes from './Fetch/DataNotes';
import FetchDataPlantation from './Fetch/DataPlantation';
import FetchRainAside from './Fetch/DataRainAside';

//Componentes
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';

function App() {
  
  //Fetch data com React Query
  const {data: dataNotes, isLoading: isLoadingNotes, error: errorNotes} = useQuery('dataNotes', FetchDataNotes)
  const {data: dataPlantation, isLoading: isLoadingPlant, error: errorPlant} = useQuery('dataPlantation', FetchDataPlantation)
  const {data: dataFarm, isLoading: isLoadingFarm, error: errorFarm} = useQuery('dataFarm', FetchFarmAside)
  const {data: dataRain, isLoading: isLoadingRain, error: errorRain} = useQuery('dataRain', FetchRainAside)

  const error = errorNotes|| errorFarm || errorPlant || errorRain
  
  if(error){
    return <Error />
  }

  const isLoading = isLoadingFarm || isLoadingNotes || isLoadingPlant || isLoadingRain

  return (
    <div className="App">
      <Header />
      {isLoading ?
       <Loader /> : 
       <Main 
          dataNotes={dataNotes} 
          dataPlantation={dataPlantation} 
          dataFarm={dataFarm} 
          dataRain={dataRain} />}
      <Footer />
    </div>
  );
}

export default App;
