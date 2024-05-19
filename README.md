# Mobile-qa-engineer-task-answers
## Question 1

| Data Driven Testing  | Behavioural Driven Testing |
| ------------- | ------------- |
| Data driven testing entails using a set of prepared data to run defined test scenarios in a way that requires dynamic data input into the system in consideration during testing. This method of testing validates the test results after runs against another dataset which should be a source of truth. |  Data driven testing entails using a set of prepared data to run defined test scenarios in a way that requires dynamic data input into the system in consideration during testing. This method of testing validates the test results after runs against another dataset which should be a source of truth. |
| Key concepts includes test data seperation where test scripts are seperated from test data, parameterization where test scripts are designed to accept parameters, Data sources where data comes from, iterative Execution where test cases are executed iteratively and Validation of tests results | Key concepts includes User stories that describes how application should behave, using Gherkin GIVEN-WHEN-THEN-AND/BUT to define app's behaviour without detailing how the functionality is implemented, creating scenarios from all user stories, Collaborating with other stakeholders to ensure a shared understanding, Automating user stories  |
 | ![Data Driven test](https://github.com/chikaogumka/mobile-qa-engineer-task-answers/blob/main/images/DDT.png) | ![Behavioural Driven test](https://github.com/chikaogumka/mobile-qa-engineer-task-answers/blob/main/images/BDT.png)  | 
 | *EXAMPLES*:
    EXAMPLE OF DDT: Test data for a function that adds numbers
    [    (1, 2, 3),   # Test case 1: 1 + 2 = 3
            (5, 5, 10),  # Test case 2: 5 + 5 = 10
            (-1, 1, 0),  # Test case 3: -1 + 1 = 0
            (0, 0, 0),   # Test case 4: 0 + 0 = 0
    ]
        
     EXAMPLE OF BDT: Bolt food's search restaurant feature scenario
     can look like this.
     Feature: Search restaurants Scenario should
     successfully show name of restaurant if it exsits on platform.
     GIVEN the restaurant's name is Moku
     WHEN the user searches Moku
     THEN Moku restaurant and other restaurants related to result should be displayed.


## Question 2b
Testing can be performed by using datasets gotten from using Boundary value analysis or Equivalence partitioning technique.

![Data Driven test](https://github.com/chikaogumka/mobile-qa-engineer-task-answers/blob/test-task-answers/images/BVA.png)

Figure describes the datasets that would be used as inputs during testing the application that allows input of 0 - 100. Testing will be performed to ensure the application only accepts data in the ‘valid’ range. Application should throw errors for invalid inputs and edge cases.
