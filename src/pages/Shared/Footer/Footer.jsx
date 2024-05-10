import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer p-10 text-base-content max-w-7xl mx-auto lg:py-24">
                <aside>
                    <img src={logo} alt="" />                    
                    <p className='text-lg mt-2 font-bold'>Mental Car House Ltd.</p>
                    <p>Commited to treatment mental car since 1780</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;