import {motion} from 'framer-motion'

export default function Badge({ caption }) {
  return <motion.span className="badge" animate={{scale: [1, 1.3, 1]}} transition={{duration: .3}}>{caption}</motion.span>;
}
