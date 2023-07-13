# project : time zone

## project Objective
 * this project is based on front end time zone 
 * here an user can use this apps for his maintaining his time location and create his time zone 

## Project Requirement:
# Track Zone

# Track Zone Project Overview

---

- User can set their own time and timezone, this clock can’t be deleted only be edited
- User can create as many clock as they want
    - Each clock has their own title or name
    - Own Timezone
    - Simple Events with time
    - Time difference between users timezone and clock timezone in hour and minute
- User can edit or delete a clock
- Timezone could be UTC (standard), GMT, PST, EST
- only date-fns library is allowed for this project, rest of the logic should write by yourself
- Every data must be validated

🕛 🕐 🕝 

# What to submit?

- A proper breakdown of the requirements
- Component Tree and Data Flow
- Finally, Proper use of components and custom hooks

## Requirements Breakdown

---

We will have a local clock and a list of clocks

We will create the intial clock from users timezone

Clock Object will look like

- id
- title
- timezone
    - type (UTC, GMT, PST, EST)
    - offset
- date
- events [event1, event2, event3]

Event Object will look like

- id
- clockId
- text
- timezone
- startTime
- endTime

We will use a clock object for local clock.

And use an array of clocks for other clocks. 

We will use event id to create events inside clock



## Project Features:

**Clock Features**

- properties
- update clock
- delete clock
- calculate difference
- update events

**Event Features**

- properties
- create event
- delete event
- update event
- filter events by clock
- get event by id
- get events by ids


## Project configurations amd installation:


## Project Architecture


## Project Deploy: 
* Live Link: 

## command for formation
``` yarn create react-app react-tailwind-css-state ```
```yarn add -D tailwindcss postcss autoprefixer ```
```yarn tailwindcss init -p```

***tailwind.config.js file
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}***

***@tailwind base;
@tailwind components;
@tailwind utilities***



## command process link 

https://dev.to/ashirbadgudu/set-up-tailwind-css-with-create-react-app-and-yarn-pio

# run command 
``` yarn start ```
