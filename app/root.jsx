import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from '~/styles/global.css'

//export const links: LinksFunction = () => [
//...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
//];


export const links = () => ([
  {
    rel: 'stylesheet',
    href: globalStyles
  },
  {
    rel: 'stylesheet',
    href: "https://cdn.simplecss.org/simple.min.css"
  }
])

function Layout() {
  return (
    <>
      <header>
        <Link to='/index'>
          <h1>Remix!</h1>
        </Link>

      </header>
      <Outlet />
      <footer><small>Copyright</small></footer>

    </>
  )

}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Remix</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
