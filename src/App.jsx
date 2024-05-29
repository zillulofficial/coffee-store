import { FaCoffee } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './Components/CoffeeCards'
import Banner from './Components/Banner'

function App() {
  const coffees = useLoaderData()


  return (
    <>
      <Banner></Banner>
      <div className='container mx-auto mb-20'>

        <div className='text-center mb-12'>
          <h1 className='text-xl '>--Sip & Savor--</h1>
          <h1 className='Rancho text-[#331A15] text-[55px] drop-shadow-lg'>Our Popular Product</h1>
          <Link to="/addCoffee"><button className='btn border-none Rancho text-xl  text-[#242222] bg-[#E3B577] hover:bg-[#ECEAE3]'>Add Coffee <FaCoffee className="text-xl"></FaCoffee></button></Link>
        </div>

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
