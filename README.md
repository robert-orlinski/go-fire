![](/app/src/static/mockups/main-mockup.jpg?raw=true 'Start page of the app')

# GoFIRE App 🌱

The application was built to provide useful utilities for people who want to become financially free or early retired (hence the FIRE in the name).

Right now, you can use it as a journal in which is possible to add new investments, savings, and others based on categories you choose. Categories too may be added or removed, just like entries in your journal. This is useful if you want to take care of your investment decisions, don't do anything hastily, and learn from your previous experience.

In the future, I want to add some other features about which you can read in the section (almost) at the end ✨

## Some screenshots:

![](/app/src/static/mockups/start-page.jpg?raw=true 'Start page of the app')

![](/app/src/static/mockups/adding-new-entry.jpg?raw=true 'Adding new entry')

![](/app/src/static/mockups/all-entries.jpg?raw=true 'All entries view')

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

## What's next?

I am writing about a bunch of tools so I have to add more of them in the future!

To do:

1. Login and register page, to host app somewhere and let it be available for more people than we - developers. And maybe something like a start page with similar info like here on GitHub.
2. The page which scraps indexes and returns their indicators such as P/E, P/B, EPS, etc. and returns pieces of information about if markets are properly evaluated. Why? To have a better understanding of which stage of the boom we are.
3. The page with predictions of how much money I need to save to be retired in some time (giving specific interest rate) or how fast I will be if I will save particular money, invest at the specific interest, and need the concrete amount.

And that's it! Let's go back to work.

## Contribution

GoFIRE is an open-source project done for training, so code review or contributions of any kind are welcome and appreciated. Feel free to make `bug`, `code-review`, `enhancement` or `question` requests in the [issues](https://github.com/robert-orlinski/go-fire/issues) tab ☀️
