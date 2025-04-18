# Bubble Editor Tweaks

A Tampermonkey userscript to customize and enhance the Bubble.io editor interface.

## Overview

This script allows you to override Bubble.io editor styles to improve your development experience. It loads custom CSS from a remote source, making it easy to update and maintain your customizations.

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Create a new script in Tampermonkey
3. Copy the contents of `main.bek91.js` into the script editor
4. Save the script

## Features

- Improves the height of list items in the app interface
- Loads styles from an external CSS file for easy maintenance
- Automatically applies styles when visiting Bubble.io editor pages

## Customization

To modify the styles:
1. Edit the `styles.css` file
2. Host it on your own server or GitHub Pages
3. Update the `cssURL` in the script to point to your CSS file

## License

MIT
