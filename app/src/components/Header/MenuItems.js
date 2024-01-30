import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MenuItems = (props) => {
  const { parentMenu } = props;

  const location = useRouter();
  const [home, setHome] = useState(false);
  const [works, setWorks] = useState(false);
  const [page, setPage] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setWorks(false);
      setPage(false);
    }
    if (menu === "works") {
      setHome(false);
      setWorks(!works);
      setPage(false);
    }
    if (menu === "page") {
      setHome(false);
      setWorks(false);
      setPage(!page);
    }
  };

  return (
    <>
      <li
        className={
          parentMenu === "home"
            ? "menu-item menu-item-has-children active"
            : "menu-item menu-item-has-children"
        }
      >
        <Link
          href="/"
          title="Home"
          onClick={() => {
            openMobileMenu("home");
          }}
          className={home ? "active" : ""}
        >
          <span>Home</span>
        </Link>
      </li>
      <li
        className={
          parentMenu === "stories"
            ? "menu-item menu-item-has-children active"
            : "menu-item menu-item-has-children"
        }
      ></li>
      <li
        className={
          parentMenu === "works"
            ? "menu-item menu-item-has-children active"
            : "menu-item menu-item-has-children"
        }
      >
        <Link
          href="/project/project-grid-2"
          title="Works"
          onClick={() => {
            openMobileMenu("works");
          }}
          className={works ? "active" : ""}
        >
          <span>Works</span>
        </Link>
      </li>
      <li
        className={
          parentMenu === "page"
            ? "menu-item menu-item-has-children active"
            : "menu-item menu-item-has-children"
        }
      >
        <Link
          href="/services"
          title="Page"
          onClick={() => {
            openMobileMenu("page");
          }}
          className={page ? "active" : ""}
        >
          <span>Page</span>
        </Link>
      </li>
      <li
        className={location === "/contact" ? "menu-item active" : "menu-item"}
      >
        <Link href="/contact" title="Contact">
          <span>Contact</span>
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
