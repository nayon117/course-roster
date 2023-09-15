
# Course Registration

This site provides an extensive catalog of available courses, including detailed information such as course image, names, details, credit,price etc.


## Documentation

[Documentation](https://react.dev/)


## Features

 - **Dynamic Course Display** : When a client clicks on the "Select" button for a course, the course name is dynamically displayed on the right side of the page.
- **Credit Limit** : The system enforces a maximum credit limit of 20. Users cannot select courses that would exceed this credit limit
- **Single Selection** : Prevents users from selecting the same course multiple times.
- **Course Details**: Each course is accompanied by essential information, including its name, details, credit hours, and price.
- **Responsive Design**: The course registration site is designed with responsiveness in mind.

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## State Management

In this course registration site, I've effectively managed the application's state using React's built-in `useState` hook. Here's an overview of how we've used state variables:

### `courses` State

- **Description**: The `courses` state variable is used to store the list of available courses that users can select from.

### `selectedCourse` State

- **Description**: The `selectedCourse` state variable keeps track of the courses that a user has selected for registration. It is an array that dynamically updates as users choose courses.

### `remaining` State

- **Description**: The `remaining` state variable is responsible for tracking the remaining available credit hours that a user can use for course registration. It is initialized with a value of `20` and decreases as users select courses.

### `totalCredit` State

- **Description**: The `totalCredit` state variable calculates and stores the total number of credit hours associated with the courses that a user has selected. It updates dynamically as courses are added or removed.

By effectively managing these state variables, I ensure that users can:
- Select courses from the available list.
- Keep track of the remaining credit hours.
- View the total credit hours of their selected courses in real-time.
## Tech Stack

**Used for this project:** React, DaisyUi, TailwindCSS

 


## Support

For any support, email codewithnayon.com .


## Feedback

If you have any feedback, please reach out to us at codewithnayon.com

