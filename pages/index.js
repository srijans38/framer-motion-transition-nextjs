import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ListContainer from '../components/list-container';
import { stagger } from '../animations/anims';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className="mx-12 2xl:mx-auto w-screen font-sans bg-bg text-white max-w-screen-8xl h-screen flex pt-20"
    >
      <div className="hidden md:block xl:w-60 2xl:w-72 fixed">
        <h2 className="font-bold text-2xl">Srijan Sharma</h2>
        <p className="mt-4 text-sm">About</p>
        <p className="font-bold">I love pizza!!</p>
      </div>
      <div className="bg-gray-600 w-px xl:ml-60 2xl:ml-72 h-screen fixed"></div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="md:ml-80 2xl:ml-auto space-y-16"
      >
        <ListContainer title="cat-vids" layoutId="cat" />
        <ListContainer layoutId="dog" />
        <ListContainer layoutId="dogdsad" />
        <div className="h-20"></div>
      </motion.div>
    </motion.div>
  );
}
