# cypress+Vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


Action list to test with the interceptor:
# SECTION 1: RESOURCE SERVER (http://localhost:5001/)
1) http://localhost:5001/ home page loads
2) "Register" button takes you to the registration page
3) Registration of a new users is successful
4) Logging in as the new user is a success.
5) The user can change their user name
6) Email can be changed from verified false => true.

# SECTION 2: WEVE GOT POEMS (http://localhost:5173/)
1) Log in with 'tester' / '1234'
2) Log in anonymously with Layer8
3) Clicking "Get Next Poem" loads different poem correctly x 3
4) Clicking "Logout" takes you to the login screen
5) Clicking "Register" takes you to the registration page
6) Registering with a username, password, and profile image is successful
7) Logging in with the new username / password succeeds
8) Logging in with Layer8 opens the pop-up
9) Logging in with the newly registered credentials from Section 1 succeeds
10) User chooses to share their new "Username" & "Country" from the Layer8 Resource Server
11) Clicking "Get Next Poem" loads different poem correctly x 3
12) Clicking "Logout" takes you to the login page
13) Log in with 'tester' / '1234', and then with the credentials from Section 1 succeeds
14) This time, DO NOT share "display name" or "country"
15) Clicking "Get Next Poem" loads different poem correctly x 3

# SECTION 3: IMSHARER (http://localhost:5174/)
1) Main paige loads
2) Upload of image works
3) Reload leads to instant reload (demonstrating proper caching)
4) Clicking the newly loaded image shows it in a light box
