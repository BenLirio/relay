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

## 🎓 Learning React and Gatsby

React tutorials: https://reactjs.org/tutorial/tutorial.html

Gatsby documentation:https://www.gatsbyjs.org/

Recommendation focus more on React concepts rather than how gatsby actually works. It is a bit confusing but Gatsby is a framework built on top of React framework which is built on top of browser code (HTML, JavaScript, CSS)

## Deploy

Continuous integration has been set up in order to deploy create a pull request to master.

you may want to run `npm run serve` to make sure everything is working properly
