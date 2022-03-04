Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given User opens login page
    When User selects in Make and Audi dropdowns
    When User clicks Browse cars button
    Then Only the following item is displayed in the list Audi
