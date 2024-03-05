# FROM node:14.9

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]





# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN yarn run build

# Expose the port on which the app will run
EXPOSE 3000

# Define the command to run the application
CMD ["yarn", "start"]
