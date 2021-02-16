import React from 'react';
import { motion } from 'framer-motion';

export default function Test() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="text-white"
    >
      <motion.img
        layoutId="cat"
        src="https://cataas.com/cat/says/hello%20world!"
        alt="cat"
        className="h-40 rounded-lg"
      />
      <p>Hello</p>
    </motion.div>
  );
}
