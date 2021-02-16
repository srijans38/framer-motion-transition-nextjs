import React from 'react';
import { motion } from 'framer-motion';
import * as anims from '../animations/anims';
import Link from 'next/link';

export default function ListContainer({ title, layoutId }) {
  return (
    <motion.div className="min-w-4xl 2xl:min-w-5xl" variants={anims.fadeInUp}>
      <h2 className="font-bold text-2xl">Cute Cat Videos!</h2>
      <div className="mt-9 relative z-10">
        <div>
          <motion.div
            variants={anims.rotateIntoPlace}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl h-52 bg-ytred md:rounded-xl absolute"
          ></motion.div>
        </div>
        <div className="flex items-center w-full max-w-5xl h-52 relative bg-gray-200 z-10 md:rounded-xl py-4 px-6 space-x-10 text-black">
          <Link href={`/test/${layoutId}`}>
            <a>
              <motion.img
                layoutId={`${layoutId}`}
                src="https://cataas.com/cat/says/hello%20world!"
                alt="cat"
                className="h-32 w-56 rounded-lg object-cover"
              />
              <p className="mt-2 mx-1 font-bold w-56 text-sm ">
                Click Me Click Me Click Me Click Me !!
              </p>
            </a>
          </Link>
          <Link href={`/test/${layoutId}`}>
            <a>
              <motion.img
                layoutId={`${layoutId}1`}
                src="https://cataas.com/cat/says/hello%20world!"
                alt="cat"
                className="h-32 w-56 rounded-lg object-cover"
              />
              <p className="mt-2 mx-1 font-bold w-56 text-sm ">
                Cat Cat Cat Cat Cat Cat Cat Cat!!
              </p>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
