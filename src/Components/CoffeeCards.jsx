import PropTypes from 'prop-types';
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCards = ({ coffee }) => {
    const { _id, name, chief, supplier, category, details, url } = coffee

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
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
                    <button className='text-lg p-2 rounded-md bg-[#D2B48C] text-white'><FaEye></FaEye></button>
                    <Link to={`/updateCoffee/${_id}`}><button className='text-lg p-2 rounded-md bg-[#3C393B] text-white'><MdEdit></MdEdit></button></Link>
                    <button onClick={() => handleDelete(_id)} className='text-lg p-2 rounded-md bg-[#EA4744] text-white'><MdDelete></MdDelete></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCards;
CoffeeCards.propTypes = {
    coffee: PropTypes.object
}