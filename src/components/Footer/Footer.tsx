import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container mx-auto">
        <div className="content">
          <div className="content-1">
            <a href="/">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </a>
            <div className="address">
              Warehouse Society, 234 Bahagia Ave Street PRBW 29281
            </div>
            <div className="email">info@warehouse.project</div>
            <div className="email">1-232-3434 (Main)</div>
          </div>
          <div className="content-2">
            <div>
              <div className="title-content">About</div>
              <ul className="sub-content">
                <li>
                  <a className="text-primary" href="/">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="/">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="/">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="/">
                    DW News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="title-content">Help</div>
              <ul className="sub-content">
                <li>
                  <a className="text-primary" href="/">
                    Support
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="/">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="/">
                    Guide
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="/">
                    Reports
                  </a>
                </li>
                <li>
                  <a className="text-primary" href="/">
                    Q & A
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="title-content">Social Media</div>
              <div className="icon-socail">
                <a href="/" className="icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
                <a href="/" className="icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a href="/" className="icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
