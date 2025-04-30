/**function   execute  when a user tabs to a specific element on a web page. */
function txt(a){
 

var utterance = new SpeechSynthesisUtterance(a);
var voices = speechSynthesis.getVoices();
var arabicVoice = voices.find(function (voice) {
return voice.lang === "ar-EG";
});
utterance.lang="ar-EG"
if (arabicVoice) {
utterance.voice = arabicVoice;
}
// var voices = speechSynthesis.getVoices();
// console.log(speechSynthesis.getVoices())
// Log the names of all available voices to the console
// voices.forEach(function (voice) {

// });

if (speechSynthesis.getVoices().length !== 0) {
  // Voices are already available, proceed with your code
  var voices = speechSynthesis.getVoices();
  console.log(voices);
} else {
  // Voices not available yet, listen for the voiceschanged event
  speechSynthesis.onvoiceschanged = function() {
      // Now voices are available, proceed with your code
      var voices = speechSynthesis.getVoices();
      console.log(voices);
  };
}
 var selectedVoice = voices.find(function (voice) {
 return voice.name === "ar-EG-HodaNeural"; // Specify the Shakir voice
 
 });
 utterance.voice=selectedVoice;
utterance.lang = "ar-EG";
 utterance.rate = 1; // Adjust the rate as needed.
 
 speechSynthesis.speak(utterance);
 utterance.addEventListener("start", (event) => {
 });

}

   /*when document.ready all function here will execute  */                                                                                    
   document.addEventListener("DOMContentLoaded", function () {

    /**  dynamically create and append a new menu element to the document using JavaScript, */
    var menuDetailsElement = document.createElement("div");
    menuDetailsElement.classList.add("menu-details");
menuDetailsElement.style.display="block";

 
    menuDetailsElement.innerHTML = `
 
      <div class="menu-detailstitle">  <h1>قائمة إمكانية الوصول</h1><div class="close-menu">
    
        <svg style="width: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
    </div></div>
     
    
    
         <a class="icon-dis instructions" style="border-radius: 5px;">
    
    <div style="display: flex;">   <div class="instructionstext">            إرشادات الموقع </div> 
    <div class="buttonresets">
     <svg style="width: 22px;height:22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16" width="100%" height="100%"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="1.84"><path d="M16.20106 8c0 .9667-.189683 1.8872-.5324673 2.7251-.3427843.8372-.8386698 1.5911-1.4517524 2.2246-.6130825.6335-1.3426846 1.1459-2.152902 1.5001-.8108948.3542-1.70172746.5502-2.6372711.5502-.93554365 0-1.8263763-.196-2.63727112-.5502-.81021738-.3542-1.53981948-.8666-2.15290203-1.5001M2.6522744 8c0-.9667.189683-1.8872.53246728-2.7251.34278427-.8372.83866982-1.5911 1.45175237-2.2246.61308255-.6335 1.34268465-1.1459 2.15290203-1.5001C7.6002909 1.196 8.49112355 1 9.4266672 1c.93554364 0 1.8263763.196 2.6372711.5502.8102174.3542 1.5398195.8666 2.152902 1.5001"></path><path stroke-linejoin="round" d="m4.92576062 6.96092-2.48958935 1.484L1 5.87242m13.0125924 2.93832 2.3886509-1.652L18 9.62694"></path></g></svg>
    
     <div class="resettext">        إعادة الضبط </div> </div></div>
           
    
               </a>
               <div class="menu-horizontal"
                
                >   <a class="icon-dis scrennreaderactive" id="screenreader">
                <div class="correct toggleclicked appearcorrect"><svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" class="toggleclicked"></path></svg></div>
              <div class="container-feature">
               <svg width="60px" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 40 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 15.3846154h6.0714286c.8284271 0 1.5-.6715729 1.5-1.5V8.0357143C8.5714286 6.7733491 9.5947777 5.75 10.8571429 5.75c1.2623651 0 2.2857142 1.0233491 2.2857142 2.2857143V20.75c0 1.2426407 1.0073594 2.25 2.25 2.25h.0714286c1.2426407 0 2.25-1.0073593 2.25-2.25V3.25c0-1.2426407 1.0073593-2.25 2.25-2.25h.0714286c1.2426407 0 2.25 1.0073593 2.25 2.25v17.5c0 1.2426407 1.0073593 2.25 2.25 2.25h.1428571c1.2426407 0 2.25-1.0073593 2.25-2.25V7.7115385c0-1.2426407 1.0073593-2.25 2.25-2.25s2.25 1.0073593 2.25 2.25v6.1730769c0 .8284271.6715729 1.5 1.5 1.5H39" class="toggleclicked"></path></svg>
               <div class="icon-dischild toggleclicked">
              قارىء الشاشة 
              </div></div>
           
                </a>
              <a class="icon-dis increasefont">
                  <div class="correct">  <svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></div>
                      <div class="container-featurecol">   <div class="container-feature"> 
               
                <svg width="60px" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 23"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M26.58 21.3225806V1m-7.92 4.06451613V1H34.5v4.06451613"></path><path d="M22.62 21.3225806h7.92"></path><path stroke-linejoin="round" d="M6.78 18.6129032V5.06451613M1.5 7.77419355V5.06451613h10.56v2.70967742"></path><path d="M4.14 18.6129032h5.28"></path></g></svg>
                <div>
                  نص أكبر</div>
           
                  </div>
                  
                  <div class="larger-ratio"> <span></span>  <span></span>  <span></span></div>
                  </div>
                </a>
            </div>
    
            <div class="menu-horizontal"
                
            > 
       <a class="icon-dis  linehightparent">
           <div class="correct">  <svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
               <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
               <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></div>
               <div class="container-featurecol"> 
               <div class="container-feature">
        
           <svg style="width: 40PX;" height="40px" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 47 25"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3.94487862 2.71042226V22.7104223"></path><path fill="currentColor" d="m.11302135 20.5270412 3.44487862 4.2104072c.17486379.2137224.48987514.2452235.70359754.0703597a.4999988.4999988 0 0 0 .07035976-.0703597l3.44487862-4.2104072c.17486378-.2137225.14336265-.5287338-.07035976-.7035976-.08933106-.073089-.20119771-.1130213-.31661889-.1130213H.5c-.27614237 0-.5.2238576-.5.5 0 .1154211.0399323.2272878.11302135.3166189Zm0-16.1332381L3.55789997.18339592c.17486379-.21372241.48987514-.24522355.70359754-.07035976a.49999975.49999975 0 0 1 .07035976.07035976l3.44487862 4.2104072c.17486378.2137224.14336265.52873375-.07035976.70359754-.08933106.07308905-.20119771.11302135-.31661889.11302135H.5c-.27614237 0-.5-.22385762-.5-.5 0-.11542118.0399323-.22728783.11302135-.3166189Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.4448786 1.71042226h30m-30 7h30m-30 7.00000004h30m-30 7h24"></path></g></svg>
           <div>  إرتفاع الخط</div>
               </div>
           
           <div class="linehight-ratio"> <span></span>  <span></span>  <span></span></div>
    </div>
           </a>
         <a class="icon-dis highlight-link">
           <div class="correct">  <svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
               <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></div>
               <div class="container-feature"> <svg style="width: 40PX;" height="40px" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 38 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15H6.631C3.521 15 1 12.479 1 9.369V6.631C1 3.521 3.521 1 6.631 1H16m6 0h9.369C34.479 1 37 3.521 37 6.631v2.738C37 12.479 34.479 15 31.369 15H22M12 8h14"></path></svg> 
                  <div>   تمييزالروابط</div>
                  </div>
           </a>
           </div>
           <div class="menu-horizontal"
                
           > 
         <a class="icon-dis cursorsize">
           <div class="correct">  <svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
               <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></div>
               <div class="container-feature">
               <svg style="width: 40px;" height="40px" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 27 27"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.9983464 11.5517813 9.5269972 9.52699721-4.4465655 4.44656549-9.5269972-9.52699717-4.05145413 9.06403815L1 1.0000004l24.0623846 6.5003268z"></path></svg>
               <div>      تكبير المؤشر</div>
               </div>
           </a>
           <a class="icon-dis saturation">
             <div class="correct"> 
                <svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                 <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></div>
               <div class="container-featurecol">       <div class="container-feature">
                <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 20 28"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M17.5323 13.5777 10 1 2.34888 13.7855C1.4995 15.1093 1 16.6628 1 18.3333 1 23.1195 5.02975 27 10 27c4.9703 0 9-3.8805 9-8.6667 0-1.6457-1.3363-4.5282-1.3489-4.5478l-.1188-.2078Z" clip-rule="evenodd"></path><path fill="currentColor" fill-opacity=".35" fill-rule="evenodd" d="M10 27c4.9703 0 9-3.8805 9-8.6667 0-1.6457-1.3363-4.5282-1.3489-4.5478l-.1188-.2078L10 1" clip-rule="evenodd"></path></svg>
                <div>       درجة التشبع </div>
                </div>
                <div class="saturation-ratio"> <span></span>  <span></span>  <span></span></div>
    </div>
          
             </a>
             </div>
             <div class="menu-horizontal last-icon"> 
             <a class="icon-dis contrast">
               <div class="correct"> 
                  <svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                   <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></div>
                   <div class="container-featurecol"> 
                   <div class="container-feature">    <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 32 32"><circle cx="15.6286" cy="15.6286" r="14.6286" stroke="currentColor" stroke-width="1.8"></circle><circle cx="15.6286" cy="15.6286" r="13.9536" stroke="currentColor" stroke-width="1.35"></circle><path fill="currentColor" fill-rule="evenodd" d="M15.6286 1C7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.8" d="M15.6286 1C7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285"></path></svg>                    <div>       درجة التباين + </div>
                   </div>   <div class="contrast-ratio"> <span></span>  <span></span>  <span></span></div>
    </div>
               </a>
               </div>

      </div>
    `;
    

    document.body.appendChild(menuDetailsElement);
    /**  dynamically create and append a new menu icon element to the document using JavaScript, */
var menuicons=document.createElement("div");
menuicons.classList.add("menu-icons");
menuicons.style.opacity="0";
menuicons.innerHTML=`       
      
<svg style="width:100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs><style>.a,.b{fill:#fff;}.b{opacity:0.85;}</style></defs><title>Asset 10</title><circle class="a" cx="31.49" cy="16.08" r="5.5" transform="translate(-2.14 26.98) rotate(-45)"></circle><path class="a" d="M47.62,22.28a88.73,88.73,0,0,1-32.25,0,1.63,1.63,0,0,0-1.92,1.32,1.64,1.64,0,0,0,1.32,1.92,92,92,0,0,0,10.92,1.34,2.62,2.62,0,0,1,2.42,2.93l-.32,2.75a54.14,54.14,0,0,1-3,12.67l-2,5.35a1.65,1.65,0,0,0,3.09,1.16v0l.49-1c1.6-3.41,3.09-6.9,4.45-10.43a.74.74,0,0,1,1.38,0c1.36,3.53,2.85,7,4.45,10.44l.51,1.09h0a1.64,1.64,0,0,0,1.48,1,1.6,1.6,0,0,0,.57-.11,1.64,1.64,0,0,0,1-2.12l-2-5.35a54.67,54.67,0,0,1-3-12.67l-.31-2.77a2.61,2.61,0,0,1,2.42-2.91,92.51,92.51,0,0,0,10.83-1.32,1.73,1.73,0,0,0,1.44-1.67A1.65,1.65,0,0,0,47.62,22.28Z"></path><path class="b" d="M31.5,0A31.5,31.5,0,1,0,63,31.5,31.53,31.53,0,0,0,31.5,0Zm0,60A28.5,28.5,0,1,1,60,31.5,28.54,28.54,0,0,1,31.5,60Z"></path></svg>
;
`
document.body.appendChild(menuicons);
/** check the current page and then decide whether to append  question related to disability  or just the instruction*/
if(window.location.href.includes("home")){
      /**  dynamically create and append a new disabilitymodal to the document using JavaScript, */
      /** if the documnet not home page append question related to disability  and the instruction */

  var modaldisability=document.createElement("div");

  var modaldisability=document.createElement("div");
  modaldisability.id="disabilitymodal";
  modaldisability.classList.add("modal", "fade");
  modaldisability.role="dialog";
  modaldisability.setAttribute("aria-labelledby", "exampleModalCenterTitle");
  modaldisability.setAttribute("aria-hidden", "true");

  
  modaldisability.innerHTML=`
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" tabindex="-1">
  
     
        <div type="button" class="closemodel"  data-dismiss="modal" aria-label="Close"  tabindex="-1">
          <span aria-hidden="true" tabindex="-1" class="closeicon">&times;</span>
        </div>
  
      <div class="modal-body disabilityques" style="display: flex;">
        <div class="iconss-disability"  
        >
          <div>
            <svg width="90px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs>
              <style>.a,.b{fill:#fff;}.b{opacity:0.85;}</style>
            </defs><title>Asset 10</title>
            <circle style="fill:#940a1a;"  class="a" cx="31.49" cy="16.08" r="5.5" transform="translate(-2.14 26.98) rotate(-45)"/>
            <path  style="fill:#940a1a;"  class="a" d="M47.62,22.28a88.73,88.73,0,0,1-32.25,0,1.63,1.63,0,0,0-1.92,1.32,1.64,1.64,0,0,0,1.32,1.92,92,92,0,0,0,10.92,1.34,2.62,2.62,0,0,1,2.42,2.93l-.32,2.75a54.14,54.14,0,0,1-3,12.67l-2,5.35a1.65,1.65,0,0,0,3.09,1.16v0l.49-1c1.6-3.41,3.09-6.9,4.45-10.43a.74.74,0,0,1,1.38,0c1.36,3.53,2.85,7,4.45,10.44l.51,1.09h0a1.64,1.64,0,0,0,1.48,1,1.6,1.6,0,0,0,.57-.11,1.64,1.64,0,0,0,1-2.12l-2-5.35a54.67,54.67,0,0,1-3-12.67l-.31-2.77a2.61,2.61,0,0,1,2.42-2.91,92.51,92.51,0,0,0,10.83-1.32,1.73,1.73,0,0,0,1.44-1.67A1.65,1.65,0,0,0,47.62,22.28Z"/><path class="b" d="M31.5,0A31.5,31.5,0,1,0,63,31.5,31.53,31.53,0,0,0,31.5,0Zm0,60A28.5,28.5,0,1,1,60,31.5,28.54,28.54,0,0,1,31.5,60Z"/><!-- Code injected by live-server -->
            <path  style="fill:#940a1a;"  xmlns="http://www.w3.org/2000/svg" class="b" d="M31.5,0A31.5,31.5,0,1,0,63,31.5,31.53,31.53,0,0,0,31.5,0Zm0,60A28.5,28.5,0,1,1,60,31.5,28.54,28.54,0,0,1,31.5,60Z"/>
              </svg>
          </div>
        </div>
     <div class="quesblind1" > 
  <div style="width: 95%;" class="chromestart">أَهْلاً بِكَ فِي بَوَّابَةِ اَلْوَظَائِفِ اَلْحُكُومِيَّةِ هَذَا اَلْمَوْقِعِ يَدْعَمُ ذَوِي اَلِاحْتِيَاجَاتِ اَلْخَاصَّةِ</div>
  
      <h1  tabindex="0"  class="mar-top" id="quesblind1h1">  هَلْ تُرِيدُ اَلِاسْتِفَادَةُ مِنْ مُمَيِّزَاتِ اَلْمَوْقِعِ ؟</h1>

    
    </div>
       <div class="quesblind2">
  
      
          <h2 tabindex="0" class="mar-top" id="askdisabilityuser">      ما نوع الإِعَاقَةٍ البَصَرِيَّة؟  </h2>
   
          <div tabindex="0" id="disabilityanser1">  <input type="radio" id="val1" name="age" tabindex="-1" >
           <label for="val1"  >فَقَدَ اَلْبَصَرُ</label><br></div>
         
         
         
              
           
         <div tabindex="0" id="disabilityanser2">    <input type="radio" id="val2" name="age" tabindex="-1">
           <label for="val2"  > عَمَى اَلْأَلْوَانِ</label><br>  </div>
          
                
         <div tabindex="0" id="disabilityanser3"> 
                 <input type="radio" id="val3" name="age" tabindex="-1" >
                 <label for="val3"  >   ضَعْفٌ فِي دَرَجَةِ اَلْبَصَرِ </label><br>
         </div>
        </div>
        <div class="quesblind3">
  <div>
  <ul  id="noblind" class="noblindul">
  <li>  <h1 id="notesblind">
    مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر: </h1></li>
<li style="display: flex;align-items: flex-start;gap:3px" ><span>1 </span><div>
  حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَكَ  
</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>2 </span><div>  
  
  لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ  

</div></li>
 
<li style="display: flex;align-items: flex-start;gap:3px"><span>3</span><div> 
لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ أو إلغاؤها اِضْغَطْ عَلَى shift
</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>4</span>
  <div>  
  لِإِعَادَة سَمَاعِ اَلْإرْشَادَاتَ مَرَة أُخْرَى اِضْغَطْ عَلَى ctrl + 1  </div>
  </li>
  <li style="display: flex;align-items: flex-start;gap:3px"><span>5</span><div>    
    لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى ctrl + 2  </div></li>
    <li style="display: flex;align-items: flex-start;gap:3px"><span>6  </span><div>  
    لِمَعْرِفَة اَلْعُنْصُرِ اَلنَّشِطِ فِي اَلصَّفْحَةِ اِضْغَطْ عَلَى insert</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>7</span><div>  
  
 يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ  تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ   
 

</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>8</span><div >  
   عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ  تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا  </div></li>
    
    <li style="display: flex;align-items: flex-start;gap:3px"><span>9</span><div >  
      لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى skip   .</div></li>

      <li style="display: flex;align-items: flex-start;gap:3px"><span>10 </span><div >  
        عِنْدَ رَفْعِ مِلَفٍّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَ اَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ  
  
  
  
      </div></li>
  

  
    <li style="display: flex;align-items: flex-start;gap:3px"><span>11  </span><div>  
      عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ
    
    </div></li>
  
    <li style="display: flex;align-items: flex-start;gap:3px"><span>12  </span><div>  
    عِنْدَ اَلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ لَوْ قُمْتُ بِالضَّغْطِ عَلَى shift بِدُونِ اَلضَّغْطِ عَلَى tab هَيْتَمْ إِلْغَاءَ قَارِئِ اَلشَّاشَةِ فَتَأَكُّدِ مِنْ اَلضَّغْطِ عَلَى shift و tab مَعًا فِي وَقْتٍ وَاحِدٍ

    
    </div></li>
       

  </ul>
  <div id="askshowagain">
  <h1 tabindex="0" id="readagain">
  هل تريد سماع هذه الملاحظات مرة اخري عند دخولك إلى الموقع؟
  </h1>
  
      
  <div tabindex="0" id="yesshowagaincontainer">    <input type="radio" id="showagain" tabindex="-1">
    <label for="showagain" id="showagainlabel" > نَعَمْ </label><br>  </div>
          
    <div tabindex="0" id="noshowagaincontainer">    <input type="radio"  id="noshowagain" tabindex="-1">
      <label for="noshowagain"  id="noshowagainlabel"> لَا </label><br>  </div>
  </div>
  </div>
        </div>
      </div>
  
    </div>
  </div>
  </div>
  `;
  document.body.insertBefore(modaldisability, document.body.firstChild);

}
else{
  txt ( " لَقَدْ تَمَّ تَحْمِيلُ اَلصَّفْحَةِ اِضْغَطْ عَلَى tab لِسَمَاعِ مَا بِالصَّفْحَةِ " )
        /**  dynamically create and append a new disabilitymodal to the document using JavaScript, */
/** if the documnet not home page append instruction screen only */
  var modaldisability=document.createElement("div");
  modaldisability.id="disabilitymodal";
  modaldisability.classList.add("modal", "fade");
  modaldisability.role="dialog";
  modaldisability.setAttribute("aria-labelledby", "exampleModalCenterTitle");
  modaldisability.setAttribute("aria-hidden", "true");
  
  modaldisability.innerHTML=`
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

     
        <div type="button" class="closemodel"  data-dismiss="modal" aria-label="Close"  >
          <span aria-hidden="true">&times;</span>
        </div>
  
      <div class="modal-body disabilityques" style="display: flex;">
        <div class="iconss-disability"  
        >
          <div>
            <svg width="90px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs>
              <style>.a,.b{fill:#fff;}.b{opacity:0.85;}</style>
            </defs><title>Asset 10</title>
            <circle style="fill:#940a1a;"  class="a" cx="31.49" cy="16.08" r="5.5" transform="translate(-2.14 26.98) rotate(-45)"/>
            <path  style="fill:#940a1a;"  class="a" d="M47.62,22.28a88.73,88.73,0,0,1-32.25,0,1.63,1.63,0,0,0-1.92,1.32,1.64,1.64,0,0,0,1.32,1.92,92,92,0,0,0,10.92,1.34,2.62,2.62,0,0,1,2.42,2.93l-.32,2.75a54.14,54.14,0,0,1-3,12.67l-2,5.35a1.65,1.65,0,0,0,3.09,1.16v0l.49-1c1.6-3.41,3.09-6.9,4.45-10.43a.74.74,0,0,1,1.38,0c1.36,3.53,2.85,7,4.45,10.44l.51,1.09h0a1.64,1.64,0,0,0,1.48,1,1.6,1.6,0,0,0,.57-.11,1.64,1.64,0,0,0,1-2.12l-2-5.35a54.67,54.67,0,0,1-3-12.67l-.31-2.77a2.61,2.61,0,0,1,2.42-2.91,92.51,92.51,0,0,0,10.83-1.32,1.73,1.73,0,0,0,1.44-1.67A1.65,1.65,0,0,0,47.62,22.28Z"/><path class="b" d="M31.5,0A31.5,31.5,0,1,0,63,31.5,31.53,31.53,0,0,0,31.5,0Zm0,60A28.5,28.5,0,1,1,60,31.5,28.54,28.54,0,0,1,31.5,60Z"/><!-- Code injected by live-server -->
            <path  style="fill:#940a1a;"  xmlns="http://www.w3.org/2000/svg" class="b" d="M31.5,0A31.5,31.5,0,1,0,63,31.5,31.53,31.53,0,0,0,31.5,0Zm0,60A28.5,28.5,0,1,1,60,31.5,28.54,28.54,0,0,1,31.5,60Z"/>
              </svg>
          </div>
        </div>
  
        <div class="quesblind3" tabindex="0">
<div>

  <ul  id="noblind" class="noblindul">
  <li>  <h1 id="notesblind">
    مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر: </h1></li>
<li style="display: flex;align-items: flex-start;gap:3px" ><span>1 </span><div>
  حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَكَ  
</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>2 </span><div>  
  
  لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ  

</div></li>
 
<li style="display: flex;align-items: flex-start;gap:3px"><span>3</span><div> 
لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ أو إلغاؤها اِضْغَطْ عَلَى shift
</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>4</span>
  <div>  
  لِإِعَادَة سَمَاعِ اَلْإرْشَادَاتَ مَرَة أُخْرَى اِضْغَطْ عَلَى ctrl + 1  </div>
  </li>
  <li style="display: flex;align-items: flex-start;gap:3px"><span>5</span><div>    
    لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى ctrl + 2  </div></li>
    <li style="display: flex;align-items: flex-start;gap:3px"><span>6  </span><div>  
    لِمَعْرِفَة اَلْعُنْصُرِ اَللَّيِّ أَنْتَ وَاقِفٌ عَلَيْهِ اِضْغَطْ عَلَى insert    
</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>7</span><div>  
  
 يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ  تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ   
 

</div></li>
<li style="display: flex;align-items: flex-start;gap:3px"><span>8</span><div >  
   عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ  تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا  </div></li>
    
    <li style="display: flex;align-items: flex-start;gap:3px"><span>9</span><div >  
      لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى skip   .</div></li>

      <li style="display: flex;align-items: flex-start;gap:3px"><span>10 </span><div >  
        عِنْدَ رَفْعِ مِلَفٍّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَ اَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ  
  
  
  
      </div></li>
  

  
    <li style="display: flex;align-items: flex-start;gap:3px"><span>11  </span><div>  
      عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ
    
    </div></li>
  
    <li style="display: flex;align-items: flex-start;gap:3px"><span>12  </span><div>  
    عِنْدَ اَلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ لَوْ قُمْتُ بِالضَّغْطِ عَلَى shift بِدُونِ اَلضَّغْطِ عَلَى tab هَيْتَمْ إِلْغَاءَ قَارِئِ اَلشَّاشَةِ فَتَأَكُّدِ مِنْ اَلضَّغْطِ عَلَى shift و tab مَعًا فِي وَقْتٍ وَاحِدٍ

    
    </div></li>
       

  </ul>

  <h1 tabindex="1" id="readagain">
  هل تريد سماع هذه الملاحظات مرة اخري عند دخولك إلى الموقع؟
  </h1>

      
  <div tabindex="0" id="readagain1">    <input type="radio" id="showagain">
    <label for="showagain" id="showagainlabel"  tabindex="1"> نَعَمْ </label><br>  </div>
          
    <div tabindex="0" id="readagain2">    <input type="radio"  id="noshowagain" >
      <label for="noshowagain"  tabindex="1" id="noshowagainlabel"> لَا </label><br>  </div>

</div>
        </div>
      </div>

    </div>
  </div>
  `;
  document.body.insertBefore(modaldisability, document.body.firstChild);
}
/**clicking the menu icon button triggers the hiding of the button itself while revealing the menu. */
document.getElementsByClassName('menu-icons')[0].addEventListener("click",function(){
  document.getElementsByClassName("menu-details")[0].style.display="block";
  document.getElementsByClassName("menu-icons")[0].style.opacity ="0";
 
 })
 /** when user click on screenreader button ,it  enabling or activating a screen reader within the page */
document.getElementById("screenreader").addEventListener("click",function(){
  if($("#screenreader").hasClass("scrennreaderactive")){
   
    if(localStorage.getItem("screenreaderactive")){
     if(localStorage.getItem("screenreaderactive")=="true"){
         localStorage.removeItem("screenreaderactive");
 
     }
    }
    else{
     localStorage.setItem("screenreaderactive",true);
 
    }
     
 
 
 
 $(this).find('svg path').toggleClass("toggleclicked");
 $(this).find('div').toggleClass("toggleclicked");
 $(this).find('.correct').toggleClass("appearcorrect"); 
 
 }
})

   /**when user click on increasefont button this function is execute ,allows users to increase the font size with three levels,*/

 document.getElementsByClassName("increasefont")[0].addEventListener("click",function(){
    if(localStorage.getItem("largeratioactive")){
    
      if(localStorage.getItem("largeratioactive")=='1'){
   
         document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.add("largerratioactive")
    
          document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
            if(ele.tagName=="A"){
              let fontsize=window.getComputedStyle(ele).fontSize;
              ele.style.fontSize="20px";
            }       
      
             if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION"&&ele.tagName!="A"){
     let fontsize=window.getComputedStyle(ele).fontSize;
              ele.style.fontSize=parseInt(fontsize)+2+"px";
             }
                             
           
   
             if(ele.tagName=="SELECT"){
     
              let fontsize=window.getComputedStyle(ele).fontSize;
                      ele.style.fontSize="20px";
                     }
                       
                     if(ele.tagName=="OPTION"){
                 
              let fontsize=window.getComputedStyle(ele).fontSize;
                      ele.style.fontSize="20px";
                     }
        
   
   
   
           });
          
         
         
       
   
         localStorage.setItem("largeratioactive","2");
   
    
      }
   
     
     
     else if(localStorage.getItem("largeratioactive")=='2'){
      
    
         document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[2].classList.add("largerratioactive")
          document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
         
            if(ele.tagName=="A"){
              let fontsize=window.getComputedStyle(ele).fontSize;
              ele.style.fontSize="23px";
             
            }       
      
   
             if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION"&&ele.tagName!="A"){
     let fontsize2=window.getComputedStyle(ele).fontSize;
              ele.style.fontSize=parseInt(fontsize2)+3+"px";
             
             }
                                   
             if(ele.tagName=="SELECT"){
     
              let fontsize=window.getComputedStyle(ele).fontSize;
                      ele.style.fontSize="23px";
                     }
                       
                     if(ele.tagName=="OPTION"){
                 
              let fontsize=window.getComputedStyle(ele).fontSize;
                      ele.style.fontSize="23px";
                     }
        
   
        
           });
   
    
             localStorage.setItem("largeratioactive","3");
   
      
      
     }
        
   else  if(localStorage.getItem("largeratioactive")=='3'){
   
         document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[2].classList.remove("largerratioactive")
         document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.remove("largerratioactive")
         document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.remove("largerratioactive")
   
         
             localStorage.removeItem("largeratioactive");
   
        
             document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
              if(ele.tagName=="A"){
                let fontsize=window.getComputedStyle(ele).fontSize;
                ele.style.fontSize="16px";         
                             }
               if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION" &&ele.tagName!="A"){
   
                var size = parseInt($(ele).css("font-size"));
         
                size1 = size- 7+"px";
             
                $(ele).css({
                  'font-size': size1
                });
               }
               if(ele.tagName=="SELECT"){
     
                let fontsize=window.getComputedStyle(ele).fontSize;
                        ele.style.fontSize="16px";
                       }
                         
                       if(ele.tagName=="OPTION"){
                   
                let fontsize=window.getComputedStyle(ele).fontSize;
                        ele.style.fontSize="16px";
                       }
         
   
             });
                    
          document.querySelectorAll( 'select' ).forEach((ele,i)=>{
   
           if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
   let fontsize=window.getComputedStyle(ele).fontSize;
            ele.style.fontSize="16px";
           }
     
   
         });
         document.querySelectorAll( 'input' ).forEach((ele,i)=>{
   
           if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
   let fontsize=window.getComputedStyle(ele).fontSize;
            ele.style.fontSize="16px";
           }
     
   
         });
        
             $(this).find('svg path').toggleClass("toggleclicked");
             $(this).find('div').toggleClass("toggleclicked");
             $(this).find('.correct').toggleClass("appearcorrect");  
      
   
     }
   
   }
   else{
   
     localStorage.setItem("largeratioactive","1");
     document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
   
      document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
        if(ele.tagName=="A"){
          let fontsize=window.getComputedStyle(ele).fontSize;
          ele.style.fontSize="16px";
                       
                       }
                       if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION"&&ele.tagName!="A"){   
          var size = parseInt($(ele).css("font-size"));
   
          size1 = size+ 2+"px";
   
          $(ele).css({
            'font-size': size1
          });
         }
   
         if(ele.tagName=="SELECT"){
     
          let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="18px";
                 }
                   
                 if(ele.tagName=="OPTION"){
             
          let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="18px";
                 }
    
   
       });
    
   
     
   
      
     $(this).find('svg path').addClass("toggleclicked");
     $(this).find('div').addClass("toggleclicked");
     $(this).find('.correct').addClass("appearcorrect");  
   
   }
   
   
 })
    









   /**Increase cursor size  */

    document.getElementsByClassName("cursorsize")[0].addEventListener("click",function(){
   
      document.body.classList.toggle("cursorcustom");
      $(this).find('svg path').toggleClass("toggleclicked");
      $(this).find('div').toggleClass("toggleclicked");
      $(this).find('.correct').toggleClass("appearcorrect"); 
      if(localStorage.getItem("cursoractive")){
       localStorage.removeItem("cursoractive")
      }
      else{
       localStorage.setItem("cursoractive",true)
      }
     })
   

   /**when user click on saturation button this function is execute , Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color. */
   if(   document.getElementsByClassName("saturation")[0]){
    document.getElementsByClassName("saturation")[0].addEventListener("click",function(){
   
      if(localStorage.getItem("saturation")){
      if(localStorage.getItem("saturation")==1){
        document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[1].classList.add("saturationratioactive");
    
        localStorage.setItem("saturation", 2);
        document.getElementsByTagName("html")[0].classList.add("filter2");
    
    
      }
      else if (localStorage.getItem("saturation") == 2) {
      
        document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[2].classList.add("saturationratioactive");
    
    
        localStorage.setItem("saturation", 3);
        document.getElementsByTagName("html")[0].classList.add("filter3");
    
    
        
      }
      else if(localStorage.getItem("saturation")==3){
     
        document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[0].classList.remove("saturationratioactive");
    
        document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[1].classList.remove("saturationratioactive");
    
        document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[2].classList.remove("saturationratioactive");
        localStorage.removeItem("saturation");
        $(this).find('svg path').toggleClass("toggleclicked");
        $(this).find('div').toggleClass("toggleclicked");
        $(this).find('.correct').toggleClass("appearcorrect"); 
    
        document.getElementsByTagName("html")[0].classList.remove("filter3");
        document.getElementsByTagName("html")[0].classList.remove("filter2");
        document.getElementsByTagName("html")[0].classList.remove("filter1");
    
    
      }
      }
      else{
        localStorage.setItem("saturation", 1);
        document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive");
        $(this).find('svg path').toggleClass("toggleclicked");
        $(this).find('div').toggleClass("toggleclicked");
        $(this).find('.correct').addClass("appearcorrect"); 
        document.getElementsByTagName("html")[0].classList.add("filter1");
    
    
        
      }
    })
   }

   /** when user click on contrast button ,it execute   contrast() filter via the filter CSS property, changing contrast by shifting colors of the entire element, including content, border, background, and shadows. we have three levels */
   if(   document.getElementsByClassName("contrast")[0]){
    document.getElementsByClassName("contrast")[0].addEventListener("click",function(){
   
      if(localStorage.getItem("contrast")){
      if(localStorage.getItem("contrast")==1){
        document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[1].classList.add("saturationratioactive");
    
        localStorage.setItem("contrast", 2);
        document.getElementsByTagName("html")[0].classList.add("contrast2");
    
      }
      else if (localStorage.getItem("contrast") == 2) {
      
        document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[2].classList.add("saturationratioactive");
    
    
        localStorage.setItem("contrast", 3);
        document.getElementsByTagName("html")[0].classList.add("contrast3");
    
        
      }
      else if(localStorage.getItem("contrast")==3){
        document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[0].classList.remove("saturationratioactive");
    
        document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[1].classList.remove("saturationratioactive");
    
        document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[2].classList.remove("saturationratioactive");
        localStorage.removeItem("contrast");
        $(this).find('svg path').toggleClass("toggleclicked");
        $(this).find('div').toggleClass("toggleclicked");
        $(this).find('.correct').toggleClass("appearcorrect"); 
        document.getElementsByTagName("html")[0].classList.remove("contrast1");
        document.getElementsByTagName("html")[0].classList.remove("contrast2");
        document.getElementsByTagName("html")[0].classList.remove("contrast3");
    
    
      }
      }
      else{
        localStorage.setItem("contrast", 1);
        document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive");
        $(this).find('svg path').toggleClass("toggleclicked");
        $(this).find('div').toggleClass("toggleclicked");
        $(this).find('.correct').addClass("appearcorrect"); 
        document.getElementsByTagName("html")[0].classList.add("contrast1");
    
        
      }
    })
   }

   /** when user click on reset button  ,resets the values of disability menu  */
  if(   document.getElementsByClassName("buttonresets")[0]){
    document.getElementsByClassName("buttonresets")[0].addEventListener("click",function(){


      sessionStorage.clear();
          localStorage.clear();
          window.location.reload();
      
         })
  }

      /** when user click on reset button  ,resets the values of disability menu  */
