---
path: "/lessons/lint-and-prettier"
date: "2017-11-07"
title: "Lint And Prettier"
---

## Contents

* [ESLint](#eslint)
* [Install Prettier](#install_prettier)
* [Add Editor Support](#editor_support)

<a name="eslint" style="display: block; position: relative; top: -150px"></a>
## ESLint

<a name="install_prettier" style="display: block; position: relative; top: -150px"></a>
## Install Prettier

The app generated with `create-react-app` goes with _ESLint_ support by default, so let's add __Prettier__ to the mix.

```sh
yarn add prettier --dev --exact
```

Actually I'd suggest using __Prettier__ on all your projects, so maybe it'll make sense to install it globablly.

```sh
yarn global add prettier
```

<a name="editor_support" style="display: block; position: relative; top: -150px"></a>
## Add Editor Support

If you use VSCode - search for `Prettier - Code formatter` in visual studio code marketplace and install it.

[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Then apply this line to [Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings):

```js
"editor.formatOnSave": true
```

It will apply prettier formatting after every code save.

Also you might want to edit `.prettierrc`, I usually add the following rules:

```js
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

Single quote makes strings use single quotes by default. Note that in `JSX` you'll still have double quotes. Trailing comma adds comma after last item of object or array when multiline.

