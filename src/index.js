import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['en', 'cy', 'ru'],
//     fallbackLng: 'en',
//     debug: false,
//     // Options for language detector
//     detection: {
//       order: ['cookie', 'htmlTag'],
//       caches: ['cookie'],
//     },
//     // react: { useSuspense: false },
//     backend: {
//       loadPath: '/assets/locales/{{lng}}/translation.json',
//     },
//   })

// const loadingMarkup = (
//   <div >
//     <h3>Loading..</h3>
//   </div>
// )


ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
