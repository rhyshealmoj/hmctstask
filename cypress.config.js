const { defineConfig } = require("cypress");


module.exports = defineConfig({

  reporter: '../node_modules/cypress-mochawesome-reporter',
  reporterOptions:{
  reportsDir: '.../reports/html/.jsons',
  overwrite: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    baseUrl: 'https://courses.ultimateqa.com/users/sign_in',
  },
});


