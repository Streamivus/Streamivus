/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Helmet } from 'react-helmet-async';

const CRISP_ID = process.env.REACT_APP_CRISP_ID;

export default function LiveChat() {
  if (!CRISP_ID) return null;

  const script = `
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "${CRISP_ID}";
    (function(){
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  `;

  return (
    <Helmet>
      <script>{script}</script>
    </Helmet>
  );
}
