(this["webpackJsonpresum-app"]=this["webpackJsonpresum-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/calander.76af4891.svg"},function(e,a,t){e.exports=t.p+"static/media/location.e5be3d53.svg"},function(e,a,t){e.exports=t.p+"static/media/email.85188068.svg"},function(e,a,t){e.exports=t.p+"static/media/linkedin-logo.e2a3ff32.svg"},function(e,a,t){e.exports=t.p+"static/media/researchgate-logo.92d09f54.svg"},function(e,a,t){e.exports=t.p+"static/media/phone.c2adf7c9.svg"},,,,function(e,a,t){e.exports=t(44)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(15),l=t.n(s),r=(t(30),t(31),t(32),t(16)),o=t.n(r),c=t(17),m=t.n(c),d=t(18),u=t.n(d),p=t(19),E=t.n(p),v=t(20),f=t.n(v),g=t(21),h=t.n(g),N=(t(33),t(8));function _(e){var a=Object(N.b)({from:{width:"0%"},to:{width:e.level+"%"},delay:1e3,config:{mass:1,tension:180,friction:12}});return i.a.createElement("div",null,i.a.createElement("h1",{className:"skill_name"},e.skill_name),i.a.createElement("div",{className:"progress_bar"},i.a.createElement(N.a.div,{className:"progress_bar progress_fill",style:a})))}function b(){return i.a.createElement("div",{className:"SideBar"},i.a.createElement("div",{className:"Pic"}),i.a.createElement("h1",{id:"Name"},"Chems eddine NECHE"),i.a.createElement("div",{className:"Informations"},i.a.createElement("img",{src:u.a,alt:"mail_icon",className:"InfoIcons"}),i.a.createElement("p",{className:"InfoText"},"neche.chemseddine@gmail.com"),i.a.createElement("img",{src:m.a,alt:"location_icon"}),i.a.createElement("p",{className:"InfoText"},"15 rue Jacquinot, 54000 Nancy"),i.a.createElement("img",{src:o.a,alt:"calander_icon"}),i.a.createElement("p",{className:"InfoText"},"25 ans"),i.a.createElement("img",{src:h.a,alt:"phone_icon"}),i.a.createElement("p",{className:"InfoText"},"0 7 66 53 50 39")),i.a.createElement("div",{className:"Container"},i.a.createElement("p",{className:"Header"},"Comp\xe9tences"),i.a.createElement("div",{className:"HorizontalLine"}),i.a.createElement("div",{className:"Skills"},i.a.createElement(_,{skill_name:"Python",level:"95"}),i.a.createElement(_,{skill_name:"Java",level:"90"}),i.a.createElement(_,{skill_name:"C, C++",level:"80"}),i.a.createElement(_,{skill_name:"Machin learning",level:"90"}),i.a.createElement(_,{skill_name:"Visualisation des donn\xe9es",level:"90"}),i.a.createElement(_,{skill_name:"Creation IHM (JavaFx, Qt, PyQt)",level:"80"}),i.a.createElement(_,{skill_name:"Front end (html, css, javascript, Reactjs)",level:"80"}),i.a.createElement(_,{skill_name:"SQL et bases de donn\xe9es",level:"85"}))),i.a.createElement("div",{className:"Container"},i.a.createElement("p",{className:"Header"},"Languages"),i.a.createElement("div",{className:"HorizontalLine"}),i.a.createElement("div",{className:"Skills"},i.a.createElement(_,{skill_name:"Fran\xe7ais",level:"90"}),i.a.createElement(_,{skill_name:"Arabe",level:"95"}),i.a.createElement(_,{skill_name:"Anglais",level:"80"}))),i.a.createElement("div",{className:"logo_container"},i.a.createElement("a",{href:"https://www.linkedin.com/in/chemseddine-neche-457a5b159/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:E.a,alt:"LinkedIn_logo"})),i.a.createElement("a",{href:"https://www.researchgate.net/profile/Neche_Chems_Eddine",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:f.a,alt:"ResearchGate_logo"}))))}var k=t(24),y=(t(34),t(7));function x(){var e=Object(n.useState)(!0),a=Object(k.a)(e,2),t=a[0],s=a[1],l=function(e){return 1===e&t||2===e&!t?"nav_links selected":"nav_links"};return i.a.createElement("div",{className:"nav"},i.a.createElement("div",{className:"navGrid"},i.a.createElement(y.b,{to:"/",className:l(1),onClick:function(){return s(!0)}}," Experiences"),i.a.createElement(y.b,{to:"/formations",className:l(2),onClick:function(){return s(!1)}}," Diplomes et formations")))}var w=t(6);t(40),t(41);function C(e){return i.a.createElement("div",{className:"experienceItem"},i.a.createElement("p",{className:"post"},e.post),i.a.createElement("div",{className:"timeline",style:e.last_item?{backgroundColor:"#FFFFFF"}:null},i.a.createElement("div",{className:"time_line_pin"})),i.a.createElement("p",{className:"etablisement"},e.etablisement),i.a.createElement("p",{className:"duration"},e.duration_from," ",i.a.createElement("br",null)," ",e.duration_to),i.a.createElement("div",{className:"description marginTimeline"},i.a.createElement("p",{className:"location"},e.location),i.a.createElement("p",{className:"description"}," ",e.description),i.a.createElement("p",{className:"tech_header"},"Technologies utilis\xe9es:"),i.a.createElement("p",{className:"techs"},e.techs)))}function F(e,a,t,n,i,s,l){this.post=e,this.etablisement=a,this.duration_from=t,this.duration_to=n,this.description=s,this.techs=l,this.location=i}var I=[new F("Stagiaire","Laboratoire LORIA","De mars 2019"," \xe0 ao\xfbt 2019","Vandoeuvre-l\xe8s-Nancy,Nancy, France.","Conception et impl\xe9mentation d\u2019un mod\xe8le de Segmentation de flux de documents administratifs en utilisant des techniques d'apprentissage automatique.","Python, Keras, Deep learning, CNN, LSTM."),new F("Stagiaire","Sense conseil","De f\xe9vrier 2018 "," \xe0 juin 2018","Hydra, Alg\xe9rie.","Conception et impl\xe9mentation d\u2019un syst\xe8me de prediction de la performance d\u2019une publication Facebook bas\xe9e sur le contenu visuel et textuel.","Python, Keras, Deep learning, CNN, Facebook graphe API, pandas."),new F("Stagiaire","Laboratoire LRIA  ","De janvier 2016 ","\xe0 juin 2016","Alger, Alg\xe9rie.","Conception et impl\xe9mentation d\u2019un syst\xe8me de recherche d\u2019images par le contenu.","C++, Qt.")];function A(){var e=I.length,a=I.map((function(a,t){return i.a.createElement(C,{post:a.post,etablisement:a.etablisement,duration_from:a.duration_from,duration_to:a.duration_to,description:a.description,location:a.location,techs:a.techs,last_item:t+1===e})}));return i.a.createElement("div",{className:"Experience_container"},i.a.createElement("div",{className:"experience_list"},a))}t(42),t(43);function q(e){return i.a.createElement("div",{className:"diplomaItem"},i.a.createElement("p",{className:"Formationduration"},e.duration_from," ","-"," ",e.duration_to),i.a.createElement("div",{className:"timeline",style:e.last_item?{backgroundColor:"#FFFFFF"}:null},i.a.createElement("div",{className:"time_line_pin"})),i.a.createElement("p",{className:"diploma"},e.diploma),i.a.createElement("div",{className:"description marginTimeline"},i.a.createElement("p",{className:"location"},e.location),i.a.createElement("p",{className:"description"},e.description)))}function L(e,a,t,n,i,s){this.diploma=e,this.etablisement=a,this.duration_from=n,this.duration_to=i,this.description=s,this.location=t}var j=[new L("Master apprentissage, vision et robotique.","Universit\xe9 de Lorraine - facult\xe9 des sciences et technologies","Vandoeuvre-l\xe8s-Nancy, Nancy, France.","2018","2019","Les objectifs du parcours \u201capprentissage , vision et robotique\u201d se situent dans le contexte de l\u2019informatique moderne orient\xe9en vers l\u2019apprentissage automatique, la vision par ordinateur ainsi que les notions de la robotique et les syst\xe8mes complexes."),new L("Master syst\xe8mes informatiques intelligents","Universit\xe9 des sciences et de la technologie HOUARI","Boumediene Alger, Alg\xe9rie.","2017","2018","La formation permet aux \xe9tudiants avant tout d\u2019acqu\xe9rir des connaissances pointues dans le domaine de l\u2019informatique, plus pr\xe9cis\xe9ment les syst\xe8mes multi-agents, apprentissage automatique, m\xe9taheuristiques et traitement de language naturel."),new L("Licence ing\xe9nierie des syst\xe8mes d\u2019informations et des logiciels.","Universit\xe9 des sciences et de la technologie HOUARI","Boumediene Alger, Alg\xe9rie.","2015","2016","Ma\xeetriser les comp\xe9tences disciplinaires correspondantes \xe0 l\u2019ing\xe9nierie des logiciels et des syst\xe8mes d\u2019information assurant aux dipl\xf4m\xe9s l\u2019aptitude d\u2019\xeatre op\xe9rationnels dans le milieu professionnel actuel.")];function S(){var e=j.length,a=j.map((function(a,t){return i.a.createElement(q,{diploma:a.diploma,etablisement:a.etablisement,duration_from:a.duration_from,duration_to:a.duration_to,description:a.description,location:a.location,last_item:t+1===e})}));return i.a.createElement("div",null,i.a.createElement("div",{className:"diploma_container"},i.a.createElement("div",{className:"diploma_list"},a)))}var H=function(){var e=Object(n.useContext)(w.d).location,a=Object(N.c)(e,(function(e){return e.pathname}),{initial:{opacity:1,transform:"translate3d(0%,0,0)"},from:{opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}}).map((function(e){var a=e.item,t=e.props,n=e.key;return i.a.createElement(N.a.div,{key:n,style:t},i.a.createElement(w.c,{location:a},i.a.createElement(w.a,{exact:!0,path:"/",component:A}),i.a.createElement(w.a,{path:"/Formations",component:S}),i.a.createElement(w.a,{component:A})))}));return i.a.createElement("div",{className:"App"},i.a.createElement(x,null),i.a.createElement(b,null),i.a.createElement("div",{className:"contentContainer"},a))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(y.a,null,i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.2a3972ba.chunk.js.map