
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './Components/CoffeeCards'

function App() {
  const coffees = useLoaderData()


  return (
    <>
      <div className='container mx-auto'>
        <h1 className='font-bold text-6xl text-purple-600'>Number of coffees: {coffees.length}</h1>
        <div className='grid md:grid-cols-2 gap-5'>
          {
            coffees.map(coffee => <CoffeeCards key={coffee._id} coffee={coffee}></CoffeeCards>)
          }
        </div>
      </div>
    </>
  )
}

export default App
