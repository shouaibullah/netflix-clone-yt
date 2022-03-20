import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const [header, setHeader] = useState(false);
  const { data: session } = useSession();

  const transitionNavbar = () => {
    if (window.scrollY > 70) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
  }, []);
  return (
    <main
      className={`flex justify-between items-center z-[1000] h-16 px-7
     pt-3 sticky top-0 ${
       header && ' bg-black duration-300 transition-all ease-in-out'
     }`}
    >
      <div className=" relative h-8 w-20 lg:h-10 lg:w-32">
        <Image
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <div className=" md:flex space-x-7 hidden">
        <p className="menu-items">movies</p>
        <p className="menu-items">shows</p>
        <p className="menu-items">favorites</p>
        <p className="menu-items">my list</p>
      </div>
      {session && (
        <div onClick={signOut} className="cursor-pointer">
          <Image
            src={session.user.image}
            width="40"
            height="40"
            alt=""
            className="rounded-full"
          />
        </div>
      )}
    </main>
  );
};

export default Header;
