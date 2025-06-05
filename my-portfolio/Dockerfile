# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN npm run build


# Copy the rest of the project files
COPY . .

# Start Vite dev server
CMD ["npm", "run", "preview"]
