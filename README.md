# Finnish Passport Photo Image Cropper

This project provides a web application for cropping images according to the Finnish passport photo standards.

## Features

- Image upload functionality with support for `.heic` format conversion.
- Interactive image cropping using Cropper.js.
- Overlay guidelines to assist in cropping images to meet Finnish passport requirements.
- Download cropped images with a filename including a timestamp.

## Prerequisites

Before running this project, make sure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://your-repository-url.git
cd your-project-directory
npm install

```

## Usage

To start the application, run the following command:

```bash
Copy code
npm start
```

This will start the server on http://localhost:3000 by default.

Open your web browser and navigate to http://localhost:3000 to access the application.

## Deployment

The application is ready to be deployed on platforms like Vercel. Ensure you have linked your GitHub repository with your Vercel account for CI/CD integration.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any changes you'd like to make.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

 [Cropper.js](https://fengyuanchen.github.io/cropperjs/) for the image cropping functionality. 
 [heic2any](https://github.com/alexcorvi/heic2any) for HEIC to JPEG conversion.