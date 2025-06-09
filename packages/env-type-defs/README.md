# env-type-defs

A Node.js package to automatically generate TypeScript type definitions for environment variables based on the content of your env files

## Features

- Generates TypeScript type definitions from `.env` files.
- Enhances type safety for environment variables in your project.
- Easy to integrate and use in any Node.js project.

## Coming Soon
- Support for multiple `.env` files (e.g., `.env.development`, `.env.production
- Automatic regeneration of type definitions when `.env` files change
- Supports for Bun and vite env configurations

## Installation

Install the package using npm:

```sh
npm install env-type-defs --save-dev
```
or using yarn:
```sh
yarn add env-type-generator --dev
```

## Usage
1. Create a `.env` file in the root of your project with your environment variables
#### Example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```
2. Run the command to generate the type definitions:
```ts
import envTypeDefs from "env-type-defs"
```
You can now call this `envTypeDefs()` anywhere in your application main entry point.

Running your project will produce a `env.d.ts` file which automatically autocompletes your environment variables

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on GitHub.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Issues
If you encounter any issues or have questions, please open an issue on GitHub.