export const svgLoadder = () => {
  "use strict";
  const svgWrap = document.createElement("div"),
    svgData = `
  <svg aria-hidden="true" focusable="false" style="width:0;height:0;position:absolute;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cryptoki-svg-gradient">
        <stop offset="20%" stop-color="var(--color-stop-1)"/>
        <stop offset="100%" stop-color="var(--color-stop-2)"/>
      </linearGradient>
    </defs>
    <symbol id="arrow-right-icon" viewBox="0 0 16 13">
      <path fill-rule="evenodd"
        d="M15.77 7.53l-5.5 5.26a.74.74 0 01-1.06-.02.75.75 0 01.02-1.07l4.15-3.96H.75a.75.75 0 010-1.5h12.63L9.23 2.25a.75.75 0 111.04-1.09l5.5 5.27a.75.75 0 010 1.09z" />
    </symbol>
    <symbol id="arrow-right2-icon" viewBox="0 0 7 12">
      <path fill-rule="evenodd" d="M7 6L5.6 7.5 1.4 12 0 10.5 4.2 6 0 1.5 1.4 0l4.2 4.5L7 6z" />
    </symbol>
    <symbol id="arrow-left2-icon" viewBox="0 0 7 12">
      <path fill-rule="evenodd" d="M7 10.5L5.6 12 1.4 7.5 0 6l1.4-1.5L5.6 0 7 1.5 2.8 6 7 10.5z" />
    </symbol>
    <symbol id="discord-icon" viewBox="0 0 12 9">
      <path fill-rule="evenodd"
        d="M10.16.75A10 10 0 007.7 0c-.12.2-.22.42-.32.64a9.3 9.3 0 00-2.75 0C4.54.42 4.42.2 4.32 0c-.86.14-1.7.4-2.48.75A9.82 9.82 0 00.05 7.5C.97 8.16 2 8.67 3.1 9c.24-.33.46-.68.65-1.04-.36-.13-.7-.3-1.03-.48l.25-.19c1.93.9 4.15.9 6.08 0l.25.19c-.33.19-.67.35-1.03.48.19.37.4.71.65 1.04a9.96 9.96 0 003.04-1.5A9.82 9.82 0 0010.16.74zM4.01 6.13c-.6 0-1.08-.53-1.08-1.18 0-.65.47-1.2 1.07-1.2.61 0 1.1.55 1.09 1.2C5.08 5.6 4.6 6.13 4 6.13zm3.98 0c-.59 0-1.08-.53-1.08-1.18 0-.65.48-1.2 1.08-1.2.61 0 1.1.55 1.08 1.2 0 .65-.47 1.18-1.08 1.18z" />
    </symbol>
    <symbol id="twitch-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M8.63 10.53H6.35L4.87 12h-1.9v-1.46H.01V2.15L.75 0H12v7.26l-3.37 3.27zm2.22-9.44H1.88v7.6h2.6v1.47L6 8.7h3l1.86-1.79V1.1zm-3 2.15h1.13v3.27H7.86V3.24zm-2.98 0h1.12v3.27H4.87V3.24z" />
    </symbol>
    <symbol id="instagram-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M8.69 12H3.3A3.32 3.32 0 010 8.67V3.31A3.32 3.32 0 013.3-.01H8.7A3.32 3.32 0 0112 3.31v5.37A3.32 3.32 0 018.69 12zm1.96-3.47V3.47c0-1.17-.95-2.12-2.12-2.12H3.46c-1.16 0-2.11.95-2.11 2.12v5.05c0 1.17.95 2.12 2.11 2.12h5.07c1.17 0 2.12-.95 2.12-2.12zM9 3.85A.87.87 0 018.14 3c0-.22.1-.45.25-.6.16-.17.48-.25.69-.25.2 0 .37.08.53.24a.86.86 0 010 1.22.87.87 0 01-.61.25zM6 8.78A2.8 2.8 0 116 3.2a2.8 2.8 0 010 5.58zm0-4.43a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3z" />
    </symbol>
    <symbol id="twitter-icon" viewBox="0 0 12 10">
      <path fill-rule="evenodd"
        d="M12.01 1.15c-.45.23-.9.3-1.43.38.53-.3.9-.77 1.05-1.38-.45.3-.97.46-1.57.61A2.59 2.59 0 008.26 0c-1.28 0-2.4 1.16-2.4 2.54 0 .23 0 .39.07.54A6.85 6.85 0 01.82.46c-.22.38-.3.77-.3 1.3 0 .85.45 1.62 1.13 2.08-.38 0-.75-.15-1.13-.3 0 1.22.83 2.22 1.95 2.46-.22.07-.45.07-.67.07-.15 0-.3 0-.45-.08.3 1 1.2 1.77 2.32 1.77A4.7 4.7 0 01.6 8.84H0a7.2 7.2 0 003.75 1.15c4.5 0 6.98-3.84 6.98-7.15v-.3c.53-.4.98-.85 1.28-1.4z" />
    </symbol>
    <symbol id="facebook-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M10.86 12h-3V7.86h2.06v-2.1H7.86V4.55c0-.22.19-.4.4-.4h1.87V2.05H8.31v.01h-.07a2.47 2.47 0 00-2.47 2.48v1.24H4.12v2.09h1.65v4.12H1.12C.5 12 0 11.5 0 10.88V1.12C0 .5.5-.01 1.12-.01h9.74C11.48 0 12 .5 12 1.13v9.75c0 .62-.5 1.13-1.13 1.13z" />
    </symbol>
    <symbol id="gmail-icon" viewBox="0 0 48 48" width="12px" height="12px">
      <path fill="#f55376" d="M12,22.854V10.445l12,9l12-9v12.409l-12,9L12,22.854z"/>
      <path fill="#6c19ff" d="M12,22.854l-9-6.75v21.032C3,38.721,4.284,40,5.864,40H12V22.854z"/>
      <path fill="#eb0000" d="M12,10.445L9.873,8.85C7.038,6.726,3,8.745,3,12.286v3.818l9,6.75V10.445z"/>
      <path fill="#3ddab4" d="M36,22.854V40h6.136C43.721,40,45,38.716,45,37.136V16.105L36,22.854z"/>
      <path fill="#f5bc00" d="M38.127,8.85L36,10.445v12.409l9-6.75v-3.818C45,8.745,40.958,6.726,38.127,8.85z"/>
    </symbol>
    <symbol id="vietnam-flag" viewBox="0 0 55.2 38.4" style="enable-background:new 0 0 55.2 38.4" xml:space="preserve">
      <style type="text/css">.st0{fill:#DA251D;} .st1{fill:#FFFF00;}</style>
      <g>
        <path class="st0" d="M3.01,0h49.17c1.66,0.01,3.01,1.37,3.01,3.03v32.33c0,1.66-1.35,3.02-3.01,3.03H3.01 C1.35,38.39,0,37.03,0,35.37V3.03C0,1.37,1.35,0.01,3.01,0L3.01,0z"/>
        <path class="st1" d="M27.6,11.52l-2.37,7.3l4.87,1.58L27.6,11.52L27.6,11.52z M27.6,11.52L27.6,11.52L27.6,11.52L27.6,11.52z"/>
        <path class="st1" d="M27.6,11.52l2.37,7.3l-4.87,1.58L27.6,11.52L27.6,11.52z M27.6,11.52L27.6,11.52L27.6,11.52L27.6,11.52z"/>
        <path class="st1" d="M34.9,16.83h-7.68v5.12L34.9,16.83L34.9,16.83z M34.9,16.83L34.9,16.83L34.9,16.83L34.9,16.83z"/>
        <path class="st1" d="M34.9,16.83l-6.21,4.51l-3.01-4.14L34.9,16.83L34.9,16.83z M34.9,16.83L34.9,16.83L34.9,16.83L34.9,16.83z"/>
        <path class="st1" d="M32.11,25.41l-2.37-7.3l-4.87,1.58L32.11,25.41L32.11,25.41z M32.11,25.41L32.11,25.41L32.11,25.41 L32.11,25.41z"/>
        <path class="st1" d="M32.11,25.41L25.9,20.9l3.01-4.14L32.11,25.41L32.11,25.41z M32.11,25.41L32.11,25.41L32.11,25.41L32.11,25.41 z"/>
        <path class="st1" d="M20.3,16.83h7.68v5.12L20.3,16.83L20.3,16.83z M20.3,16.83L20.3,16.83L20.3,16.83L20.3,16.83z"/>
        <path class="st1" d="M20.3,16.83l6.21,4.51l3.01-4.14L20.3,16.83L20.3,16.83z M20.3,16.83L20.3,16.83L20.3,16.83L20.3,16.83z"/>
        <path class="st1" d="M23.09,25.41l2.37-7.3l4.87,1.58L23.09,25.41L23.09,25.41z M23.09,25.41L23.09,25.41L23.09,25.41L23.09,25.41z"/>
        <path class="st1" d="M23.09,25.41l6.21-4.51l-3.01-4.14L23.09,25.41L23.09,25.41z M23.09,25.41L23.09,25.41L23.09,25.41 L23.09,25.41z"/>
      </g>
    </symbol>
    <symbol id="united-kingdom-flag" viewBox="0 0 55.2 38.4" xml:space="preserve">
      <style type="text/css">.st2{fill:#FEFEFE;} .st3{fill:#C8102E;} .st4{fill:#012169;}</style>
      <g>
        <path class="st2" d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z"/>
        <polygon class="st3" points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"/>
        <path class="st4" d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z"/>
        <path class="st4" d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z"/>
        <path class="st4" d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z"/>
        <path class="st4" d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z"/>
        <polygon class="st4" points="0,12.8 7.65,12.8 0,8.97 0,12.8"/>
        <polygon class="st4" points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8"/>
        <polygon class="st4" points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6"/>
        <polygon class="st4" points="0,25.6 7.65,25.6 0,29.43 0,25.6"/>
        <polygon class="st3" points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"/>
        <polygon class="st3" points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"/>
        <polygon class="st3" points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"/>
        <polygon class="st3" points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"/>
      </g>
    </symbol>

    <symbol id="japan-flag" viewBox="0 0 55.7 38.9" style="enable-background:new 0 0 55.7 38.9" xml:space="preserve">
    <style type="text/css">.st4{fill:#FFFFFF;stroke:#CCCCCC;stroke-width:0.5;stroke-miterlimit:2.6131;} .st5{fill:#BC002D;}</style>
    <g>
      <path class="st4" d="M3.28,0.25h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.28 c-1.67,0-3.03-1.37-3.03-3.03V3.28C0.25,1.61,1.61,0.25,3.28,0.25L3.28,0.25z"/>
      <path class="st5" d="M39.37,19.45c0-6.36-5.16-11.52-11.52-11.52c-6.36,0-11.52,5.16-11.52,11.52c0,6.36,5.16,11.52,11.52,11.52 C34.21,30.97,39.37,25.81,39.37,19.45L39.37,19.45z"/>
    </g>
    </symbol>

    <symbol id="arrow-down-icon" viewBox="0 0 8 4">
      <path fill-rule="evenodd" d="M8 1L5.32 3 4 4 2.67 3 0 1l1.33-1L4 2l2.66-2L8 1z" />
    </symbol>
    <symbol id="search-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M15.25 16a.74.74 0 01-.53-.22l-3.33-3.33a7 7 0 111.06-1.06l3.33 3.33a.75.75 0 01-.53 1.28zM7 1.5a5.5 5.5 0 10.01 11.01A5.5 5.5 0 007 1.5z" />
    </symbol>
    <symbol id="heart-icon" viewBox="0 0 16 14">
      <path fill-rule="evenodd"
        d="M8 13.98a.74.74 0 01-.52-.2L1.15 7.92a4.79 4.79 0 01.68-6.86A4.85 4.85 0 018 1.18a4.87 4.87 0 017.98 3.13 4.76 4.76 0 01-1.14 3.61L8.5 13.78a.74.74 0 01-.5.2zM2.2 6.86L8 12.21l5.78-5.35c.55-.7.8-1.54.7-2.4a3.32 3.32 0 00-1.26-2.23 3.4 3.4 0 00-4.66.49.75.75 0 01-1.12 0 3.38 3.38 0 00-4.65-.5 3.26 3.26 0 00-.57 4.64z" />
    </symbol>
    <symbol id="bell-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M15.25 13H.75a.73.73 0 01-.63-.35.74.74 0 01-.05-.72L2 7.83V6a6 6 0 0112 0v1.83l1.93 4.1a.74.74 0 01-.05.73.73.73 0 01-.63.34zM1.93 11.5h12.14l-1.5-3.18A.7.7 0 0112.5 8V6a4.5 4.5 0 00-9 0v2a.7.7 0 01-.07.32zM8 16c-2.97 0-3.75-2.13-3.75-3.25a.75.75 0 011.5 0c.01.3.15 1.75 2.25 1.75s2.24-1.46 2.25-1.76a.73.73 0 01.76-.74.75.75 0 01.74.75c0 1.12-.78 3.25-3.75 3.25z"
        data-name="Bell Icon" />
    </symbol>
    <symbol id="check-icon" viewBox="0 0 8 6">
      <path fill-rule="evenodd" d="M7.45.78l-3 5.2-1.3-.76-2.6-1.5.75-1.3 2.6 1.5L6.15.02l1.3.76z" />
    </symbol>
    <symbol id="link-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M10.9 6.4l-.94.93a.56.56 0 01-.8 0 .56.56 0 010-.79l.94-.94a2.62 2.62 0 000-3.7 2.68 2.68 0 00-3.7 0l-.94.94a.56.56 0 01-.8-.8l.94-.94a3.72 3.72 0 015.3 0 3.75 3.75 0 010 5.3zM8.09 3.9c.22.22.22.58 0 .8L4.7 8.1a.56.56 0 01-.8 0 .56.56 0 010-.8L7.3 3.91a.56.56 0 01.8 0zm-2.49 6.2l.94-.95a.56.56 0 11.8.8l-.94.94A3.74 3.74 0 010 8.25c0-1 .4-1.94 1.1-2.65l.94-.93a.56.56 0 01.8.79l-.94.94a2.6 2.6 0 000 3.7 2.62 2.62 0 003.7 0z" />
    </symbol>
    <symbol id="dots-icon" viewBox="0 0 10 2">
      <path fill-rule="evenodd" d="M8 2V0h2v2H8zM4 0h2v2H4V0zM0 0h2v2H0V0z" />
    </symbol>
    <symbol id="big-grid-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M14.25 16h-3.5C9.79 16 9 15.2 9 14.25v-3.5C9 9.79 9.79 9 10.75 9h3.5c.96 0 1.75.79 1.75 1.75v3.5c0 .96-.79 1.75-1.75 1.75zm.25-5.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v3.5c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25v-3.5zM14.25 7h-3.5C9.79 7 9 6.2 9 5.25v-3.5C9 .79 9.79 0 10.75 0h3.5C15.21 0 16 .79 16 1.75v3.5C16 6.2 15.21 7 14.25 7zm.25-5.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v3.5c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25v-3.5zM5.25 16h-3.5C.79 16 0 15.2 0 14.25v-3.5C0 9.79.79 9 1.75 9h3.5C6.21 9 7 9.79 7 10.75v3.5C7 15.21 6.21 16 5.25 16zm.25-5.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v3.5c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25v-3.5zM5.25 7h-3.5C.79 7 0 6.2 0 5.25v-3.5C0 .79.79 0 1.75 0h3.5C6.21 0 7 .79 7 1.75v3.5C7 6.2 6.21 7 5.25 7zm.25-5.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v3.5c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25v-3.5z" />
    </symbol>
    <symbol id="small-grid-icon" viewBox="0 0 14 14">
      <path fill-rule="evenodd"
        d="M13 8a1 1 0 110-2 1 1 0 010 2zm0-6a1 1 0 110-2 1 1 0 010 2zM7 14a1 1 0 110-2 1 1 0 010 2zm0-6a1 1 0 110-2 1 1 0 010 2zm0-6a1 1 0 110-2 1 1 0 010 2zM1 14a1 1 0 110-2 1 1 0 010 2zm0-6a1 1 0 110-2 1 1 0 010 2zm0-6a1 1 0 110-2 1 1 0 010 2zm12 10a1 1 0 110 2 1 1 0 010-2z" />
    </symbol>
    <symbol id="copy-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M13.25 16h-6.5A2.75 2.75 0 014 13.25v-6.5A2.75 2.75 0 016.75 4h6.5A2.75 2.75 0 0116 6.75v6.5A2.75 2.75 0 0113.25 16zm1.25-9.25c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-6.5zm-3.25-3.5a.75.75 0 01-.75-.75 1 1 0 00-1-1H2.75c-.69 0-1.25.56-1.25 1.25V9.5a1 1 0 001 1 .75.75 0 010 1.5A2.5 2.5 0 010 9.5V2.75A2.75 2.75 0 012.75 0H9.5A2.5 2.5 0 0112 2.5c0 .41-.34.75-.75.75z" />
    </symbol>
    <symbol id="play-icon" viewBox="0 0 18 22">
      <path fill-rule="evenodd"
        d="M16.75 9.22L2.7.42C1.12-.57 0 .21 0 2.16v17.66c0 1.94 1.13 2.73 2.7 1.75l14.14-8.8c1.58-.98 1.5-2.58-.08-3.56z" />
    </symbol>
    <symbol id="music-icon" viewBox="0 0 18 22">
      <path fill-rule="evenodd"
        d="M17 18a1 1 0 01-1-1V5a1 1 0 012 0v12a1 1 0 01-1 1zm-4-2a1 1 0 01-1-1V7a1 1 0 012 0v8a1 1 0 01-1 1zm-4 3a1 1 0 01-1-1V4a1 1 0 012 0v14a1 1 0 01-1 1zm-4 3a1 1 0 01-1-1V1a1 1 0 012 0v20a1 1 0 01-1 1zm-4-5a1 1 0 01-1-1V6a1 1 0 012 0v10a1 1 0 01-1 1z" />
    </symbol>
    <symbol id="annotation-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M9.94 9.75H8.22l-1.8 2.06a.57.57 0 01-.84 0l-1.8-2.06H2.06A2.06 2.06 0 010 7.69V2.06C0 .92.93 0 2.06 0h7.88C11.07 0 12 .93 12 2.06V7.7c0 1.13-.93 2.06-2.06 2.06zm.94-7.69a.94.94 0 00-.94-.94H2.06a.94.94 0 00-.94.94V7.7c0 .51.42.93.94.93h1.97c.16 0 .32.08.42.2L6 10.58l1.54-1.76c.11-.13.27-.2.43-.2h1.97c.52 0 .94-.42.94-.93V2.06zM6 7.5A.75.75 0 116 6a.75.75 0 010 1.5zm0-2.25a.75.75 0 01-.75-.75V3a.75.75 0 011.5 0v1.5c0 .41-.34.75-.75.75z" />
    </symbol>
    <symbol id="profile-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M11.9 8.4l-2.53 3.37a.6.6 0 01-.45.23H8.9a.6.6 0 01-.45-.2l-.97-1.13a.55.55 0 01.07-.79.6.6 0 01.82.07l.5.57 2.08-2.79a.6.6 0 01.82-.12c.26.18.32.53.13.78zM5.79 6a3.06 3.06 0 01-3.11-3c0-1.65 1.4-3 3.1-3C7.5 0 8.9 1.35 8.9 3S7.5 6 5.79 6zm0-4.88c-1.07 0-1.94.85-1.94 1.88 0 1.03.87 1.88 1.94 1.88 1.07 0 1.94-.85 1.94-1.88 0-1.03-.87-1.88-1.94-1.88zm.78 6.38c0 .31-.27.56-.59.56-2.85 0-4.16 1.16-4.75 2.12-.08.14-.1.27-.02.38.09.16.33.31.65.31h4.12c.32 0 .58.26.58.57 0 .3-.26.56-.58.56H1.86c-.7 0-1.34-.34-1.67-.88a1.43 1.43 0 01.04-1.51c.74-1.22 2.35-2.67 5.75-2.67.32 0 .58.25.58.56z" />
    </symbol>
    <symbol id="dollar-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M6 12A6 6 0 116.01-.01 6 6 0 016 12zM6 1.12a4.88 4.88 0 10.01 9.77A4.88 4.88 0 006 1.12zm-.47 4.32h.94a1.77 1.77 0 01.1 3.54v.2a.56.56 0 11-1.13 0V9H4.3a.56.56 0 010-1.13h2.16a.66.66 0 000-1.3h-.94c-.98 0-1.78-.8-1.78-1.79 0-.95.75-1.71 1.69-1.76v-.2a.56.56 0 011.12 0V3H7.7a.56.56 0 110 1.13H5.53a.66.66 0 000 1.3z" />
    </symbol>
    <symbol id="wallet-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M9.94 12H2.06A2.06 2.06 0 010 9.94V2.06l.02-.1L0 1.89C0 .83.84 0 1.88 0h6.56c1.13 0 2.06.93 2.06 2.06v.56h.94c.3 0 .56.26.56.57v6.75c0 1.13-.93 2.06-2.06 2.06zm-.56-9.94a.94.94 0 00-.94-.94H1.88a.75.75 0 000 1.5h7.5v-.56zm-7.5 1.69c-.27 0-.52-.06-.75-.16v6.35c0 .51.42.94.93.94h7.88c.52 0 .94-.43.94-.94V3.75h-9zM9 7.5A.75.75 0 119 6a.75.75 0 010 1.5z" />
    </symbol>
    <symbol id="bookmark-icon" viewBox="0 0 10 12">
      <path fill-rule="evenodd"
        d="M9.38 12a.66.66 0 01-.41-.14L5 8.8l-3.97 3.06a.68.68 0 01-.67.09.56.56 0 01-.36-.51V2.06C0 .92 1.03 0 2.3 0h5.4C8.98 0 10 .93 10 2.06v9.38c0 .22-.14.42-.36.5a.7.7 0 01-.27.06zM5 7.5c.14 0 .29.04.4.13l3.35 2.58V2.06c0-.52-.47-.94-1.04-.94H2.29c-.57 0-1.04.42-1.04.94v8.15l3.34-2.58A.67.67 0 015 7.5z" />
    </symbol>
    <symbol id="plus-icon" viewBox="0 0 10 10">
      <path fill-rule="evenodd" d="M10 6H6v4H4V6H0V4h4V0h2v4h4v2z" />
    </symbol>
    <symbol id="minus-icon" viewBox="0 0 10 2">
      <path fill-rule="evenodd" d="M10 0v2H0V0h10z" />
    </symbol>
    <symbol id="moon-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M11.44 4.31c-1.39 0-1.88 1.42-1.88 2.63a.56.56 0 11-1.12 0c0-1.21-.5-2.63-1.88-2.63a.56.56 0 010-1.12c1.39 0 1.88-1.42 1.88-2.63a.56.56 0 011.12 0c0 1.21.5 2.63 1.88 2.63a.56.56 0 110 1.12zM9 2.9c-.2.34-.45.63-.74.86.29.23.54.51.74.86.2-.35.45-.63.74-.86-.29-.23-.54-.52-.74-.86zm-.75 5.74h.36c.72 0 1.27-.03 1.81-.31a.56.56 0 01.76.76C10.18 10.96 8.34 12 6 12a6 6 0 01-6-6C0 3.66 1.04 1.82 2.92.82a.56.56 0 01.76.76c-.3.58-.3 1.17-.3 1.99v.18a4.88 4.88 0 004.87 4.88zm-6-4.88v-.18l.01-.84A4.78 4.78 0 001.13 6 4.88 4.88 0 006 10.88c1.32 0 2.44-.4 3.27-1.14l-.66.01h-.36a6 6 0 01-6-6z" />
    </symbol>
    <symbol id="user-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M11.77 11.16c-.34.52-.98.84-1.68.84H1.9c-.7 0-1.34-.32-1.68-.84-.29-.46-.3-1-.03-1.48C.9 8.43 2.48 6.94 6 6.94s5.1 1.49 5.8 2.74a1.4 1.4 0 01-.03 1.48zm-1.03-.95C10.2 9.23 8.93 8.06 6 8.06s-4.2 1.17-4.74 2.15c-.08.13-.08.25 0 .37.09.14.33.3.65.3h8.18c.32 0 .56-.16.66-.3.07-.12.07-.24 0-.37zM6 6a3.1 3.1 0 01-3.17-3c0-1.65 1.42-3 3.17-3a3.1 3.1 0 013.17 3c0 1.65-1.42 3-3.17 3zm0-4.88c-1.1 0-1.98.85-1.98 1.88 0 1.03.89 1.88 1.98 1.88 1.1 0 1.98-.85 1.98-1.88 0-1.03-.89-1.88-1.98-1.88z" />
    </symbol>
    <symbol id="settings-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M10.87 7.4l-.48.06c-.08.01-.16.1-.2.2l-.07.14c-.04.11-.04.23 0 .3l.18.22c.4.52.34 1.26-.12 1.72l-.14.14c-.45.45-1.2.5-1.72.12l-.23-.17c-.06-.05-.18-.05-.29 0l-.14.05c-.1.05-.19.13-.2.21l-.06.48A1.32 1.32 0 016.1 12h-.2c-.65 0-1.2-.49-1.3-1.13l-.06-.48c-.01-.08-.1-.16-.2-.2l-.15-.07c-.1-.04-.22-.04-.28.01l-.23.17c-.51.38-1.27.33-1.72-.12l-.14-.14a1.32 1.32 0 01-.12-1.72l.17-.23c.05-.06.05-.18 0-.29l-.05-.14c-.05-.1-.13-.19-.21-.2l-.48-.06A1.32 1.32 0 010 6.1v-.2c0-.65.49-1.2 1.13-1.3l.48-.06c.08-.01.16-.1.2-.2l.07-.14c.04-.11.04-.23-.01-.3l-.17-.22a1.32 1.32 0 01.12-1.72l.14-.14c.45-.45 1.2-.5 1.72-.12l.23.17c.06.05.18.05.29 0l.14-.05c.1-.05.19-.13.2-.21l.06-.48C4.7.5 5.25 0 5.9 0h.2c.65 0 1.2.49 1.3 1.13l.06.48c.01.08.1.16.2.2l.14.06c.11.05.23.05.3 0l.22-.17a1.34 1.34 0 011.72.12l.14.14c.46.46.51 1.2.12 1.72l-.17.23c-.05.06-.05.18 0 .29l.05.14c.05.1.13.19.21.2l.48.06c.64.1 1.13.65 1.13 1.3v.2c0 .65-.49 1.2-1.13 1.3zm0-1.5c0-.09-.06-.17-.16-.18l-.47-.07c-.49-.06-.9-.4-1.1-.9l-.05-.1a1.41 1.41 0 01.14-1.42L9.4 3a.19.19 0 00-.02-.24l-.14-.14c-.09-.1-.16-.09-.24-.02l-.23.17c-.39.3-.94.34-1.42.14l-.1-.05c-.5-.2-.84-.61-.9-1.1l-.07-.47a.19.19 0 00-.18-.17h-.2c-.09 0-.17.07-.18.17l-.07.47c-.07.49-.4.9-.9 1.1l-.1.05c-.47.2-1.03.15-1.42-.14L3 2.6c-.08-.06-.15-.08-.24.02l-.14.13A.19.19 0 002.6 3l.17.23c.3.4.35.94.14 1.42l-.05.1c-.2.5-.61.83-1.1.9l-.47.07c-.1.01-.17.09-.17.18v.2c0 .09.07.17.17.18l.47.07c.49.06.9.4 1.1.9l.05.1a1.4 1.4 0 01-.14 1.42L2.6 9a.19.19 0 00.02.24l.14.14c.1.1.16.08.24.02l.23-.17c.23-.17.51-.27.81-.27.2 0 .42.05.6.13l.12.05c.48.2.83.61.9 1.1l.06.47c.01.1.1.16.18.16h.2c.09 0 .17-.06.18-.16l.07-.47c.06-.49.4-.9.9-1.1l.1-.05c.48-.2 1.03-.15 1.42.14L9 9.4c.08.06.15.08.24-.02l.14-.14A.19.19 0 009.4 9l-.17-.23c-.3-.4-.35-.94-.14-1.42l.05-.1c.2-.5.61-.84 1.1-.9l.47-.07c.1-.01.16-.1.16-.18v-.2zM6 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-1.88a.38.38 0 100 .76.38.38 0 000-.75z" />
    </symbol>
    <symbol id="slide-filter-icon" viewBox="0 0 12 10">
      <path fill-rule="evenodd"
        d="M11.44 2.68H6.67a2.23 2.23 0 01-2.17 1.6 2.23 2.23 0 01-2.17-1.6H.56A.55.55 0 010 2.14c0-.3.25-.53.56-.53h1.77A2.23 2.23 0 014.5 0c1.04 0 1.92.69 2.17 1.6h4.77c.3 0 .56.25.56.54 0 .3-.25.54-.56.54zM4.5 1.08a1.1 1.1 0 00-1.13 1.06c0 .6.51 1.07 1.13 1.07a1.1 1.1 0 001.13-1.07c0-.59-.51-1.07-1.13-1.07zM.56 7.31h5.52a2.23 2.23 0 012.17-1.6c1.04 0 1.92.68 2.17 1.6h1.02c.3 0 .56.24.56.54 0 .3-.25.53-.56.53h-1.02A2.23 2.23 0 018.25 10a2.23 2.23 0 01-2.17-1.6H.56A.55.55 0 010 7.85c0-.3.25-.54.56-.54zm7.69 1.6a1.1 1.1 0 001.13-1.06c0-.6-.51-1.08-1.13-1.08a1.1 1.1 0 00-1.13 1.08c0 .59.51 1.07 1.13 1.07z" />
    </symbol>
    <symbol id="circle-checked-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M6 12A6 6 0 116.01-.01 6 6 0 016 12zM6 1.12a4.88 4.88 0 10.01 9.77A4.88 4.88 0 006 1.12zm.46 6.47a1.3 1.3 0 01-1.14.66h-.06a1.3 1.3 0 01-1.13-.76L3.8 6.8a.56.56 0 011.02-.48l.33.7c.04.09.12.1.16.1.04.01.12 0 .17-.09l1.72-3a.56.56 0 11.98.56l-1.72 3z" />
    </symbol>
    <symbol id="picture-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M9.94 12H2.06A2.06 2.06 0 010 9.94V9 2.06C0 .92.93 0 2.06 0h7.88C11.07 0 12 .93 12 2.06v7.88c0 1.13-.93 2.06-2.06 2.06zM1.13 9.2v.74c0 .51.42.94.93.94h7.88c.52 0 .94-.43.94-.94V6.6a.89.89 0 01-.06-.06l-1.8-2.1a.85.85 0 00-.74-.33.93.93 0 00-.71.35c-.07.09-.92 1.2-1.66 2.13l1.27 1.47a.56.56 0 01-.86.73L4.77 7l-.02-.03-.24-.27a.92.92 0 00-.73-.33.93.93 0 00-.72.36L1.12 9.19zm.93-8.07a.94.94 0 00-.94.93v5.31l1.06-1.34a2.05 2.05 0 012.97-.28l1.52-1.96a2.06 2.06 0 013.2-.08l1 1.18V2.06a.94.94 0 00-.93-.94H2.06z" />
      <path fill="url(#a)"
        d="M9.94 12H2.06A2.06 2.06 0 010 9.94V9 2.06C0 .92.93 0 2.06 0h7.88C11.07 0 12 .93 12 2.06v7.88c0 1.13-.93 2.06-2.06 2.06zM1.13 9.2v.74c0 .51.42.94.93.94h7.88c.52 0 .94-.43.94-.94V6.6a.89.89 0 01-.06-.06l-1.8-2.1a.85.85 0 00-.74-.33.93.93 0 00-.71.35c-.07.09-.92 1.2-1.66 2.13l1.27 1.47a.56.56 0 01-.86.73L4.77 7l-.02-.03-.24-.27a.92.92 0 00-.73-.33.93.93 0 00-.72.36L1.12 9.19zm.93-8.07a.94.94 0 00-.94.93v5.31l1.06-1.34a2.05 2.05 0 012.97-.28l1.52-1.96a2.06 2.06 0 013.2-.08l1 1.18V2.06a.94.94 0 00-.93-.94H2.06z" />
    </symbol>
    <symbol id="logout-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M11.82 6.41L9.19 8.85a.56.56 0 01-.76-.82L10 6.56H5.06a.56.56 0 010-1.12H10L8.43 3.97a.56.56 0 01.77-.82l2.62 2.44a.56.56 0 010 .82zM8.44 1.12H2.06a.94.94 0 00-.94.94v7.88c0 .51.42.94.94.94h6.38a.56.56 0 110 1.12H2.06A2.06 2.06 0 010 9.94V2.06C0 .92.93 0 2.06 0h6.38a.56.56 0 110 1.13z" />
    </symbol>
    <symbol id="camera-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M13.25 16H2.75A2.75 2.75 0 010 13.25v-7.5A2.75 2.75 0 012.75 3h.33c.1 0 .2-.06.23-.15l.74-1.77C4.32.42 4.95 0 5.67 0h4.66c.71 0 1.35.42 1.62 1.08l.74 1.77c.04.09.13.15.23.15h.33A2.75 2.75 0 0116 5.75v7.5A2.75 2.75 0 0113.25 16zM14.5 5.75c0-.69-.56-1.25-1.25-1.25h-.33c-.71 0-1.35-.42-1.62-1.08l-.74-1.77a.25.25 0 00-.23-.15H5.67c-.1 0-.2.06-.23.15L4.7 3.42c-.27.66-.9 1.08-1.62 1.08h-.33c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-7.5zM8 13a4 4 0 110-8 4 4 0 010 8zm0-6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
    </symbol>
    <symbol id="upload-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M12.25 16h-8.5A3.76 3.76 0 010 12.23v-1.5a.75.75 0 111.5 0v1.5c0 1.24 1 2.25 2.25 2.25h8.5a2.25 2.25 0 002.25-2.25v-1.5a.75.75 0 111.5 0v1.5a3.76 3.76 0 01-3.75 3.75zm-1-11.03c-.2 0-.4-.08-.55-.24l-1.95-2.1v7.6a.75.75 0 11-1.5 0v-7.6L5.3 4.73a.75.75 0 11-1.1-1.02L7.45.21c.28-.31.82-.31 1.1 0l3.25 3.5a.75.75 0 01-.55 1.26z" />
    </symbol>
    <symbol id="clock-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M8 16A8 8 0 018 0a8 8 0 010 16zM8 1.5a6.5 6.5 0 10.02 13.02A6.5 6.5 0 008 1.5zm-.75 6.81V4h1.5v3.69l1.78 1.78-1.06 1.06-2.22-2.22z" />
    </symbol>
    <symbol id="file-plus-icon" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5"
        d="M11.25 19.25h-3.5a2 2 0 0 1-2-2V6.75c0-1.1.9-2 2-2H14L18.25 9v2.25M17 14.75v4.5M19.25 17h-4.5" />
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5"
        d="M18 9.25h-4.25V5" />
    </symbol>
    <symbol id="menu-icon" viewBox="0 0 16 14">
      <path fill-rule="evenodd"
        d="M15.25 7.75H.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 0 1.5Zm0-6.25H.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 0 1.5Zm-14.5 11h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5Z" />
    </symbol>
    <symbol id="cross-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="m7.05 5.98 4.73 4.74a.75.75 0 0 1-1.06 1.06L5.98 7.05l-4.73 4.73a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l4.73-4.74L.2 1.25A.75.75 0 1 1 1.25.2l4.73 4.73L10.72.2a.75.75 0 0 1 1.06 1.06L7.05 5.98Z" />
    </symbol>
    <symbol id="star-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M9.19 12a.56.56 0 0 1-.36-.13L6 9.54l-2.83 2.33a.56.56 0 0 1-.9-.58L3.3 7.53.22 5.13a.56.56 0 0 1 .34-1h3.72L5.46.38a.56.56 0 0 1 1.08 0l1.18 3.74h3.72a.56.56 0 0 1 .34 1L8.7 7.53l1.03 3.76a.56.56 0 0 1-.54.71ZM6 8.25c.13 0 .25.04.36.13l1.82 1.5-.66-2.42a.56.56 0 0 1 .2-.6L9.8 5.26H7.3a.56.56 0 0 1-.53-.4L6 2.43l-.78 2.44c-.07.23-.29.39-.53.39H2.2l2.08 1.62c.18.14.26.37.2.59l-.66 2.42 1.82-1.5c.1-.09.23-.13.36-.13Z" />
    </symbol>
    <symbol id="bag-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M15.87 15.67a.75.75 0 0 1-.62.33H.75a.75.75 0 0 1-.7-1.03L1 12.6V3.75l.01-.07a.76.76 0 0 1 .09-.29l.03-.06 2-3c.14-.2.37-.33.62-.33h8.5c.25 0 .48.12.62.33l2 3 .03.06a.69.69 0 0 1 .09.3l.01.06v8.85l.95 2.37c.09.23.06.5-.08.7ZM11.85 1.5h-7.7l-1 1.5h9.7l-1-1.5Zm1.7 11.53a.76.76 0 0 1-.05-.28V4.5h-11v8.25c0 .1-.02.19-.05.28l-.6 1.47h12.3l-.6-1.47ZM5.75 6c.41 0 .75.33.75.75v1a1.5 1.5 0 0 0 3 0v-1a.75.75 0 0 1 1.5 0v1a3 3 0 0 1-6 0v-1c0-.42.34-.75.75-.75Z" />
    </symbol>
    <symbol id="pinterest-icon" viewBox="0 0 10 12">
      <path fill-rule="evenodd"
        d="M5.17 0C1.79 0 0 2.1 0 4.4c0 1.07.61 2.4 1.59 2.82.15.07.23.04.26-.1l.22-.82a.2.2 0 0 0-.05-.2 2.69 2.69 0 0 1-.58-1.67c0-1.6 1.3-3.16 3.53-3.16 1.92 0 3.27 1.22 3.27 2.96 0 1.97-1.07 3.33-2.46 3.33-.77 0-1.34-.58-1.16-1.31.22-.87.65-1.8.65-2.42 0-.56-.33-1.03-.99-1.03-.78 0-1.42.76-1.42 1.77 0 .65.24 1.08.24 1.08l-.92 3.62a7.9 7.9 0 0 0 .06 2.66c.01.07.1.1.14.03.08-.1 1.02-1.4 1.28-2.34l.49-1.73c.25.46 1 .84 1.79.84C8.3 8.73 10 6.7 10 4.2 10 1.8 7.88 0 5.17 0Z" />
    </symbol>
    <symbol id="reddit-icon" viewBox="0 0 12 10">
      <path fill-rule="evenodd"
        d="M10.5 3.08c.83 0 1.5.69 1.5 1.54 0 .58-.32 1.1-.8 1.36v.17C11.2 8.28 8.86 10 5.97 10 3.1 10 .75 8.28.75 6.15v-.2A1.53 1.53 0 0 1 0 4.62c0-.85.67-1.54 1.5-1.54.32 0 .62.1.87.29.9-.63 2.1-1 3.35-1.04l.87-2.1A.37.37 0 0 1 7 .01l2.13.52c.2-.32.55-.53.94-.53.62 0 1.12.52 1.12 1.16 0 .63-.5 1.15-1.12 1.15-.58 0-1.05-.46-1.1-1.04L7.14.83l-.63 1.52c1.16.09 2.26.44 3.09 1.04.25-.2.57-.31.9-.31Zm-.42-1.54c.2 0 .37-.17.37-.39a.38.38 0 0 0-.37-.38c-.2 0-.37.17-.37.39 0 .2.16.38.37.38ZM4.11 5a.76.76 0 0 0-.75.77c0 .43.33.77.75.77.4 0 .74-.34.74-.77A.76.76 0 0 0 4.11 5Zm.58 2.7a.37.37 0 0 0-.52.08.4.4 0 0 0 .08.54 2.88 2.88 0 0 0 3.45 0 .4.4 0 0 0 .08-.54.37.37 0 0 0-.52-.08c-.77.57-1.8.57-2.57 0ZM7.84 5a.76.76 0 0 0-.75.77c0 .43.34.77.75.77s.75-.34.75-.77A.76.76 0 0 0 7.84 5Zm0 .77h.37-.37Zm-3.73 0h.37-.37Z" />
    </symbol>
    <symbol id="patreon-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd" d="M7.5 9a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9ZM0 0h2v12H0V0Z" />
    </symbol>
    <symbol id="dribbble-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12Zm1.43-7c.15.3.3.6.43.9.81-.14 1.7-.14 2.63.04a4.47 4.47 0 0 0-.71-2.37 9.77 9.77 0 0 1-2.35 1.42ZM9.1 9.23a4.5 4.5 0 0 0 1.25-2.13 6.97 6.97 0 0 0-2-.06c.33.86.58 1.63.75 2.2ZM6 10.5c.7 0 1.37-.17 1.96-.46-.15-.94-.43-1.86-.77-2.75A8.18 8.18 0 0 0 3.44 9.7c.73.5 1.6.8 2.55.8ZM2.55 8.9c.8-.83 2.24-2.09 4.15-2.72l-.37-.76a17.2 17.2 0 0 1-4.84.8A4.48 4.48 0 0 0 2.56 8.9Zm-.97-3.84c1.74-.13 3.1-.39 4.16-.7A25.92 25.92 0 0 0 4.13 1.9a4.5 4.5 0 0 0-2.54 3.15ZM6 1.49c-.25 0-.5.03-.75.07.62.73 1.17 1.56 1.64 2.4A6.27 6.27 0 0 0 9 2.65a4.48 4.48 0 0 0-3-1.16Z" />
    </symbol>
    <symbol id="youtube-icon" viewBox="0 0 12 8">
      <path fill-rule="evenodd"
        d="M11.75 1.25c-.14-.5-.54-.88-1.06-1.01C9.75 0 6 0 6 0S2.25 0 1.31.24C.8.37.4.76.25 1.24 0 2.15 0 4 0 4s0 1.86.25 2.75c.14.49.55.88 1.06 1 .94.25 4.7.25 4.7.25s3.74 0 4.68-.24c.52-.13.92-.52 1.06-1.01C12 5.85 12 4 12 4s0-1.86-.25-2.75ZM5 6V2l3 2-3 2Z" />
    </symbol>
    <symbol id="annotation-dots-icon" viewBox="0 0 12 12">
      <path fill-rule="evenodd"
        d="M9.94 9.75H8.22l-1.8 2.06a.57.57 0 0 1-.84 0l-1.8-2.06H2.06A2.06 2.06 0 0 1 0 7.69V2.06C0 .92.93 0 2.06 0h7.88C11.07 0 12 .93 12 2.06V7.7c0 1.13-.93 2.06-2.06 2.06Zm.94-7.69a.94.94 0 0 0-.94-.94H2.06a.94.94 0 0 0-.94.94V7.7c0 .51.42.93.94.93h1.97c.16 0 .32.08.42.2L6 10.58l1.54-1.76c.11-.13.27-.2.43-.2h1.97c.52 0 .94-.42.94-.93V2.06ZM8.25 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM6 6a.75.75 0 0 1 0-1.5A.75.75 0 0 1 6 6ZM3.75 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </symbol>
    <symbol id="close-circle-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M8 16A8 8 0 0 1 8 0a8 8 0 0 1 0 16ZM8 1.5a6.5 6.5 0 1 0 .02 13.02A6.5 6.5 0 0 0 8 1.5Zm2.78 9.28a.74.74 0 0 1-1.06 0L8 9.06l-1.72 1.72a.74.74 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72c.3.3.3.77 0 1.06Z"
        opacity=".4" />
    </symbol>
    <symbol id="maximize-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
          d="M13.25 16h-2.5a.75.75 0 010-1.5h2.5c.69 0 1.25-.56 1.25-1.25v-2.5a.75.75 0 011.5 0v2.5A2.75 2.75 0 0113.25 16zm2-10a.75.75 0 01-.75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-2.5a.75.75 0 010-1.5h2.5A2.75 2.75 0 0116 2.75v2.5c0 .41-.34.75-.75.75zm-10 10h-2.5A2.75 2.75 0 010 13.25v-2.5a.75.75 0 011.5 0v2.5c0 .69.56 1.25 1.25 1.25h2.5a.75.75 0 010 1.5zm0-14.5h-2.5c-.69 0-1.25.56-1.25 1.25v2.5a.75.75 0 01-1.5 0v-2.5A2.75 2.75 0 012.75 0h2.5a.75.75 0 110 1.5z" />
  </symbol>
  <symbol id="clock-icon" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 16A8.01 8.01 0 0 1 8 0a8 8 0 0 1 0 16ZM8 1.5a6.5 6.5 0 1 0 .02 13.01A6.5 6.5 0 0 0 8 1.5ZM7.25 8.3V4h1.5v3.69l1.78 1.78-1.06 1.06-2.22-2.22Z"/>
  </symbol>
  <symbol id="circle-icon" viewBox="0 0 11 11">
    <path fill="none" stroke="url(#cryptoki-svg-gradient)" strokeWidth="2" d="M5 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/>
  </symbol>
  <symbol id="star2-icon" viewBox="0 0 512 512">
    <path d="m256 12.53 79.11 160.29L512 198.53 384 323.29l30.21 176.18L256 416.29 97.78 499.47 128 323.29 0 198.53l176.89-25.71L256 12.53z"/>
  </symbol>
  <symbol id="rating-icon" viewBox="0 0 81 12">
    <path fill-rule="evenodd" d="m77.97 7.73.55 4.27-4.02-1.83L70.48 12l.55-4.27L68 4.58l4.36-.81L74.5 0l2.14 3.77 4.36.81-3.03 3.15ZM61.52 12l-4.02-1.83L53.48 12l.55-4.27L51 4.58l4.36-.81L57.5 0l2.14 3.77 4.36.81-3.03 3.15.55 4.27Zm-17 0-4.02-1.83L36.48 12l.55-4.27L34 4.58l4.36-.81L40.5 0l2.14 3.77 4.36.81-3.03 3.15.55 4.27Zm-17 0-4.02-1.83L19.48 12l.55-4.27L17 4.58l4.36-.81L23.5 0l2.14 3.77 4.36.81-3.03 3.15.55 4.27Zm-17 0L6.5 10.17 2.48 12l.55-4.27L0 4.58l4.36-.81L6.5 0l2.14 3.77 4.36.81-3.03 3.15.55 4.27Z"/>
  </symbol>
  <symbol id="send-icon" viewBox="0 0 495 495">
    <path d="M164.71 456.69a8 8 0 0 0 12.51 6.6l55.1-37.62-67.6-32.22v63.24zM492.43 32.44a8.02 8.02 0 0 0-8.94-1.3L7.9 264.41a14.15 14.15 0 0 0 .16 25.47l125.34 59.73 250.62-206-219.56 220.8 156.14 74.4a14.11 14.11 0 0 0 11.27.4 14.19 14.19 0 0 0 7.97-7.96l154.6-390a7.97 7.97 0 0 0-2-8.82z"/>
  </symbol>
  <symbol id="dashboard-icon" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M13.25 16H2.75A2.75 2.75 0 0 1 0 13.25V2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v10.5A2.75 2.75 0 0 1 13.25 16Zm0-1.5c.69 0 1.25-.56 1.25-1.25V5h-8v9.5h6.75Zm-10.5 0H5V5H1.5v8.25c0 .69.56 1.25 1.25 1.25Zm10.5-13H2.75c-.69 0-1.25.56-1.25 1.25v.75h13v-.75c0-.69-.56-1.25-1.25-1.25Z"/>
  </symbol>
  <svg id="file-text-icon" viewBox="0 0 14 16">
    <path fill-rule="evenodd" d="M11.25 16h-8.5A2.75 2.75 0 0 1 0 13.25V2.75A2.75 2.75 0 0 1 2.75 0H9c.2 0 .39.08.53.22l4.25 4.25c.14.14.22.33.22.53v8.25A2.75 2.75 0 0 1 11.25 16ZM9.5 2.31V4.5h2.19L9.5 2.31Zm3 3.69H8.75A.75.75 0 0 1 8 5.25V1.5H2.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V6Zm-3.25 6h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5Zm0-3h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5Z"/>
  </svg>
  <symbol id="double-picture-icon" viewBox="0 0 16 16">
    <path fill="#22212C" fill-rule="evenodd" d="M14.25 16h-6.5C6.79 16 6 15.21 6 14.25v-4.5C6 8.79 6.79 8 7.75 8h6.5c.96 0 1.75.79 1.75 1.75v4.5c0 .96-.79 1.75-1.75 1.75Zm.25-6.25a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25v4.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-4.5ZM15.25 6a.75.75 0 0 1-.75-.75v-2.5c0-.69-.56-1.25-1.25-1.25H2.75c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 1 1 0 1.5h-.5A2.75 2.75 0 0 1 0 11.25v-8.5A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v2.5c0 .41-.34.75-.75.75Z"/>
  </symbol>
  <symbol id="face-id-icon" viewBox="0 0 32 32">
    <path fill-rule="evenodd" d="M22.5 32h-1a1.5 1.5 0 0 1 0-3h1a6.5 6.5 0 0 0 6.5-6.5v-1a1.5 1.5 0 0 1 3 0v1c0 5.24-4.26 9.5-9.5 9.5Zm8-20a1.5 1.5 0 0 1-1.5-1.5v-1A6.5 6.5 0 0 0 22.5 3h-1a1.5 1.5 0 0 1 0-3h1C27.74 0 32 4.26 32 9.5v1c0 .83-.67 1.5-1.5 1.5ZM22 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 5.35a1.5 1.5 0 0 1 2.98.3c-.2 2.2-2.16 6.35-7.98 6.35s-7.77-4.15-8-6.35A1.5 1.5 0 0 1 9.36 16c.83-.1 1.55.51 1.64 1.33.05.39.58 3.66 5.01 3.66 4.59 0 5-3.5 5-3.65ZM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10.5 3h-1A6.5 6.5 0 0 0 3 9.5v1a1.5 1.5 0 0 1-3 0v-1C0 4.26 4.26 0 9.5 0h1a1.5 1.5 0 0 1 0 3Zm-9 17c.83 0 1.5.67 1.5 1.5v1A6.5 6.5 0 0 0 9.5 29h1a1.5 1.5 0 0 1 0 3h-1A9.51 9.51 0 0 1 0 22.5v-1c0-.83.67-1.5 1.5-1.5Z"/>
  </symbol>
  <svg id="download-icon" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M12.25 16h-8.5A3.75 3.75 0 0 1 0 12.25v-1.5a.75.75 0 0 1 1.5 0v1.5c0 1.24 1 2.25 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-1.5a.75.75 0 0 1 1.5 0v1.5A3.76 3.76 0 0 1 12.25 16Zm-3.7-5.24h-.01a.74.74 0 0 1-.18.14l-.06.04a.75.75 0 0 1-.6 0l-.06-.04a.74.74 0 0 1-.18-.13h-.01L4.2 7.25a.75.75 0 1 1 1.1-1.02l1.95 2.1V.75a.75.75 0 0 1 1.5 0v7.59l1.95-2.1a.75.75 0 0 1 1.1 1.02l-3.25 3.5Z"/>
  </svg>
    
  </symbol>
  <!-- /SVG LOGIN -->
`;

  svgWrap.innerHTML = svgData;
  document.body.appendChild(svgWrap);
};

