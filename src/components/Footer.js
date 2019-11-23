import React, { useEffect } from 'react';
import './Footer.scss';
import Newsletter from './Newsletter';
import Social from './Social';

const logPageView = () => {
  return fetch('/.netlify/functions/pageViews', {
    body: JSON.stringify({
      url: window.location.href,
    }),
    method: 'POST',
  }).then(response => {
    return response.json();
  });
};

const Footer = ({ hideNewsletter }) => {
  useEffect(() => {
    logPageView().then(console.log);
  });
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-left">
          <Social />
          <div className="Footer-copyright">
            <div>
              <a href="/copy-what-you-want">
                ¯\_(ツ)_/¯ {new Date().getFullYear()}
              </a>
            </div>
            <div>
              <strong>code</strong>
              <br />
              <a
                rel="license"
                href="https://opensource.org/licenses/MIT"
                title="MIT Licensed"
              >
                <svg
                  role="presentational"
                  height="30"
                  width="120"
                  viewBox="0 0 120 29"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="1.5"
                >
                  <rect
                    fill="none"
                    className="stroke-night dm-stroke-cloud"
                    strokeWidth="2"
                    x="2"
                    y="2"
                    width="77"
                    height="25"
                  />
                  <rect
                    fill="none"
                    className="stroke-night dm-stroke-cloud"
                    strokeWidth="2"
                    x="79"
                    y="2"
                    width="40"
                    height="25"
                  />
                  <text
                    stroke="none"
                    className="fill-night dm-fill-cloud"
                    x="15"
                    y="19.5"
                    fontSize="14"
                  >
                    License
                  </text>
                  <text
                    stroke="none"
                    className="fill-night dm-fill-cloud"
                    x="85"
                    y="19.5"
                    fontSize="14"
                  >
                    MIT
                  </text>
                </svg>
              </a>
            </div>
            <div>
              <strong>content</strong>
              <br />
              <a
                rel="license"
                title="CC BY-SA 4.0"
                href="http://creativecommons.org/licenses/by-sa/4.0/"
              >
                <svg
                  role="presentational"
                  height="30"
                  width="120"
                  viewBox="0 0 120 29"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="1.5"
                >
                  <rect
                    fill="none"
                    className="stroke-night dm-stroke-cloud"
                    strokeWidth="2"
                    x="2"
                    y="2"
                    width="60"
                    height="25"
                  />
                  <rect
                    fill="none"
                    className="stroke-night dm-stroke-cloud"
                    strokeWidth="2"
                    x="62"
                    y="2"
                    width="56"
                    height="25"
                  />
                  <text
                    stroke="none"
                    className="fill-night dm-fill-cloud"
                    x="5"
                    y="19.5"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    License
                  </text>
                  <text
                    stroke="none"
                    className="fill-night dm-fill-cloud"
                    x="65"
                    y="17.5"
                    fontSize="8"
                    fontWeight="bold"
                  >
                    CC BY-SA 4.0
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
