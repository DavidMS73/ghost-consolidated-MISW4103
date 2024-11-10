Feature: Crear página

@user1 @web
Scenario: E005 - Crear una página básica, darle al botón de preview y luego al botón de publicar
  Given I navigate to page "<BASE_URL>"
  And I wait for 2 seconds
  And I login with email "<EMAIL>" and password "<PASSWORD>"
  And I wait for 2 seconds
  When I click the pages button
  And I wait for 1 seconds
  And I click the new page button
  And I wait for 1 seconds
  And I fill the page title with text "$name_1"
  And I wait for 1 seconds
  And I click the page content
  And I wait for 1 seconds
  And I click preview button
  When I wait for 1 seconds
  And I click the publish button
  And I wait for 1 seconds
  And I click the continue final review button
  And I wait for 2 seconds
  And I click the publish page button
  And I wait for 1 seconds
  Then I should see title "$$name_1" inside a modal
  When I wait for 1 seconds
  And I click the pages type filter
  And I wait for 1 seconds
  And I click the published pages filter
  And I wait for 1 seconds
  Then I should see the first page with title "$$name_1"