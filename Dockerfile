# # 1. Use an official Python runtime as a parent image
# FROM python:3.9-slim

# # 2. Set the working directory in the container
# WORKDIR /app

# # 3. Copy the current directory contents into the container
# COPY . /app

# # 4. Install any needed packages specified in requirements.txt
# # (If you don't have a requirements.txt, you can skip this line or add 'RUN pip install requests')
# RUN if [ -f requirements.txt ]; then pip install -r requirements.txt; fi

# # 5. Make port 5000 available to the world outside this container
# EXPOSE 5000

# # 6. Run the application
# CMD ["python", "app.py"]
# Use Nginx to serve static content
FROM nginx:alpine

# Copy your files to the Nginx html folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
