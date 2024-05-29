import PropTypes from 'prop-types';

const CoffeeCards = ({ coffee }) => {
    const { name, chief, supplier, taste, category, details, url } = coffee
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-36' src={url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCards;
CoffeeCards.propTypes = {
    coffee: PropTypes.object
}