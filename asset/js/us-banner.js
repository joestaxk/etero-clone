function usBannerInit(){if(eToroMarketingData.countryId!==219||window.location.href.indexOf('en-us')!==-1){return;}
const bannerTemplate=document.getElementById('us-banner');if(!bannerTemplate){return;}
const topfixedContent=document.getElementById('topfixed-content');if(!topfixedContent){return;}
topfixedContent.append(bannerTemplate.content);etoroTracking.track_link('#us-continue','Language Banner - Click Continue');document.getElementById('us-close').addEventListener('click',function(e){e.preventDefault();etoroTracking.track('Language Banner - Click Cancel (X)',{});document.getElementById('us-continue-bar').remove();});}
document.addEventListener('definedCountryAndRegulation',usBannerInit);