import { createGlobalStyle } from 'styled-components';
//import omg from '../background.png'
 export const GlobalStyle = createGlobalStyle`
 

  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;

 } 

 html {
   height: 100%;
 }

 body {
  background: rgb(228,231,235);
  background: linear-gradient(360deg, rgba(228,231,235,1) 15%, rgba(120,144,186,1) 62%, rgba(85,105,153,1) 100%);
 }
 a {
   color: white;
 }
 `;
