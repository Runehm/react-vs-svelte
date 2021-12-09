## React vs Svelte(kit) - a naive comparison of syntax


This mono-repo is a research into the differences (pro's and con's) of React and Svelte.

You will see two folders/apps within the monorepo (react & svelte).

* The react package is bootstrapped from the Vite starter template for React in js.
  * Framework: [React.js](https://reactjs.org/) 
  * built tool: [vite](https://vitejs.dev/)

* The svelte package is bootstrapped from the sveltekit starter template with js.
  * Framework: [SvelteKit](https://kit.svelte.dev/)
  * compiler: [Svelte](https://svelte.dev/)
(note: svelte kit is comparable to NextJs. So it does come with some tools out of the box that our react built does not. But it isn't the goal of this research to compare on that level. (so don't start yelling, i know 🤠).


## Why? and what?

### Why?

The purpose of this research monorepo is to find pro's and con's of both frameworks ( react & svelte ).

### What?

We will a set of simple proof of concept components (the ussual suspects: form, todo-app, counter, login mask) You know the drill.

Furthermore we want to write simple unit tests to be able to compare the complexity of writing unit tests in the different frameworks

This way we can analyse the code syntax etc.

key comparison points:
* syntax (complexity and length)
* developer friendlyness
* pains
* nice stuff

