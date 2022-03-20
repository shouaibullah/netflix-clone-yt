import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const HeroItem = ({ result }) => {
  const baseURL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();
  const { data: session } = useSession();

  function logIn() {
    if (session) {
      router.push(`/movie/${result.id}`);
    } else {
      router.push(`/signin`);
    }
  }
  return (
    <section className=" relative h-screen md:h-[80vh] lg:h-screen z-20">
      <Image
        src={`${baseURL}${result.backdrop_path || result.poster_path}`}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div
        className=" h-full w-screen z-40 absolute top-0 left-0 bg-gradient-to-t from-black
       md:bg-gradient-to-r"
      >
        <div className=" absolute bottom-16 md:top-[20%] left-5 md:left-10 max-w-md space-y-2 md:space-y-5">
          <h1 className=" text-4xl md:text--6xl">{result.title}</h1>
          <div className="flex space-x-3">
            <p className=" text-red-600">
              Release:
              <span className=" text-gray-200">{result.release_date}</span>
            </p>
            <p className=" text-red-600">
              Rate:
              <span className=" text-gray-200">{result.vote_average}</span>
            </p>
          </div>
          <p className=" text-gray-500 text-sm">{result.overview}</p>
          <div className=" space-x-4 pt-6">
            <button
              className="bg-red-800/70 text-gray-300 h-8 w-28 md:h-10 md:w-32 rounded-lg
           cursor-pointer hover:bg-red-700 hover:text-gray-100
            duration-200 transition-all ease-in-out uppercase"
              onClick={logIn}
            >
              Play Now
            </button>
            <button
              className="bg-gray-200/70 text-red-700 h-8 w-28 md:h-10 md:w-32 rounded-lg
           cursor-pointer hover:bg-gray-300 hover:text-red-600 ring-red-900
            duration-200 transition-all ease-in-out uppercase text-sm"
            >
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroItem;
