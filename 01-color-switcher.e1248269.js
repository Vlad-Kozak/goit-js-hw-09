!function(){var t=null,n=!1,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");e.addEventListener("click",(function(){if(n)return;n=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),o.addEventListener("click",(function(){clearInterval(t),n=!1}))}();
//# sourceMappingURL=01-color-switcher.e1248269.js.map