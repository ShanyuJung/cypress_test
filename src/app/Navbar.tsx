import Link from "next/link";
import classes from "./page.module.css";

const ROUTE = ["home", "form"];
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      {ROUTE.map((route) =>
        route === "home" ? (
          <Link key={route} href={`/`}>
            {route.toUpperCase()}
          </Link>
        ) : (
          <Link key={route} href={`/${route}`}>
            {route.toUpperCase()}
          </Link>
        )
      )}
    </nav>
  );
};

export default Navbar;
