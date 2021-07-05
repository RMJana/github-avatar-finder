# Getting Started with Github Users Finder

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

The main goal of this project is to provide the user with a friendly GUI, in
order to make a search of users in github and to complete the Lana Front-End
Assesment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information. Also will create snapshots pro story defined in the project.
See https://www.npmjs.com/package/@storybook/addon-storyshots

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Rest-API GitHub V3

As explained in the GitHub API Docs
(https://docs.github.com/en/rest/reference/search#search-users) sorting is not
allowed with login or type. The solution for this WebApp is allow sorting per
shown page.

## React-Query

This WebApp uses React-Query for managing the data-fetching functionality.
https://react-query.tanstack.com/overview

As a performance add-on will save all queries introduced in the Search field and
will load them without making a new call. This performance can be followed in
the ReactQueryDevtools Section Displayed in the Browser as the WebApp is loaded.

The pagination performance of this WebApp could be refactored following
https://react-query.tanstack.com/guides/paginated-queries

## Grommet

This WebApp uses Grommet Component-Library as is an open-source project, with
very active contributors,has a good rate in the community and is easy to
integrate.

https://v2.grommet.io/ https://storybook.grommet.io/?path=/story/all--all

## Storybook

This WebApp includes a storie pro component integrated with MockServiceWorker in
order to catch APICalls and mock them. (https://mswjs.io/ and
https://www.npmjs.com/package/msw-storybook-addon)

Also is integrated snapshottesting pro story, the snapshots pro story will be
created by npm run test.
(https://www.npmjs.com/package/@storybook/addon-storyshots)