if(   document.getElementsByClassName("resettext")[0]){
  document.getElementsByClassName("resettext")[0].addEventListener("click",function(){


    sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
    
       })
}

         /*When you press the  instruction button , the instructions screen will appear*/
         if(  document.getElementsByClassName("instructionstext")[0]){
          document.getElementsByClassName("instructionstext")[0].addEventListener("click",function(){
            document.getElementById("disabilitymodal").style.opacity="1"
            // $("#disabilitymodal").modal('show');
            document.getElementById('disabilitymodal').style.cssText = 'display: block; opacity: 1;';
        
            if(localStorage.getItem("screenreaderactive")){
        
        
          
              var utterance = new SpeechSynthesisUtterance(document.getElementsByClassName("noblindul")[0].innerText);
              var voices = speechSynthesis.getVoices();
              var arabicVoice = voices.find(function (voice) {
              return voice.lang === "ar-EG";
              });
              utterance.lang="ar-EG"
              if (arabicVoice) {
              utterance.voice = arabicVoice;
              }
              var voices = speechSynthesis.getVoices();
              
              // Log the names of all available voices to the console
              voices.forEach(function (voice) {
           
              });
              
              
              
              // var selectedVoice = voices.find(function (voice) {
              // return voice.name === "ar-EG-HodaNeural"; // Specify the Shakir voice
              
              // });
              // utterance.voice=selectedVoice;
              utterance.rate = 1; // Adjust the rate as needed.
              
              speechSynthesis.speak(utterance);
              utterance.addEventListener("start", (event) => {
              });
           
        
        
        
           
          if(   document.getElementsByClassName("closemodel")[0]){
            document.getElementsByClassName("closemodel")[0].addEventListener("click",function(){

              if (utterance) {
                speechSynthesis.cancel();}  
                document.getElementById("disabilitymodal").style.opacity="0";
                document.getElementById("disabilitymodal").style.visibility = "hidden";

     
             })
           
         }
          }
     
            if(window.location.href.includes("home")){
         
              document.getElementsByClassName("quesblind1")[0].style.display="none";
              document.getElementsByClassName("quesblind2")[0].style.display="none"
              
              document.getElementsByClassName("quesblind3")[0].style.display="block";
              // document.getElementById("askshowagain").style.display="none";
              // document.getElementById("readagain").style.display="none";
              // document.getElementById("readagain1").style.display="none";
              // document.getElementById("readagain2").style.display="none";
              document.getElementsByClassName("quesblind3")[0],focus();
              // txt(  document.getElementsByClassName("quesblind3")[0]);
              document.getElementById("disabilitymodal").style.zIndex="1300";
              document.getElementById("askshowagain").style.display="none"
            }
         else{
          document.getElementById("disabilitymodal").style.zIndex = "1300";
          document.getElementsByClassName("quesblind3")[0].style.display="block";
          // document.getElementById("askshowagain").style.display="none";
          document.getElementById("readagain").style.display="none";
          document.getElementById("readagain1").style.display="none";
          document.getElementById("readagain2").style.display="none";
          document.getElementsByClassName("quesblind3")[0],focus();
         }
        
          })
         }
      /* when user click on Highlight links button ,  highlight all links  in Javascript */
 
    document.getElementsByClassName('highlight-link')[0].addEventListener("click",function(){
      document.querySelectorAll( 'body a' ).forEach((ele,i)=>{
      
      if(!ele.classList.contains("icon-dis")){
      ele.classList.toggle("highlightlink");
      }
      
      
      
      
      });
      if(localStorage.getItem("highlightlink")){
      if(localStorage.getItem("highlightlink")=="true"){
          localStorage.removeItem("highlightlink");
      
      }
      }
      else{
      localStorage.setItem("highlightlink",true);
      
      }
      
      
      
      $(".highlight-link").find('svg path').toggleClass("toggleclicked");
      $(".highlight-link").find('div').toggleClass("toggleclicked");
      $(".highlight-link").find('.correct').toggleClass("appearcorrect"); 
      
      })
         /* when user click on linehight  button ,   all element have  line-height 1.25 or 1.5 or 2  */
   
      document.getElementsByClassName("linehightparent")[0].addEventListener("click",function(){
      
      
      if(localStorage.getItem("lineheightactive")){
      if(localStorage.getItem("lineheightactive")=="1"){
          document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[1].classList.add("largerratioactive")
      
          localStorage.setItem("lineheightactive","2");
          document.body.style.lineHeight="1.5";
          document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
      
      if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
      let height=window.getComputedStyle(ele).lineHeight;
       ele.style.lineHeight=1.9;
      }
      
      
      });
      
      }
      else if(localStorage.getItem("lineheightactive")=="2") {
          localStorage.setItem("lineheightactive","3");
          document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[2].classList.add("largerratioactive")
          document.body.style.lineHeight="2";
          document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
      
      if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
      let height=window.getComputedStyle(ele).lineHeight;
       ele.style.lineHeight=2.3;
      }
      
      
      });
      
      }
      else if(localStorage.getItem("lineheightactive")=="3"){
      
          $(this).find('svg path').removeClass("toggleclicked");
      $(this).find('div').removeClass("toggleclicked");
      $(this).find('.correct').removeClass("appearcorrect"); 
      localStorage.removeItem("lineheightactive");
      document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[0].classList.remove("largerratioactive")
      document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[1].classList.remove("largerratioactive")
      document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[2].classList.remove("largerratioactive")
      document.body.style.lineHeight="1";
      document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
      
      if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
      let height=window.getComputedStyle(ele).lineHeight;
       ele.style.lineHeight=1.5;
      }
      
      
      });
      
      }
      }
      else{
      localStorage.setItem("lineheightactive","1");
      document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
      
      $(this).find('svg path').toggleClass("toggleclicked");
      $(this).find('div').toggleClass("toggleclicked");
      $(this).find('.correct').toggleClass("appearcorrect"); 
      document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
      
      if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
      let height=window.getComputedStyle(ele).lineHeight;
       ele.style.lineHeight=1.7;
      }
      
      
      });
      // document.body.style.lineHeight="1.25"
      }
      })
      
   
   
   
   
   
   

   /**when user click on x button in menu it will close and menu icon will appear */
   document.getElementsByClassName('close-menu')[0].addEventListener("click",function(){
       document.getElementsByClassName("menu-details")[0].style.display="none";
       document.getElementsByClassName("menu-icons")[0].style.opacity="1"
    
   })
    localStorage.removeItem("tab");
    /** We want to implement paging on a webpage. When a user clicks on the second page, it should reload the second page and automatically focus on the first element in the table of job information by default.*/
    /**this function to check paging  */
    if(!(location.href.includes("Search")||location.href.includes("JOB2"))){
      localStorage.removeItem("paging");
    }
       if(localStorage.getItem("paging")){
         document.getElementById("ContentPlaceHolder1_grdAdvert").getElementsByTagName("td")[0].focus();
         txt(document.getElementById("ContentPlaceHolder1_grdAdvert").getElementsByTagName("td")[0].innerHTML);
       }
    var loadingvar=0;
    /*show modal first  */
