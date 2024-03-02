# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Express.js application will run
EXPOSE 5000

# Set environment variables, if required
# ENV MONGO_URL=mongodb://mongo:27017/mydatabase

# Start the application
CMD ["npm", "start"]