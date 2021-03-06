import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>STORYOFHAPPINESS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 2,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
