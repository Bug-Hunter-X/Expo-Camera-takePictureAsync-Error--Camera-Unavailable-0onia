# Expo Camera takePictureAsync Error: Camera Unavailable

This repository demonstrates a common error encountered when using the Expo Camera API's `takePictureAsync` method. The error occurs when attempting to capture an image before the camera component has fully initialized.  This usually leads to an error message indicating the camera is unavailable.

The solution involves using the `Camera.getStatusAsync` method to ensure that the camera is ready before calling `takePictureAsync`. Proper asynchronous handling is crucial to prevent this issue.

## Bug Reproduction

1. Clone the repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Run `expo start`. 
4. Observe the error message in the console when the app attempts to capture an image before the camera is ready.

## Solution

The solution file (`bugSolution.js`) demonstrates the correct method for handling camera initialization and ensuring the camera is ready before capturing an image.