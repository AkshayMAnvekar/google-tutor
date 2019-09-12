module.exports=function(o){var e={};function t(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return o[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=o,t.c=e,t.d=function(o,e,r){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)t.d(r,n,function(e){return o[e]}.bind(null,n));return r},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="/dist/",t(t.s=18)}([function(o,e){o.exports=require("react-hot-loader")},function(o,e){o.exports=require("fs")},function(o,e,t){"use strict";(function(o){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(o);var n,a,l={env:"production",port:process.env.PORT||4e3,API_URL:"http://localhost:3000",ACCESS_TOKEN:"0z6v8b4uua"};e.a=l,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&n.register(l,"default","D:\\Work\\GIT\\Javascript\\google-tutor\\config\\index.js"),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&a(o)}).call(this,t(5)(o))},function(o,e){o.exports=require("xlsx")},function(o,e){o.exports=require("jsontoxml")},function(o,e){o.exports=function(o){if(!o.webpackPolyfill){var e=Object.create(o);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(o,e){o.exports=require("path")},function(o,e){o.exports=require("express")},function(o,e){o.exports=require("webpack")},function(o,e){o.exports=require("body-parser")},function(o,e){o.exports=require("xml-formatter")},function(o,e,t){(function(o){var e;(e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&e(o);var r,n,a=t(6),l=t(8),c=process.cwd(),i={name:"browser",mode:"development",devtool:"eval-source-map",entry:["babel-polyfill","react-hot-loader/patch","webpack-hot-middleware/client?reload=true",a.join(c,"client/main.js")],output:{path:a.join(c,"/dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]},{test:/.css$/,use:[{loader:"style-loader"},{loader:"css-loader"}]},{test:/\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,use:"file-loader"}]},plugins:[new l.HotModuleReplacementPlugin,new l.NoEmitOnErrorsPlugin]};o.exports=i,(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(r.register(c,"CURRENT_WORKING_DIR","D:\\Work\\GIT\\Javascript\\google-tutor\\webpack.config.client.js"),r.register(i,"config","D:\\Work\\GIT\\Javascript\\google-tutor\\webpack.config.client.js")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&n(o)}).call(this,t(23)(o))},function(o,e,t){"use strict";(function(o){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(o);var n,a,l=function(){return'<!doctype html>\n      <html lang="en">\n        <head>\n            <title>google_tutor</title>\n            <meta name="viewport"  content="width=device-width initial-scale=1"/>\n            <link rel="stylesheet" href="https://s3.amazonaws.com/assessts-book/css/impactwebfont.css">\n            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n            <link rel="stylesheet" href="/css/web-icons.css">\n        </head>\n        <body>\n          <div id="root"></div>\n          <script type="text/javascript" src="/dist/bundle.js"><\/script>\n          <script type="text/javascript" src="/js/vkbeauty.js"><\/script>\n        </body>\n      </html>'};e.a=l,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&n.register(l,"default","D:\\Work\\GIT\\Javascript\\google-tutor\\template.js"),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&a(o)}).call(this,t(5)(o))},function(o,e){o.exports=require("formidable")},function(o,e){o.exports=require("uuid/v4")},function(o,e,t){"use strict";(function(o){var r,n=t(2),a=t(8),l=t.n(a),c=t(16),i=t.n(c),s=t(17),u=t.n(s),p=t(11),d=t.n(p);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(o);var f,m,v=function(o){if("development"===n.a.env){var e=l()(d.a),t=i()(e,{publicPath:d.a.output.publicPath});o.use(t),o.use(u()(e))}},g={compile:v};e.a=g,(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(f.register(v,"compile","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\devBundle.js"),f.register(g,"default","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\devBundle.js")),(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&m(o)}).call(this,t(5)(o))},function(o,e){o.exports=require("webpack-dev-middleware")},function(o,e){o.exports=require("webpack-hot-middleware")},function(o,e,t){t(19),o.exports=t(20)},function(o,e){o.exports=require("babel-polyfill")},function(o,e,t){"use strict";t.r(e),function(o){var e,r=t(7),n=t.n(r),a=t(3),l=t.n(a),c=t(6),i=t.n(c),s=t(2),u=t(9),p=t.n(u),d=(t(21),t(1)),f=t.n(d),m=t(4),v=t.n(m),g=t(10),y=t.n(g),_=t(12),b=(t(22),t(13)),h=t.n(b),x=t(14),w=t.n(x),A=t(15);(e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&e(o);var k=n()();k.use(p.a.urlencoded({extended:!1})),k.use(p.a.json());var S=process.cwd();function j(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;e.push({name:"param",attrs:{name:c.key,type:c.type}})}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}return{name:"tutelage_tmpl",attrs:{name:o.work_tmp_name},children:[{name:"params",children:e}]}}function q(o){var e='<problem_ref name="'.concat(o.prob_tmp_name,'">');if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;"int"==c.type?e+='<bind name="'.concat(c.key,'" val="').concat(c.value,'"/>'):e+='<bind name="'.concat(c.key,'" type="').concat(c.type,'"><img src="').concat(c.value,'" width="20px"/></bind>')}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}return e+"</problem_ref>"}function T(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;console.log(o.prob_tmp_name);var t=o.prob_tmp_name,r='<tutelage_ref name="'.concat(t.replace("PR","TU"),'">');if(0===e&&(console.log(o.ques_type),o.paramsArr.length>0)){var n=!0,a=!1,l=void 0;try{for(var c,i=o.paramsArr[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;"int"==s.type&&(r+='<bind name="'.concat(s.key,'" val="').concat(s.key,'"/>'))}}catch(o){a=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw l}}}return r+"</tutelage_ref>"}function G(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;e.push({name:"bind",attrs:{name:c.key,val:c.value}})}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}return{name:"problem_ref",attrs:{name:o.prob_tmp_name},children:e}}function I(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;e.push({name:"param",attrs:{name:c.key,type:c.type}})}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}var i="".concat(o.ques_txt),s="";if(o.paramsArr.length>0){s+="<params>";var u=!0,p=!1,d=void 0;try{for(var f,m=o.paramsArr[Symbol.iterator]();!(u=(f=m.next()).done);u=!0){var v=f.value;s+='<param name="'.concat(v.key,'" type="').concat(v.type,'"/>')}}catch(o){p=!0,d=o}finally{try{u||null==m.return||m.return()}finally{if(p)throw d}}o.conditions.length>0&&(s+=Q(o)),s+="</params>"}return'<problem_tmpl name="'.concat(o.prob_tmp_name,'" width="400">').concat(s).concat(i).concat(X(o),"</problem_tmpl>")}function L(o){o.boxing[0],o.boxing[1],Math.floor(100*Math.random());return'<group><boxing name="Boxing1" count="A*B" limit="Math.max(A-1,3)">$P$</boxing><solutions><solution><cond><boxing_ref name="Boxing1" field="group"/> == $A$</cond><cond><boxing_ref name="Boxing1" field="size"/> == $B$</cond></solution></solutions>'.concat(T(o),"</group>")}function D(o){var e=o.sub_questions,t="",r="abcdefghikjklmnopqrstuvwxyzabcdefghikjklmnopqrstuvwxyz",n=2,a=!0,l=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var u=i.value;console.log(u);var p=u.mcq_choises.length,d=1,f="",m="",v="<group>";(o.mcq_question||e.length>1)&&(m="".concat(o.mcq_question),v='<group name="'.concat(o.prob_tmp_name,'" type="MCQ">'));var g=!0,y=!1,_=void 0;try{for(var b,h=u.mcq_choises[Symbol.iterator]();!(g=(b=h.next()).done);g=!0){var x=b.value;f+='<choice name="'.concat(r[n].toUpperCase()).concat(d,'">').concat(x,"</choice>"),++d}}catch(o){y=!0,_=o}finally{try{g||null==h.return||h.return()}finally{if(y)throw _}}var w=u.mcq_answer;u.mcq_answer&&u.mcq_answer.match("Choice")&&(w=u.mcq_answer.split(" ")[1]),console.log("Akshay",m),m.includes("<p>undefined</p>")&&(m=""),console.log("Akshay",m);var A='<repeat val="'.concat(p,'" index="i"><cond><choice_ref name="').concat(r[n].toUpperCase(),'$i+1$"/>==$(i)==(').concat(parseInt(w)-1,")$</cond></repeat>");t+="".concat(v).concat(m).concat(f,"<solutions><solution>").concat(A,"</solution></solutions>").concat(T(o,1),"</group>"),++n}}catch(o){l=!0,c=o}finally{try{a||null==s.return||s.return()}finally{if(l)throw c}}return t}function J(o){var e=1,t=o.ans_txt,r=!0,n=!1,a=void 0;try{for(var l,c=o.fib_conditions[0][Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;t=t.replace("<FIB_"+e+">",i),++e}}catch(o){n=!0,a=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}if(o.array.length>0)return W(o);var s="<group>";return o.mcq_question&&(s='<group name="'.concat(o.prob_tmp_name,'" type="FIB">')),"".concat(s).concat(t,"<solutions><solution>").concat(o.fib_conditions[1],"</solution></solutions>").concat(T(o),"</group>")}function W(o){array='<array name="Array1" row="A" column="B" symbol="'.concat(o.symbol,'"/>'),solution=o.solution;var e="<solution><cond>".concat(solution,' == $A*B$</cond><cond><array_ref name="Array1" field="row"/>== $A$</cond><cond><array_ref name="Array1" field="column"/>== $B$</cond></solution>');return"Swap"in refrences&&1==refrences.Swap&&(e+="<solution><cond>".concat(solution,' == $A*B$</cond><cond><array_ref name="Array1" field="row"/>== $B$</cond><cond><array_ref name="Array1" field="column"/>== $A$</cond></solution>')),"<group>".concat(o.ans_txt).concat(array,"<solutions>").concat(e,"</solutions>").concat(T(o),"</group>")}function B(o){for(var e='<grid columns="50% 50%" gap="2px 20px">',t=1,r=0;r<o.slotLArray.length;r++){var n=o.slotLArray[r],a=o.slotRArray[r];n.match("<FIB_")&&(n=n.replace("<FIB_"+t+">",'<fib type="int" name="fib'.concat(t,'"/>')),++t),a.match("<FIB_")&&(a=a.replace("<FIB_"+t+">",'<fib type="int" name="fib'.concat(t,'"/>')),++t),e+='<cell><slot name="slot'.concat(r+1,'L">').concat(n,'</slot></cell><cell><slot name="slot').concat(r+1,'R">').concat(a,"</slot></cell>")}e+="</grid>";for(var l="<solution>",c=0;c<o.slotLArraySolution.length;c++){var i=o.slotLArraySolution[c][o.slotLArraySolution[c].length-2];l+='<cond><slot_ref name="slot'.concat(c+1,'L"/>.containsExactly{"slot').concat(parseInt(i)+1,'R"}</cond>')}return l+="</solution>","<group>".concat(e,"<solutions>").concat(l,"<solution>").concat(o.fib_conditions[1],"</solution></solutions>").concat(T(o),"</group>")}function M(o){Math.floor(100*Math.random());var e='<boxing_array name="BoxArr1" count="'.concat(o.count,'" limit="').concat(o.limit,'">$P$</boxing_array>'),t='<solution><cond><boxing_array_ref name="BoxArr1"/>.row=='.concat(o.array_row,' && <boxing_array_ref name="BoxArr1"/>.column==').concat(o.array_column,"</cond>");return"Swap"in refrences&&1==refrences.Swap&&(t+='<cond><boxing_array_ref name="BoxArr1"/>.row=='.concat(o.array_column,' && <boxing_array_ref name="BoxArr1"/>.column==').concat(o.array_row,"</cond>")),"<group>".concat(e,"<solutions>").concat(t,"</solution></solutions>").concat(T(o),"</group>")}function H(o){Math.floor(100*Math.random());var e='<solution><cond><clock_ref name="clock1"/>=="'.concat(o.time,'"</cond></solution>');return"<group>".concat(o.ans_txt).concat('<clock name="clock1"/>',"<solutions>").concat(e,"</solutions>").concat(T(o),"</group>")}function $(o){Math.floor(100*Math.random());for(var e='"'.concat(o.order,'"'),t=[],r=parseInt(o.tape);r>0;)t.push(e),--r;console.log("A:",e,"B:",r,"K:",t);var n='<solution><cond><tape_ref name="tape1"/>.inOrder('.concat(t.toString(),")</cond></solution>");return"<group>".concat(o.ans_txt).concat('<tape name="tape1"/>',"<solutions>").concat(n,"</solutions>").concat(T(o),"</group>")}function O(o){var e='<number_line name="nbl1"><start text="'.concat(o.start,'" x="').concat(o.start,'"/><repeat val="((').concat(o.end,"-").concat(o.start,")/(").concat(o.interval,')-1)" index="i"><mark text="').concat(o.start,"+(i+1)*").concat(o.interval,'" x="').concat(o.start,"+(i+1)*").concat(o.interval,'"/>');e+='</repeat><end text="'.concat(o.end,'" x = "').concat(o.end,'"/></number_line>');var t='<solution><cond><number_line_ref name="nbl1"/>.containsExactly("'.concat(o.point,'")</cond></solution>');return"<group>".concat(o.ans_txt).concat(e,"<solutions>").concat(t,"</solutions>").concat(T(o),"</group>")}function P(o){Math.floor(100*Math.random());var e='<boxing_shading name="shading1" count="'.concat(o.count,'" limit="').concat(o.limit,'">$P$</boxing_shading>'),t='<solution><cond><boxing_shading_ref name="shading1"/>=='.concat(o.shading_ref,"</cond></solution>");return"<group>".concat(o.ans_txt).concat(e,"<solutions>").concat(t,"</solutions>").concat(T(o),"</group>")}function R(o){Math.floor(100*Math.random());var e=[],t="",r=!0,n=!1,a=void 0;try{for(var l,c=o.x_point[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;t='"'.concat(i,'"'),e.push(t)}}catch(o){n=!0,a=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}for(var s='<bar name="bar1" x-series="['.concat(e.toString(),']" x-label="').concat(o.x_axis_title,'" y-range="').concat(o.y_axis_start,",").concat(o.y_axis_end,",").concat(o.y_axis_interval,'" y-label="').concat(o.y_axis_title,'" show-y-label="false" show-x-gridlines="true", show-y-gridlines="false" width="200" height="100"/>'),u="<solution>",p=0;p<o.y_value.length;p++)u+='<cond><bar_ref name="bar1"/>.columnHeightAtXIndex('.concat(p,")==").concat(o.y_value[p],"</cond>");return u+="</solution>","<group>".concat(o.ans_txt).concat(s,"<solutions>").concat(u,"</solutions>").concat(T(o),"</group>")}function C(o){Math.floor(100*Math.random());var e="",t=[],r=!0,n=!1,a=void 0;try{for(var l,c=o.x_point[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;e='"'.concat(i,'"'),t.push(e)}}catch(o){n=!0,a=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}for(var s='<line_plot name="lp1" x-series="['.concat(t.toString(),']" x-label="').concat(o.x_axis_title,'" y-range="').concat(o.y_axis_start,",").concat(o.y_axis_end,",").concat(o.y_axis_interval,'" y-label="').concat(o.y_axis_title,'" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>'),u="<solution>",p=0;p<o.y_value.length;p++)u+='<cond><line_plot_ref name="lp1"/>.columCountAtXIndex('.concat(p,")==").concat(o.y_value[p],"</cond>");return u+="</solution>","<group>".concat(o.ans_txt).concat(s,"<solutions>").concat(u,"</solutions>").concat(T(o),"</group>")}function z(){return"<solution></solution>"}function F(o){return{name:"worksheet_ref",attrs:{name:o.work_tmp_name}}}function N(o){return'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>'}function E(o){return D(o)+J(o)}function X(o){return console.log(o.sub_questions),o.boxing.length>0?L(o):"normal"===o.ques_type?"<solution></solution>":"mcq"===o.ques_type?D(o):"fib"===o.ques_type?J(o):"box"===o.ques_type?B(o):"aws"===o.ques_type?M(o):"clock"===o.ques_type?H(o):"tape"===o.ques_type?$(o):"nbl"===o.ques_type||"numberline"===o.ques_type?O(o):"ss"===o.ques_type?P(o):"bg"===o.ques_type?R(o):"lp"===o.ques_type?C(o):"mcq/fib"===o.ques_type?E(o):void 0}function Q(o){var e="<constraints>",t=!0,r=!1,n=void 0;try{for(var a,l=o.conditions[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value.replace(/[\u00A0-\u9999<>\&]/gim,function(o){return"&#"+o.charCodeAt(0)+";"});e+="<cond>".concat(c.toString(),"</cond>")}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}return e+="</constraints>"}k.use(n.a.static(i.a.join(S,"public"))),A.a.compile(k),k.use("/dist",n.a.static(i.a.join(S,"dist"))),k.get("/list-wrksheets",function(o,e){e.send(JSON.parse(f.a.readFileSync("public/xmls/worksheets.json")))}),k.get("/test-xlsx",function(o,e){var t=l.a.readFile("public/xmls/zzzz.xlsx"),r=t.SheetNames,n=l.a.utils.sheet_to_json(t.Sheets[r[0]],{defVal:""}),a=0,c={};c.paramsArr=[],c.prob_tmp_name="zzzzzz";var i=!0,s=!1,u=void 0;try{for(var p,d=n[Symbol.iterator]();!(i=(p=d.next()).done);i=!0){var f=p.value;"Tutor ID"==f.col1?(c.work_tmp_name=f.col2,a=1):"Conditions"==f.col1&&(a=0),"QUESTION"==f.col1&&(c.ques_txt+=f.col2),"QuesType"==f.col1&&(c.ques_type=f.col2),"Answer stem"==f.col1&&(c.ans_txt+=f.col2),1==a&&"Tutor ID"!=f.col1&&c.paramsArr.push({key:f.col1,value:f.col2,type:f.col3})}}catch(o){s=!0,u=o}finally{try{i||null==d.return||d.return()}finally{if(s)throw u}}var m=[j(c),I(c),'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>',q(c),F(c)],g=v()(m);e.send({test:g})}),k.get("*",function(o,e){e.send(Object(_.a)())}),k.post("/",function(o,e){var t=o.body.work_tmp_name.trim(),r=o.body.new_work_tmp_name?o.body.new_work_tmp_name.trim():"";r.length>0&&(o.body.work_tmp_name=r);var n=JSON.parse(f.a.readFileSync("public/xmls/worksheets.json"));if(n[t]){var a=I(o.body),l=JSON.parse(f.a.readFileSync("public/xmls/"+t+".txt"));l.unshift(a);for(var c=0;c<l.length;c++)"worksheet_tmpl"==l[c].name&&l[c].children.unshift(G(o.body));f.a.writeFileSync("public/xmls/"+t+".txt",JSON.stringify(l));var i=v()(l);e.send(y()("<xml>".concat(i,"</xml>")))}else{var s=[j(o.body),I(o.body),'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>',q(o.body),F(o.body)],u=v()(s);n[r]=r,f.a.writeFileSync("public/xmls/worksheets.json",JSON.stringify(n)),f.a.writeFileSync("public/xmls/"+r+".txt",JSON.stringify(s)),e.send(y()("<xml>".concat(u,"</xml>")))}});var U,Y,K="";function V(o,e){var t=l.a.utils.sheet_to_json(o.Sheets[e],{defVal:""}),r=0,n={};n.paramsArr=[],n.prob_tmp_name="PR2064",n.ques_txt="",n.ans_txt="",n.fib_conditions=[],n.conditions=[],n.boxing=[],n.array=[];var a=[],c="";n.slotLArray=[],n.slotRArray=[],n.slotLArraySolution=[],n.x_point=[],n.y_value=[];n.mcq_choises=[];var i=[],s={},u=!0,p=!1,d=void 0;try{for(var f,m=t[Symbol.iterator]();!(u=(f=m.next()).done);u=!0){var g=f.value;if("Tutor ID"==g.col1?(n.work_tmp_name=g.col2,r=1):"Conditions"!=g.col1&&"Condition"!=g.col1||(r=0),"Problem ID"==g.col1&&void 0!==g.col2&&(n.prob_tmp_name=g.col2),"Conditions"!=g.col1&&"Condition"!=g.col1||void 0!==g.col2&&n.conditions.push(g.col2),"Question"==g.col1&&void 0!==g.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.ques_txt+='<p><img src="'.concat(g.col2,'" width="100" alt="').concat(g.col3,'"/></p>')):n.ques_txt+="<p>".concat(g.col2,"</p>")),"QuesType"==g.col1&&void 0!==g.col2&&(n.ques_type=g.col2),"Answer stem"!=g.col1&&"Answer Stem"!=g.col1||void 0!==g.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.ans_txt+='<p><img src="'.concat(g.col2,'" width="100" alt="').concat(g.col3,'"/></p>')):n.ans_txt+="<p>".concat(g.col2,"</p>")),g.col1&&g.col1.match("Choice")&&"Choice Answer"!==g.col1&&void 0!==g.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.mcq_choises.push('<p><img src="'.concat(g.col2,'" width="100" alt="').concat(g.col3,'"/></p>'))):n.mcq_choises.push(g.col2),s.mcq_choises=n.mcq_choises),"Choice Answer"==g.col1&&(""===g.col2&&void 0===g.col2||(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.mcq_answer='<p><img src="'.concat(g.col2,'" width="100" alt="').concat(g.col3,'"/></p>')):n.mcq_answer=g.col2,s.mcq_answer=n.mcq_answer,i.push(s),s={},n.mcq_answer="",n.mcq_choises=[])),"MCQ Question"==g.col1&&(""===g.col2&&void 0===g.col2||(n.mcq_question="<p>".concat(g.col2,"</p>")),console.log(n.mcq_question,"aaaaaaaaaa")),"Boxing Group"==g.col1&&(n.boxing[0]=g.col2),g.col1&&/^Slot.*R$/i.test(g.col1)&&void 0!==g.col2&&n.slotRArray.push(g.col2),g.col1&&/^Slot.*L$/i.test(g.col1)&&void 0!==g.col2&&n.slotLArray.push(g.col2),g.col1&&/^Slot.*Answer$/i.test(g.col1)&&void 0!==g.col2&&n.slotLArraySolution.push(g.col2),"Boxing Size"==g.col1&&(n.boxing[1]=g.col2),"Array Row"==g.col1&&(n.array[0]=g.col2),"Array Column"==g.col1&&(n.array[1]=g.col2),"Solution"==g.col1&&(n.solution=g.col2),"Symbol"==g.col1&&(n.symbol=g.col2),g.col1&&"Limit"==g.col1&&void 0!==g.col2&&(n.limit=g.col2),g.col1&&"Count"==g.col1&&void 0!==g.col2&&(n.count=g.col2),g.col1&&"Array Row"==g.col1&&void 0!==g.col2&&(n.array_row=g.col2),g.col1&&"Array Column"==g.col1&&void 0!==g.col2&&(n.array_column=g.col2),g.col1&&"Swap"==g.col1&&void 0!==g.col2&&(n.Swap=g.col2),g.col1&&"Time"==g.col1&&void 0!==g.col2&&(n.time=g.col2),g.col1&&"Tape"==g.col1&&void 0!==g.col2&&(n.tape=g.col2),g.col1&&"Order"==g.col1&&void 0!==g.col2&&(n.order=g.col2),g.col1&&"Start"==g.col1&&void 0!==g.col2&&(n.start=g.col2),g.col1&&"End"==g.col1&&void 0!==g.col2&&(n.end=g.col2),g.col1&&"Interval"==g.col1&&void 0!==g.col2&&(n.interval=g.col2),g.col1&&"Point_1"==g.col1&&void 0!==g.col2&&(n.point=g.col2),g.col1&&"Shading refrence"==g.col1&&void 0!==g.col2&&(n.shading_ref=g.col2),g.col1&&"X axis title"==g.col1&&void 0!==g.col2&&(n.x_axis_title=g.col2),g.col1&&"X axis Start"==g.col1&&void 0!==g.col2&&(n.x_axis_start=g.col2),g.col1&&"X axis End"==g.col1&&void 0!==g.col2&&(n.x_axis_end=g.col2),g.col1&&"X axis Interval"==g.col1&&void 0!==g.col2&&(n.x_axis_interval=g.col2),g.col1&&"Y axis title"==g.col1&&void 0!==g.col2&&(n.y_axis_title=g.col2),g.col1&&"Y axis Start"==g.col1&&void 0!==g.col2&&(n.y_axis_start=g.col2),g.col1&&"Y axis End"==g.col1&&void 0!==g.col2&&(n.y_axis_end=g.col2),g.col1&&"Y axis Interval"==g.col1&&void 0!==g.col2&&(n.y_axis_interval=g.col2),g.col1&&g.col1.match("X point")&&void 0!==g.col2&&n.x_point.push(g.col2),g.col1&&g.col1.match("Y value")&&void 0!==g.col2&&n.y_value.push(g.col2),g.col1&&g.col1.match("FIB_")&&void 0!==g.col2){var y=g.col1.split("_")[1];c+='<cond><fib_ref name="fib'.concat(y,'"/>==').concat(g.col2,"</cond>"),a.push('<fib type="int" name="fib'.concat(y,'"/>'))}1==r&&"Tutor ID"!=g.col1&&"Variable"!=g.col1&&void 0!==g.col2&&n.paramsArr.push({key:g.col1,value:g.col2,type:g.col3})}}catch(o){p=!0,d=o}finally{try{u||null==m.return||m.return()}finally{if(p)throw d}}n.fib_conditions.push(a),n.fib_conditions.push(c),n.sub_questions=i;var _=[I(n)],b=v()(_);return K+=q(n),b}k.post("/upload-xlsx",function(o,e){(new h.a.IncomingForm).parse(o).on("file",function(o,t){var r=w()();console.log(r);var n="",a=l.a.readFile("".concat(t.path)),c=a.SheetNames;K="";var i=!0,s=!1,u=void 0;try{for(var p,d=c[Symbol.iterator]();!(i=(p=d.next()).done);i=!0){n+=V(a,p.value)}}catch(o){s=!0,u=o}finally{try{i||null==d.return||d.return()}finally{if(s)throw u}}Math.floor(100*Math.random());var f='<worksheet_tmpl name="WSAAAAAAAAAAAAAAAA">'.concat(K,'</worksheet_tmpl><worksheet_ref name="WSAAAAAAAAAAAAAAAA"/>');e.send("".concat(n).concat(f))}).on("field",function(o,e){console.log(e),console.log("Got a field:",e)}).on("error",function(o){next(o)}).on("end",function(){e.end()})}),k.listen(s.a.port,function(o){o&&console.log(o),console.info("Server started on port %s.",s.a.port)}),(U=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(U.register(k,"app","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(S,"CURRENT_WORKING_DIR","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(j,"tutelageTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(q,"worksheetTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(T,"tutrefTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(G,"problemRefTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(I,"problemTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(L,"checkBoxing","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(D,"multipleChoiseSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(J,"fibSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(W,"arraySolutionTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(B,"boxSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(M,"awsSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(H,"clockSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register($,"tapSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(O,"nblSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(P,"ssSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(R,"bgSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(C,"lpSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(z,"normalSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(F,"worksheetRefTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(N,"tutelageRefTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(E,"mcqfibSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(X,"solutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(Q,"genrateConstrains","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(K,"probRefsCollectionsStack","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),U.register(V,"uploadXLSX","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js")),(Y=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&Y(o)}.call(this,t(5)(o))},function(o,e){o.exports=require("crypto")},function(o,e){o.exports=require("querystring")},function(o,e){o.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}}]);