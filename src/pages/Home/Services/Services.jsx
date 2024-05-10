import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = useServices();

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data);
    //             console.log(data);
    //         })
    // }, [])

    return (
        <div className="mb-14">
            <div className="w-[94%] md:w-[70%] lg:w-1/2 mx-auto text-center space-y-4">
                <h3 className="text-3xl font-bold text-[#FF3811]">Service</h3>
                <h2 className="text-4xl md:text-5xl font-bold">Our Service Area</h2>
                <p className="text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center">
                <button className="mt-12 py-3 px-6 bg-white border border-[#FF3811] text-[#FF3811] font-bold hover:bg-[#FF3811] hover:text-white">More Services</button>
            </div>
        </div>
    );
};

export default Services;