
import './App.css'
import { Delivery } from './components/Delivery'
import { Featured } from './components/Featured'
import { TopNev } from './components/TopNev'
import { TopPicks } from './components/TopPicks'

function App() {
 

  return (
    <>
        <TopNev></TopNev>
        <Featured></Featured>
        <Delivery />
        <TopPicks />
    </>
  )
}

export default App
