import React from 'react';
import { motion } from 'framer-motion';

export default function Test() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="text-white"
    >
      <p>Hello</p>
    </motion.div>
  );
}