if(window.location.href.includes("home")){

if(! sessionStorage.getItem("session")){
  if(localStorage.getItem("blind")){

    if(localStorage.getItem("showagain")){
      if(localStorage.getItem("showagain")=="true"){

//         document.getElementById("disabilitymodal").style.zIndex = "900000 !important";
//         document.getElementsByClassName("quesblind2")[0].style.display="none";
//         document.getElementsByClassName("quesblind1")[0].style.display="none";
//         document.getElementsByClassName("quesblind3")[0].style.display="block";
//         document.getElementById("disabilitymodal").style.opacity="1"
//         document.getElementsByClassName("quesblind3")[0].focus();

// let firstvoice=document.getElementsByClassName("noblindul")[0].innerText;
// setTimeout(() => {
//   txt(firstvoice)
// }, 10);

$("#disabilitymodal").modal('show');
document.getElementById("disabilitymodal").style.zIndex = "900000 !important";
document.getElementsByClassName("quesblind2")[0].style.display="none";
document.getElementsByClassName("quesblind1")[0].style.display="none";
document.getElementsByClassName("quesblind3")[0].style.display="block";
document.getElementById("disabilitymodal").style.opacity="1"
document.getElementsByClassName("quesblind3")[0].focus();

setTimeout(() => {
  txt(document.getElementsByClassName("noblindul")[0].innerText)
}, 10);   
 
      }
      else{
document.getElementById("Label1country").focus();
        document.getElementById("disabilitymodal").style.opacity="0";
        document.getElementById("disabilitymodal").style.zIndex = "-1";
      

  
      }
  
  
    }
    else{
      setTimeout(()=>{
        txt( document.getElementById("Label1country").innerText);
    
      },10)
      document.getElementById("Label1country").focus();
        document.getElementById("disabilitymodal").style.opacity="0";
        document.getElementById("disabilitymodal").style.zIndex = "-1";
      

      var userAgent = navigator.userAgent;

      if (userAgent.includes("Chrome")) {
    
      } else if (userAgent.includes("Firefox")) {
        // document.getElementById("quesblind1h1").focus();
          console.log("You are using Mozilla Firefox");
      } else if (userAgent.includes("Safari")) {
        // document.getElementById("quesblind1h1").focus();
          console.log("You are using Apple Safari");
      } else if (userAgent.includes("Edge")) {
        // document.getElementById("quesblind1h1").focus();
          console.log("You are using Microsoft Edge");
      } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        // document.getElementById("quesblind1h1").focus();
          console.log("You are using Opera");
      } else if (userAgent.includes("IE") || userAgent.includes("Trident")) {
        // document.getElementById("quesblind1h1").focus();
          console.log("You are using Internet Explorer");
      } else {
          console.log("Unable to determine the browser");
          // document.getElementById("quesblind1h1").focus();
      }
  
    }
  
  }
else{

  $("#disabilitymodal").modal('show');
  document.getElementById("disabilitymodal").style.zIndex = "900000 !important";
  document.getElementById("disabilitymodal").style.opacity="1"
  txt("أَهْلاً بِكَ فِي بَوَّابَةِ اَلْوَظَائِفِ اَلْحُكُومِيَّةِ هَذَا اَلْمَوْقِعِ يَدْعَمُ ذَوِي اَلِاحْتِيَاجَاتِ اَلْخَاصَّةِ");
  txt("حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَكَ")

  document.getElementsByClassName("chromestart")[0].setAttribute("tabindex",0);
  document.getElementsByClassName("chromestart")[0].focus();
 var userAgent = navigator.userAgent;

//  if (userAgent.includes("Chrome")) {
//    document.getElementsByClassName("chromestart")[0].setAttribute("tabindex",0);
//    document.getElementsByClassName("chromestart")[0].focus();
//  } else if (userAgent.includes("Firefox")) {
//   //  document.getElementById("quesblind1h1").focus();
//      console.log("You are using Mozilla Firefox");
//  } else if (userAgent.includes("Safari")) {
//   //  document.getElementById("quesblind1h1").focus();
//      console.log("You are using Apple Safari");
//  } else if (userAgent.includes("Edge")) {
//   //  document.getElementById("quesblind1h1").focus();
//      console.log("You are using Microsoft Edge");
//  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
//   //  document.getElementById("quesblind1h1").focus();
//      console.log("You are using Opera");
//  } else if (userAgent.includes("IE") || userAgent.includes("Trident")) {
//   //  document.getElementById("quesblind1h1").focus();
//      console.log("You are using Internet Explorer");
//  } else {
//      console.log("Unable to determine the browser");
//     //  document.getElementById("quesblind1h1").focus();
//  }


}

sessionStorage.setItem("session",true);

}

 else{

if(localStorage.getItem("blind")){

  if(localStorage.getItem("showagain")){
 
    if(localStorage.getItem("showagain")=="true"){
      $("#disabilitymodal").modal('show');
      document.getElementById("disabilitymodal").style.zIndex = "900000 !important";
      document.getElementsByClassName("quesblind2")[0].style.display="none";
      document.getElementsByClassName("quesblind1")[0].style.display="none";
      document.getElementsByClassName("quesblind3")[0].style.display="block";
      document.getElementById("disabilitymodal").style.opacity="1"
document.getElementsByClassName("quesblind3")[0].focus();
    
      setTimeout(() => {
        txt(document.getElementsByClassName("noblindul")[0].innerText)
      }, 10);    

    }

    else{
      const modal = document.getElementById("disabilitymodal");
      const tabbableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      tabbableElements.forEach(element => {
          element.removeAttribute('tabindex')
          element.setAttribute('tabindex', '-1');
      });
      document.getElementById("Label1country").focus();
   document.getElementById("disabilitymodal").style.opacity="0";
      document.getElementById("disabilitymodal").style.zIndex = "-1";
  
    }

  }
  else{
    txt("أَهْلاً بِكَ فِي بَوَّابَةِ اَلْوَظَائِفِ اَلْحُكُومِيَّةِ هَذَا اَلْمَوْقِعِ يَدْعَمُ ذَوِي اَلِاحْتِيَاجَاتِ اَلْخَاصَّةِ");
    txt("حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَكَ")
    document.getElementsByClassName("quesblind1")[0].querySelector("div").focus()
    $("#disabilitymodal").modal('show');
    document.getElementById("disabilitymodal").style.opacity="1";
    document.getElementById("disabilitymodal").style.zIndex = "900000 !important";
  }

      // document.getElementById("notesblind").focus();
}
else{

$("#disabilitymodal").modal('show');
document.getElementById("disabilitymodal").style.zIndex = "900000 !important";
document.getElementById("disabilitymodal").style.opacity="1";
txt("أَهْلاً بِكَ فِي بَوَّابَةِ اَلْوَظَائِفِ اَلْحُكُومِيَّةِ هَذَا اَلْمَوْقِعِ يَدْعَمُ ذَوِي اَلِاحْتِيَاجَاتِ اَلْخَاصَّةِ");
txt("حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَكَ")
document.getElementsByClassName("chromestart")[0].setAttribute("tabindex",0);
document.getElementsByClassName("chromestart")[0].focus();}



 }     /*by default disability menu will open  */
      
 
       document.getElementsByClassName('menu-icons')[0].click();
     
     
  
     
     
     
     /**call function convert text to sc=peech to say greeting  of website */
  
}
else{
  if(window.location.href.includes("SearchJobs55b3.html")){
    if(!localStorage.getItem("paging")){
      document.getElementById("Label1country").focus();
      if(localStorage.getItem("screenreaderactive")){
        txt("بوابة الوظائف الحكومية")
      }
  
    }

  }
  document.getElementById("disabilitymodal").style.zIndex = "-1";

}


  document.addEventListener("keypress", function(event) {
   // If the user presses the "Enter" key on the keyboard
   if (event.code === 'Enter' || event.code === 'Space') {
   event.preventDefault();

   }
   }); 
      // If the user presses the "tab" key on the keyboard
