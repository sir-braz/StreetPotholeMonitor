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

## Final Remarks

The Road Pothole Geolocation API is a powerful tool to assist in pothole identification and maintenance. Make sure to provide all the necessary information when using the endpoints and follow the specified conventions to achieve the best results.

This documentation is just a basic overview of the API. For more detailed and advanced information, please refer to the complete documentation at [link to full documentation].