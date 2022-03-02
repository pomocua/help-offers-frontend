
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