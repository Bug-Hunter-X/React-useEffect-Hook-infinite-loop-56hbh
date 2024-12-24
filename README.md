# React useEffect Hook infinite loop
This repository demonstrates a common mistake in React's useEffect hook that can lead to an infinite loop. The issue occurs when a state variable is updated within the useEffect function without being included in the dependency array, resulting in a continuous re-render and update cycle. 

## Problem
The `useEffect` hook in the `App.js` file attempts to increment the `count` state variable on every render. Because `count` is not in the dependency array, the useEffect runs on every render, causing an infinite loop. 

## Solution
The solution involves adding the `count` variable to the dependency array, so that useEffect only runs when count changes.  If the `useEffect` doesn't need to run on every render, you can pass an empty array `[]` as the dependency array to ensure it only runs once after the initial render. If you want the effect to only run after a specific state variable changes, include that variable in the dependency array.