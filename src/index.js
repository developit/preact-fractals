import { h, render } from 'preact';
import App from './App';
import './index.css';


// import { options } from 'preact';
// options.syncComponentUpdates = false;
// 
// // option 1:  rIC + setTimeout fallback
// let timer;
// options.debounceRendering = f => {
//     clearTimeout(timer);
//     timer = setTimeout(f, 100);
//     requestIdleCallback(f);
// };
// 
// // option 2:  rAF
// options.debounceRendering = requestAnimationFrame;


render(
  <App />,
  document.getElementById('root')
);
