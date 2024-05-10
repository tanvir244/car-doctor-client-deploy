import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-14 md:py-16 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 mt-10 md:mt-0 relative'>
                    <img src={person} className='w-[70%] md:max-w-sm rounded-lg shadow-2xl md:mr-[196px]' alt="" />
                    <img src={parts} className='w-[70%] md:max-w-sm rounded-lg absolute ml-[30%] top-1/2 md:ml-[190px] md:top-1/2 lg:right-5 lg:top-1/2 border-white border-8 shadow-2xl' alt="" />
                </div>
                <div className='lg:w-1/2 space-y-3 lg:space-y-6 mt-24 md:mt-40 lg:mt-0'>
                    <h3 className='text-3xl font-bold text-[#FF3811]'>About Us</h3>
                    <h1 className="text-4xl md:text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <div>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                        <p>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    </div>
                    <button className="btn bg-[#FF3811] text-white hover:bg-white hover:text-[#FF3811] hover:border-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;