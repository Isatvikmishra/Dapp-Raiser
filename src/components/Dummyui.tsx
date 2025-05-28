// components/Dummyui.tsx
import { motion } from "framer-motion";

export default function Dummyui() {
  return (
    <motion.div
      className="animate-pulse bg-slate-200 rounded-lg shadow-md p-4 h-52 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-32 bg-slate-300 rounded mb-4"></div>
      <div className="h-4 bg-slate-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-slate-300 rounded w-1/2"></div>
    </motion.div>
  );
}
