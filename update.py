#!/usr/bin/python3
import requests

# Replace this URL with the raw URL of the file you want to download
github_raw_url = "https://raw.githubusercontent.com/username/repository/branch/path/to/file.txt"

# Specify the file path where you want to save the file
destination_path = "path/to/your/local/file.txt"

try:
    # Send a GET request to the URL
    response = requests.get(github_raw_url)
    response.raise_for_status()  # Raise an HTTPError for bad responses (4xx and 5xx)

    # Write the content to a local file
    with open(destination_path, "wb") as file:
        file.write(response.content)

    print(f"File downloaded successfully to {destination_path}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")