import React from 'react';
import { motion } from 'framer-motion';
import * as anims from '../animations/anims';
import Link from 'next/link';

export default function ListContainer() {
  return (
    <motion.div variants={anims.fadeInUp}>
      <h2>Spaceflight!</h2>
      <div className="mt-12 relative z-10">
        <div>
          <motion.div
            variants={anims.rotateIntoPlace}
            transition={{ duration: 0.4 }}
            className="w-screen h-56 bg-red-600 rounded-l-2xl absolute transform -rotate-2"
          ></motion.div>
        </div>
        <div className="flex w-full h-56 relative bg-gray-200 z-10 rounded-l-2xl py-4 px-6 text-black">
          <Link href="test">
            <a>
              <img
                src="https://cataas.com/cat/says/hello%20world!"
                alt="cat"
                className="h-40 rounded-lg"
              />
              <p>Click Me!!</p>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
