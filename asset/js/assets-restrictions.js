function doCompliance(callback){if(window.eToroMarketingData.countryId&&typeof window.eToroMarketingData.countryId==="number"){callback();}else{document.addEventListener('definedCountryAndRegulation',callback);}}
function redirectToHPForSpainVisitorOnCFDPages(){if(eToroMarketingData.countryId===191&&document.body.classList.contains('is-cfd')){document.body.style.display="none";const lang_folder=(LANGUAGES_MAP.platform_dir)?"/"+LANGUAGES_MAP.platform_dir:'';window.location.replace(window.location.origin+lang_folder+"/"+window.location.search);}}
function filterMenuItemsForSpanish(){if(eToroMarketingData.countryId!==191){return;}
if(document.readyState==='loading'){document.addEventListener("DOMContentLoaded",removeCFDForSpanish);}else{removeCFDForSpanish();}}
function removeElements(cssSelector){const elements=document.querySelectorAll(cssSelector);if(!elements){return;}
for(let i=0;i<elements.length;i++){elements[i].remove();}}
function removeCFDForSpanish(){removeElements('.type-is-cfd');removeElements('.part-cfd');}
doCompliance(redirectToHPForSpainVisitorOnCFDPages);doCompliance(filterMenuItemsForSpanish);