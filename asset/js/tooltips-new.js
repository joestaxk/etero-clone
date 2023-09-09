class Tooltip{constructor(elm,tooltip){elm.classList.add('created');this.btn=elm;tooltip.classList.add('tooltip');document.body.appendChild(tooltip);this.content=tooltip;const closeBtn=document.createElement('div');closeBtn.classList.add('tooltip__close-btn');this.content.appendChild(closeBtn);this.closeBtn=closeBtn;this.closeBtn.addEventListener('click',()=>{this.hide();});this.btn.addEventListener('click',(event)=>{event.preventDefault();this.processing();});}
processing(){if(this.content.classList.contains('visible')){return;}
this.show();this.boundDocumentClickHandler=this.documentClickHandler.bind(this);document.body.addEventListener('click',this.boundDocumentClickHandler);window.addEventListener("resize",()=>{if(!this.content.classList.contains('visible')){return;}
setTimeout(()=>{requestAnimationFrame(()=>{this.handlePosition();});},100);});}
show(){clearTimeout(this.timeoutHidding);this.content.style.display='block';this.handlePosition();this.content.classList.add('visible');this.btn.classList.add('active');}
documentClickHandler(event){const target=event.target;if(target.closest('e-tip')===this.btn){return;}
if(target.closest('.tooltip')===this.content){return;}
document.body.removeEventListener('click',this.boundDocumentClickHandler);this.hide();}
hide(){this.content.classList.remove('visible');this.btn.classList.remove('active');this.timeoutHidding=setTimeout(()=>{requestAnimationFrame(()=>{this.content.style.display='none';this.content.style.top='auto';this.content.style.right='auto';this.content.style.left='auto';this.content.style.bottom='auto';});},1000);}
handlePosition(){this.rtl=document.body.classList.contains('rtl');this.windowWidth=document.body.getBoundingClientRect().width;this.btnOffsetY=this.offsetTop();this.btnClientRect=this.btn.getBoundingClientRect();this.positionX='center';this.positionY='bottom';if(!this.rtl&&(this.windowWidth-(this.btnClientRect.left+this.btn.offsetWidth)>this.content.offsetWidth)||this.rtl&&(this.btnClientRect.left>this.content.offsetWidth)){this.positionX='end';this.positionY='center';}else if(window.innerHeight/2<this.btnClientRect.top){this.positionX='center';this.positionY='top';}else{this.positionX='center';this.positionY='bottom';}
console.log(this.positionY);console.log(this.positionX);this.handleOffsetX();this.handleOffsetY();this.content.style.top=this.top;this.content.style.left=this.start;this.content.style.right=this.end;}
handleOffsetX(){const minimalSpace=10;if(this.positionX==='center'){this.start=this.btnClientRect.left+this.btn.offsetWidth/2-this.content.offsetWidth/2;if(this.start<0){this.start=minimalSpace+'px';}else if(this.start+this.content.offsetWidth>this.windowWidth){this.start='auto';this.end=minimalSpace+'px';}else{this.start+='px';}}
if(this.positionX==='start'){this.start=(!this.rtl?this.btnClientRect.left-this.content.offsetWidth:this.btnClientRect.right)+'px';this.end='auto';}
if(this.positionX==='end'){this.start=(!this.rtl?this.btnClientRect.right:this.btnClientRect.left-this.content.offsetWidth)+'px';this.end='auto';}}
handleOffsetY(){const additionalOffset=5;if(this.positionY==='center'){this.top=this.btnOffsetY+this.btn.offsetHeight/2-this.content.offsetHeight/2+'px';}
if(this.positionY==='top'){this.top=this.btnOffsetY-this.content.offsetHeight-additionalOffset+'px';}
if(this.positionY==='bottom'){this.top=this.btnOffsetY+this.btn.offsetHeight+additionalOffset+'px';}}
offsetTop(){let offsetTop=0;let element=this.btn;while(element){offsetTop+=element.offsetTop;element=element.offsetParent;}
return offsetTop;}}
window.addEventListener('DOMContentLoaded',function(){const tooltipsObserver=new IntersectionObserver(function(entries,observer){entries.forEach(function(entry){if(entry.isIntersecting){const tooltip=entry.target;if(tooltip.classList.contains('created')){return;}
const tooltipContent=tooltip.querySelector("sup");if(tooltipContent===null){return;}
new Tooltip(tooltip,tooltipContent);observer.unobserve(entry.target);}});});document.querySelectorAll('e-tip').forEach((elem)=>{if(elem){tooltipsObserver.observe(elem);}});});