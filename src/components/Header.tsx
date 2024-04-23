import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.svg";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [companyDrop, setCompanyDrop] = useState(false);
  const [extraDrop, setExtraDrop] = useState(false);
  const [isMenuopen, setIsMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourseOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isAppOpen, setisAppOpen] = useState(false);
  const [isExtraOpen, setisExtraOpen] = useState(false);
  const [isLanguageOpen, setisLanguageOpen] = useState(false);

  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-left-section">
          <ul className="nav-sub-right-section">
            <li>Features </li>
            <li>Pricing</li>
            <li
              className="resources"
              onClick={(e) => {
                setDropdown(!dropdown);
                setCompanyDrop(false);
                setExtraDrop(false);
                setisLanguageOpen(false);
              }}
            >
              Resources{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  fill="#898D9A"
                />
              </svg>
            </li>
            <li
              onClick={(e) => {
                setCompanyDrop(!companyDrop);
                setDropdown(false);
                setExtraDrop(false);
                setisLanguageOpen(false);
              }}
            >
              Company{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  fill="#898D9A"
                />
              </svg>
            </li>
            <li>
              App Center{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  fill="#898D9A"
                />
              </svg>
            </li>
            <li
              onClick={() => {
                setExtraDrop(!extraDrop);
                setCompanyDrop(false);
                setDropdown(false);
                setisLanguageOpen(false);
              }}
            >
              Extra tools{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  fill="#898D9A"
                />
              </svg>
            </li>
          </ul>
        </div>
        <ul className="nav-right-section">
          <li
            onClick={() => {
              setisLanguageOpen(!isLanguageOpen);
              setExtraDrop(false);
              setCompanyDrop(false);
              setDropdown(false);
            }}
          >
            EN{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                fill="#898D9A"
              />
            </svg>
            {isLanguageOpen && (
              <div className="dropdown-menu-switch-language">
                <ul>
                  <li>
                    <button className="language"> English</button>
                  </li>
                  <li>
                    <button className="language">Deutsch</button>
                  </li>
                  <li>
                    <button className="language">Español</button>
                  </li>
                  <li>
                    <button className="language">Français</button>
                  </li>
                  <li>
                    <button className="language">Italiano</button>
                  </li>
                  <li>
                    <button className="language">" Nederlands "</button>
                  </li>
                  <li>
                    <button className="language">Polski</button>
                  </li>
                  <li>
                    <button className="language">Português (Brasil)</button>
                  </li>
                  <li>
                    <button className="language">Svenska</button>
                  </li>
                  <li>
                    <button className="language">Tiếng Việt</button>
                  </li>
                  <li>
                    <button className="language">Türkçe</button>
                  </li>
                  <li>
                    <button className="language">中文</button>
                  </li>
                  <li>
                    <button className="language"> 日本語</button>
                  </li>
                  <li>
                    <button className="language">한국어</button>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            {" "}
            <a href="#" className="login">
              Log in
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="signup">
              Sign Up{" "}
            </a>
          </li>
        </ul>
        <div className="menu-mobile">
          <button className="menulist">
            <span onClick={(e) => setIsMenuOpen(!isMenuopen)}>
              Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                  fill="#898D9A"
                />
              </svg>
            </span>
          </button>
          {isMenuopen && (
            <div className="menu-dropdown">
              <a href="#" className="drop-menu-item">
                Features
              </a>
              <a href="#" className="drop-menu-item">
                Pricing
              </a>
              <div className="sub-dropdown">
                <div className="sub-drop-label-container">
                  <div
                    className="sub-drop-label"
                    onClick={(e) => {
                      setIsResourseOpen(!isResourceOpen);
                      setisAppOpen(false);
                      setisExtraOpen(false);
                      setIsCompanyOpen(false);
                    }}
                  >
                    <span>Resources</span>
                  </div>
                </div>
                {isResourceOpen && (
                  <span className="sub-drop-menu">
                    <a href="#" className="sub-drop-menu-item">
                      Blog
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Help Center
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      What's New
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Webinars
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Insights
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Hire a Trusted Agency
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Academy
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Top websites
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Good Content hub
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Local Marketing hub
                    </a>
                  </span>
                )}
              </div>
              <div className="sub-dropdown">
                <div className="sub-drop-label-container">
                  <div
                    className="sub-drop-label"
                    onClick={() => {
                      setIsCompanyOpen(!isCompanyOpen);
                      setIsResourseOpen(false);
                      setisAppOpen(false);
                      setisExtraOpen(false);
                    }}
                  >
                    <span>Company</span>
                  </div>
                </div>
                {isCompanyOpen && (
                  <span className="sub-drop-menu">
                    <a href="#" className="sub-drop-menu-item">
                      About us
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Career
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Newsroom
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Sucecss stories
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Affiliate Program
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      For investors
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Partner integration
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Contacts
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Stats and facts
                    </a>
                  </span>
                )}
              </div>
              <div className="sub-dropdown">
                <div className="sub-drop-label-container">
                  <div
                    className="sub-drop-label"
                    onClick={(e) => {
                      setisAppOpen(!isAppOpen);

                      setIsResourseOpen(false);
                      setisExtraOpen(false);
                      setIsCompanyOpen(false);
                    }}
                  >
                    <span>
                      App Center
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                          fill="#898D9A"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {isAppOpen && (
                  <span className="sub-drop-menu">
                    <a href="#" className="sub-drop-menu-item">
                      Store
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      {" "}
                      My Apps
                    </a>
                  </span>
                )}
              </div>
              <div className="sub-dropdown">
                <div className="sub-drop-label-container">
                  <div
                    className="sub-drop-label"
                    onClick={(e) => {
                      setisExtraOpen(!isExtraOpen);
                      setisAppOpen(false);

                      setIsResourseOpen(false);
                      setIsCompanyOpen(false);
                    }}
                  >
                    <span>
                      Extra Tools
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.293 5.293a1 1 0 0 1 1.414 0L8 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                          fill="#898D9A"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {isExtraOpen && (
                  <span className="sub-drop-menu">
                    <a href="#" className="sub-drop-menu-item">
                      Ecommerce Booster
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Prowly
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      Kompyte
                    </a>
                    <a href="#" className="sub-drop-menu-item">
                      SplitSignal
                    </a>
                  </span>
                )}
              </div>
            </div>
          )}
          <a href="#" className="user-icon-mobile">
            <img src={user} alt="" />
          </a>
        </div>
      </div>
      {dropdown && (
        <div className="resources-dropdown">
          <div className="resource-list-left">
            <div className="resource-list">
              <h3> Blog</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>What's New</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>Insights</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>Academy</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>GoodContent Hub</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
          </div>
          <div className="resource-list-right">
            <div className="resource-list">
              <h3> Blog</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>What's New</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>Insights</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>Academy</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
            <div className="resource-list">
              <h3>GoodContent Hub</h3>
              <p>
                Read the industry's latest thoughts on digital marketing,
                content strategy, SEO, PPC, social media and more.
              </p>
            </div>
          </div>
        </div>
      )}
      {companyDrop && (
        <div className="company-drop">
          <div className="company-drop-list">
            <h3>About Us</h3>
            <h3>NewsRoom</h3>
            <h3>Careers</h3>
            <h3>Sucecss strird</h3>
            <h3>Affliliate program</h3>
            <h3>For investors</h3>
            <h3>Partner investigariom</h3>
            <h3>Contacts</h3>
            <h3>Stats and Facts</h3>
          </div>
        </div>
      )}
      {extraDrop && (
        <div className="extra-drop">
          <div className="extra-drop-list">
            <h3>Ecommerce Booster</h3>
            <h3>Prowly</h3>
            <h3>Kompyte</h3>
            <h3>
              SplitSignal <span className="orange-btn">Beta</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
