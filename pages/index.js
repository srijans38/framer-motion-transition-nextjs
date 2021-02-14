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
      exit={{ opacity: 0 }}
      className="m-0 bg-bg text-white w-screen h-screen flex pl-12 pt-20 overflow-x-hidden"
    >
      <div className="w-1/5">
        <h2>Srijan Sharma</h2>
        <p>I love pizza!!</p>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="flex-grow space-y-16"
      >
        <ListContainer />
        <ListContainer />
        <ListContainer />
      </motion.div>
    </motion.div>
  );
}
