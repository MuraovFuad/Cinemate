import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <footer className="bg-white  shadow  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              CineMate™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fuad.muradovv/"
                rel="noreferrer"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Instangram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/fuad.muradov.3363/"
                rel="noreferrer"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MuraovFuad"
                rel="noreferrer"
                target="_blank"
                className="hover:underline"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
