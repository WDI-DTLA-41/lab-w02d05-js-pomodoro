s# 🍅The Pomodoro Technique

You've been hired to create a pomodoro app!

There are six steps in the pomodoro technique:

- Decide on the task to be done.
- Set the pomodoro timer (traditionally to 25 minutes).
- Work on the task until the timer rings. If a distraction pops into your head, write it down, but immediately get back on task.
- After the timer rings, put a checkmark on a piece of paper.
- If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 1.
- After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.

# MVP

When a user visits the page they should see
    
    - An input field to add a task
    - a button that says "Start"

When a user clicks "Start" they should see
    
    - "Currently working on..." plus the name of the task
    - A counter decreasing from 25 minutes.

# Feature Requests

When a user has started a task, after 25 minutes, they should see
   
    - "Completed tasks: " and the name of the task
    - "Take a break!"
    - A counter decreasing from 5 minutes

After a user has completed 3 tasks, when a user clicks "Break" they should see
    
    - "Take a break!"
    - a counter decreasing from 15 minutes

The client would like to personalize their pomodoro by changing the Work and Break times to whatever they want.

When a user clicks a "Config" they should see

    - inputs to change "Work" and "Break" times from their default 25 and 5 values.

Make your breaks relaxing!

# Resources

- https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
- https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/settimeout
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
