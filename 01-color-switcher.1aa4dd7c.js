let t=null,e=!1;const n=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");n.addEventListener("click",(function(){if(e)return;e=!0,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(function(){clearInterval(t),e=!1}));
//# sourceMappingURL=01-color-switcher.1aa4dd7c.js.map
