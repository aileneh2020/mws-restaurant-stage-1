# FRONT-END NANODEGREE PROJECT: RESTAURANT REVIEWS
==================================================

## PROJECT OVERVIEW

This project involved converting a static design that lacks accessibility and into a responsive design for different sized displays and accessible for screen reader use. A service worker was added to begin the process of creating a seamless offline experience for users.

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

## SET UP

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`.

3. In dev tools, test functionality of service worker by setting network to offline mode. Pages should still be able to partially render.

4. You may wish to test out the screen reader functionality by downloading [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn).

## RESOURCES

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).

### Starter Code
This project was created by Udacity as part of the Front-End Nanodegree program. Starter code can be forked/cloned from [this repository](https://github.com/udacity/mws-restaurant-stage-1).

### Credit

Thank you to [Matthew Cranford](https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/) and [Alexandro Perez](https://alexandroperez.github.io/mws-walkthrough/) for their tutorial on service workers.
