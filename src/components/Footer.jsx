import React from "react";
import {FaHeart} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {socialLinks} from '../constant/Constant'

const Footer = () => {
  
    return (
      <footer className={`${ 'footer-bg-dark'} py-10`}>
        <div className={`${ 'max-w-7xl'} mx-auto px-4 lg:px-8`}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between border-t-2 border-gray-300/30 dark:border-gray-700 gap-8">
            {/* Copyright */}
            <p className="text-sm text-center sm:text-left flex items-center">
              Made with <FaHeart className="mx-1" /> by
              <Link to="https://github.com/Timqtzy" className='mx-1 hover:underline underline-offset-4'>Tim</Link>
            </p>
            {/* Social Media Links */}
            {/* All links are placeholders except for Github */}
            <div className="flex flex-row flex-wrap justify-center gap-4 order-first sm:order-last">
              {socialLinks.map((link) => (
                <Link
                  key={`link-${link.title}`}
                  to={link.url}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;