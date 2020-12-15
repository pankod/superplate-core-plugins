module.exports = {
    apply (pkg, answers) {

      const prettier = answers.includes('prettier')
      if (prettier) {
        delete pkg.devDependencies['prettier']
      }
      return pkg
    }
  }