//check type of element 
   document.addEventListener("focus",(event) => { 

   let val=event.target.innerText;
   if(event.target.tagName!="SELECT"&& event.target.tagName!= "INPUT"&&event.target.tagName!="LABEL"&&event.target.tagName !='A'&&event.target.tagName != 'BUTTON'){

   if(localStorage.getItem("screenreaderactive")=="true"){

  if(true){
  if(event.target.innerText){


if(!event.target.classList.contains("closemodel")){
  if(!event.target.classList.contains("closeicon")){
    if(document.getElementById("disabilitymodal").style.display=="block"){

 
        console.log(event.target.id=="yesshowagaincontainer"||event.target.id=="noshowagaincontainer"||event.target.id=="readagain");
        if(event.target.id=="quesblind1h1"|| event.target.id=="disabilityanser1"||event.target.id=="disabilityanser2"||event.target.id=="disabilityanser3"||event.target.id=="yesshowagaincontainer"||event.target.id=="noshowagaincontainer"){
          if(event.target.hasAttribute("tabindex")){

          txt(val);
       
          txt("اِضْغَطْ عَلَى enter لِلِاخْتِيَارِ")
          }
        }
        if(event.target.id=="askdisabilityuser" ||event.target.id=="readagain"){
          if(event.target.hasAttribute("tabindex")){

          txt(val);
       
          
          }
        }
   
    }
    else{
      if(event.target.hasAttribute("tabindex")){
        if(event.target.id=="Label1country"){
          txt ( " عُنْوَانُ اَلصَّفْحَةِ" );
          txt(val)
        }
        else if(event.target.id=="yesshowagaincontainer"||event.target.id=="noshowagaincontainer"){
          txt ( `اِضْغَطْ enter إِذَا كَانَتْ إِجَابَتُكَ ${val} `);
         
        }
        else{
          txt ( " هَذَا اَلْعُنْصُرِ نَصَّ " );
          txt(val)
        }

   
    
    
    }
    }
 

  }

  
  
  


}

  }
  }

   }
   
   }
   else if(event.target.tagName=="SELECT"){
   if(localStorage.getItem("screenreaderactive")=="true"){
    txt ( "هَذَا عُنْصُرُ اَلِاخْتِيَارِ مِنْ مُتَعَدِّدٍ اِضْغَطْ لِلسَّهْمِ أَعْلَى وَلِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ" )

    txt(event.target.options[event.target.selectedIndex].innerText);

   
   }
   }
   else if(event.target.tagName=="INPUT"){

   if(event.target.type=="text"){
   if(localStorage.getItem("screenreaderactive")=="true"){
    txt ( " أَنْتَ اَلْآنَ وَاقِفٍ عَلَى عُنْصُرِ إِدْخَالِ مِنْ فَضْلِكَ اُدْخُلْ اَلْقِيمَةِ " )

    setTimeout(()=>{
    readsecond(event.target);
  },2800)

   
   }
   
   }

   else{if(document.getElementById("val1")){
    if(document.getElementById("val1").type!="radio"){
      txt(event.target.value)
   }
   }
if(event.target.type=="submit"){
  // txt("انت الان واقف على عنصر ارسال ما تم ادخله من البيانات ")
  // txt(`انت الان واقف على زرار ${event.target.value}أضغط على enter`)
   txt(event.target.value);
  
}
if(event.target.type=="file"){
  // txt("انت الان واقف على عنصر ارسال ما تم ادخله من البيانات ")
  // txt(`انت الان واقف على زرار ${event.target.value}أضغط على enter`)
   txt("أَنْتَ اَلْآنَ وَاقِفٍ عَلَى عُنْصُرِ إِدْخَالِ مِلَفِّ اِضْغَطْ عَلَى enter لِاخْتِيَارِ اَلْمِلَفِّ وَاضْغَطْ عَلَى tab وَسَوْفَ يقَرَأَاسَمْ اَلْمِلَفُّ اَلَّذِي اِخْتَرْتُهُ وَإِذَا أَرَدْتُ أَنَّ تَغَيُّرَ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab سَوْفَ يَرْجِعُ خُطْوَةً لِلْوَرَاءِ وَقُمْ بِالضَّغْطِ عَلَى enter حَتَّى تَحَمُّلِ مِلَفٍّ آخَرَ");
  
}
    
   }

    
   }
   else if(event.target.tagName=="LABEL"){
 
        if(localStorage.getItem("screenreaderactive")=="true"){
        txt(event.target.innerText);
        txt("  إذا كان هذا إختيارك أضغط على ENTER  ")
        }
        
        
        }
       else if (event.target.tagName === 'BUTTON') {

        if(localStorage.getItem("screenreaderactive")=="true"){
txt("انت الان على عنصر زر للضغط اضغط enter");
          txt(event.target.innerText);
        
          }
        }

        else if (event.target.tagName === 'A') {

 console.log(event.target.parentElement.id=="myTopnav");

if(event.target.parentElement.id=="myTopnav"){
         txt ( ` رَابِطٌ فِي اَلْقَائِمَةِ  لِلذَّهَابِ لِلرَّابِطِ اِضْغَطْ عَلَى enter`  ) ;
         txt(`${ event.target.innerText }`)
              // txt(event.target.innerHTML);
        }
        else{
          txt ( ` هَذَا اَلْعُنْصُرِ رَابِط  لِلذَّهَابِ إِلَيْهِ اِضْغَطْ عَلَى enter ` ) ;
txt(`${ event.target.innerText }`)
                        //  txt(event.target.innerHTML);

        }
      }
   
   else if(event.target.classList.contains("closemodel")){
   
   
   }
   
   else{
   if(localStorage.getItem("screenreaderactive")=="true"){
 console.log(event.target)
  txt(event.target.innerText)
   }
   }
   },
   true,
   );
   
   
   
   
    //If the user presses the "ArrowDown" or"ArrowUp" key on the keyboard in select  
   $("select").on("keyup", function(){
   
   
   switch (event.key) {
    case "ArrowDown":
   {
      let bb=this.selectedIndex;
   
   
   
   
   
   const $optionsb = Array.from(this.options);
   
   const optionToSelectb = $optionsb.find(item => item.index==bb);
   this.value = optionToSelectb.value;
            // optionToSelectb.selected = true;
   txt(optionToSelectb.innerText);
 console.log(optionToSelectb)
   
   }
   break;
    case "ArrowUp":{

    let b=this.selectedIndex;
   
   
   
   
   
   const $options = Array.from(this.options);
   if(true){
   const optionToSelect = $options.find(item => item.index==b);
   this.value = optionToSelect.value;

   txt(optionToSelect.innerText);
   
   }
   }
   break;}
   
   });
   
  
   var phraseDiv;
   var resultDiv;
   var startSpeakTextAsyncButton;
   
   
   var subscriptionKey, serviceRegion;
   var SpeechSDK;
   var synthesizer;
   
    /* txt() is convert txt to speech */
   function txt(a){
  //    debugger;
  //  var utterance = new SpeechSynthesisUtterance(a);
  //  var voices = speechSynthesis.getVoices();
  //  var arabicVoice = voices.find(function (voice) {
  //  return voice.lang === "ar-EG";
  //  });
  //  utterance.lang="ar-EG";
  //  if (arabicVoice) {
  //  utterance.voice = arabicVoice;
  //  }
  //  var voices = speechSynthesis.getVoices();
  //  console.log(speechSynthesis.getVoices())
  //  // Log the names of all available voices to the console
  //  voices.forEach(function (voice) {

  //  });
   
     
  var utterance = new SpeechSynthesisUtterance(a);
  utterance.lang = "ar-EG";

  var voices = speechSynthesis.getVoices();
  var arabicVoice = voices.find(function (voice) {
  return voice.lang === "ar-EG";
  });
  utterance.lang="ar-EG"
  if (arabicVoice) {
  utterance.voice = arabicVoice;
  }
  // var voices = speechSynthesis.getVoices();
  // console.log(speechSynthesis.getVoices())
  // Log the names of all available voices to the console
  // voices.forEach(function (voice) {

  // });
  if (speechSynthesis.getVoices().length !== 0) {
    // Voices are already available, proceed with your code
    var voices = speechSynthesis.getVoices();
    console.log(voices);
  } else {
    // Voices not available yet, listen for the voiceschanged event
    speechSynthesis.onvoiceschanged = function() {
        // Now voices are available, proceed with your code
        var voices = speechSynthesis.getVoices();
        console.log(voices);
    };
  }
   
   var selectedVoice = voices.find(function (voice) {
   return voice.name === "ar-EG-HodaNeural"; // Specify the Shakir voice
   
   });
   utterance.voice=selectedVoice;
   utterance.rate = 1; // Adjust the rate as needed.
   
   speechSynthesis.speak(utterance);
   utterance.addEventListener("start", (event) => {
   });

   document.onkeydown = (e) => {
    
    if(e.key === 'Tab') {
      console.log( document.activeElement);
      localStorage.setItem("tab",true)
      if (utterance) {
        speechSynthesis.cancel();
      }
      if(document.getElementById("disabilitymodal").style.display!="none"){
        
          if(document.getElementsByClassName("quesblind3")[0].style.display=="block"){
            if(document.getElementById("readagain").style.display==="none"||document.getElementById("askshowagain").style.display==="none"){
            document.getElementById("disabilitymodal").style.opacity="0";
            document.getElementById("disabilitymodal").style.display="none";
          
          
            }
          
        }
      }

    }
}
document.onkeydown = (e) => {
    
  if(e.key === 'Escape') {
   

  if (utterance) {
    speechSynthesis.cancel();
  }
   if(document.getElementsByClassName("disabilityques")[0].style.display=="flex"){

      $("#disabilitymodal").modal("hide");
      document.getElementById("disabilitymodal").style.opacity="0"
      document.getElementById("disabilitymodal").style.zIndex="-1"
    }
  }
}

document.addEventListener('keydown', function onEvent(event) {
  if (event.code === 'Enter' || event.code === 'Space') {
  if(event.target.id=="filename"){

    }
 
   else{
    event.target.click();
   }
    if (utterance) {
      speechSynthesis.cancel();
    }



  }});
  document.addEventListener( 'click', (event) => {
    if(document.getElementById("disabilitymodal").style.dispaly!="block"){
      // document.getElementById("disabilitymodal").style.zIndex="-1"
    }});

   document.addEventListener( 'keydown', (event) => {
if(document.getElementById("disabilitymodal").style.dispaly!="block"){
  // document.getElementById("disabilitymodal").style.zIndex="-1"
}
    if( true === event.ctrlKey && '0'=== event.key ) {
      if (utterance) {
        speechSynthesis.cancel();
        $("#screenreader").find('svg path').removeClass("toggleclicked");
        $("#screenreader").find('div').removeClass("toggleclicked");
        $("#screenreader").find('.correct').removeClass("appearcorrect");  
    localStorage.removeItem("screenreaderactive");
    }
    }

    if( true === event.ctrlKey && '1' === event.key ) {
 
      document.getElementById("disabilitymodal").style.opacity="1"
      // $("#disabilitymodal").modal('show');
      document.getElementById('disabilitymodal').style.cssText = 'display: block; opacity: 1;';
  
      if(localStorage.getItem("screenreaderactive")){
  
  
    
        var utterance = new SpeechSynthesisUtterance(document.getElementsByClassName("noblindul")[0].innerText);
        var voices = speechSynthesis.getVoices();
        var arabicVoice = voices.find(function (voice) {
        return voice.lang === "ar-EG";
        });
        utterance.lang="ar-EG"
        if (arabicVoice) {
        utterance.voice = arabicVoice;
        }
        var voices = speechSynthesis.getVoices();
        
        // Log the names of all available voices to the console
        voices.forEach(function (voice) {
     
        });
        
        
        
        var selectedVoice = voices.find(function (voice) {
        return voice.name === "ar-EG-HodaNeural"; // Specify the Shakir voice
        
        });
        utterance.voice=selectedVoice;
        utterance.rate = 1; // Adjust the rate as needed.
        
        speechSynthesis.speak(utterance);
        utterance.addEventListener("start", (event) => {
        });
     
  
  
  
     
    if(    document.getElementsByClassName("closemodel")[0]){
      document.getElementsByClassName("closemodel")[0].addEventListener("click",function(){

        if (utterance) {
          speechSynthesis.cancel();}  
          document.getElementById("disabilitymodal").style.opacity="0";
          document.getElementById("disabilitymodal").style.visibility = "hidden";


       })
    }

        
      }
      if(window.location.href.includes("home")){
        document.getElementsByClassName("quesblind1")[0].style.display="none";
        document.getElementsByClassName("quesblind2")[0].style.display="none"
        
        document.getElementsByClassName("quesblind3")[0].style.display="block";
        // document.getElementById("askshowagain").style.display="none";
        document.getElementById("readagain").style.display="none";
        document.getElementById("readagain1").style.display="none";
        document.getElementById("readagain2").style.display="none";
        document.getElementsByClassName("quesblind3")[0],focus();
        // txt(  document.getElementsByClassName("quesblind3")[0]);
        document.getElementById("disabilitymodal").style.zIndex="1300"
      }
   else{
    document.getElementById("disabilitymodal").style.zIndex = "1300";
    document.getElementsByClassName("quesblind3")[0].style.display="block";
    // document.getElementById("askshowagain").style.display="none";
    document.getElementsByClassName("quesblind3")[0],focus();
    document.getElementById("readagain").style.display="none";
    document.getElementById("readagain1").style.display="none";
    document.getElementById("readagain2").style.display="none";
   }
  
 
   }
   if (true ===event.shiftKey) {

  
      
   if (utterance) {

    speechSynthesis.cancel();
  
    }

  }
       
  //    }
   document.addEventListener('keydown', function(event) {
    if (true ===event.shiftKey) {

  
      
      if (utterance) {
   
       speechSynthesis.cancel();
     
       }
   
     }
     if (true ===event.tabKey) {

      
      if (utterance) {
   
       speechSynthesis.cancel();
     
       }
   
     }
    // Check if the Shift key was pressed
  //   if (event.shiftKey) {
     
  //  if(localStorage.getItem("screenreaderactive")=="true"){
  //   if (utterance) {
  
  //     speechSynthesis.cancel();
  //   }
  // $("#screenreader").find('svg path').removeClass("toggleclicked");
  // $("#screenreader").find('div').removeClass("toggleclicked");
  // $("#screenreader").find('.correct').removeClass("appearcorrect");  
  // localStorage.removeItem("screenreaderactive");
  //  }
  //  else{
  //   if (utterance) {
  //     speechSynthesis.speak();
  //   }
  //   $("#screenreader").find('svg path').addClass("toggleclicked");
  //   $("#screenreader").find('div').addClass("toggleclicked");
  //   $("#screenreader").find('.correct').addClass("appearcorrect");  
  // localStorage.setItem("screenreaderactive","true");
  //  }
  
      
  //   }
    // if (event.ctrlKey) {
     
    //   if(localStorage.getItem("screenreaderactive")=="true"){
     
    //  $("#screenreader").find('svg path').removeClass("toggleclicked");
    //  $("#screenreader").find('div').removeClass("toggleclicked");
    //  $("#screenreader").find('.correct').removeClass("appearcorrect");  
    //  localStorage.removeItem("screenreaderactive");
    //   }
  
     
         
    //    }
  });

     });
     document.addEventListener('keydown', function(event) {
      if (true ===event.shiftKey) {
  
    
        
        if (utterance) {
     
         speechSynthesis.cancel();
       
         }
     
       }
       if (event.key === 'Tab') {

        console.log( document.activeElement);
      localStorage.setItem("tab",true)
      if (utterance) {
        speechSynthesis.cancel();
      }
      if(document.getElementById("disabilitymodal").style.display!="none"){
        
          if(document.getElementsByClassName("quesblind3")[0].style.display=="block"){
            if(document.getElementById("readagain").style.display==="none"||document.getElementById("askshowagain").style.display==="none")
            document.getElementById("disabilitymodal").style.opacity="0";
            document.getElementById("disabilitymodal").style.display="none";
          
          
             
          
        }
      }
  
            
            // if (utterance) {
         
            //  speechSynthesis.cancel();
           
            //  }
            
         
           }
      // Check if the Shift key was pressed
    //   if (event.shiftKey) {
       
    //  if(localStorage.getItem("screenreaderactive")=="true"){
    //   if (utterance) {
    
    //     speechSynthesis.cancel();
    //   }
    // $("#screenreader").find('svg path').removeClass("toggleclicked");
    // $("#screenreader").find('div').removeClass("toggleclicked");
    // $("#screenreader").find('.correct').removeClass("appearcorrect");  
    // localStorage.removeItem("screenreaderactive");
    //  }
    //  else{
    //   if (utterance) {
    //     speechSynthesis.speak();
    //   }
    //   $("#screenreader").find('svg path').addClass("toggleclicked");
    //   $("#screenreader").find('div').addClass("toggleclicked");
    //   $("#screenreader").find('.correct').addClass("appearcorrect");  
    // localStorage.setItem("screenreaderactive","true");
    //  }
    
        
    //   }
      // if (event.ctrlKey) {
       
      //   if(localStorage.getItem("screenreaderactive")=="true"){
       
      //  $("#screenreader").find('svg path').removeClass("toggleclicked");
      //  $("#screenreader").find('div').removeClass("toggleclicked");
      //  $("#screenreader").find('.correct').removeClass("appearcorrect");  
      //  localStorage.removeItem("screenreaderactive");
      //   }
    
       
           
      //    }
    });  
    if(document.getElementsByClassName("closemodel")[0]) {
      document.getElementsByClassName("closemodel")[0].addEventListener("click",function(){

        document.getElementById("disabilitymodal").style.opacity="0";
        document.getElementById("disabilitymodal").style.display="none";
      
      
            if (utterance) {
              speechSynthesis.cancel();}  
           })
    }





   }
   /*when user click on لا */
   if( document.getElementById('noblind')){
    document.getElementById('noblind').addEventListener("click",function(){
      $("#disabilitymodal").modal("hide")
      })
   }
