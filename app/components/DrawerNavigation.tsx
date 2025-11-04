"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DrawerNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Drawer toggle button */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Show navigation
        </button>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer container */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Menu
          </h5>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 
                8.586l4.293-4.293a1 1 0 111.414 
                1.414L11.414 10l4.293 
                4.293a1 1 0 01-1.414 
                1.414L10 11.414l-4.293 
                4.293a1 1 0 01-1.414-1.414L8.586 
                10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/kanban"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/inbox"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/users"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </Link>
          </li>

          <li>
            <Link
              href="/signin"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </Link>
          </li>

          <li>
            <Link
              href="/signup"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
