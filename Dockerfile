FROM node:12

WORKDIR /opt/spotfiyapp

# ONLY copy and install dependencies, to build a docker "layer".
# This speeds up later builds when only the app source changes
COPY package*.json ./
RUN npm install

# Copy the rest of our app
COPY . .

# Expose the port our app will listen on
EXPOSE 80

# Entrypoint to our app
RUN ["npm", "run", "start"]
