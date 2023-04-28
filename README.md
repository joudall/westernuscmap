
# UCC Interactive Building Explorer

This is an interactive building explorer application built with React, React Three Fiber, and Drei. Users can navigate through different levels of the building, hover over individual rooms to view basic information, and click on rooms for more details. The application also includes search functionality for quick navigation.



## Requirements
Nodejs must be installed

The GLTF file has to be present in your projects /public folder
three (>= 122.x)

@react-three/fiber (>= 5.x)

@react-three/drei (>= 2.x)
## Main Components
- App:
    The main application component.
- Atrium, Level2, LowerLevel, Level3: 
    Components representing each floor in the building.
- CameraController: 
    Component for controlling the camera position.
- ModelController: 
    Component for managing the visibility of different floor models.
- RoomList: 
    Component for displaying a searchable list of rooms.

## Features
- Interactive 3D building visualization
- Multiple building levels 
    (Lower Level, Atrium, Level 2, Level 3)
- Room search functionality
- Hover effect for room preview
- Clickable rooms for detailed information
- Mobile-friendly sidebar navigation
## NPM
This project uses npm as a package manager for javascript dev dependencies.

How to install npm


## Getting Started
1. Install dependencies:
npm Install

2. Run the development server:
npm start

3. Open your browser to http://localhost:3000 to view the application.

## Download .blend Files

Please ensure you have all the floor blend models downloaded and in your /public folder before running.

Google Drive:https://drive.google.com/drive/folders/1rJ4jcVRnE-BP6AKrUwJ22D0g36eKeuqH?usp=sharing

## JSON Data Format

The data for the rooms and their information is stored in a JSON file with the following format:

```json
[
{
  "Level": {
    "Room #": {
      "Name": "Room #",
      "Content": "Information here.",
      "Hours": "Enter hours of operation",
      "Website": "https://..."
    },
    ...
}
]
```

## Note
This application requires @react-three/fiber, @react-three/drei, and react-icons packages. 

Please ensure you have these dependencies installed before running the application.


## Feedback

If you have any feedback, please reach out to us at https://westernusc.ca/contact-us/

