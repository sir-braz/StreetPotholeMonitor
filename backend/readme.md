# Road Pothole Geolocation API Documentation

The Road Pothole Geolocation API is a solution developed to assist municipalities in identifying and locating road potholes. This documentation provides all the necessary information to effectively use the API.

## Base URL

`https://api.example.com`

## Endpoints

### 1. Report a new pothole

**Endpoint:** `/potholes`
**Method:** POST
**Description:** Allows users to report the presence of a new pothole on the road.

**Request Parameters:**
- `latitude` (float): Latitude of the pothole.
- `longitude` (float): Longitude of the pothole.
- `description` (string): Additional description of the pothole (optional).

**Example Request:**
```
POST /potholes
Content-Type: application/json

{
  "latitude": -23.5489,
  "longitude": -46.6388,
  "description": "Large pothole on the main avenue."
}
```

**Success Response:**
- Status Code: 200
- Response Body:
  ```
  {
    "message": "Pothole reported successfully."
  }
  ```

### 2. Get list of potholes

**Endpoint:** `/potholes`
**Method:** GET
**Description:** Returns the list of reported potholes.

**Query Parameters:**
- `radius` (float): Search radius in meters from a given location (optional).

**Example Request:**
```
GET /potholes?radius=1000
```

**Success Response:**
- Status Code: 200
- Response Body:
  ```
  {
    "potholes": [
      {
        "latitude": -23.5489,
        "longitude": -46.6388,
        "description": "Large pothole on the main avenue."
      },
      {
        "latitude": -23.5501,
        "longitude": -46.6402,
        "description": "Pothole at the corner of Secondary Street."
      }
    ]
  }
  ```

## Contributing

Contributions are welcome! If you would like to contribute to the Street Pothole Monitor project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure that your code follows the project's coding style and includes appropriate tests.

### Development Setup

1. Clone the repository:

   ```bash
    - git clone https://github.com/your-username/street-pothole-monitor.git
   
    - cd street-pothole-monitor

    - npm install

    - npm start

    - sudo docker-compose up

