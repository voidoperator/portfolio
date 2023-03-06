import { motion } from 'framer-motion'

const colors = ['#1f1f1f', '#4b4b4b', '#818181', '#c2c2c2', '#f0f0f0']

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const dotVariants = {
  initial: {},
  animate: {
    height: [40, 100, 40],
    transition: {
      repeat: Infinity,
    },
  },
}

export const LoadingDots = ({ count = 5 }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='initial'
      animate='animate'
      className='flex h-24 items-center gap-4'
    >
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={dotVariants}
              className='h-10 w-6 rounded-3xl'
              style={{ backgroundColor: colors[index % colors.length] }}
            />
          )
        })}
    </motion.div>
  )
}
