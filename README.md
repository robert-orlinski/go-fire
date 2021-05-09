# GoFire App 🌱

The application was built to provide useful utilities for people who want to become financially free or early retired (hence the FIRE in the name).

Right now, you can use it as a journal in which is possible to add new investments, savings, and others based on categories you choose. Categories too may be added or removed, just like entries in your journal. This is useful if you want to take care of your investment decisions, don't do anything hastily, and learn from your previous experience.

In the future, I want to add some other features about which you can read in the section at the end ✨

## Some screenshots:

![](/app/src/static/screenshots/start-page.jpg?raw=true 'Start page of the app')

![](/app/src/static/screenshots/adding-new-entry.jpg?raw=true 'Adding new entry')

![](/app/src/static/screenshots/all-entries.jpg?raw=true 'All entries view')

## How you can run it in your local environment?

Copy the repo:

```
git clone https://github.com/robert-orlinski/go-fire.git
cd the-path-to-which-you-cloned-the-project
```

Run the server:

```
cd server
npm install
npm run start
```

Run the app:

```
cd app
npm install
npm run start
```

What's **important**, you need to put MongoDB Atlas URL in the .env file to make your server working. The cluster associated with this URL needs to have 2 collections: `categories` and `entries`.

Those commands will start the server once and app in the development environment but you can check both package.json files to find more commands (e.g. server file changes watching and app build).

## Used technologies:

Front-End:

1. React.js (the main project framework);
2. TypeScript (language which makes JavaScript type safe);
3. Styled Components (CSS in JS tool);
4. Formik (React helper for better forms);
5. React Router (declarative routing tool for React).

Back-End:

1. Express.js (the main API framework);
2. MongoDB (NoSQL database);
3. Nodemon (utility that allows us to run a server in the "watch" mode).

## Contribution

GoFIRE is an open-source project done for training, so code review or contributions of any kind are welcome and appreciated. Feel free to make `bug`, `code-review`, `enhancement` or `question` requests in the [issues](https://github.com/robert-orlinski/go-fire/issues) tab ☀️
