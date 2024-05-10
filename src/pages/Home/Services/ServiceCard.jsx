import PropTypes from 'prop-types';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="w-full h-[208px] object-cover rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between text-xl font-bold'>
                    <h3 className='text-[#FF3811]'>Price: ${price}</h3>
                    <Link to={`/book-service/${_id}`}>
                        <span className='text-[#FF3811] text-4xl'><FaLongArrowAltRight /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}