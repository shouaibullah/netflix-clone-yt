import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const SliderItem = ({ result }) => {
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
    <div
      className=" relative flex min-w-[250px] h-[10rem] hover:border-2 hover:scale-105 duration-500"
      onClick={logIn}
    >
      <Image
        src={`${baseURL}${result.backdrop_path || result.poster_path}`}
        width="330"
        height="210"
        alt=""
        objectFit="cover"
        className=" z-20"
      />
      <div
        className=" absolute top-0 left-0 z-50 flex items-end justify-center w-full h-full pb-8 group
      hover:bg-black/70 duration-500"
      >
        <p className=" hidden group-hover:inline-block text-sm">
          {result.title}
        </p>
      </div>
    </div>
  );
};

export default SliderItem;
