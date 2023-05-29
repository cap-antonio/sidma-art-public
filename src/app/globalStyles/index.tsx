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
        display: flex;
        flex-direction: column;

        /* overflow-y: scroll; // this is necessary to block without displacement of the main content when the modal is opened */
        padding: 0;
        margin: 0;
        min-height: 100%;
        background: rgb(232, 230, 230);
        min-height: 100vh;
        font-family: 'Cormorant Garamond', serif;
      }

      button,
      input,
      textarea {
        font-family: 'Cormorant Garamond', serif;
        font-size: 18px;
      }

      /* @font-face {
        font-family: 'Cormorant Garamond', serif;
        font-style: normal;
      } */
    `}
  />
)
