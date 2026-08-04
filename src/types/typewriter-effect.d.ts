// `typewriter-effect` failed to include pauseFor in `Options`
// manually extending it here
declare module 'typewriter-effect' {
  interface Options {
    pauseFor?: number
  }
}
