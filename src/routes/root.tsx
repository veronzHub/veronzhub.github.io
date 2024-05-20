import { motion } from "framer-motion";
import Nav from "../components/nav";

export default function Root() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Home Page</h1>
        <Nav />
      </motion.div>
    </>
  );
}
