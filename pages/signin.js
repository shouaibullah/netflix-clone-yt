import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const siginin = () => {
  return (
    <main>
      <div>
        <Image
          src="https://dataintegration.info/wp-content/uploads/2021/05/15lyavS59mazOFnb55Z6znQ-eBR0nt.png"
          layout="fill"
          objectFit="cover"
          alt=""
          priority={true}
        />
        <div className=" bg-black/60 absolute h-full w-full" />
        <div className=" absolute top-1/3 text-center mx-auto w-full space-y-5 md:space-y-7">
          <p className="text-lg md:text-2xl">Welcome back!</p>
          <h2 className=" text-4xl md:text-6xl max-w-2xl mx-auto">
            Unlimited movies, TV shows, and more.
          </h2>
          <p className=" text-lg md:text-2xl max-w-2xl mx-auto">
            Watch anywhere. Cancel anytime.
          </p>
          <button
            onClick={signIn}
            className="bg-red-700 w-40 h-10 lg:w-64 lg:h-16 lg:text-2xl shadow-lg"
          >
            Finish Sign Up
          </button>
        </div>
      </div>
    </main>
  );
};

export default siginin;
