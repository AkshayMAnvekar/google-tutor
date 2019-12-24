module.exports=function(o){var e={};function t(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return o[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=o,t.c=e,t.d=function(o,e,r){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)t.d(r,n,function(e){return o[e]}.bind(null,n));return r},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="/dist/",t(t.s=17)}([function(o,e){o.exports=require("fs")},function(o,e,t){"use strict";(function(o){var t;(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(o);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,n,a={env:"production",port:process.env.PORT||4e3,API_URL:"http://localhost:3000",ACCESS_TOKEN:"0z6v8b4uua"};e.a=a,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(a,"default","D:\\Work\\GIT\\Javascript\\google-tutor\\config\\index.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(o)}).call(this,t(4)(o))},function(o,e){o.exports=require("xlsx")},function(o,e){o.exports=require("jsontoxml")},function(o,e){o.exports=function(o){if(!o.webpackPolyfill){var e=Object.create(o);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(o,e){o.exports=require("path")},function(o,e){o.exports=require("express")},function(o,e){o.exports=require("webpack")},function(o,e){o.exports=require("body-parser")},function(o,e){o.exports=require("xml-formatter")},function(o,e,t){(function(o){var e;(e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&e(o);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,n,a=t(5),l=t(7),c=process.cwd(),i={name:"browser",mode:"development",devtool:"eval-source-map",entry:["babel-polyfill","react-hot-loader/patch","webpack-hot-middleware/client?reload=true",a.join(c,"client/main.js")],output:{path:a.join(c,"/dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]},{test:/.css$/,use:[{loader:"style-loader"},{loader:"css-loader"}]},{test:/\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,use:"file-loader"}]},plugins:[new l.HotModuleReplacementPlugin,new l.NoEmitOnErrorsPlugin]};o.exports=i,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(c,"CURRENT_WORKING_DIR","D:\\Work\\GIT\\Javascript\\google-tutor\\webpack.config.client.js"),r.register(i,"config","D:\\Work\\GIT\\Javascript\\google-tutor\\webpack.config.client.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(o)}).call(this,t(22)(o))},function(o,e,t){"use strict";(function(o){var t;(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(o);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,n,a=function(){return'<!doctype html>\n      <html lang="en">\n        <head>\n            <title>google_tutor</title>\n            <meta name="viewport"  content="width=device-width initial-scale=1"/>\n            <link rel="stylesheet" href="https://s3.amazonaws.com/assessts-book/css/impactwebfont.css">\n            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n            <link rel="stylesheet" href="/css/web-icons.css">\n        </head>\n        <body>\n          <div id="root"></div>\n          <script type="text/javascript" src="/dist/bundle.js"><\/script>\n          <script type="text/javascript" src="/js/vkbeauty.js"><\/script>\n        </body>\n      </html>'};e.a=a,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(a,"default","D:\\Work\\GIT\\Javascript\\google-tutor\\template.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(o)}).call(this,t(4)(o))},function(o,e){o.exports=require("formidable")},function(o,e){o.exports=require("uuid/v4")},function(o,e,t){"use strict";(function(o){var r,n=t(1),a=t(7),l=t.n(a),c=t(15),i=t.n(c),s=t(16),u=t.n(s),d=t(10),p=t.n(d);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(o);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var f,v,m=function(o){if("development"===n.a.env){var e=l()(p.a),t=i()(e,{publicPath:p.a.output.publicPath});o.use(t),o.use(u()(e))}},g={compile:m};e.a=g,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"compile","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\devBundle.js"),f.register(g,"default","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\devBundle.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(o)}).call(this,t(4)(o))},function(o,e){o.exports=require("webpack-dev-middleware")},function(o,e){o.exports=require("webpack-hot-middleware")},function(o,e,t){t(18),o.exports=t(19)},function(o,e){o.exports=require("babel-polyfill")},function(o,e,t){"use strict";t.r(e),function(o){var e,r=t(6),n=t.n(r),a=t(2),l=t.n(a),c=t(5),i=t.n(c),s=t(1),u=t(8),d=t.n(u),p=(t(20),t(0)),f=t.n(p),v=t(3),m=t.n(v),g=t(9),y=t.n(g),b=t(11),_=(t(21),t(12)),h=t.n(_),x=t(13),w=t.n(x),A=t(14);(e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&e(o);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var k=n()();k.use(d.a.urlencoded({extended:!1})),k.use(d.a.json());var S=process.cwd();function G(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;e.push({name:"param",attrs:{name:c.key,type:c.type}})}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}return{name:"tutelage_tmpl",attrs:{name:o.work_tmp_name},children:[{name:"params",children:e}]}}function j(o){var e='<problem_ref name = "'.concat(o.prob_tmp_name,'">');if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;"int"==c.type?e+='<bind name = "'.concat(c.key,'" val="').concat(c.value,'"/>'):e+='<bind name = "'.concat(c.key,'" type="').concat(c.type,'"><img src="').concat(c.value,'" width="20px"/></bind>')}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}return e+"</problem_ref>"}function T(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;console.log(o.prob_tmp_name);var t=o.prob_tmp_name,r='<tutelage_ref name = "'.concat(t.replace("PR","TU"),'">');if(0===e&&(console.log(o.ques_type),o.paramsArr.length>0)){var n=!0,a=!1,l=void 0;try{for(var c,i=o.paramsArr[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;"int"==s.type&&(r+='<bind name = "'.concat(s.key,'" val="').concat(s.key,'"/>'))}}catch(o){a=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw l}}}return r+"</tutelage_ref>"}function q(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;e.push({name:"bind",attrs:{name:c.key,val:c.value}})}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}return{name:"problem_ref",attrs:{name:o.prob_tmp_name},children:e}}function I(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,l=o.paramsArr[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;e.push({name:"param",attrs:{name:c.key,type:c.type}})}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}}var i="".concat(o.ques_txt),s="";if(o.paramsArr.length>0){s+="<params>";var u=!0,d=!1,p=void 0;try{for(var f,v=o.paramsArr[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var m=f.value;s+='<param name = "'.concat(m.key,'" type="').concat(m.type,'"/>')}}catch(o){d=!0,p=o}finally{try{u||null==v.return||v.return()}finally{if(d)throw p}}o.conditions.length>0&&(s+=Q(o)),s+="</params>"}return'<problem_tmpl name = "'.concat(o.prob_tmp_name,'" width="400">').concat(s).concat(i).concat(X(o),"</problem_tmpl>")}function L(o){var e=o.boxing[0],t=o.boxing[1];Math.floor(100*Math.random());return'<group><boxing name = "Boxing1" count="'.concat(e,"*").concat(t,'" limit="Math.max(').concat(e,'-1,3)">$P$</boxing><solutions><solution><cond><boxing_ref name = "Boxing1" field="group"/> == ').concat(e,'</cond><cond><boxing_ref name = "Boxing1" field="size"/> == ').concat(t,"</cond></solution></solutions>").concat(T(o),"</group>")}function D(o){var e=o.sub_questions,t="",r="abcdefghikjklmnopqrstuvwxyzabcdefghikjklmnopqrstuvwxyz",n=2,a=!0,l=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var u=i.value;console.log(u);var d=u.mcq_choises.length,p=1,f="",v="",m="<group>";(o.mcq_question||e.length>1)&&(v="".concat(o.mcq_question),m='<group name = "'.concat(o.prob_tmp_name,'" type="MCQ">'));var g=!0,y=!1,b=void 0;try{for(var _,h=u.mcq_choises[Symbol.iterator]();!(g=(_=h.next()).done);g=!0){var x=_.value;f+='<choice name = "'.concat(r[n].toUpperCase()).concat(p,'">').concat(x,"</choice>"),++p}}catch(o){y=!0,b=o}finally{try{g||null==h.return||h.return()}finally{if(y)throw b}}var w=u.mcq_answer;u.mcq_answer&&u.mcq_answer.match("Choice")&&(w=u.mcq_answer.split(" ")[1]),console.log("Akshay",v),v.includes("<p>undefined</p>")&&(v=""),console.log("Akshay",v);var A='<repeat val="'.concat(d,'" index="i"><cond><choice_ref name = "').concat(r[n].toUpperCase(),'$i+1$"/>==$(i)==(').concat(parseInt(w)-1,")$</cond></repeat>");t+="".concat(m).concat(v).concat("ta"in o?'<textarea rows="5" cols="40"/>':"").concat(f,"<solutions><solution>").concat(A,"</solution></solutions>").concat(T(o,1),"</group>"),++n}}catch(o){l=!0,c=o}finally{try{a||null==s.return||s.return()}finally{if(l)throw c}}return t}function H(o){var e=1,t=o.ans_txt,r=!0,n=!1,a=void 0;try{for(var l,c=o.fib_conditions[0][Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;t=t.replace("<FIB_"+e+">",i),++e}}catch(o){n=!0,a=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}if(o.array.length>0)return J(o);var s="<group>";return o.mcq_question&&(s='<group name = "'.concat(o.prob_tmp_name,'" type="FIB">')),"".concat(s).concat("ta"in o?'<textarea rows="5" cols="40"/>':"").concat(t,"<solutions><solution>").concat(o.fib_conditions[1],"</solution></solutions>").concat(T(o),"</group>")}function J(o){array='<array name = "Array1" row="A" column="B" symbol="'.concat(o.symbol,'"/>'),solution=o.solution;var e="<solution><cond>".concat(solution,' == $A*B$</cond><cond><array_ref name = "Array1" field="row"/>== $A$</cond><cond><array_ref name = "Array1" field="column"/>== $B$</cond></solution>');return"Swap"in refrences&&1==refrences.Swap&&(e+="<solution><cond>".concat(solution,' == $A*B$</cond><cond><array_ref name = "Array1" field="row"/>== $B$</cond><cond><array_ref name = "Array1" field="column"/>== $A$</cond></solution>')),"<group>".concat(o.ans_txt).concat(array,"<solutions>").concat(e,"</solutions>").concat(T(o),"</group>")}function W(o){for(var e='<grid columns="300px 200px" gap="50px 100px">',t=0;t<o.slotLArray.length;t++){var r=o.slotLArray[t],n=o.slotRArray[t];"string"==typeof r&&r.includes("<FIB_")&&(r=r.replace(/(<FIB_)(\d)(>)/g,'<fib type="int" name = "fib$2"/>'),0),"string"==typeof n&&n.includes("<FIB_")&&(n=n.replace(/(<FIB_)(\d)(>)/g,'<fib type="int" name = "fib$2"/>'),0),e+='<cell><slot name = "Slot'.concat(t+1,'L">').concat(r,'</slot></cell><cell><slot name = "Slot').concat(t+1,'R">').concat(n,"</slot></cell>")}e+="</grid>";for(var a="<solution>",l=0;l<o.slotLArraySolution.length;l++){var c=o.slotLArraySolution[l][o.slotLArraySolution[l].length-2];a+='<cond><slot_ref name = "Slot'.concat(l+1,'L"/>.containsExactly{"Slot').concat(parseInt(c),'R"}</cond>')}return a+="</solution>","<group>".concat(e,"<solutions>").concat(a,"<solution>").concat(o.fib_conditions[1],"</solution></solutions>").concat(T(o),"</group>")}function M(o){Math.floor(100*Math.random());var e='<boxing_array name = "BoxArr1" count="'.concat(o.count,'" limit="').concat(o.limit,'">$P$</boxing_array>'),t='<solution><cond><boxing_array_ref name = "BoxArr1"/>.row=='.concat(o.array_row,' && <boxing_array_ref name = "BoxArr1"/>.column==').concat(o.array_column,"</cond>");return"Swap"in refrences&&1==refrences.Swap&&(t+='<cond><boxing_array_ref name = "BoxArr1"/>.row=='.concat(o.array_column,' && <boxing_array_ref name = "BoxArr1"/>.column==').concat(o.array_row,"</cond>")),"<group>".concat(e,"<solutions>").concat(t,"</solution></solutions>").concat(T(o),"</group>")}function B(o){Math.floor(100*Math.random());var e='<solution><cond><clock_ref name = "clock1"/>=="'.concat(o.time,'"</cond></solution>');return"<group>".concat(o.ans_txt).concat('<clock name = "clock1"/>',"<solutions>").concat(e,"</solutions>").concat(T(o),"</group>")}function P(o){Math.floor(100*Math.random());for(var e='"'.concat(o.order,'"'),t=[],r=parseInt(o.tape);r>0;)t.push(e),--r;console.log("A:",e,"B:",r,"K:",t);var n='<solution><cond><tape_ref name = "tape1"/>.inOrder('.concat(t.toString(),")</cond></solution>");return"<group>".concat(o.ans_txt).concat('<tape name = "tape1"/>',"<solutions>").concat(n,"</solutions>").concat(T(o),"</group>")}function $(o){var e='<number_line name = "nbl1"><start text="'.concat(o.start,'" x="').concat(o.start,'"/><repeat val="((').concat(o.end,"-").concat(o.start,")/(").concat(o.interval,')-1)" index="i"><mark text="').concat(o.start,"+(i+1)*").concat(o.interval,'" x="').concat(o.start,"+(i+1)*").concat(o.interval,'"/>');e+='</repeat><end text="'.concat(o.end,'" x = "').concat(o.end,'"/></number_line>');var t='<solution><cond><number_line_ref name = "nbl1"/>.containsExactly("'.concat(o.point,'")</cond></solution>');return"<group>".concat(o.ans_txt).concat(e,"<solutions>").concat(t,"</solutions>").concat(T(o),"</group>")}function O(o){Math.floor(100*Math.random());var e='<boxing_shading name = "shading1" count="'.concat(o.count,'" limit="').concat(o.limit,'">$P$</boxing_shading>'),t='<solution><cond><boxing_shading_ref name = "shading1"/>=='.concat(o.shading_ref,"</cond></solution>");return"<group>".concat(o.ans_txt).concat(e,"<solutions>").concat(t,"</solutions>").concat(T(o),"</group>")}function R(o){Math.floor(100*Math.random());var e=[],t="",r=!0,n=!1,a=void 0;try{for(var l,c=o.x_point[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;t='"'.concat(i,'"'),e.push(t)}}catch(o){n=!0,a=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}for(var s='<bar name = "bar1" x-series="['.concat(e.toString(),']" x-label="').concat(o.x_axis_title,'" y-range="').concat(o.y_axis_start,",").concat(o.y_axis_end,",").concat(o.y_axis_interval,'" y-label="').concat(o.y_axis_title,'" show-y-label="false" show-x-gridlines="true", show-y-gridlines="false" width="200" height="100"/>'),u="<solution>",d=0;d<o.y_value.length;d++)u+='<cond><bar_ref name = "bar1"/>.columnHeightAtXIndex('.concat(d,")==").concat(o.y_value[d],"</cond>");return u+="</solution>","<group>".concat(o.ans_txt).concat(s,"<solutions>").concat(u,"</solutions>").concat(T(o),"</group>")}function C(o){Math.floor(100*Math.random());var e="",t=[],r=!0,n=!1,a=void 0;try{for(var l,c=o.x_point[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var i=l.value;e='"'.concat(i,'"'),t.push(e)}}catch(o){n=!0,a=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}for(var s='<line_plot name = "lp1" x-series="['.concat(t.toString(),']" x-label="').concat(o.x_axis_title,'" y-range="').concat(o.y_axis_start,",").concat(o.y_axis_end,",").concat(o.y_axis_interval,'" y-label="').concat(o.y_axis_title,'" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>'),u="<solution>",d=0;d<o.y_value.length;d++)u+='<cond><line_plot_ref name = "lp1"/>.columnCountAtXIndex('.concat(d,")==").concat(o.y_value[d],"</cond>");return u+="</solution>","<group>".concat(o.ans_txt).concat(s,"<solutions>").concat(u,"</solutions>").concat(T(o),"</group>")}function z(){return"<solution></solution>"}function F(o){return{name:"worksheet_ref",attrs:{name:o.work_tmp_name}}}function N(o){return'<tutelage_ref name = "T1"><bind name = "A"  val="A"/><bind name = "B"  val="B"/><bind name = "AA" ><fib_ref name = "fib1"/></bind></tutelage_ref>'}function E(o){return D(o)+H(o)}function X(o){return console.log(o.sub_questions),o.boxing.length>0?L(o):"normal"===o.ques_type?"<solution></solution>":"mcq"===o.ques_type?D(o):"fib"===o.ques_type?H(o):"slot"===o.ques_type?W(o):"aws"===o.ques_type?M(o):"clock"===o.ques_type?B(o):"tape"===o.ques_type?P(o):"nbl"===o.ques_type||"numberline"===o.ques_type?$(o):"ss"===o.ques_type?O(o):"bg"===o.ques_type?R(o):"lp"===o.ques_type?C(o):"mcq/fib"===o.ques_type?E(o):void 0}function Q(o){var e="<constraints>",t=!0,r=!1,n=void 0;try{for(var a,l=o.conditions[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value.replace(/[\u00A0-\u9999<>\&]/gim,(function(o){return"&#"+o.charCodeAt(0)+";"}));e+="<cond>".concat(c.toString(),"</cond>")}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}return e+="</constraints>"}function U(o,e,t){return o.replace(new RegExp(e,"g"),t)}k.use(n.a.static(i.a.join(S,"public"))),A.a.compile(k),k.use("/dist",n.a.static(i.a.join(S,"dist"))),k.get("/list-wrksheets",(function(o,e){e.send(JSON.parse(f.a.readFileSync("public/xmls/worksheets.json")))})),k.get("/test-xlsx",(function(o,e){var t=l.a.readFile("public/xmls/zzzz.xlsx"),r=t.SheetNames,n=l.a.utils.sheet_to_json(t.Sheets[r[0]],{defVal:""}),a=0,c={};c.paramsArr=[],c.prob_tmp_name="zzzzzz";var i=!0,s=!1,u=void 0;try{for(var d,p=n[Symbol.iterator]();!(i=(d=p.next()).done);i=!0){var f=d.value;"Problem ID"==f.col1?(c.work_tmp_name=f.col2,a=1):"Conditions"==f.col1&&(a=0),"QUESTION"==f.col1&&(c.ques_txt+=f.col2),"QuesType"==f.col1&&(c.ques_type=f.col2),"Answer stem"==f.col1&&(c.ans_txt+=f.col2),1==a&&"Tutor ID"!=f.col1&&c.paramsArr.push({key:f.col1,value:f.col2,type:f.col3})}}catch(o){s=!0,u=o}finally{try{i||null==p.return||p.return()}finally{if(s)throw u}}var v=[G(c),I(c),'<tutelage_ref name = "T1"><bind name = "A"  val="A"/><bind name = "B"  val="B"/><bind name = "AA" ><fib_ref name = "fib1"/></bind></tutelage_ref>',j(c),F(c)],g=m()(v);e.send({test:g})})),k.get("*",(function(o,e){e.send(Object(b.a)())})),k.post("/",(function(o,e){var t=o.body.work_tmp_name.trim(),r=o.body.new_work_tmp_name?o.body.new_work_tmp_name.trim():"";r.length>0&&(o.body.work_tmp_name=r);var n=JSON.parse(f.a.readFileSync("public/xmls/worksheets.json"));if(n[t]){var a=I(o.body),l=JSON.parse(f.a.readFileSync("public/xmls/"+t+".txt"));l.unshift(a);for(var c=0;c<l.length;c++)"worksheet_tmpl"==l[c].name&&l[c].children.unshift(q(o.body));f.a.writeFileSync("public/xmls/"+t+".txt",JSON.stringify(l));var i=m()(l);e.send(y()("<xml>".concat(i,"</xml>")))}else{var s=[G(o.body),I(o.body),'<tutelage_ref name = "T1"><bind name = "A"  val="A"/><bind name = "B"  val="B"/><bind name = "AA" ><fib_ref name = "fib1"/></bind></tutelage_ref>',j(o.body),F(o.body)],u=m()(s);n[r]=r,f.a.writeFileSync("public/xmls/worksheets.json",JSON.stringify(n)),f.a.writeFileSync("public/xmls/"+r+".txt",JSON.stringify(s)),e.send(y()("<xml>".concat(u,"</xml>")))}}));var Y,K,V="";function Z(o,e){var t=l.a.utils.sheet_to_json(o.Sheets[e],{defVal:""}),r=0,n={};n.paramsArr=[],n.prob_tmp_name="PR2064",n.ques_txt="",n.ans_txt="",n.fib_conditions=[],n.conditions=[],n.boxing=[],n.array=[];var a=[],c="";n.slotLArray=[],n.slotRArray=[],n.slotLArraySolution=[],n.x_point=[],n.y_value=[];n.mcq_choises=[];var i=[],s={};console.log(t);var u=!0,d=!1,p=void 0;try{for(var f,v=t[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var g=f.value;if("Tutor ID"==g.col1||"Problem ID"==g.col1?(n.work_tmp_name=g.col2,r=1):"Conditions"!=g.col1&&"Condition"!=g.col1&&"Question"!=g.col1||(r=0),"Problem ID"==g.col1&&void 0!==g.col2&&(n.prob_tmp_name=g.col2),"Conditions"!=g.col1&&"Condition"!=g.col1||void 0!==g.col2&&n.conditions.push(g.col2),"Question"==g.col1&&void 0!==g.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.ques_txt+='<p><img src="'.concat(g.col2,'" width="100px" alt="').concat(g.col3,'"/></p>')):n.ques_txt+="<p>".concat(g.col2,"</p>")),"QuesType"==g.col1&&void 0!==g.col2&&(n.ques_type=g.col2),"Answer stem"!=g.col1&&"Answer Stem"!=g.col1||void 0!==g.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.ans_txt+='<p><img src="'.concat(g.col2,'" width="100px" alt="').concat(g.col3,'"/></p>')):n.ans_txt+="<p>".concat(g.col2,"</p>")),g.col1&&g.col1.match("Choice")&&"Choice Answer"!==g.col1&&void 0!==g.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.mcq_choises.push('<p><img src="'.concat(g.col2,'" width="100px" alt="').concat(g.col3,'"/></p>'))):n.mcq_choises.push(g.col2),s.mcq_choises=n.mcq_choises),"Choice Answer"==g.col1&&(""===g.col2&&void 0===g.col2||(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(g.col2)?(g.col3=g.col3||"",n.mcq_answer='<p><img src="'.concat(g.col2,'" width="100px" alt="').concat(g.col3,'"/></p>')):n.mcq_answer=g.col2,s.mcq_answer=n.mcq_answer,i.push(s),s={},n.mcq_answer="",n.mcq_choises=[])),"MCQ Question"==g.col1&&(""===g.col2&&void 0===g.col2||(n.mcq_question="<p>".concat(g.col2,"</p>")),console.log(n.mcq_question,"aaaaaaaaaa")),"Boxing Group"==g.col1&&(n.boxing[0]=g.col2),g.col1&&/^Slot.*R$/i.test(g.col1)&&void 0!==g.col2&&n.slotRArray.push(g.col2),g.col1&&/^Slot.*L$/i.test(g.col1)&&void 0!==g.col2&&n.slotLArray.push(g.col2),g.col1&&/^Slot.*Answer$/i.test(g.col1)&&void 0!==g.col2&&n.slotLArraySolution.push(g.col2),"Boxing Size"==g.col1&&(n.boxing[1]=g.col2),"Array Row"==g.col1&&(n.array[0]=g.col2),"Array Column"==g.col1&&(n.array[1]=g.col2),"Solution"==g.col1&&(n.solution=g.col2),"Symbol"==g.col1&&(n.symbol=g.col2),g.col1&&"Limit"==g.col1&&void 0!==g.col2&&(n.limit=g.col2),g.col1&&"Count"==g.col1&&void 0!==g.col2&&(n.count=g.col2),g.col1&&"Array Row"==g.col1&&void 0!==g.col2&&(n.array_row=g.col2),g.col1&&"Array Column"==g.col1&&void 0!==g.col2&&(n.array_column=g.col2),g.col1&&"Swap"==g.col1&&void 0!==g.col2&&(n.Swap=g.col2),g.col1&&"Time"==g.col1&&void 0!==g.col2&&(n.time=g.col2),g.col1&&"Tape"==g.col1&&void 0!==g.col2&&(n.tape=g.col2),g.col1&&"Order"==g.col1&&void 0!==g.col2&&(n.order=g.col2),g.col1&&"Start"==g.col1&&void 0!==g.col2&&(n.start=g.col2),g.col1&&"End"==g.col1&&void 0!==g.col2&&(n.end=g.col2),g.col1&&"Interval"==g.col1&&void 0!==g.col2&&(n.interval=g.col2),g.col1&&"Point_1"==g.col1&&void 0!==g.col2&&(n.point=g.col2),g.col1&&"Shading refrence"==g.col1&&void 0!==g.col2&&(n.shading_ref=g.col2),g.col1&&"Shading answer"==g.col1&&void 0!==g.col2&&(n.shading_ref=g.col2),g.col1&&"X axis title"==g.col1&&void 0!==g.col2&&(n.x_axis_title=g.col2),g.col1&&"X axis Start"==g.col1&&void 0!==g.col2&&(n.x_axis_start=g.col2),g.col1&&"X axis End"==g.col1&&void 0!==g.col2&&(n.x_axis_end=g.col2),g.col1&&"X axis Interval"==g.col1&&void 0!==g.col2&&(n.x_axis_interval=g.col2),g.col1&&"Y axis title"==g.col1&&void 0!==g.col2&&(n.y_axis_title=g.col2),g.col1&&"Y axis Start"==g.col1&&void 0!==g.col2&&(n.y_axis_start=g.col2),g.col1&&"Y axis End"==g.col1&&void 0!==g.col2&&(n.y_axis_end=g.col2),g.col1&&"TA"==g.col1&&void 0!==g.col2&&(n.ta=g.col2),g.col1&&"Y axis Interval"==g.col1&&void 0!==g.col2&&(n.y_axis_interval=g.col2),g.col1&&g.col1.match("X point")&&void 0!==g.col2&&n.x_point.push(g.col2),g.col1&&g.col1.match("Y value")&&void 0!==g.col2&&n.y_value.push(g.col2),g.col1&&g.col1.match("FIB_")&&void 0!==g.col2){var y=g.col1.split("_")[1];c+='<cond><fib_ref name = "fib'.concat(y,'"/>==').concat(g.col2,"</cond>"),a.push('<fib type="int" name = "fib'.concat(y,'"/>'))}1==r&&"Problem ID"!=g.col1&&"Variable"!=g.col1&&void 0!==g.col2&&n.paramsArr.push({key:g.col1,value:g.col2,type:g.col3})}}catch(o){d=!0,p=o}finally{try{u||null==v.return||v.return()}finally{if(d)throw p}}n.fib_conditions.push(a),n.fib_conditions.push(c),n.sub_questions=i;var b=[I(n)],_=m()(b);return V+=j(n),_}k.post("/upload-xlsx",(function(o,e){(new h.a.IncomingForm).parse(o).on("file",(function(o,t){var r=w()();console.log(r);var n="",a=l.a.readFile("".concat(t.path)),c=a.SheetNames;V="";var i=!0,s=!1,u=void 0;try{for(var d,p=c[Symbol.iterator]();!(i=(d=p.next()).done);i=!0){n+=Z(a,d.value)}}catch(o){s=!0,u=o}finally{try{i||null==p.return||p.return()}finally{if(s)throw u}}Math.floor(100*Math.random());var f='<worksheet_tmpl name = "WSAAAAAAAAAAAAAAAA">'.concat(V,'</worksheet_tmpl><worksheet_ref name = "WSAAAAAAAAAAAAAAAA"/>');n=U(n,"÷","&#247;"),n=U(n,"×","&#215;"),e.send("".concat(n).concat(f))})).on("field",(function(o,e){console.log(e),console.log("Got a field:",e)})).on("error",(function(o){next(o)})).on("end",(function(){e.end()}))})),k.listen(s.a.port,(function(o){o&&console.log(o),console.info("Server started on port %s.",s.a.port)})),(Y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(Y.register(k,"app","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(S,"CURRENT_WORKING_DIR","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(G,"tutelageTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(j,"worksheetTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(T,"tutrefTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(q,"problemRefTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(I,"problemTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(L,"checkBoxing","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(D,"multipleChoiseSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(H,"fibSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(J,"arraySolutionTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(W,"boxSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(M,"awsSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(B,"clockSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(P,"tapSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register($,"nblSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(O,"ssSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(R,"bgSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(C,"lpSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(z,"normalSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(F,"worksheetRefTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(N,"tutelageRefTempalte","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(E,"mcqfibSolutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(X,"solutionTemplate","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(Q,"genrateConstrains","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(U,"replaceAll","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(V,"probRefsCollectionsStack","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js"),Y.register(Z,"uploadXLSX","D:\\Work\\GIT\\Javascript\\google-tutor\\server\\server.js")),(K="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&K(o)}.call(this,t(4)(o))},function(o,e){o.exports=require("crypto")},function(o,e){o.exports=require("querystring")},function(o,e){o.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}}]);