if(   document.getElementById('blind')){
  document.getElementById('blind').addEventListener("click",function(){
    document.getElementsByClassName("quesblind1")[0].style.display="none";
    document.getElementsByClassName("quesblind2")[0].style.display="block";
    txt(   "للتنقلِ بينَ العناصرِ اضغطْ على tab وللرجوعِ اضغطْ على shift tab"
    )
    })
}
     /*when user click on نعم */

       /* read() is convert speech to text */


   /* when click on fileuploadeer opening file dialogue  */
   if(   document.getElementById("filename")){
    document.getElementById("filename").addEventListener("keydown", function(event){
      if(event.code === 'Enter' || event.code === 'Space'){
          document.getElementById("filename").click();
      }
      });
   }

   /*if user want to active  Screen reader feature  click ctrl + b*/
   document.addEventListener( 'keydown', (event) => {

   if( true === event.ctrlKey && '1' === event.key ) {
 
      document.getElementById("disabilitymodal").style.opacity="1"
      // $("#disabilitymodal").modal('show');
      document.getElementById('disabilitymodal').style.cssText = 'display: block; opacity: 1;';
  
      if(localStorage.getItem("screenreaderactive")){
  
  
    
        var utterance = new SpeechSynthesisUtterance(document.getElementsByClassName("noblindul")[0].innerText);
        var voices = speechSynthesis.getVoices();
        var arabicVoice = voices.find(function (voice) {
        return voice.lang === "ar-EG";
        });
        utterance.lang="ar-EG"
        if (arabicVoice) {
        utterance.voice = arabicVoice;
        }
        var voices = speechSynthesis.getVoices();
        
        // Log the names of all available voices to the console
        voices.forEach(function (voice) {
     
        });
        
        
        
        var selectedVoice = voices.find(function (voice) {
        return voice.name === "ar-EG-HodaNeural"; // Specify the Shakir voice
        
        });
        utterance.voice=selectedVoice;
        utterance.rate = 1; // Adjust the rate as needed.
        
        speechSynthesis.speak(utterance);
        utterance.addEventListener("start", (event) => {
        });
     
  
  
  
     
    
     document.getElementsByClassName("closemodel")[0].addEventListener("click",function(){

           if (utterance) {
             speechSynthesis.cancel();}  
             document.getElementById("disabilitymodal").style.opacity="0";
             document.getElementById("disabilitymodal").style.visibility = "hidden";

  
          })
        
      }
      if(window.location.href.includes("home")){
        document.getElementsByClassName("quesblind1")[0].style.display="none";
        document.getElementsByClassName("quesblind2")[0].style.display="none"
        
        document.getElementsByClassName("quesblind3")[0].style.display="block";
        // document.getElementById("askshowagain").style.display="none";
        document.getElementById("readagain").style.display="none";
        document.getElementById("readagain1").style.display="none";
        document.getElementById("readagain2").style.display="none";
        document.getElementsByClassName("quesblind3")[0],focus();
        // txt(  document.getElementsByClassName("quesblind3")[0]);
        document.getElementById("disabilitymodal").style.zIndex="1300"
      }
   else{
    document.getElementById("disabilitymodal").style.zIndex = "1300";
    document.getElementsByClassName("quesblind3")[0].style.display="block";
    // document.getElementById("askshowagain").style.display="none";
    document.getElementsByClassName("quesblind3")[0],focus();
            document.getElementById("readagain").style.display="none";
              document.getElementById("readagain1").style.display="none";
              document.getElementById("readagain2").style.display="none";
   }
  
 
   }
     /*if user want to read  first element in page  click ctrl + 1*/
   if (true === event.ctrlKey && '2' === event.key ) {
    // Prevent the default tab behavior to avoid losing focus
    event.preventDefault();

   var firstElement = document.getElementById('Label1country');
   if (firstElement) {
     firstElement.focus();
   }
  }
  // if (true ===event.shiftKey) {
  
  //   if(localStorage.getItem("screenreaderactive")=="true"){
   
  //  $("#screenreader").find('svg path').removeClass("toggleclicked");
  //  $("#screenreader").find('div').removeClass("toggleclicked");
  //  $("#screenreader").find('.correct').removeClass("appearcorrect");  
  //  localStorage.removeItem("screenreaderactive");
  //  if (utterance) {

  //   speechSynthesis.cancel();
  // }
  //   }
  //   else{

  //    $("#screenreader").find('svg path').addClass("toggleclicked");
  //    $("#screenreader").find('div').addClass("toggleclicked");
  //    $("#screenreader").find('.correct').addClass("appearcorrect");  
  //  localStorage.setItem("screenreaderactive","true");

  //   }
   
       
  //    }
   });
   if(     
    document.getElementsByClassName("chromestart")[0]){
    document.getElementsByClassName("chromestart")[0].setAttribute("tabindex",0);

  }
   
   var userAgent = navigator.userAgent;

   if (userAgent.includes("Chrome")) {
    if(     
      document.getElementsByClassName("chromestart")[0]){
      document.getElementsByClassName("chromestart")[0].setAttribute("tabindex",0);

    }
     
   } else if (userAgent.includes("Firefox")) {

       console.log("You are using Mozilla Firefox");
   } else if (userAgent.includes("Safari")) {
       console.log("You are using Apple Safari");
   } else if (userAgent.includes("Edge")) {
       console.log("You are using Microsoft Edge");
   } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
       console.log("You are using Opera");
   } else if (userAgent.includes("IE") || userAgent.includes("Trident")) {
       console.log("You are using Internet Explorer");
   } else {
       console.log("Unable to determine the browser");
   }
   if(   document.getElementById("askdisabilityuser")){
    document.getElementById("askdisabilityuser").addEventListener('keydown', function(event) {

      // Check if the Shift key and the Tab key were pressed simultaneously
      if (event.shiftKey && event.key === 'Tab') {
        event.preventDefault();
     setTimeout(() => {
      txt("ضَعْفٌ فِي دَرَجَةِ اَلْبَصَرِ");
     }, 100);
    document.getElementById("disabilityanser3").focus();

       // Log the elements to the console
    
      }
    });
   }
