# Building a single page application with Next.js and React Router

### The approach

The basic idea:

1. Create a custom App (`/pages/_app.tsx`)

2. Return `null` if `typeof window === "undefined"`. This is required to prevent react-router from throwing errors during the SSR step!

```tsx
// pages/_app.tsx

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning> // <- ADD THIS
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;
```

3. Use optional catch all to catch all routes in the `/spa` path. You have to create a `pages/spa/[[...slug]].tsx` file inside the directory of your next app.

4. Use the `StaticRouter` component to not bypass the history of the next router.
5. You have to manually feed the `Switch` component from `react-router` with a custom location object.

```tsx
// pages/spa/[[...slug]].tsx
const router = useRouter();

<Switch
  location={{
    pathname: router.asPath,
    search: "",
    state: "",
    hash: "",
  }}
>
  ...
</Switch>;
```

6. Replace all the `Link` and `NavLink` components from `react-router` by `NextLink`. All the `Redirect` components by a call to the `router.push` method of the `next-router`.

> ⚠️ As you can't use the `Link` component from `react-router` anymore nested routes will no longer work as expected. You need to provide the full path of the route to your `NextLink` component.
