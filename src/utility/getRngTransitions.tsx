export default function getRngTransition() {
  const duration = Math.random() * 1.07
  const delay = Math.random() * 1.11
  return {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      delay: delay,
    },
  }
}
