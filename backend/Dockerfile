# Use official Node.js image as the base image
FROM node:alpine

# Set working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose port 8000 to the outside world
EXPOSE 8000

# Command to run the application
CMD ["npm", "start"]