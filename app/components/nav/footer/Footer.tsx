import React from 'react'
import Container from '../../Container';
import FooterList from './FooterList';
import Link from 'next/link';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
       <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
       <Container>
    <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
       <FooterList>
       <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
       <Link href="#">Phones</Link>
       <Link href="#">Laptops</Link>
       <Link href="#">Desktops</Link>
       <Link href="#">Watches</Link>
       <Link href="#">Tvs</Link>
       <Link href="#">Accessories</Link>
       </FooterList>  
       <FooterList>
       <h3 className='text-base font-bold mb-2'>Customer Service</h3>
       <Link href="#">Contact Us</Link>
       <Link href="#">Shipping Policy</Link>
       <Link href="#">Returns & Exchanges</Link>
       <Link href="#">FAQs</Link>
       </FooterList>  
       <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 className="text-base font-bold mb-2">About Us</h3>
        <p className="mb-2">At E-Shop, we are passionate about delivering high-quality electronics products to our customers. With an unwavering commitment to excellence, we curate a diverse range of cutting-edge gadgets, state-of-the-art appliances, and innovative tech solutions. Our mission is to provide an unparalleled shopping experience, offering the latest in electronics to enhance your lifestyle. Committed to customer satisfaction, we strive to bring you top-tier brands and expertly crafted electronics. Discover the future in our collection and embark on a journey with E-Shop into the world of innovative technology.</p>
        <p>&copy;{new Date().getFullYear()} E-shop. All rights reserved</p>
       </div>
       <FooterList>
       <h3 className="text-base font-bold mb-2">Follow Us</h3>
       <div className="flex gap-2">
        <Link href="#">
         <FaSquareFacebook size={24}/>
        </Link>
        <Link href="#">
         <FaSquareXTwitter size={24}/>
        </Link>
        <Link href="#">
         <RiInstagramFill size={24}/>
        </Link>
        <Link href="#">
         <IoLogoYoutube size={24}/>
        </Link>
       </div>
       </FooterList>
    </div>
    </Container>
    </footer>
  )
}

export default Footer
