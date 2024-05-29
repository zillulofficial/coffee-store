import PropTypes from 'prop-types';
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCards = ({ coffee }) => {
    const { name, chief, supplier, category, details, url } = coffee
    return (
        <div>
            <div className="card card-side shadow-xl h-64 bg-[#F5F4F1]">
                <figure><img className='w-36' src={url} alt="Movie" /></figure>
                <div className="card-body">
                    <p className='text-3xl'><span className='font-extrabold'>Name:</span> {name}</p>
                    <p><span className='font-extrabold'>Chief:</span> {chief}</p>
                    <p><span className='font-extrabold'>From:</span> {supplier}</p>
                    <p><span className='font-extrabold'>Category:</span> {category}</p>
                    <p className='text-sm'>{details}</p>
                </div>
                <div className='flex flex-col items-center justify-center mr-6 gap-4'>
                    <button className='text-lg p-2 rounded-md bg-[#3C393B] text-white'><MdEdit></MdEdit></button>
                    <button className='text-lg p-2 rounded-md bg-[#EA4744] text-white'><MdDelete></MdDelete></button>
                    <button className='text-lg p-2 rounded-md bg-[#D2B48C] text-white'><FaEye></FaEye></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCards;
CoffeeCards.propTypes = {
    coffee: PropTypes.object
}