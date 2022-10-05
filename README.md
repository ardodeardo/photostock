# React Boilerplate
**React Boilerplate** is a starter kit tool that makes it easy for developers, especially frontend web developers, to start their projects from scratch using the React Js library. This tool is already packed with plugins or other libraries which are generally used by React JavaScript developers.

## Features
The main features of the **React Boilerplate** include:

1. **React starter kit**
	 - [CRA](https://create-react-app.dev/ "https://create-react-app.dev/") (create-react-app)
2. **Routing and navigation**
	-   [React Router](https://github.com/ReactTraining/react-router)  a tool to manage root url pages
3. **Flux architecture**
	-   [Redux](https://redux.js.org/docs/introduction/) a Predictable State Container for JS Apps
	-   Redux Wrapper:  [Rematch](https://github.com/rematch/rematch) is Redux best practices without the boilerplate
4. **UI Toolkit & Styling** 
	- [Asphalt React](https://asphalt.pages.golabs.io/asphalt-react/ "https://asphalt.pages.golabs.io/asphalt-react/"), Asphalt React helps developers to avoid recreating interfaces and accelerate product development.
	- [Twin.macro](https://github.com/ben-rogerson/twin.macro "https://github.com/ben-rogerson/twin.macro"), Twin blends the magic of Tailwind with the flexibility of css-in-js.
	- [Styled-components](https://styled-components.com/ "https://styled-components.com/"), Visual primitives for the component age
5. **Utilities and other tools**
	- [Axios](https://www.npmjs.com/package/axios "https://www.npmjs.com/package/axios"), Promise based HTTP client for the browser and node.js
	- [Lodash](https://lodash.com/ "https://lodash.com/"), A JavaScript utility library delivering consistency, modularity, performance, & extras.
	- [React Hook From](https://react-hook-form.com/ "https://react-hook-form.com/"), Performant, flexible and extensible forms with easy-to-use validation.

## Requirements

This should be installed on your computer in order to get up and running:

- **[Node.js](https://nodejs.org/en/)** Required node version is >= `10.0`
- **[npm](https://www.npmjs.com/)** Version `6.0.*`
- **IPSec VPN**

> Make sure you have the things above installed on your computer, especially `IPSec VPN`, if you have any doubts please follow the procedure for installing `IPSec VPN` at [gate.gojek.co.id](https://gate.gojek.co.id/)

## Get Started
let's start using the React Starter project by following the steps below.

### installation & setup your project

1. **Clone Repo** Make sure you have a **React boilerplate** clone repository.
	```
	git clone git@source.golabs.io:gojek-web/react-boilerplate.git [name-directory]
	```
2. **Setup git config**
	```
	// -- remove git config
	$ rm -rf .git

	// -- resetup git
	$ init git
	```
3. **Install dependencies**
	```
	npm install
	```
4. **Update Project Config**
	Open file `package.json`, and change value of index `name` using your directory project name.
	
> If you have done the syntax above before, there is no need to do a step 3 process. but if you are not sure then just do it for check updated.

### Serve or deploy Project

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Install & Use Asphalt React

Before you start using the components of asphalt react, there are a few things you should know. including:

1. Make sure you have IPSec VPN
2. Make sure you have studied the guidelines for Asphalt React itself, [Asphalt React documentation](https://asphalt.pages.golabs.io/asphalt-react/).

#### Simple starter using asphalt react
```
import Button from  '@asphalt-react/button'

export  default  ()  =>  <Button>click me</Button>
```

> list of our npm package in golabs. [here](https://npm.golabs.io/) 
