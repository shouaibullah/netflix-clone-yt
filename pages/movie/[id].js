import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Head from 'next/head';
import Link from 'next/link';

const movie = ({ movies }) => {
  const movie_index = movies.videos.results.findIndex(
    (element) => element.type === 'Trailer'
  );
  return (
    <main>
      <Head>
        <title>netflix | {movies.title || movies.orginal_name}</title>
        <link rel="icon" href="/images/netflix-logo.svg" />
      </Head>
      <div className=" h-12 pt-3 hover:underline">
        <Link href="/">Go to HomePage</Link>
      </div>
      <div className=" relative min-h-[90vh]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movies.videos?.results[movie_index]?.key}`}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: '0', left: '0' }}
          controls={true}
        />
      </div>
    </main>
  );
};

export default movie;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      movies: request,
    },
  };
}
