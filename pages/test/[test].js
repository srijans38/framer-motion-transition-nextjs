import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Test({ path }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="text-white space-y-12 flex flex-col items-start mx-auto max-w-7xl mt-24 font-sans"
    >
      <button onClick={() => router.back()} className="text-4xl">
        &larr;
      </button>
      <h2 initial={false} layout className="text-2xl font-bold">
        Cute Cat Videos!
      </h2>
      <motion.img
        layoutId={`${path}`}
        src="https://cataas.com/cat/says/hello%20world!"
        alt="cat"
        className="h-36 w-64 rounded-lg object-cover"
      />
      <motion.img
        layoutId={`${path}1`}
        src="https://cataas.com/cat/says/hello%20world!"
        alt="cat"
        className="h-36 w-64 rounded-lg object-cover"
      />
    </motion.div>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: { path: ctx.query.test },
  };
};
