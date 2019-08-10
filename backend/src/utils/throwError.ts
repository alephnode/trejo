/**
 * Wrapper function to throw errors
 */
export default (msg: string): Error => {
  throw new Error(msg)
}
