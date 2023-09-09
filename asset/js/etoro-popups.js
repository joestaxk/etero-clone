(function(){document.addEventListener('definedCountryAndRegulation',initEtoroPopups);function initEtoroPopups(){let popupName=getPopupName(getPathWithoutLanguage(window.location.pathname),window.eToroPopupRules,window.eToroPopups.language,eToroMarketingData.countryId);if(!popupName){return;}
const xhr=new XMLHttpRequest();xhr.open('GET',window.eToroPopups.ajaxUrl+"?name="+popupName+"&lang="+window.eToroPopups.language);xhr.send();xhr.onload=function(){if(xhr.status!==200){console.log('failed to get popup '+xhr.status);return;}
const json=JSON.parse(xhr.response);document.body.insertAdjacentHTML("beforeend",json.html);if(json.scripts.length){for(const script of json.scripts){const newScript=document.createElement('script');newScript.src=script;document.body.append(newScript);}}};xhr.onerror=function(){console.log('failed to get popup');};}
function getPopupName(currentPath,rules,language,country){if(!rules.length){return false;}
for(const eToroPopupRule of rules){let matched=false;if(eToroPopupRule.country.length){matched=eToroPopupRule.country.includes(country);if(matched===false){continue;}}
if(eToroPopupRule.paths.length){matched=pathMatch(currentPath,eToroPopupRule.paths);if(matched===false){continue;}}
if(eToroPopupRule.languages.length){matched=eToroPopupRule.languages.includes(language);if(matched===false){continue;}}
if(matched===true){return eToroPopupRule.name;}}
return false;}
function pathMatch(path,pathRules){for(const pathRule of pathRules){if(pathRule.includes('*')){let matchPath=pathRule.replaceAll('*','');if(path.includes(matchPath)){return true;}}else if(path===pathRule){return true;}}
return false;}
function getPathWithoutLanguage(url){const languageRegex=/^\/[a-z]{2}(?:-[a-z]{2})?\//;return url.replace(languageRegex,'/');}}());