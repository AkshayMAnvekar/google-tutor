module.exports=function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="/dist/",t(t.s=18)}([function(e,o){e.exports=require("react-hot-loader")},function(e,o){e.exports=require("fs")},function(e,o,t){"use strict";(function(e){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(e);var n,a,c={env:"production",port:process.env.PORT||4e3,API_URL:"http://localhost:3000",ACCESS_TOKEN:"0z6v8b4uua"};o.a=c,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&n.register(c,"default","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/config/index.js"),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&a(e)}).call(this,t(5)(e))},function(e,o){e.exports=require("xlsx")},function(e,o){e.exports=require("jsontoxml")},function(e,o){e.exports=function(e){if(!e.webpackPolyfill){var o=Object.create(e);o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),Object.defineProperty(o,"exports",{enumerable:!0}),o.webpackPolyfill=1}return o}},function(e,o){e.exports=require("path")},function(e,o){e.exports=require("express")},function(e,o){e.exports=require("webpack")},function(e,o){e.exports=require("body-parser")},function(e,o){e.exports=require("xml-formatter")},function(e,o,t){(function(e){var o;(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&o(e);var r,n,a=t(6),c=t(8),l=process.cwd(),s={name:"browser",mode:"development",devtool:"eval-source-map",entry:["babel-polyfill","react-hot-loader/patch","webpack-hot-middleware/client?reload=true",a.join(l,"client/main.js")],output:{path:a.join(l,"/dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]},{test:/.css$/,use:[{loader:"style-loader"},{loader:"css-loader"}]},{test:/\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,use:"file-loader"}]},plugins:[new c.HotModuleReplacementPlugin,new c.NoEmitOnErrorsPlugin]};e.exports=s,(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(r.register(l,"CURRENT_WORKING_DIR","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/webpack.config.client.js"),r.register(s,"config","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/webpack.config.client.js")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&n(e)}).call(this,t(23)(e))},function(e,o,t){"use strict";(function(e){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(e);var n,a,c=function(){return'<!doctype html>\n      <html lang="en">\n        <head>\n            <title>google_tutor</title>\n            <meta name="viewport"  content="width=device-width initial-scale=1"/>\n            <link rel="stylesheet" href="https://s3.amazonaws.com/assessts-book/css/impactwebfont.css">\n            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n            <link rel="stylesheet" href="/css/web-icons.css">\n        </head>\n        <body>\n          <div id="root"></div>\n          <script type="text/javascript" src="/dist/bundle.js"><\/script>\n          <script type="text/javascript" src="/js/vkbeauty.js"><\/script>\n        </body>\n      </html>'};o.a=c,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&n.register(c,"default","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/template.js"),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&a(e)}).call(this,t(5)(e))},function(e,o){e.exports=require("formidable")},function(e,o){e.exports=require("uuid/v4")},function(e,o,t){"use strict";(function(e){var r,n=t(2),a=t(8),c=t.n(a),l=t(16),s=t.n(l),i=t(17),u=t.n(i),p=t(11),d=t.n(p);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(e);var m,f,v=function(e){if("development"===n.a.env){var o=c()(d.a),t=s()(o,{publicPath:d.a.output.publicPath});e.use(t),e.use(u()(o))}},y={compile:v};o.a=y,(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(m.register(v,"compile","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/devBundle.js"),m.register(y,"default","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/devBundle.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&f(e)}).call(this,t(5)(e))},function(e,o){e.exports=require("webpack-dev-middleware")},function(e,o){e.exports=require("webpack-hot-middleware")},function(e,o,t){t(19),e.exports=t(20)},function(e,o){e.exports=require("babel-polyfill")},function(e,o,t){"use strict";t.r(o),function(e){var o,r=t(7),n=t.n(r),a=t(3),c=t.n(a),l=t(6),s=t.n(l),i=t(2),u=t(9),p=t.n(u),d=(t(21),t(1)),m=t.n(d),f=t(4),v=t.n(f),y=t(10),_=t.n(y),h=t(12),g=(t(22),t(13)),b=t.n(g),x=t(14),w=t.n(x),A=t(15);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&o(e);var S=n()();S.use(p.a.urlencoded({extended:!1})),S.use(p.a.json());var q=process.cwd();function j(e){var o=[];if(e.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,c=e.paramsArr[Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=a.value;o.push({name:"param",attrs:{name:l.key,type:l.type}})}}catch(e){r=!0,n=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw n}}}return{name:"tutelage_tmpl",attrs:{name:e.work_tmp_name},children:[{name:"params",children:o}]}}function M(e){var o='<problem_ref name="'.concat(e.prob_tmp_name,'">');if(e.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,c=e.paramsArr[Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=a.value;"int"==l.type?o+='<bind name="'.concat(l.key,'" val="').concat(l.value,'"/>'):o+='<bind name="'.concat(l.key,'" type="').concat(l.type,'"><img src="').concat(l.value,'" width="20px"/></bind>')}}catch(e){r=!0,n=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw n}}}return o+"</problem_ref>"}function k(e){var o=[];if(e.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,c=e.paramsArr[Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=a.value;o.push({name:"bind",attrs:{name:l.key,val:l.value}})}}catch(e){r=!0,n=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw n}}}return{name:"problem_ref",attrs:{name:e.prob_tmp_name},children:o}}function L(e){var o=[];if(e.paramsArr.length>0){var t=!0,r=!1,n=void 0;try{for(var a,c=e.paramsArr[Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=a.value;o.push({name:"param",attrs:{name:l.key,type:l.type}})}}catch(e){r=!0,n=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw n}}}var s="".concat(e.ques_txt),i="";if(e.paramsArr.length>0){i+="<params>";var u=!0,p=!1,d=void 0;try{for(var m,f=e.paramsArr[Symbol.iterator]();!(u=(m=f.next()).done);u=!0){var v=m.value;i+='<param name="'.concat(v.key,'" type="').concat(v.type,'"/>')}}catch(e){p=!0,d=e}finally{try{u||null==f.return||f.return()}finally{if(p)throw d}}e.conditions.length>0&&(i+=Y(e)),i+="</params>"}return'<problem_tmpl name="'.concat(e.prob_tmp_name,'" width="400">').concat(i).concat(s).concat(E(e),"</problem_tmpl>")}function T(e){e.boxing[0],e.boxing[1];var o=Math.floor(100*Math.random());return'<group><boxing name="BOX_'.concat(o,'" count="A*B" limit="Math.max(A-1,3)">$P$</boxing><solutions><solution><cond><boxing_ref name="BOX_').concat(o,'" field="group"/> == $A$</cond><cond><boxing_ref name="BOX_').concat(o,'" field="size"/> == $B$</cond></solution></solutions></group>')}function J(e){var o=e.sub_questions,t="",r="abcdefghikjklmnopqrstuvwxyzabcdefghikjklmnopqrstuvwxyz",n=0,a=!0,c=!1,l=void 0;try{for(var s,i=o[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var u=s.value;console.log(u);var p=u.mcq_choises.length,d=1,m="",f="",v="<group>";(u.mcq_question||o.length>1)&&(f="<p>".concat(u.mcq_question,"</p>"),v="<group name='".concat(e.prob_tmp_name,"' type='MCQ'>"));var y=!0,_=!1,h=void 0;try{for(var g,b=u.mcq_choises[Symbol.iterator]();!(y=(g=b.next()).done);y=!0){var x=g.value;m+='<choice name="'.concat(r[n].toUpperCase()).concat(d,'">').concat(x,"</choice>"),++d}}catch(e){_=!0,h=e}finally{try{y||null==b.return||b.return()}finally{if(_)throw h}}var w=u.mcq_answer;u.mcq_answer&&u.mcq_answer.match("Choice")&&(w=u.mcq_answer.split(" ")[1]);var A='<repeat val="'.concat(p,'" index="i"><cond><choice_ref name="').concat(r[n].toUpperCase(),'$i+1$"/>==$(i)==(').concat(parseInt(w)-1,")$</cond></repeat>");t+="".concat(v).concat(f).concat(m,"<solutions><solution>").concat(A,"</solution></solutions></group>"),++n}}catch(e){c=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(c)throw l}}return t}function U(e){var o=1,t=e.ans_txt,r=!0,n=!1,a=void 0;try{for(var c,l=e.fib_conditions[0][Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var s=c.value;t=t.replace("<FIB_"+o+">",s),++o}}catch(e){n=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw a}}if(e.array.length>0)return G(e);var i="<group>";return e.mcq_question&&(i="<group name='".concat(e.prob_tmp_name,"' type='FIB'>")),"".concat(i).concat(t,"<solutions><solution>").concat(e.fib_conditions[1],"</solution></solutions></group>")}function G(e){var o=Math.floor(100*Math.random()),t='<array name="ARY'.concat(o,'" row="A" column="B" symbol="').concat(e.symbol,'"/>'),r=e.solution,n="<solution><cond>".concat(r,' == $A*B$</cond><cond><array_ref name="ARY').concat(o,'" field="row"/>== $A$</cond><cond><array_ref name="ARY').concat(o,'" field="column"/>== $B$</cond></solution>');return n+="<solution><cond>".concat(r,' == $A*B$</cond><cond><array_ref name="ARY').concat(o,'" field="row"/>== $B$</cond><cond><array_ref name="ARY').concat(o,'" field="column"/>== $A$</cond></solution>'),"<group>".concat(e.ans_txt).concat(t,"<solutions>").concat(n,"</solutions></group>")}function $(e){for(var o='<grid columns="50% 50%" gap="2px 20px">',t=1,r=0;r<e.slotLArray.length;r++){var n=e.slotLArray[r],a=e.slotRArray[r];n.match("<FIB_")&&(n=n.replace("<FIB_"+t+">",'<fib type="int" name="fib'.concat(t,'"/>')),++t),a.match("<FIB_")&&(a=a.replace("<FIB_"+t+">",'<fib type="int" name="fib'.concat(t,'"/>')),++t),o+='<cell><slot name="slot1_'.concat(r+1,'">').concat(n,'</slot></cell><cell><slot name="slot2_').concat(r+1,'">').concat(a,"</slot></cell>")}o+="</grid>";for(var c="<solution>",l=0;l<e.slotLArraySolution.length;l++){var s=e.slotLArraySolution[l][e.slotLArraySolution[l].length-2];c+='<cond><slot_ref name="slot1_'.concat(l+1,'"/>=={"slot2_').concat(parseInt(s)+1,'"}</cond>')}return c+="</solution>","<group>".concat(o,"<solutions>").concat(c,"<solution>").concat(e.fib_conditions[1],"</solution></solutions></group>")}function H(e){Math.floor(100*Math.random());e.array_row=e.paramsArr[0].value,e.array_column=e.paramsArr[1].value;var o='<boxing_array name="ba1" count="'.concat(e.count,'" limit="').concat(e.limit,'">$P$</boxing_array>'),t=parseInt(e.array_row)*parseInt(e.array_column),r='<solution><boxing_array_ref name="ba1"/>.row=='.concat(e.array_row);return r+='&& <boxing_array_ref name="ba1"/>.column=='.concat(e.array_column),r+='<boxing_array_ref name="ba1"/>.row * <boxing_array_ref name="ba1"/>.column=='.concat(t,"</solution>"),"<group>".concat(o,"<solutions>").concat(r,"</solutions></group>")}function O(e){var o=Math.floor(100*Math.random()),t='<clock name="clock'.concat(o,'"/>'),r='<solution><cond><clock_ref name="clock'.concat(o,'"/>=="').concat(e.time,'"</cond></solution>');return"<group>".concat(e.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function B(e){for(var o=Math.floor(100*Math.random()),t='"'.concat(e.paramsArr[0].value,'"'),r=[],n=parseInt(e.paramsArr[1].value);n>0;)r.push(t),--n;var a='<tape name="tape'.concat(o,'"/>'),c='<solution><cond><tape_ref name="tape'.concat(o,'"/>.inOrder(').concat(r.toString(),")<cond></solution>");return"<group>".concat(e.ans_txt).concat(a,"<solutions>").concat(c,"</solutions></group>")}function R(e){var o='<number_line name="nbl1"><start text="'.concat(e.start,'"x="').concat(e.start,'"/><repeat val="(').concat(e.end,"/").concat(e.interval,'-1)" index="i"><mark text="').concat(e.start,"+(i+1)*").concat(e.interval,'" x = "').concat(e.start,"+(i+1)*").concat(e.interval,'"/>');o+='</repeat><end text="'.concat(e.end,'" x = "').concat(e.end,'"/></number_line>');var t='<solution><cond><number_line_ref name="nbl1"/>.containsExactly("'.concat(e.point,'")</cond></solution>');return"<group>".concat(e.ans_txt).concat(o,"<solutions>").concat(t,"</solutions></group>")}function I(e){var o=Math.floor(100*Math.random()),t='<boxing_shading name="ss'.concat(o,'" count="').concat(e.count,'" limit="').concat(e.limit,'">$P$</boxing_shading>'),r='<solution><cond><boxing_shading_ref name="ss'.concat(o,'"/>==').concat(e.shading_ref,"</cond></solution>");return"<group>".concat(e.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function P(e){var o=Math.floor(100*Math.random()),t='<bar name="bar'.concat(o,'" x-series="[').concat(e.x_point.toString(),']" x-label="').concat(e.x_axis_title,'" y-range="').concat(e.y_axis_start,",").concat(e.y_axis_end,",").concat(e.y_axis_interval,'" y-label="').concat(e.y_axis_title,'" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>');t+='<line_plot name="lp'.concat(o,'" x-range="').concat(e.x_axis_start,",").concat(e.x_axis_end,",").concat(e.x_axis_interval,'" x-label="').concat(e.x_axis_title,'" y-range="').concat(e.y_axis_start,",").concat(e.y_axis_end,",").concat(e.y_axis_interval,'" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>');for(var r="<solution>",n=0;n<e.y_value.length;n++)r+='<bar_ref name="bar'.concat(o,'" />.columCountAtXValue(').concat(n,")==").concat(e.y_value[n]," &&");return r=r.slice(0,-2),r+="</solution>","<group>".concat(e.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function C(e){var o=Math.floor(100*Math.random()),t='<line_plot name="lp'.concat(o,'" x-range="[').concat(e.x_point.toString(),']" x-label="').concat(e.x_axis_title,'" y-range="').concat(e.y_axis_start,",").concat(e.y_axis_end,",").concat(e.y_axis_interval,'" y-label="').concat(e.y_axis_title,'" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>');t+='<line_plot name="lp'.concat(o,'" x-series="').concat(e.x_axis_start,",").concat(e.x_axis_end,",").concat(e.x_axis_interval,'" x-label="').concat(e.x_axis_title,'" y-range="').concat(e.y_axis_start,",").concat(e.y_axis_end,",").concat(e.y_axis_interval,'" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>');for(var r="<solution>",n=0;n<e.y_value.length;n++)r+='<line_plot_ref name="bar'.concat(o,'" />.columCountAtXValue(').concat(n,")==").concat(e.y_value[n]," &&");return r=r.slice(0,-2),r+="</solution>","<group>".concat(e.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function z(){return"<solution></solution>"}function F(e){return{name:"worksheet_ref",attrs:{name:e.work_tmp_name}}}function N(e){return'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>'}function X(e){return J(e)+U(e)}function E(e){return console.log(e.sub_questions),e.boxing.length>0?T(e):"normal"===e.ques_type?"<solution></solution>":"mcq"===e.ques_type?J(e):"fib"===e.ques_type?U(e):"box"===e.ques_type?$(e):"aws"===e.ques_type?H(e):"clock"===e.ques_type?O(e):"tape"===e.ques_type?B(e):"nbl"===e.ques_type||"numberline"===e.ques_type?R(e):"ss"===e.ques_type?I(e):"bg"===e.ques_type?P(e):"lp"===e.ques_type?C(e):"mcq/fib"===e.ques_type?X(e):void 0}function Y(e){var o="<constraints>",t=!0,r=!1,n=void 0;try{for(var a,c=e.conditions[Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=a.value.replace(/[\u00A0-\u9999<>\&]/gim,function(e){return"&#"+e.charCodeAt(0)+";"});o+="<cond>".concat(l.toString(),"</cond>")}}catch(e){r=!0,n=e}finally{try{t||null==c.return||c.return()}finally{if(r)throw n}}return o+="</constraints>"}S.use(n.a.static(s.a.join(q,"public"))),A.a.compile(S),S.use("/dist",n.a.static(s.a.join(q,"dist"))),S.get("/list-wrksheets",function(e,o){o.send(JSON.parse(m.a.readFileSync("public/xmls/worksheets.json")))}),S.get("/test-xlsx",function(e,o){var t=c.a.readFile("public/xmls/zzzz.xlsx"),r=t.SheetNames,n=c.a.utils.sheet_to_json(t.Sheets[r[0]],{defVal:""}),a=0,l={};l.paramsArr=[],l.prob_tmp_name="zzzzzz";var s=!0,i=!1,u=void 0;try{for(var p,d=n[Symbol.iterator]();!(s=(p=d.next()).done);s=!0){var m=p.value;"Tutor ID"==m.col1?(l.work_tmp_name=m.col2,a=1):"Conditions"==m.col1&&(a=0),"QUESTION"==m.col1&&(l.ques_txt+=m.col2),"QuesType"==m.col1&&(l.ques_type=m.col2),"Answer stem"==m.col1&&(l.ans_txt+=m.col2),1==a&&"Tutor ID"!=m.col1&&l.paramsArr.push({key:m.col1,value:m.col2,type:m.col3})}}catch(e){i=!0,u=e}finally{try{s||null==d.return||d.return()}finally{if(i)throw u}}var f=[j(l),L(l),'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>',M(l),F(l)],y=v()(f);o.send({test:y})}),S.get("*",function(e,o){o.send(Object(h.a)())}),S.post("/",function(e,o){var t=e.body.work_tmp_name.trim(),r=e.body.new_work_tmp_name?e.body.new_work_tmp_name.trim():"";r.length>0&&(e.body.work_tmp_name=r);var n=JSON.parse(m.a.readFileSync("public/xmls/worksheets.json"));if(n[t]){var a=L(e.body),c=JSON.parse(m.a.readFileSync("public/xmls/"+t+".txt"));c.unshift(a);for(var l=0;l<c.length;l++)"worksheet_tmpl"==c[l].name&&c[l].children.unshift(k(e.body));m.a.writeFileSync("public/xmls/"+t+".txt",JSON.stringify(c));var s=v()(c);o.send(_()("<xml>".concat(s,"</xml>")))}else{var i=[j(e.body),L(e.body),'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>',M(e.body),F(e.body)],u=v()(i);n[r]=r,m.a.writeFileSync("public/xmls/worksheets.json",JSON.stringify(n)),m.a.writeFileSync("public/xmls/"+r+".txt",JSON.stringify(i)),o.send(_()("<xml>".concat(u,"</xml>")))}});var D,Q,V="";function W(e,o){var t=c.a.utils.sheet_to_json(e.Sheets[o],{defVal:""}),r=0,n={};n.paramsArr=[],n.prob_tmp_name="PR2064",n.ques_txt="",n.ans_txt="",n.fib_conditions=[],n.conditions=[],n.boxing=[],n.array=[];var a=[],l="";n.slotLArray=[],n.slotRArray=[],n.slotLArraySolution=[],n.x_point=[],n.y_value=[];n.mcq_choises=[];var s=[],i={},u=!0,p=!1,d=void 0;try{for(var m,f=t[Symbol.iterator]();!(u=(m=f.next()).done);u=!0){var y=m.value;if("Tutor ID"==y.col1?(n.work_tmp_name=y.col2,r=1):"Conditions"!=y.col1&&"Condition"!=y.col1||(r=0),"Problem ID"==y.col1&&void 0!==y.col2&&(n.prob_tmp_name=y.col2),"Conditions"!=y.col1&&"Condition"!=y.col1||void 0!==y.col2&&n.conditions.push(y.col2),"Question"==y.col1&&(void 0!==y.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(y.col2)?(y.col3=y.col3||"",n.ques_txt+='<p><img src="'.concat(y.col2,'" width="100" alt="').concat(y.col3,'"/></p>')):n.ques_txt+="<p>".concat(y.col2,"</p>")),i.mcq_question=n.ques_txt),"QuesType"==y.col1&&void 0!==y.col2&&(n.ques_type=y.col2),"Answer stem"!=y.col1&&"Answer Stem"!=y.col1||void 0!==y.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(y.col2)?(y.col3=y.col3||"",n.ans_txt+='<p><img src="'.concat(y.col2,'" width="100" alt="').concat(y.col3,'"/></p>')):n.ans_txt+="<p>".concat(y.col2,"</p>")),y.col1&&y.col1.match("Choice")&&"Choice Answer"!==y.col1&&void 0!==y.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(y.col2)?(y.col3=y.col3||"",n.mcq_choises.push('<p><img src="'.concat(y.col2,'" width="100" alt="').concat(y.col3,'"/></p>'))):n.mcq_choises.push(y.col2),i.mcq_choises=n.mcq_choises),"Choice Answer"==y.col1&&(""===y.col2&&void 0===y.col2||(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(y.col2)?(y.col3=y.col3||"",n.mcq_answer='<p><img src="'.concat(y.col2,'" width="100" alt="').concat(y.col3,'"/></p>')):n.mcq_answer=y.col2,i.mcq_answer=n.mcq_answer,s.push(i),i={},n.mcq_answer="",n.mcq_choises=[],n.ques_txt="")),"MCQ Question"==y.col1&&(""===y.col2&&void 0===y.col2||(n.mcq_question=y.col2)),"Boxing Group"==y.col1&&(n.boxing[0]=y.col2),y.col1&&/^Slot.*R$/i.test(y.col1)&&void 0!==y.col2&&n.slotRArray.push(y.col2),y.col1&&/^Slot.*L$/i.test(y.col1)&&void 0!==y.col2&&n.slotLArray.push(y.col2),y.col1&&/^Slot.*Answer$/i.test(y.col1)&&void 0!==y.col2&&n.slotLArraySolution.push(y.col2),"Boxing Size"==y.col1&&(n.boxing[1]=y.col2),"Array Row"==y.col1&&(n.array[0]=y.col2),"Array Column"==y.col1&&(n.array[1]=y.col2),"Solution"==y.col1&&(n.solution=y.col2),"Symbol"==y.col1&&(n.symbol=y.col2),y.col1&&"Limit"==y.col1&&void 0!==y.col2&&(n.limit=y.col2),y.col1&&"Count"==y.col1&&void 0!==y.col2&&(n.count=y.col2),y.col1&&"Array Row"==y.col1&&void 0!==y.col2&&(n.array_row=y.col2),y.col1&&"Array Column"==y.col1&&void 0!==y.col2&&(n.array_column=y.col2),y.col1&&"Time"==y.col1&&void 0!==y.col2&&(n.time=y.col2),y.col1&&"Tape"==y.col1&&void 0!==y.col2&&(n.tape=y.col2),y.col1&&"Order"==y.col1&&void 0!==y.col2&&(n.order=y.col2),y.col1&&"Start"==y.col1&&void 0!==y.col2&&(n.start=y.col2),y.col1&&"End"==y.col1&&void 0!==y.col2&&(n.end=y.col2),y.col1&&"Interval"==y.col1&&void 0!==y.col2&&(n.interval=y.col2),y.col1&&"Point_1"==y.col1&&void 0!==y.col2&&(n.point=y.col2),y.col1&&"Shading refrence"==y.col1&&void 0!==y.col2&&(n.shading_ref=y.col2),y.col1&&"X axis title"==y.col1&&void 0!==y.col2&&(n.x_axis_title=y.col2),y.col1&&"X axis Start"==y.col1&&void 0!==y.col2&&(n.x_axis_start=y.col2),y.col1&&"X axis End"==y.col1&&void 0!==y.col2&&(n.x_axis_end=y.col2),y.col1&&"X axis Interval"==y.col1&&void 0!==y.col2&&(n.x_axis_interval=y.col2),y.col1&&"Y axis title"==y.col1&&void 0!==y.col2&&(n.y_axis_title=y.col2),y.col1&&"Y axis Start"==y.col1&&void 0!==y.col2&&(n.y_axis_start=y.col2),y.col1&&"Y axis End"==y.col1&&void 0!==y.col2&&(n.y_axis_end=y.col2),y.col1&&"Y axis Interval"==y.col1&&void 0!==y.col2&&(n.y_axis_interval=y.col2),y.col1&&y.col1.match("X point")&&void 0!==y.col2&&n.x_point.push(y.col2),y.col1&&y.col1.match("Y value")&&void 0!==y.col2&&n.y_value.push(y.col2),y.col1&&y.col1.match("FIB_")&&void 0!==y.col2){var _=y.col1.split("_")[1];l+='<cond><fib_ref name="fib'.concat(_,'"/>==').concat(y.col2,"</cond>"),a.push('<fib type="int" name="fib'.concat(_,'"/>'))}1==r&&"Tutor ID"!=y.col1&&"Variable"!=y.col1&&void 0!==y.col2&&n.paramsArr.push({key:y.col1,value:y.col2,type:y.col3})}}catch(e){p=!0,d=e}finally{try{u||null==f.return||f.return()}finally{if(p)throw d}}n.fib_conditions.push(a),n.fib_conditions.push(l),n.sub_questions=s;var h=[L(n)],g=v()(h);return V+=M(n),g}S.post("/upload-xlsx",function(e,o){(new b.a.IncomingForm).parse(e).on("file",function(e,t){var r=w()();console.log(r);var n="",a=c.a.readFile("".concat(t.path)),l=a.SheetNames;V="";var s=!0,i=!1,u=void 0;try{for(var p,d=l[Symbol.iterator]();!(s=(p=d.next()).done);s=!0){n+=W(a,p.value)}}catch(e){i=!0,u=e}finally{try{s||null==d.return||d.return()}finally{if(i)throw u}}var m=Math.floor(100*Math.random()),f='<worksheet_tmpl name="T1_1_WSM'.concat(m,'">').concat(V,'</worksheet_tmpl><worksheet_ref name="T1_1_WSM').concat(m,'"/>');o.send("".concat(n).concat(f))}).on("field",function(e,o){console.log(o),console.log("Got a field:",o)}).on("error",function(e){next(e)}).on("end",function(){o.end()})}),S.listen(i.a.port,function(e){e&&console.log(e),console.info("Server started on port %s.",i.a.port)}),(D=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(D.register(S,"app","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(q,"CURRENT_WORKING_DIR","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(j,"tutelageTempalte","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(M,"worksheetTempalte","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(k,"problemRefTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(L,"problemTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(T,"checkBoxing","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(J,"multipleChoiseSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(U,"fibSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(G,"arraySolutionTempalte","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register($,"boxSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(H,"awsSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(O,"clockSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(B,"tapSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(R,"nblSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(I,"ssSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(P,"bgSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(C,"lpSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(z,"normalSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(F,"worksheetRefTempalte","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(N,"tutelageRefTempalte","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(X,"mcqfibSolutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(E,"solutionTemplate","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(Y,"genrateConstrains","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(V,"probRefsCollectionsStack","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js"),D.register(W,"uploadXLSX","/Users/Apple/Myscripts/Javascript/himanshu/googletutor/server/server.js")),(Q=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&Q(e)}.call(this,t(5)(e))},function(e,o){e.exports=require("crypto")},function(e,o){e.exports=require("querystring")},function(e,o){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);