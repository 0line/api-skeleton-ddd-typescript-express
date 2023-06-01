Feature: Register in application
  I am guest and i want to register

  Scenario: Check the register that new user
    Given I send a PUT request to "/api/v1/users/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "email": "myuser@email.com",
      "password": "password123"
    }
    """
    When the response status code should be 201 for register
    Then the response should be empty
