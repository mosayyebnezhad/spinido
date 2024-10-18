
import './App.css'
import './main.css'
import Beat from './component/Beat/Beat';
import BeatDynamic from './component/BeatDynamic/BeatDynamic';

function App() {


  return (
    <div className='flex flex-wrap w-full justify-center mt-24'>

      <Beat />
      <div className='w-full'></div>
      <BeatDynamic />

    </div>

  )
}

export default App
