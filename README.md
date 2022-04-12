
## To run project:
yarn start

## To build for github pages:
```yarn build``` create build

```yarn deploy```send it to github pages

## New component generation cli:

You can generate component with:

```yarn gc {name} {path}```

You can specify two parameters: name and path.

####Ex.: ```yarn gc Box ./src/app/components```

will generate Box component in ```./src/app/components/box``` folder.

Default path is ```./src/app/components```


##Theming:

You can pass custom params through the theme object

Also you can change default material ui params in this object to change styles for the whole project.

Add prefix ``Styled`` when you create styled component

##Store

We use Redux Toolkit and its aproach to manage data https://nicedoc.io/reactjs/redux/blob/master/docs/tutorials/essentials/part-5-async-logic.md

To handle requests we use RTK Query https://redux-toolkit.js.org/rtk-query/overview


##Tipescript

We use typescript in ``.ts, .tsx`` files

We use plane js in ``.js, .jsx`` files

It depends on you how you want to code

##Components base 

Material UI https://mui.com/getting-started/installation/


##Gitpub pages
Gitpub pages https://pomocua.github.io/help-offers-frontend/