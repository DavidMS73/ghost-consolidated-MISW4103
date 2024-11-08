Feature: Create post
  Create a new blog post, whether it is an article, guide, review, story, tip, recipe, etc., and can use a variety of elements, such as images, videos, links, and other media to keep readers interested.

  Scenario: Create a post to be published later
    Given I navigate to ghost local page
    When I login to the application
    And I visit "posts" section
    And I click on "New post"
    And I fill title with "Test post"
    And I fill description with "Description test post"
    And I program a post to be published later
    Then I go to posts section
    And I go to scheduled posts
    And the post should be in the scheduled posts list
