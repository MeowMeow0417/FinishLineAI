# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy application files
COPY . .

# Build and run Next.js app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
