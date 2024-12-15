These tests are written in Cypress/Javascipt

To install cypress:

1. First ensure that you have node/npm installed. Run the following to check the versions that you have installed:
   ```
   npm -v
   node -v
   ```

2. In your chosen directory, create a folder using
   ```
   mkdir foldername
   ```
3. Navigate to that folder and initialise the new node project. This will generate a ```package.json``` file in your product directory
   ```
   npm init -y
   ```
4. Now install cypress, this will then install the minimum necessary to get started
   ```
   npm install cypress --save -dev
   ```

5. For these tests, an E2E test framework was chosen.

   You have two choices from here to start off with, you can either:
     - create E2E folder inside the new ```cypress``` folder
     - or you can run ```npx cypress open```

       - When ```npx cypress open``` is run, the cypress browser UI will appear. You will then be given the choice of an E2E Testing or a Component Testing framework. Click E2E Testing.
       - You will then be given the option of browsers, click on Chrome.
       - You also have the option to select 'New Spec,' which will be given you an example of a basic framework to begin writing tests.
   For these test examples:
       - You will then see the list of test classes. Clicking on any of them will immediately cause the tests in that class to run.
       - The test classes that you can see are found in the E2E folder that was created.
      
6. You can also run these tests headlessly in the terminal. To do this:
   - Ensure you are in the root of your project, otherwise cypress will not be able to find the tests and will create a new instance of Cypress. If this occurs, you can simply delete it.
   - Run ```npx cypress run``` - this will then find the E2E folder that was created, and run all the test classes that are in that folder
   - If you wish to run a test class on its own, an example command is ```npx cypress run --spec "cypress/e2e/login_data_validation.cy.js"```
  
Running tests with reports

This test suite has been set up to use Mochawesome test reports.

To run with full suite and generate the report, use
```
npm run cy:run
```


   

