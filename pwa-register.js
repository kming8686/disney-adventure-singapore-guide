(()=>{
  if(!('serviceWorker' in navigator))return;
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./service-worker.js',{scope:'./'})
      .then(registration=>registration.update())
      .catch(error=>console.error('Service worker registration failed:',error));
  });
})();
