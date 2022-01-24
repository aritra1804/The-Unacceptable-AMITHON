import React, { useState, Fragment } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 400,
        sm: 640,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 'black',
    p: 2,
    '&:focus': {
      outline: 'none',
    },
    [theme.breakpoints.down('md')]: {
      mt: -10,
    },
    [theme.breakpoints.down('sm')]: {
      mt: 0,
      width: '100%',
      overflow: 'scroll',
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      mt: 0,
      width: 380,
      overflow: 'scroll',
      height: '100%',
    },
  };
  return (
      <Fragment>
          <nav className='overflow-hidden py-4 px-4 ml-[20px]'>
          <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] mx-auto px-4 mt-[5px]">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <p className='className="w-52 xs:w-60 md:w-64 self-center  text-[#6F5DE0] font-bold text-xl'>
                    STARX COMPANY
                  </p>
                </Link>
              </div>
              <div className='hidden lg:block'>
              <div className='flex items-center space-x-4 '>
                <a
                  href="/store"
                  className="text-white text-lg px-3 py-2 font-medium"
                >
                  About
                </a> 
                <a
                  href="/aboutmawa"
                  className="text-white text-lg px-3 py-2 font-medium"
                >
                  Details
                </a>
                <a
                  href="/store"
                  className="text-white text-lg px-3 py-2 font-medium"
                >
                  Team
                </a>
                <a
                  href="/store"
                  className="text-white text-lg px-3 py-2 font-medium"
                >
                  Features
                </a>
              </div>
              </div>
              
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center space-x-4">
                {/* <a
                  href="/store"
                  className="text-[#0B7EC1] text-lg px-3 py-2 font-medium"
                >
                  Login
                </a> */}
                <button className='bg-[#6F5DE0] text-white py-3 px-8 rounded-md'>
                    Demo
                </button>
                <button className='bg-[#6F5DE0] text-white py-3 px-8 rounded-md'>
                    Download Apk
                </button>
              </div>
            </div>
            <div className="-mr-3 xs:-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/store"
                  className="text-white text-lg px-3 py-2 font-medium "
                >
                  About
                </a>
                <a
                  href="/aboutmawa"
                  className="text-white text-lg px-3 py-2 font-medium "
                >
                  Details
                </a>
                <a
                  href="/store"
                  className="text-white text-lg px-3 py-2 font-medium "
                >
                  Team
                </a>
                <a
                  href="/store"
                  className="text-white text-lg px-3 py-2 font-medium "
                >
                  Features
                </a>
                <div className='space-x-4'>
                <button className='bg-[#6F5DE0] text-white py-2 px-8 rounded-md'>
                    Demo
                </button>
                <button className='bg-[#6F5DE0] text-white py-2 px-8 rounded-md'>
                    Download Apk
                </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
          </nav>
      </Fragment>
  );
}

export default Header;