export const countdown = () => {
  function Util() { }
  Util.setAttributes = function (el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  var CountDown = function (element) {
    console.log("hello 1");
    this.element = element;
    this.labels = this.element.getAttribute("data-labels")
      ? this.element.getAttribute("data-labels").split(",")
      : [];
    this.intervalId;
    // set visible labels
    this.setVisibleLabels();
    //create countdown HTML
    this.createCountDown();
    //store time elements
    this.days = this.element.getElementsByClassName(
      "js-countdown__value--0"
    )[0];
    this.hours = this.element.getElementsByClassName(
      "js-countdown__value--1"
    )[0];
    this.mins = this.element.getElementsByClassName(
      "js-countdown__value--2"
    )[0];
    this.secs = this.element.getElementsByClassName(
      "js-countdown__value--3"
    )[0];
    this.endTime = this.getEndTime();
    //init counter
    this.initCountDown();
  };

  CountDown.prototype.setVisibleLabels = function () {
    this.visibleLabels = this.element.getAttribute("data-visible-labels")
      ? this.element.getAttribute("data-visible-labels").split(",")
      : [];
    this.visibleLabels = this.visibleLabels.map(function (label) {
      return label.trim();
    });
  };

  CountDown.prototype.createCountDown = function () {
    var wrapper = document.createElement("div");
    Util.setAttributes(wrapper, {
      "aria-hidden": "true",
      class: "countdown__timer",
    });

    for (var i = 0; i < 4; i++) {
      var timeItem = document.createElement("span"),
        timeValue = document.createElement("span"),
        timeLabel = document.createElement("span");

      timeItem.setAttribute("class", "countdown__item");
      timeValue.setAttribute(
        "class",
        "countdown__value countdown__value--" + i + " js-countdown__value--" + i
      );
      timeItem.appendChild(timeValue);

      if (this.labels && this.labels.length > 0) {
        timeLabel.textContent = this.labels[i].trim();
        timeLabel.setAttribute("class", "countdown__label");
        timeItem.appendChild(timeLabel);
      }

      wrapper.appendChild(timeItem);
    }
    // append new content to countdown element
    this.element.insertBefore(wrapper, this.element.firstChild);
    // this.element.appendChild(wrapper);
  };

  CountDown.prototype.getEndTime = function () {
    // get number of remaining seconds
    if (this.element.getAttribute("data-timer"))
      return (
        Number(this.element.getAttribute("data-timer")) * 1000 +
        new Date().getTime()
      );
    else if (this.element.getAttribute("data-countdown"))
      return Number(
        new Date(this.element.getAttribute("data-countdown")).getTime()
      );
  };

  CountDown.prototype.initCountDown = function () {
    var self = this;
    this.intervalId = setInterval(function () {
      self.updateCountDown(false);
    }, 1000);
    this.updateCountDown(true);
  };

  CountDown.prototype.updateCountDown = function (bool) {
    // original countdown function
    // https://gist.github.com/adriennetacke/f5a25c304f1b7b4a6fa42db70415bad2
    var time = parseInt((this.endTime - new Date().getTime()) / 1000),
      days = 0,
      hours = 0,
      mins = 0,
      seconds = 0;

    if (isNaN(time) || time < 0) {
      clearInterval(this.intervalId);
      this.emitEndEvent();
    } else {
      days = parseInt(time / 86400);
      time = time % 86400;
      hours = parseInt(time / 3600);
      time = time % 3600;
      mins = parseInt(time / 60);
      time = time % 60;
      seconds = parseInt(time);
    }

    // hide days/hours/mins if not available
    if (bool && days == 0 && this.visibleLabels.indexOf("d") < 0)
      this.days.parentElement.style.display = "none";
    if (bool && days == 0 && hours == 0 && this.visibleLabels.indexOf("h") < 0)
      this.hours.parentElement.style.display = "none";
    if (
      bool &&
      days == 0 &&
      hours == 0 &&
      mins == 0 &&
      this.visibleLabels.indexOf("m") < 0
    )
      this.mins.parentElement.style.display = "none";

    this.days.textContent = days;
    this.hours.textContent = this.getTimeFormat(hours);
    this.mins.textContent = this.getTimeFormat(mins);
    this.secs.textContent = this.getTimeFormat(seconds);
  };

  CountDown.prototype.getTimeFormat = function (time) {
    return ("0" + time).slice(-2);
  };

  CountDown.prototype.emitEndEvent = function (time) {
    var event = new CustomEvent("countDownFinished");
    this.element.dispatchEvent(event);
  };

  //initialize the CountDown objects
  /*        window.setTimeout(() => {*/
  var countDown = document.getElementsByClassName("js-countdown");
  if (countDown.length > 0) {
    for (var i = 0; i < countDown.length; i++) {
      (function (i) {
        new CountDown(countDown[i]);
      })(i);
    }
  }
};

export const niceSelect = () => {
  const select = document.querySelectorAll("select");
  select.forEach((element) => {
    let option = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    element.style.display = "none";
    var el = document.createElement("div");
    insertAfter(element, el);
    el.className = "nice-select select-nice";
    let div = document.createElement("div"),
      ul = document.createElement("ul"),
      span = document.createElement("span");
    div.classList = "nice-select-dropdown";
    div.appendChild(ul);
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(div);
    el.appendChild(span);
    el.addEventListener("click", () => {
      el.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
    option.forEach((opt) => {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = opt.innerText;
      li.className = "option";
      let defultValue = opt.getAttribute("data-dsplay");
      let selected = opt.getAttribute("selected");
      let disabled = opt.getAttribute("disabled");
      if (defultValue || selected !== null || disabled !== null) {
        li.className = "option focus";
        span.innerText = opt.innerText;
      } else {
        span.innerText = option[0].innerText;
      }
      li.addEventListener("click", () => {
        if (disabled == null) {
          span.innerHTML = opt.innerText;
        }
      });
    });
  });
};

export const fatchData = async (url) => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data;
};

export const updateState = (state, payload) => {
  return state && state.includes(payload)
    ? state.filter((brand) => brand !== payload)
    : [...state, payload];
};

export const dblock = (active, id, sort, className) => {
  if (active === 0) {
    return id + 1 >= 0 && id + 1 <= sort
      ? className
        ? className
        : "d-block"
      : "d-none";
  } else {
    return id + 1 > active * sort && id + 1 <= (active + 1) * sort
      ? className
        ? className
        : "d-block"
      : "d-none";
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const notificationList = () => {
  let list = document.querySelector(".notifications-list");
  if (list !== null) {
    let select = list.querySelector(".select-all");
    select.addEventListener("click", function (e) {
      let notification = document.querySelectorAll(
        ".notifications-list .notification"
      );
      if (notification !== null) {
        notification.forEach(function (el) {
          el.querySelector(
            '.action-buttons input[name="notif-select"]'
          ).checked = true;
        });
      }
    });

    let close = document.querySelectorAll(
      ".notifications-list .notification .close"
    );
    close.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.target.closest(".notification").remove();
      });
    });

    let deleteAll = list.querySelector(".delete");
    deleteAll.addEventListener("click", function (e) {
      let notification = document.querySelectorAll(
        ".notifications-list .notification"
      );
      if (notification !== null) {
        notification.forEach(function (el) {
          if (
            el.querySelector('.action-buttons input[name="notif-select"]')
              .checked
          ) {
            el.remove();
          }
        });
      }
    });
  }
};
