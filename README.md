# Quick repro for react-intl with yarn workspace

Lets assume `portal` is the main user facing app and other features are developed as separate yarn workspace package. Each of them has `yarn intl:extract` 
command to extract the translations to `.temp/en.json` files. So this will be consistent for all workspaces.

_Tip: From root you can run `yarn intl:extract-all` to extract for ALL workspaces._

Now the question is how to combine all the translations from yarn workspaces and node_modules in main portal app.

Currently, running extraction command in `portal` will ONLY extract for that package but how do I do for workspaces ?

The way I am solving now is using a custom node script which traverses all workspaces which are dependencies of `portal` and combines them use `@format/cli`.

Related - https://formatjs.io/docs/guides/distribute-libraries

