# Building a Timer Component with Test Driven Development

## Overview

In this lab, we will ask you to develop a timer component test first. Unlike the other labs; it's ok to pair or swarm with a few other. We will use react and vitetest to create a simple component using test driven development. The goal of this assignment:

-Learn a little bit of technical stuff about testing with vitest

- Give TDD a try to form an opinion.

Please refrain from using AI on this assignment.

## Steps

Your role is as a software engineering team building a timer application. Your team manager has assigned you the story:

> “As a student participating in swarm coding sessions
> I want a timer component that I can set with minutes and seconds
> So that I can track and limit the time spent on coding activities. The timer component should be able to start, stop, and reset the timer. The timer should display the remaining time in a human-readable format (e.g., "02:30" for 2 minutes and 30 seconds). The timer should also have a callback function that is called when the time is up.”

Follow the steps in [kent beck’s post on testing](https://tidyfirst.substack.com/p/canon-tdd) as an example. A few notes:

- Record the brainstorm tests in a comment at the beginning of the test file. Think about how the component will be used. What are the inputs and outputs? What are the edge cases (cases at the extremes of the possible passed values)? What are the error cases? What are the "happy paths" where the component gets passed something expected? What are the "sad paths" where the component is called wrong or in a contradictory way? What are the performance cases?
- A first test for rendering a component; not passing is included at no extra charge. Watch how this one runs and logs the html for debugging.

Get things running early and often. Have a simple test first. Use `screen.debug()` from the testing library to verify what is rendered.
Your tests will go in the file basic.test.tsx; the component will go in /components/Timer.tsx. It’s scaffolded in the template. The template includes a function to produce a string of remaining time ([formatDuration](./src/functions/duration.ts)) that’s ready made for you (duration.ts already imported in Timer.tsx).

When you feel complete as a pair/triad; submit the url to the repo and pair/triad names to the canvas for each person.

## Some Technical Hints

- In react, you will need to use hooks (useState) and useEffect() in the component.
- See Chris Riesbeck’s “Testing” Resources on this page: [Software Development Resources](https://courses.cs.northwestern.edu/394/guides/overviews.php).
- We use the react testing library; especially “render” and “screen”. This [tutorial](https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/) is particularly helpful
  -The vitest function vi.fn is especially useful when testing callbacks. This page explains mocks generally including `vi.fn()`. [Mocking | Guide | Vitest](https://vitest.dev/guide/mocking)
- Two useful methods during testing from the react test tools are `screen.debug()` and `screen.logTestingPlaygroundURL()`.

  - This [blog](https://testing-library.com/docs/dom-testing-library/api-debugging/) article provides a summary of this and some other tips for debugging purposes.
  - `screen.debug()` puts the html that would be rendered in the console
  - `screen.logTestingPlaygroundURL()` returns a url that you can traverse to see your current component rendered in the browser.

- The assignment also has timing which is tricky and discussed in the mocking guide. I've solved this lab both by using a mock timer and by using the real timerYou can use `vi.useFakeTimers()` to mock the timers. To get rendering to work with the fake timers, you need to call `vi.advanceTimersByTime()` and wrap in `act(() => {})`. This is [stackoverflow](https://stackoverflow.com/questions/73609501/cant-test-timer-in-react-using-vitest-jest) provides the most precise explanation.

## Verifying results

So unlike other labs; you will define your own tests. Make sure they run with `npm test` and that they pass. Your goal is to have a working timer component that passes all the test. You should have at least 5 tests. Your test should cover at least 80% of the code in Timer.tsx (you are welcome to add tests to `App.tsx` which may helpful but not required). You can check this with `npm run coverage`. The vitest UI will show you precisely what lines have test coverage and don't. Even once you achieve high coverage; you still may not have a working component; as you find things you miss; write test for them. You can also use `npm run test:watch` to run the tests in watch mode. This will rerun the tests when you save the file. This is a great way to get fast feedback on your code. You can also use `npm run test:ui` to run the tests in a UI mode. This will show you the results of the tests in a more user-friendly way.
