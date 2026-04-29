# API Testing Summary

## Project Context

This section demonstrates API testing skills using Postman as a companion API testing project for the SauceDemo QA portfolio. Since SauceDemo is primarily a UI testing practice application and does not provide a public backend API for testing, JSONPlaceholder was used as a public REST API to demonstrate backend validation, request testing, response verification, negative testing, and environment variable usage.

## Tools Used

- Postman
- JSONPlaceholder API
- REST API
- JavaScript assertions
- Environment variables
- JSON request/response validation

## API Test Coverage

The Postman collection includes the following API test scenarios:

- Get all posts
- Get a single post by ID
- Create a new post
- Update an existing post
- Delete a post
- Validate response status codes
- Validate JSON response body fields
- Validate API behavior using environment variables

## Validations Performed

- Verified HTTP status codes such as 200, 201, and 204
- Validated response body fields such as `userId`, `id`, `title`, and `body`
- Confirmed that created and updated post data is returned correctly
- Used environment variables to manage reusable values such as `baseUrl` and `postId`
- Verified JSON response structure
- Tested CRUD-style API behavior

## QA Value

This API testing section demonstrates my ability to validate backend API behavior, test common REST API operations, inspect JSON responses, write Postman test assertions, and use environment variables effectively. It also reflects my understanding of API limitations in mock environments and how to validate responses based on structure, status codes, and expected behavior rather than data persistence.

## Side Note
Note: JSONPlaceholder is a mock API. PUT, POST, and DELETE requests return successful responses but do not persist changes. Validation is based on returned response body, status codes, and request/response structure.