if(
  document.getElementById("disabilityanser3")){
    document.getElementById("disabilityanser3").addEventListener('keydown', function(event) {
      debugger;
            // Check if the Shift key and the Tab key were pressed simultaneously
            if (event.shiftKey && event.key === 'Tab') {
              event.preventDefault();
             
              document.getElementById("disabilityanser2").focus();
              setTimeout(() => {
                txt("ما نوع الإِعَاقَةٍ البَصَرِيَّة؟");
               }, 100);
            }
          });
  }

        if(    document.getElementById("readagain")){
          document.getElementById("readagain").addEventListener('keydown', function(event) {
        
            // Check if the Shift key and the Tab key were pressed simultaneously
            if (event.shiftKey && event.key === 'Tab') {
         
              document.getElementById("noblind").setAttribute('tabindex', '0')
        
              setTimeout(()=>{
  
                let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
                txt("هَذَا أَوَّلَ عُنْصُرٍ فِي شَاشَةِ اَلتَّعْلِيمَاتِ اِضْغَطْ عَلَى tab إِذَا أَرَدْتُ أَنْ تَسْمَعَ اَلْعُنْصُرَ اَلتَّالِيَ")
                txt(elenotes)
                    //  txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     
      
            },10)
            }
          });
        }

              document.getElementById("noblind").addEventListener('keydown', function(event) {
        
                // Check if the Shift key and the Tab key were pressed simultaneously
                // if (event.key === 'Tab') {
                //   event.preventDefault();
                //   document.getElementById("readagain").setAttribute('tabindex', '0')
                //   document.getElementById("readagain").focus();
                //   setTimeout(()=>{
      
                //     let elenotes=     document.getElementById("readagain").innerHTML;
                //     txt(elenotes)
                //         //  txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     
          
                // },10)
                // }
                if (event.shiftKey && event.key === 'Tab') {

                  // document.getElementById("readagain").focus();
            
                //   setTimeout(()=>{
      
                //     let elenotes=document.getElementById("readagain").innerHTML;
                //     txt(elenotes)
                //         //  txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     
          
                // },10)
                }
              });
   });
   
   
   
   
   
   

   
   
   

   
   
   $(document).ready(function(){

    if(    document.getElementById("noshowagaincontainer")){
      document.getElementById("noshowagaincontainer").addEventListener("keydown", function(event) {


 
        if (event.key === "Tab"&&!event.shiftKey) {
          event.preventDefault(); // Prevent default tab behavior
          document.getElementById("noblind").setAttribute('tabindex', '0');
          document.getElementById("noblind").focus();
          setTimeout(() => {
              txt(document.getElementById("noblind").innerText);
          }, 100);
      } else if (event.shiftKey && event.key === "Tab") {
    
        event.preventDefault(); // Prevent default tab behavior
        document.getElementById("yesshowagaincontainer").setAttribute('tabindex', '0');
        document.getElementById("yesshowagaincontainer").focus();
        setTimeout(() => {
            txt(document.getElementById("yesshowagaincontainer").innerText);
        }, 100);
          // Handle shift+tab key press if needed
          // For example, move focus to a different element
      }
        // Detect shift + tab key press
    
      
        });
    }

if(    document.getElementById("noblind")){
  document.getElementById("noblind").addEventListener("keydown", function(event) {


    if (event.shiftKey && event.key === "Tab") {
      event.preventDefault(); // Prevent default tab behavior
      document.getElementById("readagain").focus();
      // document.getElementById("quesblind1h1").focus();
      setTimeout(()=>{
        txt(document.getElementById("readagain").innerText)

      },100)
  }
  // Detect shift + tab key press


  });
}
if(  document.getElementsByClassName("chromestart")[0]){
  document.getElementsByClassName("chromestart")[0].addEventListener("keydown", function(event) {


  //   if (event.key === "Tab") {
  //     // event.preventDefault(); // Prevent default tab behavior
  //     // document.getElementById("quesblind1h1").focus();
  //     // document.getElementById("quesblind1h1").focus();
  //     setTimeout(()=>{
  //       txt(    document.getElementById("quesblind1h1").innerText)

  //     },100)
  // }
  // Detect shift + tab key press


  });
}

   /**by default screen reader is active   */
   localStorage.setItem("screenreaderactive",true);
   

   /*Trigger the blind button element with a click, it will active screen reader only  */
if(document.getElementById('disabilityanser1')){
  const node1 = document.getElementById('disabilityanser1');
   node1.addEventListener('keydown', function onEvent(event) {

   if (event.code === 'Enter' || event.code === 'Space') {

localStorage.setItem("blind","1");

  
     localStorage.setItem("screenreaderactive",true);
  

    if(localStorage.getItem("showagain")){

      if(localStorage.getItem("showagain")=="true"){
        
        document.getElementsByClassName("quesblind2")[0].style.display="none";

        document.getElementsByClassName("quesblind3")[0].style.display="block";
        setTimeout(()=>{
      
          let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
          txt(elenotes)
              //  txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     

      },10)
       

      }
      else{
        // document.getElementById("Label1country").focus();
    
        // $("#disabilitymodal").modal("hide");
        document.getElementsByClassName("quesblind2")[0].style.display="none";

        document.getElementsByClassName("quesblind3")[0].style.display="block";
      //   setTimeout(()=>{
      //   //    let elenotes=document.getElementById("noblind").innerText;
      //   // txt(elenotes)
      //          txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     

      // },10)
      if(navigator.userAgent.includes("Firefox")){
        setTimeout(()=>{
      
      let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
      txt(elenotes)
      },10)
      }else{
        setTimeout(()=>{
          let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
          txt(elenotes)      
      
      },10)
      }
      }
    }
else{
 
  document.getElementsByClassName("quesblind2")[0].style.display="none";

  document.getElementsByClassName("quesblind3")[0].style.display="block";
      document.getElementById("notesblind").focus();
if(navigator.userAgent.includes("Firefox")){
  setTimeout(()=>{

let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
txt(elenotes)
},10)
}else{
  setTimeout(()=>{
    let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
    txt(elenotes)

},10)
}
   

}
   
   }
   if (event.code === 'Space' || event.keyCode === 32) {

    localStorage.setItem("blind","1");
    
      
         localStorage.setItem("screenreaderactive",true);
      
    
        if(localStorage.getItem("showagain")){
    
          if(localStorage.getItem("showagain")=="true"){
            
            document.getElementsByClassName("quesblind2")[0].style.display="none";
    
            document.getElementsByClassName("quesblind3")[0].style.display="block";
            setTimeout(()=>{
          
              let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
              txt(elenotes)
                  //  txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     
    
          },10)
           
    
          }
          else{
            // document.getElementById("Label1country").focus();
        
            // $("#disabilitymodal").modal("hide");
            document.getElementsByClassName("quesblind2")[0].style.display="none";
    
            document.getElementsByClassName("quesblind3")[0].style.display="block";
          //   setTimeout(()=>{
          //   //    let elenotes=document.getElementById("noblind").innerText;
          //   // txt(elenotes)
          //          txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     
    
          // },10)
          if(navigator.userAgent.includes("Firefox")){
            setTimeout(()=>{
          
          let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
          txt(elenotes)
          },10)
          }else{
            setTimeout(()=>{
              let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
              txt(elenotes)      
          
          },10)
          }
          }
        }
    else{
      document.getElementsByClassName("quesblind2")[0].style.display="none";
    
      document.getElementsByClassName("quesblind3")[0].style.display="block";
          document.getElementById("notesblind").focus();
    if(navigator.userAgent.includes("Firefox")){
      setTimeout(()=>{
    
    let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
    txt(elenotes)
    },10)
    }else{
      setTimeout(()=>{
        let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
        txt(elenotes)
    
    },10)
    }
       
    
    }
       
       }
   });
}
 if(  document.getElementById("val1")){
  document.getElementById("val1").addEventListener("click",function(){
    localStorage.setItem("blind","1");
         localStorage.setItem("screenreaderactive",true);

    if(localStorage.getItem("showagain")){
      if(localStorage.getItem("showagain")=="true"){
        document.getElementsByClassName("quesblind2")[0].style.display="none";

        document.getElementsByClassName("quesblind3")[0].style.display="block";
            document.getElementById("notesblind").focus();
            // setTimeout(()=>{
            //   let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
            //   txt(elenotes)
            //         //  txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     
      
            // },10)
            if(navigator.userAgent.includes("Firefox")){
              setTimeout(()=>{
            
            let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
            txt(elenotes)
            },10)
            }else{
              setTimeout(()=>{
                let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
                txt(elenotes)            
            
            },10)
            }
      }
      else{
        // document.getElementById("Label1country").focus();
    
        // $("#disabilitymodal").modal("hide");
          document.getElementsByClassName("quesblind2")[0].style.display="none";

  document.getElementsByClassName("quesblind3")[0].style.display="block";
      document.getElementById("notesblind").focus();
      setTimeout(()=>{
        let elenotes=document.getElementsByClassName("noblindul")[0].innerText;
        txt(elenotes)
              //  txt("مُلَاحَظَات يَجِبُ اِتِّبَاعُهَا إِذَا كُنْتُ فَاقِد اَلْبَصَر:1حَتَّى تَتَمَكَّنَ مِنْ اَلِانْتِقَالِ مِنْ عُنْصُرٍ إِلَى آخِرٍ اِضْغَطْ عَلَى tab وَسَوْفَ تَقُومُ خَاصِّيَّةً قَارَىءْ اَلشَّاشَةُ بِقِرَاءَةِ مُحْتَوَى اَلْعُنْصُرِ لَك        2لِتَفْعِيل خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ فِي أَيِّ وَقْتِ اِضْغَطْ عَلَى ctrl + 1 3لِإِعَادَة قِرَاءَةِ اَلصَّفْحَةِ مِنْ اَلْبِدَايَةِ اِضْغَطْ عَلَى    ctrl + 2 4لِإِلْغَاء خَاصِّيَّةٍ قَارَىءْ اَلشَّاشَةُ اِضْغَطْ عَلَى ctrl + 3 5يَجِبَ أَنْ يَكُونَ اَلصَّوْتُ وَاضِحُ بَعِيدَ عَنْ أَيَّ ضَوْضَاءٍ لِلْحُصُولِ عَلَى أَفْضَلِ نَتِيجَةٍ مِنْ خَاصِّيَّةِ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ    6عِنْدَ أَيِّ عُنْصُرِ إِدْخَالٍ يَجِبُ أَنْ تَبْدَأَ فِي اَلتَّحَدُّثُ وَلَا تَنْتَظِرُ لِأَنَّ خَاصِّيَّةَ تَحْوِيلُ اَلْكَلَامِ إِلَى نَصٍّ تَنْتَظِرُ فَوْرًا اَلْقِيمَةُ اَلَّتِي تُرِيدُ إِدْخَالَهَا     7لِلْخُرُوجِ مِنْ هَذِهِ اَلْإِرْشَادَاتِ وَالذَّهَابِ إِلَى صَفْحَةِ اَلْمَوْقِعِ اَلرَّئِيسِيَّةِ اِضْغَطْ عَلَى tab     8عِنْدَ سَمَاعِكَ أَخْتَارُ اَلْمِلَفُّ اِضْغَطْ عَلَى tab ثُمَّ enter وَأَخْتَارُ اَلْمِلَفَّ وَعِنْدَاَلضَّغْطِ عَلَى tab سَوْفَ يَقْرَأُ لَكَ اِسْمُ اَلْمِلَفِّ اَلْمَرْفُوعِ وَلِتَغْيِيرِ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab وَقُمْ بِرَفْعِ مِلَفٍّ آخَرَ     9لِلرُّجُوعِ لِلْعُنْصُرِ اَلسَّابِقِ اِضْغَطْ عَلَى shift مَعَ tab وَسَوْفَ يَتِمُّ قِرَاءَةَ اَلْعُنْصُرِ اَلسَّابِقِ   10عِنْدَ سَمَاعِكَ لِكَلِمَةٍ أَخْتَارَ اِضْغَطْ عَلَى اَلسَّهْمِ لِأَعْلَى أَوْ لِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ وَأَضْغَطُ عَلَى enter لِلِاخْتِيَارِ")     

      },10)
      }
    }
else{
  document.getElementsByClassName("quesblind2")[0].style.display="none";

  document.getElementsByClassName("quesblind3")[0].style.display="block";
      document.getElementById("notesblind").focus();

}


   })
 }
      /**when user click on blind button , it will active screen reader only  */
      /*when user click on  yes show again , it will apear this screen when documentreload */
     if (document.getElementById("showagain")) {
     document.getElementById("showagain").addEventListener("click",function(){


  

    document.getElementById("Label1country").focus();
    
         $("#disabilitymodal").modal("hide");
         document.getElementById("disabilitymodal").style.opacity="0"
         localStorage.setItem("showagain",true)
   })
}

        /*when user enter keydown on  yes show again , it will apear this screen when document reload */

   const nodeshowagain = document.getElementById('showagainlabel');
   nodeshowagain.addEventListener('keydown', function onEvent(event) {
   if (event.code === 'Enter' || event.code === 'Space') {

    document.getElementById("disabilitymodal").style.opacity="0"
    document.getElementById("Label1country").focus();
    
         $("#disabilitymodal").modal("hide");
         localStorage.setItem("showagain",true)
   
   
   }
   });
  
        /*when user enter keydown on  no show again , it will not apear this screen when document reload */

   const nodenoshowagain = document.getElementById('noshowagainlabel');
   nodenoshowagain.addEventListener('keydown', function onEvent(event) {
   if (event.code === 'Enter' || event.code === 'Space') {

    document.getElementById("disabilitymodal").style.opacity="0"
    localStorage.setItem("showagain",false)


    document.getElementById("Label1country").focus();
    $("#disabilitymodal").modal("hide");
   
   
   }
   });
        /*when user click  on  no show again , it will not apear this screen when document reload */

   document.getElementById("noshowagain").addEventListener("click",function(){

    document.getElementById("disabilitymodal").style.opacity="0"
    localStorage.setItem("showagain",false)


    document.getElementById("Label1country").focus();
    $("#disabilitymodal").modal("hide");
   
   })
   if(   document.getElementById("noshowagaincontainer")){
    document.getElementById("noshowagaincontainer").addEventListener('keydown', function onEvent(event) {
      if (event.code === 'Enter' || event.code === 'Space') {
   
       document.getElementById("disabilitymodal").style.opacity="0"
       localStorage.setItem("showagain",false)
   
   
       document.getElementById("Label1country").focus();
       $("#disabilitymodal").modal("hide");
      
      
      }
      });
   }
   if(   document.getElementById("noshowagaincontainer")){
   document.getElementById("noshowagaincontainer").addEventListener("click",function(){

    document.getElementById("disabilitymodal").style.opacity="0"
    localStorage.setItem("showagain",false)


    document.getElementById("Label1country").focus();
    $("#disabilitymodal").modal("hide");
   
   });}
           /*when user click  on  no show again , it will  apear this screen when document reload */

   if( document.getElementById("yesshowagaincontainer")){
    document.getElementById("yesshowagaincontainer").addEventListener("click",function(){


  

      document.getElementById("Label1country").focus();
      
           $("#disabilitymodal").modal("hide");
           document.getElementById("disabilitymodal").style.opacity="0"
           localStorage.setItem("showagain",true)
     });
   }
   if( document.getElementById("yesshowagaincontainer")){

   document.getElementById("yesshowagaincontainer").addEventListener('keydown', function onEvent(event) {
    if (event.code === 'Space') {




 
     document.getElementById("disabilitymodal").style.opacity="0"
     document.getElementById("Label1country").focus();
     
          $("#disabilitymodal").modal("hide");
          localStorage.setItem("showagain",true)
    
    
    }
    });
  }
  if( document.getElementById("yesshowagaincontainer")){

    document.getElementById("yesshowagaincontainer").addEventListener('keydown', function onEvent(event) {
     if (event.code === 'Space') {
  
      document.getElementById("disabilitymodal").style.opacity="0"
      document.getElementById("Label1country").focus();
      
           $("#disabilitymodal").modal("hide");
           localStorage.setItem("showagain",true)
     
     
     }
     });
   }
   /*Trigger the color blind button element with a click, it will active screen saturation and contrast buttons   */
if(document.getElementById('disabilityanser2')){
  const node2 = document.getElementById('disabilityanser2');
   node2.addEventListener('keydown', function onEvent(event) {
   if (event.code === 'Enter' || event.code === 'Space') {
    localStorage.setItem("blind","2");
      document.getElementById("val2").checked =true;
      document.getElementById("val3").checked =false;
      document.getElementById("val1").checked =false;
       $("#disabilitymodal").modal("toggle");
       document.getElementsByClassName("saturation")[0].click();
     document.getElementsByClassName("contrast")[0].click();
     localStorage.removeItem("screenreaderactive");
     $("#screenreader").find('svg path').removeClass("toggleclicked");
       $("#screenreader").find('div').removeClass("toggleclicked");
       $("#screenreader").find('.correct').removeClass("appearcorrect");  
   
    
     
   }
   });
}
 
      /*when user click on  color blind button, it will active screen saturation and contrast buttons   */
if(   document.getElementById("val2")){
  document.getElementById("val2").addEventListener("click",function(){
    localStorage.setItem("blind","2");
   document.getElementById("val2").checked =true;
      document.getElementById("val3").checked =false;
      document.getElementById("val1").checked =false;
       $("#disabilitymodal").modal("toggle");
       document.getElementsByClassName("saturation")[0].click();
     document.getElementsByClassName("contrast")[0].click();
   
     localStorage.removeItem("screenreaderactive");
     $("#screenreader").find('svg path').removeClass("toggleclicked");
       $("#screenreader").find('div').removeClass("toggleclicked");
       $("#screenreader").find('.correct').removeClass("appearcorrect");  
   })
}
 
  /*Trigger the Visual impairment button element with a click, it will active increasefontsize,lineheight,cursor,highlightedlinks buttons   */
if(document.getElementById('disabilityanser3')){
  const node3 = document.getElementById('disabilityanser3');
   node3.addEventListener('keydown', function onEvent(event) {
   if (event.code === 'Enter' || event.code === 'Space') {
    localStorage.setItem("blind","3");
      document.getElementById("val3").checked =true;
      document.getElementById("val2").checked =false;
      document.getElementById("val1").checked =false;
     $("#disabilitymodal").modal("toggle");
   
     document.getElementsByClassName("increasefont")[0].click();
     document.getElementsByClassName("highlight-link")[0].click();
     document.getElementsByClassName("linehightparent")[0].click();
     document.getElementsByClassName("cursorsize")[0].click();
   }
   });
}
if(document.getElementById("disabilityanser3")){
  document.getElementById("disabilityanser3").addEventListener('keydown', (event) => {
    // Check if the Tab key was pressed
    if (event.key === 'Tab' || event.keyCode === 9) {
  if(!document.getElementById("disabilityanser1").querySelector("input").checked||
  !document.getElementById("disabilityanser2").querySelector("input").checked||
  !document.getElementById("disabilityanser3").querySelector("input").checked)  {
    document.getElementById("askdisabilityuser").focus();
  }   
   
    }
  });
}

 
         /*when user click on Visual impairment button, it will active increasefontsize,lineheight,cursor,highlightedlinks buttons */
if(   document.getElementById("val3")){
  document.getElementById("val3").addEventListener("click",function(){
    localStorage.setItem("blind","3");
   document.getElementById("val3").checked =true;
      document.getElementById("val2").checked =false;
      document.getElementById("val1").checked =false;
     $("#disabilitymodal").modal("toggle");
   
     document.getElementsByClassName("increasefont")[0].click();
     document.getElementsByClassName("highlight-link")[0].click();
     document.getElementsByClassName("linehightparent")[0].click();
     document.getElementsByClassName("cursorsize")[0].click();
     localStorage.removeItem("screenreaderactive");
     $("#screenreader").find('svg path').removeClass("toggleclicked");
       $("#screenreader").find('div').removeClass("toggleclicked");
       $("#screenreader").find('.correct').removeClass("appearcorrect");  
   })
}
 if(document.getElementById('blindfirst')){
  const node4= document.getElementById('blindfirst');
  node4.addEventListener('keydown', function onEvent(event) {
  if (event.code === 'Enter' || event.code === 'Space') {

 
     document.getElementById("blind").checked =true;
     document.getElementById("noblind").checked =false;
  document.getElementsByClassName("quesblind1")[0].style.display="none";
  document.getElementsByClassName("quesblind2")[0].style.display="block";
 
   txt("للتنقلِ بينَ العناصرِ اضغطْ على tab وللرجوعِ اضغطْ على shift tab"
   );


  }
  });
     /* when user click on "لا",modal will close and screen reader will deactive*/

 }
 if( document.getElementById("quesblind1h1")){
  document.getElementById("quesblind1h1").addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter or Space
    if (event.code === 'Enter' || event.code === 'Space') {

        event.preventDefault(); // Prevent the default action to avoid scrolling the page on Space press
        document.getElementsByClassName("quesblind1")[0].style.display="none";
        document.getElementsByClassName("quesblind2")[0].style.display="block";
        setTimeout(() => {
         txt(   "للتنقلِ بينَ العناصرِ اضغطْ على tab وللرجوعِ اضغطْ على shift tab"
         );
        }, 10);// Simulate the click event
    }
    if ( event.key === 'Tab') {
      event.preventDefault(); 
      document.getElementsByClassName("chromestart")[0].setAttribute('tabindex', '0');
// Prevent the default action to avoid scrolling the page on Space press
document.getElementsByClassName("chromestart")[0].focus();

setTimeout(() => {
  txt(  document.getElementsByClassName("chromestart")[0].innerText
  );
 }, 10);//
  }
  });
 }

   /* when user click on "نعم"  , Type of visual impairment screen will appear*/
