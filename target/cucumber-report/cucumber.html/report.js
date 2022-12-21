$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "As a user I want to use the different features on the Computer Page",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4734265699,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Computer Page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am navigated to the Computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 90056400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersMenuTab()"
});
formatter.result({
  "duration": 873225900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iAmNavigatedToTheComputersPageSuccessfully()"
});
formatter.result({
  "duration": 39768199,
  "status": "passed"
});
formatter.after({
  "duration": 641997300,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "As a user i want to Log in to the nop commerce website",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2522954601,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should be able to navigate to Login page successfully",
  "description": "",
  "id": "login-page-test;verify-user-should-be-able-to-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to the Login page and see message \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 845382700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 46
    }
  ],
  "location": "LoginPageSteps.iNavigateToTheLoginPageAndSeeMessage(String)"
});
formatter.result({
  "duration": 51311101,
  "status": "passed"
});
formatter.after({
  "duration": 636580700,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user I am able to register on the nop commerce website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2497741801,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to Register page successfully",
  "description": "",
  "id": "register-page-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am navigated to the Register page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44201,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 411099000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iAmNavigatedToTheRegisterPage()"
});
formatter.result({
  "duration": 47278100,
  "status": "passed"
});
formatter.after({
  "duration": 644046900,
  "status": "passed"
});
});