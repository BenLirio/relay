<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://therelayresource.com/wp-content/uploads/2020/06/relay-logo-white-background-1.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Relay Resource
</h1>

## How to develop

## Steps

**Warning this workflow has not been thoroughly tested. If you find yourself spending more than a couple minutes on any step feel free to take a screen shot and send it to the tech channel. I am sure someone will be able to help out**

If you run into any errors following these steps and figure out how to do anything better please edit this readme.

1. Change to `dev` branch
   ```bash
   $ git checkout dev
   ```
2. Make sure your working branch is clean (may have to commit or discard changes)
   ```bash
   # Should say working branch is clean
   # if not you will have to add changes or discard them
   $ git status
   ```
3. Pull any updates
   ```bash
   # Synchronize your local version
   $ git pull
   ```
4. Create a new branch
   ```bash
   # Creates a branch but does not change your current branch
   $ git branch [your-branch]
   # Change to that branch
   $ git checkout [your-branch]
   ```
5. Develop
   ```bash
   # Installs dependencies. May already be installed but just to double check
   $ npm install
   # equivalent to `gatsby clean` then `gatsby develop`
   $ npm run develop
   ```
6. Stage changes
   ```bash
   # stage
   $ git add [path-to-your-changed-files]
   # OR to stage all changed files
   $ git add .
   # make sure your branch is clean
   $ git status
   ```
7. Commit changes
   ```bash
   $ git commit -m "[your message]"
   ```
8. Switch to dev with `git checkout dev`
9. Merge `[your-branch]` to dev
   ```bash
   $ git merge `[your-branch]`
   ```
10. Push changes to origin/dev (you must be a contributor)
    ```bash
    # make sure you branch is clean
    $ git status
    # make sure you have most recent version
    $ git pull
    # (Optional) run locally
    $ npm run serve
    # push to dev
    $ git push origin dev
    ```
11. Open https://github.com/BenLirio/relay
12. Create a pull request from dev to master that will look like this
    ```
    master <- dev
    ```
13. Starting August 1 merge request will required to be reviewed

## Notes:

- Merging to master should result in a functional website 99% of the time. If you would like to test your application locally run:
  ```bash
  # this will serve production equivalent application to localhost:9000
  $ npm run serve
  ```
- You will have to set up your /keys/relay-cms-key.json file. Should be pinned in the relay slack channel.
- Running npm install will give you multiple warnings and possibly some errors, should be ok as long as it completes.
- Try your best to not work directly on `dev` branch, could cause confusing merge conflicts.

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
