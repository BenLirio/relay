<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://therelayresource.com/wp-content/uploads/2020/06/relay-logo-white-background-1.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Relay Resource
</h1>

## 🚀 Run Locally (Linux and Mac)

1.  **Download Dependencies**

    **Code editor:**

    Strongly recommend vscode. (other options: sublime, atom, brackets)

    **Install node:**

    first check version

    ```shell
    $ node -v
    ```

    If nothing comes up use homebrew to install.

    ```shell
    $ brew install node
    ```

    Now when you run the first command you should have an up to date version of node.
    Preferably over 10.0.0

    **Create a github account and set up ssl:**

    - Go to github.com and create an account
    - Find SSH keys section github.com/setting/keys
    - Generate and paste key into github (may already have a key in ~/.ssh)

2)  **Download the project.**

    Learn basics of folder navigation wither terminal.

    Go to documents folder

    ```shell
    $ cd ~/Documents
    ```

    clone the project (set up ssl for your git hub account)

    ```shell
    $ git clone git@github.com:BenLirio/relay.git
    ```

    Enter project and open it up in editor (vscode)

    ```shell
    $ cd relay
    $ code .
    ```

3.  **Development environment**

    **Download Dependencies**

    ```shell
    $ npm install
    ```

    **Start Development Server**

    ```shell
    $ npm run develop
    ```

    Result should look like this

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## What this project containes?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning React and Gatsby

React tutorials: https://reactjs.org/tutorial/tutorial.html

Gatsby documentation:https://www.gatsbyjs.org/

Recommendation focus more on React concepts rather than how gatsby actually works. It is a bit confusing but Gatsby is a framework built on top of React framework which is built on top of browser code (HTML, JavaScript, CSS)

## Deploy

Deployment is using firebase, you will have to install dependencies for that.

Once you are ready use:

```shell
$ firebase deploy
```

May have to alter some permissions to get this to work
