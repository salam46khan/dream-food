import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../public/dreamfood.png'
const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content">
            <footer className="footer p-10 container text-center mx-auto gap-5 items-center">
                <div className='border mx-auto'>
                    <img className='w-full mx-auto' src={logo} alt="" />
                </div>
                <div className='text-center max-w-md'>
                    <h2 className='text-center mx-auto font-bold text-xl'>Greating</h2>
                    <p>Thank you for choosing Dream Food! We're delighted to have you as part of our online community. Your presence on our website is truly appreciated, and we want to express our gratitude for making us a part of your online experience.</p>
                </div>
                <div className='mx-auto text-center'>
                    <h2 className='text-center mx-auto font-bold text-xl'>Address</h2>
                    <p className='text-center'>Satkhira, Bangladesh</p>
                    <p className='text-center'>+8801771-03****</p>
                    <p className='text-center'>abc@gmail.com</p>
                </div>
                <div className='text-center mx-auto'>
                    <h2 className='text-center mx-auto font-bold text-xl'>Follow us</h2>
                    <div className='flex gap-2'>
                        <button className='text-2xl btn btn-circle '><FaFacebook></FaFacebook></button>
                        <button className='text-2xl btn btn-circle '><FaInstagram></FaInstagram></button>
                        <button className='text-2xl btn btn-circle '><FaTwitter></FaTwitter></button>
                    </div>
                </div>
            </footer>
            <div className="container mx-auto">
                <aside className="text-center py-8">
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;