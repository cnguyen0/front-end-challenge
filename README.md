# Front end take home challenge
This is my submission for the front end take home challenge

## Run this code

1. Run `git clone https://github.com/cnguyen0/front-end-challenge.git`
2. cd into the root directory
3. Run `npm start`

## What I worked on and my design decision
In order to create a dynamic profile, I used states in the my components (profile, input, dropdown) in order to utilize React's state. Everytime when the state is updated, the components will re-render to reflect the changes of the state. Some type of fields I had in the state are profile data and invalid/success message display. Since I store data in the state, I set the defaultValue of the inputs and dropdown to the appropriate value. Also, I stored boolean values to display invalid/success messages and using those boolean to display the html element that held that element. Within my time, I decided to componentize input and dropdown because of the repetitive form fields. We can pass in attributes into our component to read the incoming data.

## Things I would consider if I had more time
1. Adding CSS to the validation form
2. Sanitizing the data
3. Front-end data validation (if there are any requirements for each field)
4. Adding a Invalid/Success message component
5. A thorough Form component
6. Implement some type of store to store data rather than storing in the state

* When documenting what you did and what you'd do next, try to write the reasons for your choices so that we can follow your thought process.
