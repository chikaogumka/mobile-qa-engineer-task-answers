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

<details>
    <summary>QUESTION 2B Answer</summary>

Testing can be performed by using datasets gotten from using Boundary value analysis or Equivalence partitioning technique.

![Data Driven test](https://github.com/chikaogumka/mobile-qa-engineer-task-answers/blob/test-task-answers/images/BVA.png)

Figure describes the datasets that would be used as inputs during testing the application that allows input of 0 - 100. Testing will be performed to ensure the application only accepts data in the ‘valid’ range. Application should throw errors for invalid inputs and edge cases.
</details>

<details>
    <summary>QUESTION 3 Answer</summary>

**Additional questions about testing search fucntion to stake holders** 
- Is there any string limit for input into the search box and are all string characters accepted?
- Do we have Language translation strings ready for testing?
- What specific types of items should the search function be able to find? (e.g., restaurants, dishes, cuisines, ingredients)
- Are there any filters or advanced search options that users should be able to apply?
- How does the search algorithm prioritize search results? (e.g., relevance, popularity, distance)
- What are the expected response times for search queries under normal and peak usage conditions?
- Are there any performance benchmarks or targets that the search function should meet?
- What information should be displayed in the search results? (e.g., restaurant names, ratings, photos, prices)
- Should search results be paginated, or should all relevant results be displayed on a single page?
- How should the search function handle misspelled or ambiguous search queries?
- Are there any special considerations for users with dietary restrictions or preferences?
- Does the search function need to integrate with other app features, such as user reviews, recommendations, or ordering capabilities?
- Will the search function support multiple languages and regions?
- Are there any cultural or regional preferences that should be considered in search results?
- What are some typical user scenarios or use cases that we should consider as priority when testing the search function in case we want to automate them right away?
- Are there any edge cases, business critical case or unusual scenarios that we should test to ensure robustness and reliability?

**Test plan and test cases for search bar in Bolt food app**
| Test Case  | Description  | Expected Result  |  Priority |
|---|---|---|---|
|  1 |  Verify visibility and accessibility of the search bar on all app screens |  The search bar is visible and accessible from any screen within the app |  High |
|  2 | Test searching for a specific restaurant name  |  The entered restaurant name returns the corresponding restaurant in the search results | High  |
|  3 |  Test searching with a generic keyword (e.g., "pizza") | Relevant restaurants and dishes matching the keyword are displayed in the search results  | High  |
|  4 | Test filtering options (e.g., by cuisine, price range)  |  Search results are filtered based on the selected filter options |  Medium |
|  5 |  Test sorting options (e.g., by rating, distance) | Search results are sorted correctly based on the selected sorting option  | Medium  |
|  6 | Verify navigation from search results to detailed restaurant or dish pages  | Users can navigate seamlessly from search results to detailed pages for selected items  |  High |
|  7 |  Test integration with other app features (e.g., user reviews, ratings) | Integration with other app features functions smoothly and enhances the user experience  |  High |
|  8 |  Perform load testing with a large dataset | Search function performance remains optimal even under peak usage conditions  |  High |
|  9 |  Measure response times for search queries | Search queries return results within acceptable timeframes  | High  |
|  10 |  Test error handling for invalid search queries | App displays appropriate error messages for invalid search queries  |  Medium |
|  11 |  Test autocomplete or predictive search functionality |  Autocomplete feature accurately predicts search queries and enhances user experience |  Medium |


Using this draft test plan, no bugs were found but here is an assumed bug report ticket content.

Ticket id: 

Title/Summary:

Bug Description:

Steps to reproduce:

Criticality/Priority/Severity:

Platform:

Stack Trace:

Images/Screenshot:

SDK Version:

Assignee:

Status

</details>


<details>
    <summary>Question 4a answer</summary>

    Answer found in `divisibleCountFunction.js` file
</details>


<details>
    <summary>Question 5 answer</summary>

    Answers found in `returnAllCustomers.sql` and `returnCustomersOrders.sql`  file
</details>
