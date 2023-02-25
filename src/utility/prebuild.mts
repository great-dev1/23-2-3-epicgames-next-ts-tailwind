// Path: src\utility\prebuild.ts
// This runs before the next build process - it's a good place to run any prebuild scripts.
// E.g. Fetch and cache data from an API, or run a script to generate a file.

const prebuild = () => {
  console.log('Running Prebuild ✅')
}

prebuild()

export default prebuild
