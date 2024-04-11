# New libdoc for Robot Framework

This is a prototype proect for upgrading the technology used to create libdoc HTML documentation. The same approach can then hopefully be used to rewrite logs & reports as well. See the issue for a more detailed background: https://github.com/robotframework/robotframework/issues/4304

## Tech

This prototype uses following technologies:

- [Parcel](https://parceljs.org) is used to create development and (minified) shipping bundles. It offers a very low-configuration way of creating standalone HTML files, which contain all the code and styles inlined.
- [Typescript](https://www.typescriptlang.org) is used to write the business logic. It offers better development ergomonics than plain Javascript.
- [Handlebars](https://handlebarsjs.com) is used for templating. Using either HTML `<template>` tags + code, or genereating HTML purely from code were also considered. However, a template system makes authoring complex HTML much simpler, since creating nested strucutres puerly in code leads to hard-to-maintain solutions almost invetibaly. Handlebars enables re-use of existing templates with minor modifications, while it offers some new feature that help e.g. with localisation.

Unit testing framework still needs to chosen, the most likely candidate being [Jest](https://jestjs.io).

## Proto in action

Run:

- `npm install`
- `npm run start`

And a development server starts at `localhost:1234`.

A shipping build can be created with `npm run build`
