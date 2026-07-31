"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function LinearHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="linear-header">
      <ul className="linear-header__inner" data-orientation="horizontal" dir="ltr" aria-label="Site navigation">
        <li className="linear-header__logo-item">
          <Link
            href="/"
            className="linear-header__logo"
            aria-label="Navigate to home"
          >
            <Image
              src="/linear-logo.svg"
              alt="Linear"
              width={100}
              height={24}
              priority
            />
          </Link>
        </li>

        <li className="linear-header__right-side-wrapper">
          <nav
            className="linear-header__nav"
            aria-label="Main navigation"
          >
            <Link href="#">Product</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Customers</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Now</Link>
            <Link href="#">Contact</Link>
          </nav>

          <div className="linear-header__nav-divider" aria-hidden="true" />

          <div className="linear-header__actions">
            <Link
              href="#"
              className="linear-header__login"
            >
              Log in
            </Link>

            <Link
              href="#"
              className="linear-header__cta"
            >
              Sign up
            </Link>
          </div>
        </li>

        <li className="linear-header__mobile-item">
          <button
            type="button"
            className="linear-header__menu"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="linear-mobile-menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </li>
      </ul>

      <div
        id="linear-mobile-menu"
        className={`linear-header__mobile-panel${isMenuOpen ? " is-open" : ""}`}
        hidden={!isMenuOpen}
      >
        <nav className="linear-header__mobile-nav" aria-label="Mobile navigation">
          <Link href="#">Product</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Now</Link>
          <Link href="#">Contact</Link>
        </nav>

        <div className="linear-header__mobile-actions">
          <Link href="#" className="linear-header__login">
            Log in
          </Link>
          <Link href="#" className="linear-header__cta">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}