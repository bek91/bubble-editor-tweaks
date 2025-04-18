// ==UserScript==
// @name         Bubble Editor Tweaks
// @namespace    https://yourusername.github.io
// @version      0.1
// @description  Override Bubble.io editor styles (modularized)
// @match        https://*.bubble.io/page*
// @grant        GM_addStyle
// @updateURL    https://yourusername.github.io/bubble-editor-tweaks/main.user.js
// @downloadURL  https://yourusername.github.io/bubble-editor-tweaks/main.user.js
// ==/UserScript==

(function () {
    'use strict';
  
    const cssURL = 'https://bek91.github.io/bubble-editor-tweaks/styles.css';
  
    fetch(cssURL)
      .then((res) => res.text())
      .then((css) => GM_addStyle(css))
      .catch((err) => console.error('[Bubble Tweaks] Failed to load CSS:', err));
  })();
  