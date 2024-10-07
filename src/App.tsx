
import './App.css'
import FirstComponent from './components/component01'
import SecondComponent from './components/component02'

function App() {


  return (
    <>
      <div className='flex flex-col'>
        <div className='my-32'>
          <FirstComponent/>
        </div>
        <div className='my-32'>
          <SecondComponent/>
        </div>
      </div>
      
    </>
  )
}

export default App
