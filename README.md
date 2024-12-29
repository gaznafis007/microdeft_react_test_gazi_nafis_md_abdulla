# Frontend Internship Program - Microdeft React Test Submission

## Project Overview

This repository contains the solution for the Microdeft React Test. The project includes a set of forms to register, log in, store courses, and display the stored course data in a creative card design.

### Requirements

1. **Registration Form**: A form to create a new user with `name`, `email`, and `password`.
2. **Login Form**: A form to log in and retrieve an authentication token.
3. **Course Form**: A form to store course data including title, description, badge text, badge color, and instructor name.
4. **Course Display**: A component to fetch and display the list of courses in a creative card design.

### Tools & Technologies Used

- **React**: The main framework used for building the UI.
- **Tailwind CSS**: Used for styling the components.
- **Postman**: Used for testing API requests.
- **Axios**: Used for making HTTP requests to the API endpoints.

### API Endpoints

The application interacts with the following API endpoints:

- **Register**:
  - `POST https://react-interview.crd4lc.easypanel.host/api/register`
  - Sends user details (`name`, `email`, `password`).

- **Login**:
  - `POST https://react-interview.crd4lc.easypanel.host/api/login`
  - Sends login credentials (`email`, `password`) and receives a `token` for authentication.

- **Store Course**:
  - `POST https://react-interview.crd4lc.easypanel.host/api/course`
  - Sends course details (`title`, `description`, `badge_text`, `badge_color`, `instructor_name`).

- **Fetch Courses**:
  - `GET https://react-interview.crd4lc.easypanel.host/api/course`
  - Fetches the list of courses (requires passing the authorization `token`).

### Setup

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/microdeft_react_test_gazi_nafis_md_abdullah.git

### Live Site Link
    https://microdeft-react-test-gazi-nafis-md-abdulla.vercel.app
