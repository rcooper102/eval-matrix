# How to use this project

### Install node dependencies

```js
npm install
// or
yarn
```

### Run Webpack Dev Server

```js
npm start
// or
yarn start
```

### CLI

- All functionality is avaible through a route level static `Controller` singleton object on the console command line
- I'm too lazy to document it all, look at the class if you want to learn about all the functions.

### Notes

- This was hacked together for internal use.
- It was only tested in chrome
- It makes many presumptions that data is valid or will crash and burn
- Corners were cut in code quality, many things could be refactored to be more logical/efficient
- Yup, I used a super primative hash routing system. Couldn't be bothered to create something more robust. 