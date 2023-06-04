# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the backend code to the working directory
COPY . .

# Expose the port on which your backend server will run
EXPOSE 3000

# Start the backend server
CMD ["node", "index.js"]
