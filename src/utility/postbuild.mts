// Path: src\utility\prebuild.ts
// This runs AFTER the next build process.
// Examples of postbuild scripts:
// - Upload the build to a CDN
// - Send a notification to Slack
// - Run a script to generate a file

const postbuild = () => {
  console.log('Running Postbuild ✅')
}

postbuild()

export default postbuild
