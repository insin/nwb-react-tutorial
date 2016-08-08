// We have to cheat on the zero config thing because React 15.3.0 has a couple
// of global "process" references left after eliminating process.env.NODE_ENV,
// which cause a process shim to be imported from node-libs-browser.
module.exports = {
  webpack: {
    extra: {
      node: {
        process: false
      }
    }
  }
}
