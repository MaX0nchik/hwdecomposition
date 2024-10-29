
import './App.css'
import { Advertisement } from './components/Advertisement'
import { SearchBlock } from './components/SearchBlock'
import { ServiceBlock } from './components/ServiceBlock'
import { TopBlock } from './components/TopBlock'

function App() {

  return (
    <>
    <TopBlock/>
    <SearchBlock/>
    <Advertisement alt="img" src="src/img/banner.jpg"/>
    <ServiceBlock/>
    </>
  )
}

export default App
