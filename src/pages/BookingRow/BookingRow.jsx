
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, date, serviceName, servicePrice, img, status } = booking;
    console.log(booking);

    return (
        <tr className="border-none">
            <td>
                <div className="avatar">
                    <div className="w-28 rounded">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className="font-bold text-lg">{serviceName}</td>
            <td className="text-base font-semibold">{date}</td>
            <td className="text-lg font-bold">{servicePrice}</td>
            <td>
                {
                    status === 'confirm' 
                    ? <button className="btn bg-green-600 text-white hover:bg-white hover:text-green-600 px-12">Approved</button>
                    : <button onClick={() => handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-white hover:bg-white hover:text-[#FF3811] px-12">Pending</button> 
                }
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle hover:bg-[#FF3811] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default BookingRow;