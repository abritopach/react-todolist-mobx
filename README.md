# React-TodoList-Mobx

* Reactjs

This project is an example created in the [Mobx Official Page](https://mobx.js.org/getting-started.html) that have been modified by me. This project has been developed to practice my skills with the tech stack shown above.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Use mobx with create-react-app

Proper way of installing mobx when you are using create-react-app is as follows:

1. create-react-app ExampleApp
2. npm run eject
3. npm install --saveDev babel-plugin-transform-decorators-legacy
4. Update your .babelrc file or package.json and added transform-decorators-legacy

    ```
    "babel": {
        "presets": [
          "react-app"
        ],
        "plugins": [
          "transform-decorators-legacy"
        ]
      }
    ```
    
5. npm install --save mobx mobx-react

Another option: use [custom-react-scripts](https://github.com/kitze/custom-react-scripts)


## Running

Before you go through this example, you should have at least a basic understanding of React concepts. You must also already have create-react-app installed on your machine.

To run it, cd into `react-todolist-mobx` and run:

```bash
yarn install
yarn start or npm start
```

## Requirements

* [Node.js](http://nodejs.org/)
* [React](https://facebook.github.io/react/docs/installation.html)

## License
   
The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   
Original work Copyright (c) 2017 Adrián Brito