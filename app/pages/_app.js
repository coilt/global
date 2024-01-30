import { useRouter } from "next/router";

import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import Home from "./home";
import About from "./about";
import Service from "./services";
import ImageGallery from "./image-gallery";
import Team from "./team";
import Project from "./project";
import ProjectStandard from "./project/project-standard";
import ProjectGridTwo from "./project/project-grid-2";
import Contact from "./contact";
import MyAccount from "./shop/account";
import ErrorPage from "./404";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/parallax";

import "../src/scss/style.scss";

SwiperCore.use([Navigation, Pagination, Parallax]);

function Layout({ children }) {
  const router = useRouter();

  if (router.pathname === "/") {
    return <Home />;
  } else if (router.pathname === "/home-2") {
    return <HomeTwo />;
  } else if (router.pathname === "/about") {
    return <About />;
  } else if (router.pathname === "/services") {
    return <Service />;
  } else if (router.pathname === "/image-gallery") {
    return <ImageGallery />;
  } else if (router.pathname === "/team") {
    return <Team />;
  } else if (router.pathname === "/project") {
    return <Project />;
  } else if (router.pathname === "/project/project-standard") {
    return <ProjectStandard />;
  } else if (router.pathname === "/project/project-masonary") {
    return <ProjectMasonary />;
  } else if (router.pathname === "/project/project-grid") {
    return <ProjectGrid />;
  } else if (router.pathname === "/project/project-grid-2") {
    return <ProjectGridTwo />;
  } else if (router.pathname.startsWith("/project/")) {
    return <ProjectDetails />;
  } else if (router.pathname === "/blog") {
    return <Blog />;
  } else if (router.pathname === "/blog/blog-right-sidebar") {
    return <BlogRightSidebar />;
  } else if (router.pathname === "/blog/blog-left-thumb") {
    return <BlogLeftThumb />;
  } else if (router.pathname === "/blog/blog-right-thumb") {
    return <BlogRightThumb />;
  } else if (router.pathname === "/blog/blog-random-thumb") {
    return <BlogRandomThumb />;
  } else if (router.pathname.startsWith("/blog/")) {
    return <SinglePost />;
  } else if (router.pathname === "/shop") {
    return <Shop />;
  } else if (router.pathname === "/shop/cart") {
    return <CartPage />;
  } else if (router.pathname === "/shop/checkout") {
    return <CheckoutPage />;
  } else if (router.pathname === "/shop/account") {
    return <MyAccount />;
  } else if (router.pathname.startsWith("/shop/")) {
    return <ProductDetails />;
  } else if (router.pathname === "/contact") {
    return <Contact />;
  } else if (router.pathname === "/404") {
    return <ErrorPage />;
  }

  return <div>{children}</div>;
}

export default Layout;
