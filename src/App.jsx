
import './App.css'
import { Category } from './components/Category'
import { Delivery } from './components/Delivery'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Meal } from './components/Meal'
import { Newsletter } from './components/Newsletter'
import { TopNev } from './components/TopNev'
import { TopPicks } from './components/TopPicks'

function App() {
 

  return (
    <>
      <TopNev />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Category />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
