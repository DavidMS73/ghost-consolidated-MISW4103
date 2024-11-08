Feature: Create post
  Create a new blog post, whether it is an article, guide, review, story, tip, recipe, etc., and can use a variety of elements, such as images, videos, links, and other media to keep readers interested.

  Scenario:  E001 - Create a post to be published later
    Given I navigate to ghost local page
    When I login to the application if necessary
    And I visit "posts" section
    And I click on "New post"
    And I fill title with "Test post scheduled"
    And I fill description with "Description test post scheduled"
    And I click on publish post button
    And I program a post to be published later
    Then I go to scheduled posts
    And the post "Test post scheduled" should be in the list

  Scenario: E002 - Create a post to be published right now
    Given I navigate to ghost local page
    When I login to the application if necessary
    And I visit "posts" section
    And I click on "New post"
    And I fill title with "Test post right now"
    And I fill description with "Description test post  right now"
    And I click on publish post button
    And I program a post to be published right now
    Then I go to published posts
    And the post "Test post scheduled" should be in the list
