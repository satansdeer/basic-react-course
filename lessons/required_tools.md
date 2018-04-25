---
path: "/lessons/required-tools"
date: "2017-11-07"
title: "Required Tools"
---

## Contents

* [Terminal](#terminal)
* [Code Editor](#code_editor)
* [Node](#node)
* [Yarn](#yarn)

<a name="terminal"></a>
## Terminal

First thing you are going to need - is a command line. If you are on windows - I recommend getting [Cmderr](http://cmder.net/). If you use MacOS or Linux - you should already have some nice Terminal/Command Line tool installed.

Currently I use the default MacOS Terminal app.

<a name="code_editor"></a>
## Code Editor

There are several options – you can use some complex IDE, like [WebStorm](https://www.jetbrains.com/webstorm/) or you can go with one of more simple code editors:

* [Sublime](https://www.sublimetext.com/)
* [Atom](https://atom.io/)
* [VSCode](https://code.visualstudio.com/)

In this course I'll use the __VSCode__ in all examples. So if you don't have any personal preference yet - pick the __VSCode__.

Regardless of what editor you choose - don't forget to check if it has javascript and react syntax highlighting.

<a name="node"></a>
## Node

You need to make sure that you have `node.js` installed on your computer. All the tooling that we are going to use depends on it.

To check if you have node and if it has recent version – go to terminal and type:

```sh
node -v
```

If you don't see version number and see something like this `command not found: node` instead – just go to [nodejs.org](https://nodejs.org), download the installer and follow the installation process.

## React Developer Tools

Next install _React Developer Tools_ for your browser:

* [Chrome React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Firefox React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

Open the developer console - you should see the new tab named "React" in the end.

<a name="yarn"></a>
## Yarn

By default __nodejs__ comes with [npm](https://www.npmjs.com/) as package manager. I recommend installing [yarn](https://yarnpkg.com/). Just follow the link, click the "Install Yarn" button and follow the installation instructions.

Yarn has several benefits over `npm`. For example it keeps the `yarn.lock` file with all your installed packages versions. If you are familiar with rugy and Ruby on Rails - it's like `Gemfile.lock`. This file ensures that __the same versions of packages are installed on every device__. Basically it locks the specific package versions during their installation.

Another benefit is that during the installation process `yarn` runs some steps simultaneously (npm runs all the steps sequentially) and this makes is drastically faster.

There are some command differences between `yarn` and `npm`. But in this course I show the exact commands to run so this shouldn't be a problem.