if(document.getElementById('blindsec')){
  const node5 = document.getElementById('blindsec');
  node5.addEventListener('keydown', function onEvent(event) {
  if (event.code === 'Enter' || event.code === 'Space') {
  
     document.getElementById("noblind").checked =true;
     document.getElementById("blind").checked =false;
     $("#disabilitymodal").modal('hide');
     localStorage.removeItem("screenreaderactive");
    $("#screenreader").find('svg path').removeClass("toggleclicked");
      $("#screenreader").find('div').removeClass("toggleclicked");
      $("#screenreader").find('.correct').removeClass("appearcorrect");  
  }
 
  
  });
}

   /*Trigger the noblind button element with a click,modal will close and screen reader will deactive*/
if(document.getElementById("blindsec")){
  document.getElementById("blindsec").addEventListener("click",function(){
    document.getElementsByClassName("menu-details")[0].style.display="none";
    document.getElementsByClassName("menu-icons")[0].style.opacity ="1";
    if(localStorage.getItem("screenreaderactive")){
    localStorage.removeItem("screenreaderactive");
    
    $(".scrennreaderactive").find('svg path').removeClass("toggleclicked");
    $(".scrennreaderactive").find('div').removeClass("toggleclicked");
    $(".scrennreaderactive").find('.correct').removeClass("appearcorrect"); 
    
    }
    
    if(localStorage.getItem("largeratioactive")){
          
    if(localStorage.getItem("largeratioactive")=='1'){
    
     document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.remove("largerratioactive")
    
      document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
    
         if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="INPUT"&&ele.tagName!="SELECT"){
    let fontsize=window.getComputedStyle(ele).fontSize;
          ele.style.fontSize=parseInt(fontsize)-2+"px";
         }
         if(ele.tagName=="INPUT"){
          let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="16px ";
                 }
           
          
               
        
          
                 if(ele.tagName=="SELECT"){
               
          let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="16px ";
                 }
                   
                 if(ele.tagName=="OPTION"){
         
          let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="16px ";
                 }
    
    
       });
    
     
     
    
    
     localStorage.removeItem("largeratioactive");
    
    
    }
    
    
    
    else if(localStorage.getItem("largeratioactive")=='2'){
    
    document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.remove("largerratioactive")
    
     document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.remove("largerratioactive")
      document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
       if(ele.tagName=="LINK"){
     console.log(ele)
              
              }
         if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="INPUT"&&ele.tagName!="SELECT"){
    let fontsize2=window.getComputedStyle(ele).fontSize;
          ele.style.fontSize=parseInt(fontsize2)-5+"px";
         
         }
    
         if(ele.tagName=="INPUT"){
          let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="16px important";
                 }
           
          
               
        
          
                 if(ele.tagName=="SELECT"){
          let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="16px important";
                 }
       });
    
    
     
       localStorage.removeItem("largeratioactive");
    
    
    
    }
    
    else  if(localStorage.getItem("largeratioactive")=='3'){
    
     document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[2].classList.remove("largerratioactive")
     document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.remove("largerratioactive")
     document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.remove("largerratioactive")
    
     
         localStorage.removeItem("largeratioactive");
    
    
         document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
    
           if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&& ele.tagName!="INPUT" &&ele.tagName!="SELECT"){
    
            var size = parseInt($(ele).css("font-size"));
          
            size1 = size- 7+"px";
       
            $(ele).css({
              'font-size': size1
            });
           }
     
         
    
            if(ele.tagName=="INPUT"){
     let fontsize=window.getComputedStyle(ele).fontSize;
             ele.style.fontSize="16px important";
            }
      
     
          
    
     
            if(ele.tagName=="SELECT"){
     let fontsize=window.getComputedStyle(ele).fontSize;
             ele.style.fontSize="16px important";
            }
      
     
    
         
         });
                
    
     
    
    
    }
    
    
    $(".increasefont").find('svg path').removeClass("toggleclicked");
    $(".increasefont").find('div').removeClass("toggleclicked");
    $(".increasefont").find('.correct').removeClass("appearcorrect");  
    }
    
    if(localStorage.getItem("lineheightactive")){
    document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[0].classList.remove("largerratioactive")
    document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[1].classList.remove("largerratioactive")
    
    document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[2].classList.remove("largerratioactive")
    
    localStorage.removeItem("lineheightactive");
    document.body.style.lineHeight="1";
    document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
    
    if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
    let height=window.getComputedStyle(ele).lineHeight;
    ele.style.lineHeight=1.3;
    }
    
    
    });
    $(".linehightparent").find('svg path').toggleClass("toggleclicked");
    $(".linehightparent").find('div').toggleClass("toggleclicked");
    $(".linehightparent").find('.correct').toggleClass("appearcorrect"); 
    
    }
    
    if(localStorage.getItem("highlightlink")){
    localStorage.removeItem("highlightlink");
    $(".highlight-link").find('svg path').removeClass("toggleclicked");
    $(".highlight-link").find('div').removeClass("toggleclicked");
    $(".highlight-link").find('.correct').removeClass("appearcorrect"); 
    document.querySelectorAll( 'body a' ).forEach((ele,i)=>{
    
    if(!ele.classList.contains("icon-dis")){
      ele.classList.remove("highlightlink");
    }
    
        
    
    
      });
    }
    
    if(localStorage.getItem("cursoractive")){
    document.body.classList.remove("cursorcustom");
    $(".cursorsize").find('svg path').toggleClass("toggleclicked");
    $(".cursorsize").find('div').toggleClass("toggleclicked");
    $(".cursorsize").find('.correct').toggleClass("appearcorrect");
    localStorage.removeItem("cursoractive");
    }
    if(localStorage.getItem("saturation")){
    
    document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[0].classList.remove("saturationratioactive");
    
    document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[1].classList.remove("saturationratioactive");
    
    document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[2].classList.remove("saturationratioactive");
    localStorage.removeItem("saturation");
    $(".saturation").find('svg path').removeClass("toggleclicked");
    $(".saturation").find('div').removeClass("toggleclicked");
    $(".saturation").find('.correct').removeClass("appearcorrect"); 
    
    document.getElementsByTagName("html")[0].classList.remove("filter3");
    document.getElementsByTagName("html")[0].classList.remove("filter2");
    document.getElementsByTagName("html")[0].classList.remove("filter1");
    
    
    }
    if(localStorage.getItem("contrast")){
    document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[0].classList.remove("saturationratioactive");
    
    document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[1].classList.remove("saturationratioactive");
    
    document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[2].classList.remove("saturationratioactive");
    localStorage.removeItem("contrast");
    $(".contrast").find('svg path').removeClass("toggleclicked");
    $(".contrast").find('div').removeClass("toggleclicked");
    $(".contrast").find('.correct').removeClass("appearcorrect"); 
    document.getElementsByTagName("html")[0].classList.remove("contrast1");
    document.getElementsByTagName("html")[0].classList.remove("contrast2");
    document.getElementsByTagName("html")[0].classList.remove("contrast3");
    
    
    }
    })
}

/**check if user select screen reader before, get value of sscreenreader from localstorage */

   if(localStorage.getItem("screenreaderactive")){
   if(localStorage.getItem("screenreaderactive")=="true"){
       $("#screenreader").find('svg path').addClass("toggleclicked");
       $("#screenreader").find('div').addClass("toggleclicked");
       $("#screenreader").find('.correct').addClass("appearcorrect");  
   }
   }
   /**check if user select highlightlink before, get value of highlightlink from localstorage */

   if(localStorage.getItem("highlightlink")){
   document.querySelectorAll( 'body a' ).forEach((ele,i)=>{
   
   if(!ele.classList.contains("icon-dis")){
   ele.classList.toggle("highlightlink")
   
   }
           
       
       
         });
    
           
       
       
      
   $(".highlight-link").find('svg path').toggleClass("toggleclicked");
   $(".highlight-link").find('div').toggleClass("toggleclicked");
   $(".highlight-link").find('.correct').toggleClass("appearcorrect"); 
   
   
   }
   /**check if user select lineheightactive before, get value of lineheightactive from localstorage */
   if(localStorage.getItem("lineheightactive")){
   let linerat=localStorage.getItem("lineheightactive");
   if(linerat==1){
   document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
   document.body.style.lineHeight="1.7";
   
   $(".linehightparent").find('svg path').toggleClass("toggleclicked");
   $(".linehightparent").find('div').toggleClass("toggleclicked");
   $(".linehightparent").find('.correct').toggleClass("appearcorrect"); 
   
   }
   if(linerat==2){
   document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
   
   document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[1].classList.add("largerratioactive")
   document.body.style.lineHeight="1.9";
   
   $(".linehightparent").find('svg path').toggleClass("toggleclicked");
   $(".linehightparent").find('div').toggleClass("toggleclicked");
   $(".linehightparent").find('.correct').toggleClass("appearcorrect"); 
   
   }
   
   if(linerat==3){
   document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
   
   document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[1].classList.add("largerratioactive")
   
   document.getElementsByClassName("linehight-ratio")[0].querySelectorAll("span")[2].classList.add("largerratioactive")
   document.body.style.lineHeight="2.3";
   
   $(".linehightparent").find('svg path').toggleClass("toggleclicked");
   $(".linehightparent").find('div').toggleClass("toggleclicked");
   $(".linehightparent").find('.correct').toggleClass("appearcorrect"); 
   
   }
   
   
   }
         /**check if user select largeratioactive before, get value of largeratioactive from localstorage */

   if(localStorage.getItem("largeratioactive")){
         
   if(localStorage.getItem("largeratioactive")=='1'){
   
      document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
   
       document.querySelectorAll( 'body * ' ).forEach((ele,i)=>{

          if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
   let fontsize=window.getComputedStyle(ele).fontSize;
           ele.style.fontSize=parseInt(fontsize)+2+"px";
          }
    
   
        });
       
      
      
   
   }
   
   
   
   else if(localStorage.getItem("largeratioactive")=='2'){
   
   document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.add("largerratioactive")
   
      document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
       document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
   
          if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
   let fontsize2=window.getComputedStyle(ele).fontSize;
           ele.style.fontSize=parseInt(fontsize2)+5+"px";
          
          }
     
        });
   
   
   
   }
     
   else if(localStorage.getItem("largeratioactive")=='3'){
   
    document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
   
      document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[2].classList.add("largerratioactive")
      document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.add("largerratioactive")
   
          
      
      document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
   
       if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
   let fontsize2=window.getComputedStyle(ele).fontSize;
        ele.style.fontSize=parseInt(fontsize2)+5+"px";
       
       }
   
     });
     
   
   
   
   }
   $(".increasefont").find('svg path').addClass("toggleclicked");
   $(".increasefont").find('div').addClass("toggleclicked");
   $(".increasefont").find('.correct').addClass("appearcorrect");  
   }
            /**check if user select cursoractive before, get value of cursoractive from localstorage */

   if(localStorage.getItem('cursoractive')){
   document.body.classList.toggle("cursorcustom");
   $(".cursorsize").find('svg path').toggleClass("toggleclicked");
   $(".cursorsize").find('div').toggleClass("toggleclicked");
   $(".cursorsize").find('.correct').toggleClass("appearcorrect"); 
   }
               /**check if user select contrast before, get value of contrast from localstorage */

   if(localStorage.getItem("contrast")){
   let linerat=localStorage.getItem("contrast");
   $(".contrast").find('svg path').toggleClass("toggleclicked");
   $(".contrast").find('div').toggleClass("toggleclicked");
   $(".contrast").find('.correct').toggleClass("appearcorrect"); 
   if(linerat==1){
   document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive")
   
   
   
   document.getElementsByTagName("html")[0].classList.add("contrast1");
   }
   if(linerat==2){
   document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive")
   
   document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[1].classList.add("saturationratioactive")
   
   
   
   document.getElementsByTagName("html")[0].classList.add("contrast2");
   
   }
   
   if(linerat==3){
   document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive")
   
   document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[1].classList.add("saturationratioactive")
   
   document.getElementsByClassName("contrast-ratio")[0].querySelectorAll("span")[2].classList.add("saturationratioactive")
   document.getElementsByTagName("html")[0].classList.add("contrast3");
   
   
   }
   
   
   }
                  /**check if user select saturation before, get value of saturation from localstorage */

   if(localStorage.getItem("saturation")){
   $(".saturation").find('svg path').toggleClass("toggleclicked");
   $(".saturation").find('div').toggleClass("toggleclicked");
   $(".saturation").find('.correct').toggleClass("appearcorrect"); 
   if(localStorage.getItem("saturation")==1){
   document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive");
   
   
   document.getElementsByTagName("html")[0].classList.add("filter1");
   
   
   }
   else if (localStorage.getItem("saturation") == 2) {
   
   document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[1].classList.add("saturationratioactive");
   document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive");
   
   
   
   document.getElementsByTagName("html")[0].classList.add("filter2");
   
   
   
   }
   else if(localStorage.getItem("saturation")==3){
   document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[0].classList.add("saturationratioactive");
   
   document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[1].classList.add("saturationratioactive");
   
   document.getElementsByClassName("saturation-ratio")[0].querySelectorAll("span")[2].classList.add("saturationratioactive");
   
   
   
   document.getElementsByTagName("html")[0].classList.add("filter3");
   
   
   
   }
   }

   
   })

