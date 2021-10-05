import { StaticRouter, Route, Switch } from "react-router-dom";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Spa() {
  const router = useRouter();

  useEffect(() => {
    console.log("Spa is mounted");

    return () => {
      console.log("Spa will unmount");
    };
  }, []);

  return (
    /* 
      Static router is used to desactivate listeners of location change.
      We only use NextLink instead of Link component from react-router to not confuse the next router.
    */
    <StaticRouter>
      <div>
        <ul>
          <li>
            <NextLink href="/">Home</NextLink>
          </li>
          <li>
            <NextLink href="/spa/about">About</NextLink>
          </li>
          <li>
            <NextLink href="/spa/topics">Topics</NextLink>
          </li>
          <li>
            <NextLink href="/settings">Settings (SSR)</NextLink>
          </li>
        </ul>

        <Switch
          /* 
            We are giving to the Switch component a custom location object with the current route from next.js
          */
          location={{
            pathname: router.asPath,
            search: "",
            state: "",
            hash: "",
          }}
        >
          <Route path="/spa/about">
            <h1>About</h1>
          </Route>
          <Route path="/spa/topics">
            <h1>Topics</h1>
          </Route>
          <Route path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </div>
    </StaticRouter>
  );
}
