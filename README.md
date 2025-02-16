# demo-nginx

This project is a simple example of setting up Nginx and Node.js using Docker and Docker Compose.

## Project Structure

- `.github/workflows/`: Contains GitHub Actions configuration.
- `.dockerignore`: Specifies files or directories to be excluded from the Docker build context.
- `.gitignore`: Specifies files or directories to be ignored by Git.
- `Dockerfile`: Defines how to build the Docker image for the application.
- `docker-compose.yaml`: Manages multiple containers using Docker Compose.
- `index.html`: The main HTML file of the application.
- `nginx.conf`: Configuration file for Nginx.
- `package-lock.json` and `package.json`: Node.js package management files.
- `server.js`: The main server file of the application.

## Installation and Usage

1. **Install Docker and Docker Compose**: Ensure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system.

2. **Clone this repository**:

   ```bash
   git clone https://github.com/aeff60/demo-nginx.git
   cd demo-nginx
   ```

3. **Run the application using Docker Compose**:

   ```bash
   docker-compose up --build
   ```

   This command will build and run the containers based on the settings in `docker-compose.yaml`.

4. **Access the application**: Open your web browser and go to `http://localhost` to see the running application.

## Support

If you have any questions or encounter any issues, please open an issue in this repository.

## Author

This project is developed by [aeff60](https://github.com/aeff60).

