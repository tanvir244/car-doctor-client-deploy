import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const BookService = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    if (!user) {
        return <p className="text-center"><span className="loading loading-spinner loading-lg"></span></p>;
    }

    const { email } = user;
    const { title, price, img } = service;


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const email = form.email.value;
        const date = form.date.value;
        const addNew = {
            serviceName: serviceName,
            servicePrice: servicePrice,
            img,
            email: email,
            date: date
        }

        console.log(addNew);

        fetch('https://car-doctor-server-sigma-tawny-77.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNew)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your order confirmed",
                        showConfirmButton: false,
                        timer: 1500
                      })
                      .then(() => {
                        form.reset();
                      })
                }
            })

    }

    return (
        <div>
            <div className="w-[90%] md:max-w-6xl mx-auto my-12 bg-[#F3F3F3] rounded-lg">
                <h1>Add New Service</h1>
                <form onSubmit={handleAddService} className="card-body space-y-3 px-8 py-16 md:p-20">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <input type="text" name="serviceName" placeholder="Service Name" defaultValue={title} className="input input-bordered border-none" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <input type="text" name="servicePrice" placeholder="Service Price" defaultValue={'$ ' + price} className="input input-bordered border-none" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <input type="email" name="email" placeholder="Email" defaultValue={email} className="input input-bordered border-none" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <input type="date" name="date" placeholder="Date" className="input input-bordered border-none" required />
                        </div>
                    </div>
                    {/* <textarea name="description" placeholder="Product Description" id="" cols="30" rows="10" className="rounded-xl p-4"></textarea> */}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-white hover:text-[#FF3811] text-base">Order Confirm</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BookService;