/** check which button click in menu */
   let counters=0;
   $(".icon-dis").on( "click", function() {
       /** when user click on screenreader button  ,azure speech ai will work, (convert text to speech or convert speech to text ) */

       if($(this).hasClass("scrennreaderactive")){
   
      if(localStorage.getItem("screenreaderactive")){
       if(localStorage.getItem("screenreaderactive")=="true"){
           localStorage.removeItem("screenreaderactive");
   
       }
      }
      else{
       localStorage.setItem("screenreaderactive",true);
   
      }
       
   
   
   
   $(this).find('svg path').toggleClass("toggleclicked");
   $(this).find('div').toggleClass("toggleclicked");
   $(this).find('.correct').toggleClass("appearcorrect"); 
   
   }

          /** when user click on incresefontsize button  ,Increment the font size of entire html document(all element) */

   if($(this).hasClass("increasefont")){
   
    
           if(localStorage.getItem("largeratioactive")){
             
            if(localStorage.getItem("largeratioactive")=='1'){
      
               document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.add("largerratioactive")
          
                document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
                  if(ele.tagName=="A"){
                    let fontsize=window.getComputedStyle(ele).fontSize;
                    ele.style.fontSize="20px";
                  }       
            
                   if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION"&&ele.tagName!="A"){
           let fontsize=window.getComputedStyle(ele).fontSize;
                    ele.style.fontSize=parseInt(fontsize)+2+"px";
                   }
                                   
                 
       
                   if(ele.tagName=="SELECT"){
           
                    let fontsize=window.getComputedStyle(ele).fontSize;
                            ele.style.fontSize="20px";
                           }
                             
                           if(ele.tagName=="OPTION"){
                       
                    let fontsize=window.getComputedStyle(ele).fontSize;
                            ele.style.fontSize="20px";
                           }
              
      
         
   
                 });
                
               
               
             
        
               localStorage.setItem("largeratioactive","2");
   
          
            }
     
           
           
           else if(localStorage.getItem("largeratioactive")=='2'){
            
          
               document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[2].classList.add("largerratioactive")
                document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
               
                  if(ele.tagName=="A"){
                    let fontsize=window.getComputedStyle(ele).fontSize;
                    ele.style.fontSize="23px";
                   
                  }       
            
       
                   if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION"&&ele.tagName!="A"){
           let fontsize2=window.getComputedStyle(ele).fontSize;
                    ele.style.fontSize=parseInt(fontsize2)+3+"px";
                   
                   }
                                         
                   if(ele.tagName=="SELECT"){
           
                    let fontsize=window.getComputedStyle(ele).fontSize;
                            ele.style.fontSize="23px";
                           }
                             
                           if(ele.tagName=="OPTION"){
                       
                    let fontsize=window.getComputedStyle(ele).fontSize;
                            ele.style.fontSize="23px";
                           }
              
      
              
                 });
   
          
                   localStorage.setItem("largeratioactive","3");
       
            
            
           }
              
         else  if(localStorage.getItem("largeratioactive")=='3'){
    
               document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[2].classList.remove("largerratioactive")
               document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[1].classList.remove("largerratioactive")
               document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.remove("largerratioactive")
   
               
                   localStorage.removeItem("largeratioactive");
       
              
                   document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
                    if(ele.tagName=="A"){
                      let fontsize=window.getComputedStyle(ele).fontSize;
                      ele.style.fontSize="16px";         
                                   }
                     if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION" &&ele.tagName!="A"){
         
                      var size = parseInt($(ele).css("font-size"));
               
                      size1 = size- 7+"px";
                   
                      $(ele).css({
                        'font-size': size1
                      });
                     }
                     if(ele.tagName=="SELECT"){
           
                      let fontsize=window.getComputedStyle(ele).fontSize;
                              ele.style.fontSize="16px";
                             }
                               
                             if(ele.tagName=="OPTION"){
                         
                      let fontsize=window.getComputedStyle(ele).fontSize;
                              ele.style.fontSize="16px";
                             }
               
         
                   });
                          
                document.querySelectorAll( 'select' ).forEach((ele,i)=>{
       
                 if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
         let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="16px";
                 }
           
   
               });
               document.querySelectorAll( 'input' ).forEach((ele,i)=>{
       
                 if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"){
         let fontsize=window.getComputedStyle(ele).fontSize;
                  ele.style.fontSize="16px";
                 }
           
   
               });
              
                   $(this).find('svg path').toggleClass("toggleclicked");
                   $(this).find('div').toggleClass("toggleclicked");
                   $(this).find('.correct').toggleClass("appearcorrect");  
            
     
           }
         
       }
       else{
    
           localStorage.setItem("largeratioactive","1");
           document.getElementsByClassName("larger-ratio")[0].querySelectorAll("span")[0].classList.add("largerratioactive")
       
            document.querySelectorAll( 'body *' ).forEach((ele,i)=>{
              if(ele.tagName=="A"){
                let fontsize=window.getComputedStyle(ele).fontSize;
                ele.style.fontSize="16px";
                             
                             }
                             if(ele.tagName!="LINK"&&ele.tagName!="SCRIPT"&&ele.tagName!="SELECT"&&ele.tagName!="OPTION"&&ele.tagName!="A"){   
                var size = parseInt($(ele).css("font-size"));
    
                size1 = size+ 2+"px";
        
                $(ele).css({
                  'font-size': size1
                });
               }
         
               if(ele.tagName=="SELECT"){
           
                let fontsize=window.getComputedStyle(ele).fontSize;
                        ele.style.fontSize="18px";
                       }
                         
                       if(ele.tagName=="OPTION"){
                   
                let fontsize=window.getComputedStyle(ele).fontSize;
                        ele.style.fontSize="18px";
                       }
          
  
             });
          
   
           
       
            
           $(this).find('svg path').addClass("toggleclicked");
           $(this).find('div').addClass("toggleclicked");
           $(this).find('.correct').addClass("appearcorrect");  
   
       }
        
        
        
        
        
     
   
   
    }
   
   })
   
   
   

/** when user focun on label of bage, disabilitymodal will hide */
  document.getElementById("Label1country").addEventListener("focus",function(){

if(document.getElementById("disabilitymodal").style.display=="block"){
  $("#disabilitymodal").modal('hide');
}
// if(localStorage.getItem("screenreaderactive")){
//   txt( document.getElementById("Label1country").innerText)
// }

 
  })


     /**function will execute when click on number  in paging number div  */                                                    
  if(document.getElementsByClassName("PAGING-NUMERS")[0]){
  Array.from(document.getElementsByClassName("PAGING-NUMERS")[0].getElementsByTagName("a")).map((ele)=>{
   ele.addEventListener("click",function(){
    localStorage.setItem("paging",ele.innerText);

   })
  })
  }
  /** save paging variable in localstorage when click on paging number , we will remove it when user click on any where not paging div */
  $('body').on('click', function(e) {
    if(e.target){
      if( !e.target.classList.contains("paging-btn")){
     
   localStorage.removeItem('paging')
      }
    }

    });
    $(document).keyup(function(event) {
      if (event.which === 13) {
        if( !event.target.classList.contains("paging-btn")){
          localStorage.removeItem('paging')
        }
        
      }
  });


/*This function will execute when an input field is focused, converting voice to text in the input*/

   function readsecond(targetelement){
    console.log("before Speech SDK initialization");
   var speechConfig = SpeechSDK.SpeechConfig.fromSubscription("33a557a09f18443cb6d185eb3a9fe75c",
   "eastus");
   console.log("after Speech SDK initialization");
   speechConfig.speechRecognitionLanguage = "ar-EG";
       const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
   
       const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

  const outputDiv =targetelement;


      
         
         
   
           recognizer.recognizeOnceAsync(result => {
           
   
               if (result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
                 console.log(result.text)
                   outputDiv.value = ` ${result.text}`;
               
                    txt(`   لقد أدخلت  ${outputDiv.value} إذا كان ما ادخلته صحيح أضغط على tab   اذا كان غير صحيح اضغط على انتر وأعد أدخال مرة أخرى  `);



            
              
               } else if (result.reason === SpeechSDK.ResultReason.NoMatch) {
                   outputDiv.value = "";
               } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                   const cancellationDetails = result.properties.getProperty(SpeechSDK.PropertyId.CancellationDetails);
               }
           }, error => {
             
           });
      
   }


        
        
    /** when user click on selectfilename button this function execute it will appear below it ,this div  will contain the name of the chosen file  */              
 function selectfilename(a){
   
   
   document.getElementsByClassName("filename")[0].innerHTML=
   `لقد قمت باختيار الملف `+a.files[0].name+ ` اذ اأردت أن تغير الملف أضغط شفت تاب `
   
   
   }
   /**function execute when user want stop speach  */
   function stopSpeech() {
        if (utterance) {
            speechSynthesis.cancel();
        }
    }
/** his function will execute when a user presses the 'Enter' key in any inpu*/
Array.from(document.getElementsByTagName("input")).map(Element=>{

  Element.addEventListener("keydown", function(event) {
    // Check if the pressed key is Enter (keycode 13)
    if (event.code === 'Enter' || event.code === 'Space') {
      /**This function will execute when a user presses the 'Enter' key in any input field; it will then trigger the 'readsecond' function." */

if(event.target.type=="text"){
  readsecond(event.target);
}

      
 
    }
  });
})

/////////////////////////
//click shift tab when user focus on label of page 
document.getElementById("Label1country").addEventListener('keydown', function(event) {

  // Check if the Shift key and the Tab key were pressed simultaneously
  if (event.shiftKey && event.key === 'Tab') {

   const elementsWithTabIndex = document.querySelectorAll('[tabindex]');
   console.log(elementsWithTabIndex[elementsWithTabIndex.length-1]);
 elementsWithTabIndex[elementsWithTabIndex.length-1].focus();
   // Log the elements to the console

  }
});


const elementsWithTabIndex = document.querySelectorAll('[tabindex]');
elementsWithTabIndex[elementsWithTabIndex.length-1].addEventListener('keydown', function(event) {
  // Check if the Shift key and the Tab key were pressed simultaneously
  if (event.key === 'Tab'&&!event.shiftKey) {

    document.getElementById("Label1country").focus();

   // Log the elements to the console

  }
});

document.addEventListener('keydown', function(event) {
  // Check if the Shift key was pressed
  if (event.shiftKey) {
   
 if(localStorage.getItem("screenreaderactive")=="true"){

$("#screenreader").find('svg path').removeClass("toggleclicked");
$("#screenreader").find('div').removeClass("toggleclicked");
$("#screenreader").find('.correct').removeClass("appearcorrect");  
localStorage.removeItem("screenreaderactive");
 }
 else{
  $("#screenreader").find('svg path').addClass("toggleclicked");
  $("#screenreader").find('div').addClass("toggleclicked");
  $("#screenreader").find('.correct').addClass("appearcorrect");  
localStorage.setItem("screenreaderactive","true");
 }

    
  }

});
document.addEventListener("keydown", function (event) {
  if (event.key === "Insert") {

    if (document.activeElement) {
      let parentElement = document.activeElement;
      
        // Check if the child is a <select> element
         if (parentElement.tagName.toLowerCase() === 'select') {
      
          
           txt(`هَذَا عُنْصُرُ اَلِاخْتِيَارِ مِنْ مُتَعَدِّدٍ اِضْغَطْ لِلسَّهْمِ أَعْلَى وَلِأَسْفَل لِسَمَاع اَلِاخْتِيَارَاتِ  ${parentElement.options[0].innerText}اَلْقِيمَة اَلْمَوْجُودَةِ بِهِ

 ${parentElement.options[parentElement.selectedIndex].innerText}
`);

      
          

         }
    
      
  
          else if(parentElement.tagName=="INPUT"){

   if(parentElement.type=="text"){
     if (localStorage.getItem("screenreaderactive") == "true") {
       if (parentElement.value == "") {
          txt ( " أَنْتَ اَلْآنَ وَاقِفٍ عَلَى عُنْصُرِ إِدْخَالِ مِنْ فَضْلِكَ اُدْخُلْ اَلْقِيمَةِ " )

    setTimeout(()=>{
    readsecond(parentElement);
  },2800)

       }
       else {
         txt(` أَنْتَ اَلْآنَ وَاقِفٍ عَلَى عُنْصُرِ إِدْخَالِ القيمة الموجودة به ${parentElement.value}`);

         

         
       }
         
      


   
   }
   
   }


if(parentElement.type=="submit"){
  // txt("انت الان واقف على عنصر ارسال ما تم ادخله من البيانات ")
  // txt(`انت الان واقف على زرار ${event.target.value}أضغط على enter`)
   txt(event.target.value);
  
}
if(parentElement.type=="file"){
  // txt("انت الان واقف على عنصر ارسال ما تم ادخله من البيانات ")
  // txt(`انت الان واقف على زرار ${event.target.value}أضغط على enter`)
   txt("أَنْتَ اَلْآنَ وَاقِفٍ عَلَى عُنْصُرِ إِدْخَالِ مِلَفِّ اِضْغَطْ عَلَى enter لِاخْتِيَارِ اَلْمِلَفِّ وَاضْغَطْ عَلَى tab وَسَوْفَ يقَرَأَاسَمْ اَلْمِلَفُّ اَلَّذِي اِخْتَرْتُهُ وَإِذَا أَرَدْتُ أَنَّ تَغَيُّرَ اَلْمِلَفِّ اِضْغَطْ عَلَى shift tab سَوْفَ يَرْجِعُ خُطْوَةً لِلْوَرَاءِ وَقُمْ بِالضَّغْطِ عَلَى enter حَتَّى تَحَمُّلِ مِلَفٍّ آخَرَ");
  
}
    
   

    
   }
  else  if(parentElement.tagName=="LABEL"){
 
        if(localStorage.getItem("screenreaderactive")=="true"){
        txt(parentElement.target.innerText);
        txt("  إذا كان هذا إختيارك أضغط على ENTER  ")
        }
        
        
        }
      else  if (parentElement.tagName === 'BUTTON') {

        if(localStorage.getItem("screenreaderactive")=="true"){
txt("انت الان على عنصر زر للضغط اضغط enter");
          txt(parentElement.innerText);
        
          }
        }

    else   if (parentElement.tagName === 'A') {

         if (parentElement.parentElement.id == "myTopnav") {
             
         txt ( `رَابِطٌ فِي اَلْقَائِمَةِ  لِلذَّهَابِ لِلرَّابِطِ اِضْغَطْ عَلَى enter ${ parentElement.innerText}`) ;
              // txt(event.target.innerHTML);
        }
else {
  
          txt ( ` هَذَا اَلْعُنْصُرِ رَابِط  لِلذَّهَابِ إِلَيْهِ اِضْغَطْ عَلَى enter ${ parentElement.innerText } ` ) ;
                        //  txt(event.target.innerHTML);

        }
      }
        else   if (parentElement.id === 'Label1country') {

          txt ( " عُنْوَانُ اَلصَّفْحَةِ" );

      }
           else {
             txt(` هَذَا اَلْعُنْصُرِ نَصَّ  ${parentElement.innerText} `);

             
      }
    }
    }
})