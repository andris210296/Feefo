# Feefo
 Feefo Software Engineering Technical Assessment






## Notes Management API

### 1. User Registration
- Endpoint: `POST /register`
- Parameters: `username`, `password`
- Process:
  - Check if `username` already exists in the database
  - If `username` exists, return an error message
  - If `username` does not exist, hash the `password` and store the `username` and `hashed password` in the database
- Response: Success message

### 2. User Login
- Endpoint: `POST /login`
- Parameters: `username`, `password`
- Process:
  - Check if `username` exists in the database
  - If `username` does not exist, return an error message
  - If `username` exists, compare the `hashed password` in the database with the `hashed version` of the input `password`
  - If they match, return a success message and a `JWT token` for authentication
  - If they do not match, return an error message
- Response: Success message and JWT token

### 3. Create Note
- Endpoint: `POST /notes`
- Parameters: `note title`, `note content`, `JWT token`
- Process:
  - Verify the `JWT token` and get the `username`
  - Store the `note title`, `note content` and `username` in the database
- Response: Success message

### 4. Update Note
- Endpoint: `PUT /notes/{noteId}`
- Parameters: `note title`, `note content`, `JWT token`
- Process:
  - Verify the `JWT token` and get the `username`
  - Check if the `noteId` exists in the database and belongs to the `username`
  - If it does not exist or does not belong to the `username`, return an error message
  - If it exists and belongs to the `username`, update the `note title` and `note content` in the database
- Response: Success message

### 5. Delete Note
- Endpoint: `DELETE /notes/{noteId}`
- Parameters: `JWT token`
- Process:
  - Verify the `JWT token` and get the `username`
  - Check if the `noteId` exists in the database and belongs to the `username`
  - If it does not exist or does not belong to the `username`, return an error message
  - If it exists and belongs to the `username`, delete the note from the database
- Response: Success message

### 6. List Notes
- Endpoint: `GET /notes`
- Parameters: `JWT token`
- Process:
  - Verify the `JWT token` and get the `username`
  - Retrieve all notes that belong to the `username` from the database
- Response: List of notes


## Notes Management API JSON Requests and Responses

### 1. User Registration
- Endpoint: `POST /register`
- JSON Request:
```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```

- JSON Response:
```json
{
  "message": "Registration successful",
  "username": "exampleUser"
}
```

### 2. User Login
- Endpoint: `POST /login`
- JSON Request:
```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```

- JSON Response:
```json
{
  "message": "Login successful",
  "username": "exampleUser",
  "token": "exampleJWTtoken"
}
```

### 3. Create Note
- Endpoint: `POST /notes`
- JSON Request:
```json
{
  "title": "exampleTitle",
  "content": "exampleContent",
  "token": "exampleJWTtoken"
}
```

- JSON Response:
```json
{
  "message": "Note created successfully",
  "note": {
    "id": "noteId",
    "title": "exampleTitle",
    "content": "exampleContent"
  }
}
```

### 4. Update Note
- Endpoint: `PUT /notes/{noteId}`
- JSON Request:
```json
{
  "title": "updatedTitle",
  "content": "updatedContent",
  "token": "exampleJWTtoken"
}
```

- JSON Response:
```json
{
  "message": "Note updated successfully",
  "note": {
    "id": "noteId",
    "title": "updatedTitle",
    "content": "updatedContent"
  }
}
```

### 5. Delte Note
- Endpoint: `DELETE /notes/{noteId}`
- JSON Request:
```json
{
  "token": "exampleJWTtoken"
}
```

- JSON Response:
```json
{
  "message": "Note deleted successfully",
  "noteId": "noteId"
}
```

### 6. List Notes
- Endpoint: `GET /notes`
- JSON Request:
```json
{
  "token": "exampleJWTtoken"
}
```

- JSON Response:
```json
{
  "notes": [
    {
      "id": "noteId1",
      "title": "noteTitle1",
      "content": "noteContent1"
    },
    {
      "id": "noteId2",
      "title": "noteTitle2",
      "content": "noteContent2"
    }
  ]
}
```










