Feature: Register in application
  I am guest and i want to register

  Scenario: Check the register that new user
    Given I send a PUT request to "/api/v1/users/0766c602-d4d4-48b6-9d50-d3253123275e" with body:
    """
    {
      "id": "0766c602-d4d4-48b6-9d50-d3253123275e",
      "email": "mail@email.com",
      "password": "password123",
      "confirmPassword": "password123"
    }
    """
    When the response status code should be 201 for register
    Then the response should be empty
  

  Scenario: Check is a valid register user
    Given I send a PUT request to "/api/v1/users/0766c602-d4d4-48b6-9d50-d3253123275e" with body:
    """
    {
      "id": "0766c602-d4d4-48b6-9d50-d3253123275e",
      "email": "mailemail.com",
      "password": "password123",
      "confirmPassword": "password1234" 
    }
    """
    Then the response status code should be 422 for register
