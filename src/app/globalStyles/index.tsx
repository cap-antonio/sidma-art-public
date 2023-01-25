import { css, Global } from '@emotion/react'
// import emotionNormalize from 'emotion-normalize';

export const globalStyles = (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      ul,
      li,
      p {
        padding: 0;
        margin: 0;
      }

      html,
      body {
        background: white;
        min-height: 100vh;
        font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
        padding: 0;
        margin: 0;
      }

      body {
        overflow-y: scroll; // this is necessary to block without displacement of the main content when the modal is opened
        margin: 0;
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      @font-face {
        font-family: 'Organetto';
        src: url('/fonts/Organetto/Organetto-UltraBoldSemiExt.ttf');
        font-style: normal;
      }
    `}
  />
)
