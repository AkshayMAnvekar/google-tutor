import express from 'express'
import XLSX from 'xlsx';
import path from 'path'
import CONFIG from './../config'
import bodyParser from 'body-parser'
import crypto from 'crypto'
import fs from 'fs'
import jsontoxml from 'jsontoxml'
import XMLFormatter from 'xml-formatter'
import Template from './../template.js'

import querystring from 'querystring'
import formidable from 'formidable';
import uuidv4 from 'uuid/v4';


const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const CURRENT_WORKING_DIR = process.cwd();

app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')));

//comment out before building for production
import devBundle from './devBundle'
//comment out before building for production
devBundle.compile(app)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


app.get('/list-wrksheets', (req, res)=>{
  res.send(JSON.parse(fs.readFileSync('public/xmls/worksheets.json')));
})

app.get('/test-xlsx', (req, res)=>{
	var workbook = XLSX.readFile('public/xmls/zzzz.xlsx');
	var sheet_name_list = workbook.SheetNames;
	let xlsxJSON = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {defVal:""});
	let variableChecker = 0;
	var questionObj = {};
	var arrayOfTemplateIdsCols = [];

  questionObj['paramsArr'] = [];
  questionObj['prob_tmp_name'] = 'zzzzzz';

  for(let arrEle of xlsxJSON){
    if (arrEle.col1 == 'Problem ID'){
    	questionObj['work_tmp_name'] = arrEle.col2;
      variableChecker = 1;
    }
    else if(arrEle.col1=='Conditions') {
     variableChecker = 0;
    }

    if(arrEle.col1=='QUESTION'){
    	questionObj['ques_txt'] += arrEle.col2;
    }

    if(arrEle.col1=='QuesType'){
      questionObj['ques_type'] = arrEle.col2;
    }

    if(arrEle.col1=='Answer stem'){
    	questionObj['ans_txt'] += arrEle.col2;
    }

    if(variableChecker==1 && arrEle.col1!='Tutor ID'){
    	questionObj['paramsArr'].push({
        key : arrEle.col1,
       	value : arrEle.col2,
        type : arrEle.col3
      })
		 }
	}

  let data = [
    tutelageTempalte(questionObj),
    problemTemplate(questionObj),
    tutelageRefTempalte(),
    worksheetTempalte(questionObj),
    worksheetRefTempalte(questionObj)
  ]

  let xml = jsontoxml(data);

  res.send({
  	 test : xml
  })
	    // sheet_name_list.forEach((y)=>{
     //       var worksheet = workbook.Sheets[y];
     //       var headers = {};
     //       var data = [];
     //       for(let z in worksheet){
     //       	   if(z[0] === '!') continue;
     //       	   var tt = 0;
     //       	   for (var i = 0; i < z.length; i++){
		   //          if (!isNaN(z[i])){
		   //              tt = i;
		   //              break;
		   //          }
		   //     };
		   //     var col = z.substring(0,tt);
     //           var row = parseInt(z.substring(tt));
     //           var value = worksheet[z].v;
     //          // console.log(value)
     //           if(value && value=='Template ID' && arrayOfTemplateIdsCols.indexOf(col)<0){
     //           	  arrayOfTemplateIdsCols.push(col);
     //           	  arrayOfTemplateIds[col] = value;
     //           }
     //       	   //console.log(z)
     //       }
     //       // console.log(arrayOfTemplateIds)
     //       // console.log(arrayOfTemplateIdsCols)
	    // })
	// const result = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
	// console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {defVal:""}))

})




app.get('*', (req, res)=>{
  res.send(Template());
})

function tutelageTempalte(references){
  let params = [];
  if(references.paramsArr.length>0){
    for(let x of references.paramsArr){
      params.push({
        name: 'param',
        attrs: {
          name: x.key,
          type: x.type
        }
      })
    }
  }
  return {
    name : 'tutelage_tmpl',
    attrs: {
      'name': references.work_tmp_name
    },
    children:[
      {
        name:'params',children : params,
      }
    ]
  }
}

function worksheetTempalte(references){
  let prob_refs = [];
  let probRefs = `<problem_ref name = "${references.prob_tmp_name}">`;
  if(references.paramsArr.length>0){
    for(let x of references.paramsArr){
      // prob_refs.push({
      // 	   name: 'bind',
      // 	   attrs: {
      // 	   	  name: x.key,
      // 	   	  val: x.value
      // 	   }
      // })
      if(x.type=='int')
        probRefs += `<bind name = "${x.key}" val="${x.value}"/>`;
      else
        probRefs += `<bind name = "${x.key}" type="${x.type}"><img src="${x.value}" width="20px"/></bind>`;
    }
  }
  return probRefs += `</problem_ref>`;


  // return {
  // 	  name : 'worksheet_tmpl',
  // 	  attrs: {
  // 	  	   'name': references.work_tmp_name
  // 	  },
  // 	  children:[
  //               {name:'problem_ref',
  //               attrs: {
  //                    'name': references.prob_tmp_name
  //               },
  //               children : prob_refs}
  //         ]
  // }
}
function tutrefTempalte(references, i = 0){
  let prob_refs = [];
  console.log(references.prob_tmp_name);
  let tutid = references.prob_tmp_name;
  let probRefs = `<tutelage_ref name = "${tutid.replace("PR", "TU")}">`;
  if (i === 0) {
    console.log(references.ques_type);
    if (references.paramsArr.length > 0){
      for(let x of references.paramsArr){
        if(x.type=='int')
          probRefs += `<bind name = "${x.key}" val="${x.key}"/>`;
        // else
          // probRefs += `<bind name = "${x.key}" type="${x.type}"><img src="${x.value}" width="20px"/></bind>`;
      }
    }
  }
  return probRefs += `</tutelage_ref>`;

}

function problemRefTemplate(references){
  let prob_refs = [];
  if(references.paramsArr.length>0){
    for(let x of references.paramsArr){
      prob_refs.push({
        name: 'bind',
        attrs: {
          name: x.key,
          val: x.value
        }
      })
    }
  }
  return {
    name:'problem_ref',
    attrs: {
      'name': references.prob_tmp_name
    },
    children : prob_refs
  }
}

function problemTemplate(references){
  let params = [];
  let multiQuesText = '';
  if(references.paramsArr.length>0){
	 	for(let x of references.paramsArr){
      params.push({
        name: 'param',
        attrs: {
          name: x.key,
          type: x.type
        }
      })
	  }
  }

  let text = `${references.ques_txt}`;

  //    if(references.ques_type==="fib"){
  //       let ques_txt = (references.ques_txt).replace('___', '<fib type="int" name = "AA"/>');
	 //     text = `<p>${ques_txt}</p><group>`;
  //    }
  //    if(references.ques_type==="mcq"){
	 //    let options = (references.ans_txt).split("\n");
		// let optionsWrapper = '';
		// let c = 0, sol='';
		// for(let x=0; x<options.length; x++){
		// 	let k = options[x].split('##');
		// 	let opt = k[1]==1? "AA" : "c"+c
		// 	optionsWrapper += '<choice name = "'+opt+'">'+k[0]+'</choice>';
		// 	++c;
		// }
		// // if(references.ques_img!==''){
  // //        let imgData = (references.ques_img).split("##");
  // //        let src = (imgData[0]).trim(),
  // //            width = (imgData[1]).trim(),
  // //            height = (imgData[2]).trim(),
  // //            alt = (imgData[3]).trim();
  // //            imgData = `<img src=${src} width=${width} height=${height} alt=${alt}/>`;
  // //            text = `<group><p>${references.ques_txt}</p><p>${imgData}</p>${optionsWrapper}`;
  // //       }else
	 // //    	 text = `<group><p>${references.ques_txt}</p>${optionsWrapper}`;
  //     }


      // if(references.ques_img!=='' && references.ques_type!=="mcq"){
      //    let imgData = (references.ques_img).split("##");
      //       console.log(imgData)
      //    let src = (imgData[0]).replace("\n", "").trim(),
      //        width = (imgData[1]).replace("\n", "").trim(),
      //        height = (imgData[2]).replace("\n", "").trim();
      //       imgData = `<img src=${src} width=${width} height=${height}/>`;
      //       text += imgData;
      // }
  let paramsList = '';
  if(references.paramsArr.length>0){
    paramsList += `<params>`
	 	for(let x of references.paramsArr){
	 		paramsList += `<param name = "${x.key}" type="${x.type}"/>`
            // params.push({
            // 	   name: 'param',
            // 	   attrs: {
            // 	   	  name: x.key,
            // 	   	  type: x.type
            // 	   }
            // })
	 	}
    if(references.conditions.length>0){
      paramsList += genrateConstrains(references);
    }
    paramsList += `</params>`;
	}

  return `<problem_tmpl name = "${references.prob_tmp_name}" width="400">${paramsList}${text}${solutionTemplate(references)}</problem_tmpl>`

	 // return {
  //             name : `problem_tmpl`,
  //             attrs: {
  //                    'name': references.prob_tmp_name,
  //                     width: '400'
  //                },
  //             text: text,
  //             children:[
  //                   {
  //                   	name:'params',children : params
  //                   },
  //                   {
  //                   	name:'solutions',
  //                   	text: solutionTemplate(references)
  //                   }
  //             ]
  //       }
}

function checkBoxing(references){
  let A = references['boxing'][0],
      B = references['boxing'][1],
      randonInt = Math.floor(Math.random() * 100);

  return `<group><boxing name = "Boxing1" count="${A}*${B}" limit="Math.max(${A}-1,3)">$P$</boxing><solutions><solution><cond><boxing_ref name = "Boxing1" field="group"/> == ${A}</cond><cond><boxing_ref name = "Boxing1" field="size"/> == ${B}</cond></solution></solutions>${tutrefTempalte(references)}</group>`;
}

function multipleChoiseSolutionTemplate(ref){

  let totalQuestions = ref.sub_questions;
  // let options = (references.ans_txt).split("\n");
  // let optionsWrapper = '';
  // let c = 0, sol='';
  // for(let x=0; x<options.length; x++){
  // 	let k = options[x].split('##');
  // 	let opt = k[1]==1? "AA" : "c"+c
  // 	optionsWrapper += '<cond><choice_ref name = "'+opt+'"/>== '+k[1]+'</cond>';
  // 	++c;
  // }
  let finalQuestionXML = '';
  let alphabetArray= "abcdefghikjklmnopqrstuvwxyzabcdefghikjklmnopqrstuvwxyz";
  let counter = 2;
  let textArea = '<textarea rows="5" cols="40"/>';
  for(let references of totalQuestions){
    console.log(references);
    let count = references.mcq_choises.length;
    let mcqChioseCount = 1;
    let choises = '';

    //FIB with MCQ
    let mcqQuestions = '';
    let group = `<group>`;
    if(ref.mcq_question || totalQuestions.length>1){
      mcqQuestions = `${ref.mcq_question}`;
      group = `<group name = "${ref.prob_tmp_name}" type="MCQ">`
    }
    //
    for(let x of references.mcq_choises){
      choises += `<choice name = "${alphabetArray[counter].toUpperCase()}${mcqChioseCount}">${x}</choice>`;
      ++mcqChioseCount;
    }
    let choiseAnswer = references.mcq_answer;
    if(references.mcq_answer && references.mcq_answer.match('Choice')){
      choiseAnswer = references.mcq_answer.split(' ')[1];
    }
    console.log("Akshay", mcqQuestions);
    if (mcqQuestions.includes("<p>undefined</p>")) {
      mcqQuestions = '';
    }
    console.log("Akshay", mcqQuestions);
    let optionsWrapper = `<repeat val="${count}" index="i"><cond><choice_ref name = "${alphabetArray[counter].toUpperCase()}$i+1$"/>==$(i)==(${parseInt(choiseAnswer)-1})$</cond></repeat>`;
    finalQuestionXML += `${group}${mcqQuestions}${"ta" in ref ? textArea : ''}${choises}<solutions><solution>${optionsWrapper}</solution></solutions>${tutrefTempalte(ref, 1)}</group>`;
    ++counter;
  }
  return finalQuestionXML;
}

function fibSolutionTemplate(references){
  let count = 1;
  let textArea = '<textarea rows="5" cols="40"/>';
	let ans_txt = references.ans_txt;
	for(let x of references.fib_conditions[0]){
        ans_txt = ans_txt.replace('<FIB_'+count+'>', x)
        ++count;
	}
    //CHECK ARRAY
    if(references['array'].length>0){
    	return arraySolutionTempalte(references);
    }
    let group = `<group>`;
    if(references.mcq_question){
       group = `<group name = "${references.prob_tmp_name}" type="FIB">`
    }
  return `${group}${"ta" in references ? textArea : ''}${ans_txt}<solutions><solution>${references.fib_conditions[1]}</solution></solutions>${tutrefTempalte(references)}</group>`;
}

function arraySolutionTempalte(references){
  // let randonInt = Math.floor(Math.random() * 100),
      array = `<array name = "Array1" row="A" column="B" symbol="${references.symbol}"/>`,
      solution = references.solution;
  let fibSolution = `<solution><cond>${solution} == $A*B$</cond><cond><array_ref name = "Array1" field="row"/>== $A$</cond><cond><array_ref name = "Array1" field="column"/>== $B$</cond></solution>`;
  if('Swap' in refrences) {
    if(refrences['Swap'] == 1) {
      fibSolution += `<solution><cond>${solution} == $A*B$</cond><cond><array_ref name = "Array1" field="row"/>== $B$</cond><cond><array_ref name = "Array1" field="column"/>== $A$</cond></solution>`;
    }
  }
  return `<group>${references.ans_txt}${array}<solutions>${fibSolution}</solutions>${tutrefTempalte(references)}</group>`;
}

function boxSolutionTemplate(references){
  let colGrid = `<grid columns="300px 200px" gap="50px 100px">`;
  let fibCounter = 1;
  for(let x=0; x<references.slotLArray.length; x++){
    let a = references.slotLArray[x];
    let b = references.slotRArray[x];
    if (typeof a === 'string') {
        if(a.includes('<FIB_')) {
        a = a.replace(/(<FIB_)(\d)(>)/g, `<fib type="int" name = "fib`+"$2"+`"/>`);
        ++fibCounter;
      }
    }
    if (typeof b === 'string') {
      if (b.includes('<FIB_')){
        b = b.replace(/(<FIB_)(\d)(>)/g, `<fib type="int" name = "fib` + "$2" + `"/>`);
        ++fibCounter;;
      } 
    }
    colGrid += `<cell><slot name = "Slot${x+1}L">${a}</slot></cell><cell><slot name = "Slot${x+1}R">${b}</slot></cell>`;
  }
  colGrid += `</grid>`;
  let solutionsRefers = `<solution>`;
  for(let y=0; y<references.slotLArraySolution.length; y++){
    let a = references.slotLArraySolution[y][references.slotLArraySolution[y].length-2];
    solutionsRefers += `<cond><slot_ref name = "Slot${y + 1}L"/>.containsExactly{"Slot${parseInt(a)}R"}</cond>`;
  }
  solutionsRefers+= `</solution>`;
  return `<group>${colGrid}<solutions>${solutionsRefers}<solution>${references.fib_conditions[1]}</solution></solutions>${tutrefTempalte(references)}</group>`;
}

function awsSolutionTemplate(references){
  let randonInt = Math.floor(Math.random() * 100);
      // references.array_row = references['paramsArr'][0]['value'];
      // references.array_column = references['paramsArr'][1]['value'];

  let colGrid = `<boxing_array name = "BoxArr1" count="${references.count}" limit="${references.limit}">$P$</boxing_array>`;
  // let totalElements = parseInt(references.array_row)*parseInt(references.array_column);
  let solutionsRefers = `<solution><cond><boxing_array_ref name = "BoxArr1"/>.row==${references.array_row} && <boxing_array_ref name = "BoxArr1"/>.column==${references.array_column}</cond>`;
  if('Swap' in refrences) {
    if(refrences['Swap'] == 1) {
      solutionsRefers += `<cond><boxing_array_ref name = "BoxArr1"/>.row==${references.array_column} && <boxing_array_ref name = "BoxArr1"/>.column==${references.array_row}</cond>`;
      // solutionsRefers += `<cond><boxing_array_ref name = "BoxArr1"/>.row * <boxing_array_ref name = "BoxArr1"/>.column==$${references.array_row}*${references.array_column}$</cond></solution>`;
    }
  }

  return `<group>${colGrid}<solutions>${solutionsRefers}</solution></solutions>${tutrefTempalte(references)}</group>`;
}

function clockSolutionTemplate(references){
  let randonInt = Math.floor(Math.random() * 100),
      clock = `<clock name = "clock1"/>`,
      clockRef = `<solution><cond><clock_ref name = "clock1"/>=="${references.time}"</cond></solution>`;

  return `<group>${references.ans_txt}${clock}<solutions>${clockRef}</solutions>${tutrefTempalte(references)}</group>`;
}

function tapSolutionTemplate(references){
  let randonInt = Math.floor(Math.random() * 100),
      a = `"${references['order']}"`,
      k = [],
      b = parseInt(references['tape']);
  while(b>0) {
    k.push(a);
    --b;
  }
  console.log("A:",a,"B:",b,"K:",k);
  let tape = `<tape name = "tape1"/>`,
      tapeRef = `<solution><cond><tape_ref name = "tape1"/>.inOrder(${k.toString()})</cond></solution>`;

  return `<group>${references.ans_txt}${tape}<solutions>${tapeRef}</solutions>${tutrefTempalte(references)}</group>`;
}


// function nblSolutionTemplate(references){
//    	 let randonInt = Math.floor(Math.random() * 100),
//    	     a = parseInt(references['paramsArr'][0]['value']),
// 	     b = parseInt(references['paramsArr'][1]['value']);
// 	     let numberLine = `<number_linename = "nbl${randonInt}"><start text="$A$:00"x="0"/><repeat val="(${references.end}/${references.interval}/)-1" index="i"><mark text="4:20" x = "$(i+1)*interval$"/>`;
// 			 numberLine += `</repeat><end text="$A$:interval" x = "End"/></number_line>`;
// 	     let numberLineRef = `<solution><cond><number_line_ref name = "nbl${randonInt}"/>.containsExactly(${b}) </solution>`;
// 	 return `<group>${references.ans_txt}${numberLine}<solutions>${numberLineRef}</solutions>${tutrefTempalte(references)}</group>`;
// }

function nblSolutionTemplate(references){
// let randonInt = Math.floor(Math.random() * 100),
// a = parseInt(references['paramsArr'][0]['value']),
// b = parseInt(references['paramsArr'][1]['value']);
  let numberLine = `<number_line name = "nbl1"><start text="${references.start}" x="${references.start}"/><repeat val="((${references.end}-${references.start})/(${references.interval})-1)" index="i"><mark text="${references.start}+(i+1)*${references.interval}" x="${references.start}+(i+1)*${references.interval}"/>`;
      numberLine += `</repeat><end text="${references.end}" x = "${references.end}"/></number_line>`;
  let numberLineRef = `<solution><cond><number_line_ref name = "nbl1"/>.containsExactly("${references.point}")</cond></solution>`;

  return `<group>${references.ans_txt}${numberLine}<solutions>${numberLineRef}</solutions>${tutrefTempalte(references)}</group>`;
}

function ssSolutionTemplate(references){
  let randonInt = Math.floor(Math.random() * 100);
  let box = `<boxing_shading name = "shading1" count="${references.count}" limit="${references.limit}">$P$</boxing_shading>`,
      boxRef = `<solution><cond><boxing_shading_ref name = "shading1"/>==${references.shading_ref}</cond></solution>`;

  return `<group>${references.ans_txt}${box}<solutions>${boxRef}</solutions>${tutrefTempalte(references)}</group>`;
}

function bgSolutionTemplate(references){
  let randonInt = Math.floor(Math.random() * 100);
  var k = [];
  var a = '';
  for (var x of references.x_point) {
    a = `"${x}"`;
    k.push(a);
  }
  let bg = `<bar name = "bar1" x-series="[${k.toString()}]" x-label="${references.x_axis_title}" y-range="${references.y_axis_start},${references.y_axis_end},${references.y_axis_interval}" y-label="${references.y_axis_title}" show-y-label="false" show-x-gridlines="true", show-y-gridlines="false" width="200" height="100"/>`;
      // bg += `<line_plot name = "lp1" x-range="${references.x_axis_start},${references.x_axis_end},${references.x_axis_interval}" x-label="${references.x_axis_title}" y-range="${references.y_axis_start},${references.y_axis_end},${references.y_axis_interval}" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>`;
  let bgRef = `<solution>`;

  for(let x=0; x<references.y_value.length; x++){
    bgRef += `<cond><bar_ref name = "bar1"/>.columnHeightAtXIndex(${x})==${references.y_value[x]}</cond>`;
  }
  // bgRef = bgRef.slice(0, -2);
  bgRef += `</solution>`;
  return `<group>${references.ans_txt}${bg}<solutions>${bgRef}</solutions>${tutrefTempalte(references)}</group>`;
}

function lpSolutionTemplate(references){
  let randonInt = Math.floor(Math.random() * 100);
  var a = '';
  var k = [];
  for (var x of references.x_point) {
    a = `"${x}"`;
    k.push(a);
  }
  let lp = `<line_plot name = "lp1" x-series="[${k.toString()}]" x-label="${references.x_axis_title}" y-range="${references.y_axis_start},${references.y_axis_end},${references.y_axis_interval}" y-label="${references.y_axis_title}" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>`;
      // lp += `<line_plot name = "lp1" x-series="${references.x_axis_start},${references.x_axis_end},${references.x_axis_interval}" x-label="${references.x_axis_title}" y-range="${references.y_axis_start},${references.y_axis_end},${references.y_axis_interval}" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>`;
  let lpRef = `<solution>`;

  for(let x=0; x<references.y_value.length; x++){
    lpRef += `<cond><line_plot_ref name = "lp1"/>.columnCountAtXIndex(${x})==${references.y_value[x]}</cond>`;
  }
  // lpRef = lpRef.slice(0, -2);
  lpRef += `</solution>`;
  return `<group>${references.ans_txt}${lp}<solutions>${lpRef}</solutions>${tutrefTempalte(references)}</group>`;
}

function normalSolutionTemplate(){
  return `<solution></solution>`;
}

function worksheetRefTempalte(references){
  return {
    name : 'worksheet_ref',
    attrs: {
      'name': references.work_tmp_name
    }
  }
}

function tutelageRefTempalte(references){
  return `<tutelage_ref name = "T1"><bind name = "A"  val="A"/><bind name = "B"  val="B"/><bind name = "AA" ><fib_ref name = "fib1"/></bind></tutelage_ref>`;
}

function mcqfibSolutionTemplate(references){
  let mcq = multipleChoiseSolutionTemplate(references);
  let fib = fibSolutionTemplate(references);
  return mcq+fib;
}

function solutionTemplate(references){

  console.log(references.sub_questions);

  if(references['boxing'].length>0){
    return checkBoxing(references);
  }

  if(references.ques_type==="normal") {
    return normalSolutionTemplate();
  }

  else if(references.ques_type==="mcq") {
    return multipleChoiseSolutionTemplate(references);
  }

  else if(references.ques_type==="fib") {
    return fibSolutionTemplate(references);
  }

  else if(references.ques_type==="slot"){
    return boxSolutionTemplate(references);
  }

  else if(references.ques_type==="aws"){
    return awsSolutionTemplate(references);
  }
  else if(references.ques_type==="clock"){
    return clockSolutionTemplate(references);
  }
  else if(references.ques_type==="tape"){
    return tapSolutionTemplate(references);
  }
  else if(references.ques_type==="nbl" || references.ques_type==="numberline"){
    return nblSolutionTemplate(references);
  }
  else if(references.ques_type==="ss"){
    return ssSolutionTemplate(references);
  }
  else if(references.ques_type==="bg"){
    return bgSolutionTemplate(references);
  }
  else if(references.ques_type==="lp"){
    return lpSolutionTemplate(references);
  }
  else if(references.ques_type==="mcq/fib"){
    return mcqfibSolutionTemplate(references);
  }
}


app.post('/', (req, res)=>{
  const wrksheetName = (req.body.work_tmp_name).trim();
  const newwrksheetName = req.body.new_work_tmp_name ? (req.body.new_work_tmp_name).trim() : '';
  if(newwrksheetName.length>0){
    req.body.work_tmp_name = newwrksheetName;
  }
  const workSheets = JSON.parse(fs.readFileSync('public/xmls/worksheets.json'));
  if(workSheets[wrksheetName]){
    let problemTemp = problemTemplate(req.body),
        preWrkTemplate = JSON.parse(fs.readFileSync('public/xmls/'+wrksheetName+'.txt'));

    //ADD PROBLEM TO TEMPLATE
    preWrkTemplate.unshift(problemTemp);

    //ADD PROBLEM REF TO TEMPLATE
    for(let x=0; x<preWrkTemplate.length; x++){
      if(preWrkTemplate[x]['name']=='worksheet_tmpl'){
        preWrkTemplate[x]['children'].unshift(problemRefTemplate(req.body))
      }
    }
    //STORE NEW TEMPALTE
    fs.writeFileSync('public/xmls/'+wrksheetName+'.txt', JSON.stringify(preWrkTemplate))
    let d = jsontoxml(
      preWrkTemplate
    )
    res.send(XMLFormatter(`<xml>${d}</xml>`))
  }
  else {
    let data = [
        tutelageTempalte(req.body),
        problemTemplate(req.body),
        tutelageRefTempalte(),
        worksheetTempalte(req.body),
        worksheetRefTempalte(req.body)
    ]
    let xml = jsontoxml(data);
    workSheets[newwrksheetName] = newwrksheetName;
    fs.writeFileSync('public/xmls/worksheets.json', JSON.stringify(workSheets))
    fs.writeFileSync('public/xmls/'+newwrksheetName+'.txt', JSON.stringify(data))
    res.send(XMLFormatter(`<xml>${xml}</xml>`))
  }
});

function genrateConstrains(references){
  let conditions = `<constraints>`;
  for(let x of references.conditions){
    var encodedStr = x.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
      return '&#'+i.charCodeAt(0)+';';
    });
    conditions +=  `<cond>${encodedStr.toString()}</cond>`;
  }
  conditions += `</constraints>`;
  return conditions;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

let probRefsCollectionsStack = '';

function uploadXLSX(workbook, inputfiletoread){
 //    var workbook = XLSX.readFile(`public/xmls/${inputfiletoread}`);
	// var sheet_name_list = workbook.SheetNames;
	let xlsxJSON = XLSX.utils.sheet_to_json(workbook.Sheets[inputfiletoread], {defVal:""});
	let variableChecker = 0;
	var questionObj = {};
	var arrayOfTemplateIdsCols = [];
      questionObj['paramsArr'] = [];
      questionObj['prob_tmp_name'] = 'PR2064';
      questionObj['ques_txt'] = '';
      questionObj['ans_txt'] = '';
      questionObj['fib_conditions'] = [];
      questionObj['conditions'] = [];
      questionObj['boxing'] = [];
      questionObj['array'] = [];

  var fibCondition = [];
  var fibConditionRef = '';

      questionObj['slotLArray'] = [];
      questionObj['slotRArray'] = [];
      questionObj['slotLArraySolution'] = [];

      //bg
      questionObj['x_point'] = [];
      questionObj['y_value'] = [];

    //MCQ
  let mcqChioseCount = 1;
      questionObj['mcq_choises'] = [];


    //SUBQUESTION ARRAY
  let subQuestionArray = [];
  let subQuestionObj = {};
  console.log(xlsxJSON)
	for(let arrEle of xlsxJSON) {
    if (arrEle.col1 == 'Tutor ID' || arrEle.col1 == 'Problem ID') {
      questionObj['work_tmp_name'] = arrEle.col2;
      variableChecker = 1;
    }

    else if (arrEle.col1 == 'Conditions' || arrEle.col1 == 'Condition' || arrEle.col1 == 'Question') {
      variableChecker = 0;
    }

    if(arrEle.col1=='Problem ID'){
      if(arrEle.col2!==undefined)
      questionObj['prob_tmp_name'] = arrEle.col2;
    }

    if(arrEle.col1=='Conditions' || arrEle.col1=='Condition'){
      if(arrEle.col2!==undefined)
      questionObj['conditions'].push(arrEle.col2);
    }

    if(arrEle.col1=='Question'){
      if(arrEle.col2!==undefined){
        if(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(arrEle.col2)){
          arrEle.col3 = arrEle.col3 || '';
          questionObj['ques_txt'] += `<p><img src="${arrEle.col2}" width="100px" alt="${arrEle.col3}"/></p>`;
        }
        else {
          questionObj['ques_txt'] += `<p>${arrEle.col2}</p>`;
        }
      }
      // subQuestionObj['mcq_question'] = questionObj['ques_txt'];
    }

    if(arrEle.col1=='QuesType'){
      if(arrEle.col2!==undefined){
        questionObj['ques_type'] = arrEle.col2;
      }
    }

    if(arrEle.col1=='Answer stem' || arrEle.col1=='Answer Stem') {
      if(arrEle.col2!==undefined) {
        if(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(arrEle.col2)) {
          arrEle.col3 = arrEle.col3 || '';
          questionObj['ans_txt'] += `<p><img src="${arrEle.col2}" width="100px" alt="${arrEle.col3}"/></p>`;
        }
        else {
          questionObj['ans_txt'] += `<p>${arrEle.col2}</p>`;
        }
      }
    }

    if(arrEle.col1 && arrEle.col1.match('Choice') && arrEle.col1!=='Choice Answer' && arrEle.col2!==undefined){
      if(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(arrEle.col2)){
        arrEle.col3 = arrEle.col3 || '';
        questionObj['mcq_choises'].push(`<p><img src="${arrEle.col2}" width="100px" alt="${arrEle.col3}"/></p>`)
      }
      else {
        questionObj['mcq_choises'].push(arrEle.col2)
      }
      subQuestionObj['mcq_choises'] = questionObj['mcq_choises'];
    }

    if(arrEle.col1=='Choice Answer'){
    	if(arrEle.col2!=='' || arrEle.col2!==undefined){
    	   if(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(arrEle.col2)){
    	   	  arrEle.col3 = arrEle.col3 || '';
              questionObj['mcq_answer'] = `<p><img src="${arrEle.col2}" width="100px" alt="${arrEle.col3}"/></p>`;
    	   }else
    		 	  questionObj['mcq_answer'] = arrEle.col2;

    		   subQuestionObj['mcq_answer'] = questionObj['mcq_answer'];

    		   subQuestionArray.push(subQuestionObj);
    		   subQuestionObj = {};

             questionObj['mcq_answer'] = '';
             questionObj['mcq_choises'] = [];
            //  questionObj['ques_txt'] = '';
    	}
    }
    if(arrEle.col1=='MCQ Question'){
      if(arrEle.col2!=='' || arrEle.col2!==undefined)
      questionObj['mcq_question'] = `<p>${arrEle.col2}</p>`;
      console.log(questionObj.mcq_question, "aaaaaaaaaa")
    }
    if(arrEle.col1=='Boxing Group'){
      questionObj['boxing'][0] = arrEle.col2;
    }
    ;
    if(arrEle.col1 && /^Slot.*R$/i.test(arrEle.col1)){
      if(arrEle.col2!==undefined)
      questionObj['slotRArray'].push(arrEle.col2)
    }
    if(arrEle.col1 && /^Slot.*L$/i.test(arrEle.col1)){
      if(arrEle.col2!==undefined)
      questionObj['slotLArray'].push(arrEle.col2)
    }
    if(arrEle.col1 && /^Slot.*Answer$/i.test(arrEle.col1)){
      if(arrEle.col2!==undefined)
      questionObj['slotLArraySolution'].push(arrEle.col2)
    }
    if(arrEle.col1=='Boxing Size'){
      questionObj['boxing'][1] = arrEle.col2;
    }
    if(arrEle.col1=='Array Row'){
      questionObj['array'][0] = arrEle.col2;
    }
    if(arrEle.col1=='Array Column'){
      questionObj['array'][1] = arrEle.col2;
    }
    if(arrEle.col1=='Solution'){
      questionObj['solution'] = arrEle.col2;
    }
    if(arrEle.col1=='Symbol'){
      questionObj['symbol'] = arrEle.col2;
    }
    //aws
    if(arrEle.col1 && arrEle.col1=='Limit'){
      if(arrEle.col2!==undefined){
        questionObj['limit'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Count'){
      if(arrEle.col2!==undefined){
        questionObj['count'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Array Row'){
      if(arrEle.col2!==undefined){
        questionObj['array_row'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Array Column'){
      if(arrEle.col2!==undefined){
        questionObj['array_column'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Swap'){
      if(arrEle.col2!==undefined){
        questionObj['Swap'] = arrEle.col2;
      }
    }
    //clock
    if(arrEle.col1 && arrEle.col1=='Time'){
      if(arrEle.col2!==undefined){
        questionObj['time'] = arrEle.col2;
      }
    }
    //tape
    if(arrEle.col1 && arrEle.col1=='Tape'){
      if(arrEle.col2!==undefined){
        questionObj['tape'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Order'){
      if(arrEle.col2!==undefined){
        questionObj['order'] = arrEle.col2;
      }
    }
    //number line
    if(arrEle.col1 && arrEle.col1=='Start'){
      if(arrEle.col2!==undefined){
        questionObj['start'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='End'){
      if(arrEle.col2!==undefined){
        questionObj['end'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Interval'){
      if(arrEle.col2!==undefined){
        questionObj['interval'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Point_1'){
      if(arrEle.col2!==undefined){
        questionObj['point'] = arrEle.col2;
      }
    }
    //ss
    if(arrEle.col1 && arrEle.col1=='Shading refrence'){
      if(arrEle.col2!==undefined){
        questionObj['shading_ref'] = arrEle.col2;
      }
    }
    if (arrEle.col1 && arrEle.col1 == 'Shading answer'){
      if(arrEle.col2!==undefined){
        questionObj['shading_ref'] = arrEle.col2;
      }
    }
    //bg
    if(arrEle.col1 && arrEle.col1=='X axis title'){
      if(arrEle.col2!==undefined){
        questionObj['x_axis_title'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='X axis Start'){
      if(arrEle.col2!==undefined){
        questionObj['x_axis_start'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='X axis End'){
      if(arrEle.col2!==undefined){
        questionObj['x_axis_end'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='X axis Interval'){
      if(arrEle.col2!==undefined){
        questionObj['x_axis_interval'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Y axis title'){
      if(arrEle.col2!==undefined){
        questionObj['y_axis_title'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Y axis Start'){
      if(arrEle.col2!==undefined){
        questionObj['y_axis_start'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Y axis End'){
      if(arrEle.col2!==undefined){
        questionObj['y_axis_end'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='TA'){
      if(arrEle.col2!==undefined){
        questionObj['ta'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1=='Y axis Interval'){
      if(arrEle.col2!==undefined){
        questionObj['y_axis_interval'] = arrEle.col2;
      }
    }
    if(arrEle.col1 && arrEle.col1.match('X point')){
      if(arrEle.col2!==undefined){
        questionObj['x_point'].push(arrEle.col2)
      }
    }
    if(arrEle.col1 && arrEle.col1.match('Y value')){
      if(arrEle.col2!==undefined){
        questionObj['y_value'].push(arrEle.col2)
      }
    }
    if(arrEle.col1 && arrEle.col1.match('FIB_')){
      if(arrEle.col2!==undefined){
        let count = arrEle.col1.split('_')[1];
        fibConditionRef += `<cond><fib_ref name = "fib${count}"/>==${arrEle.col2}</cond>`;
        fibCondition.push(`<fib type="int" name = "fib${count}"/>`);
      }
    }
    if (variableChecker == 1 && arrEle.col1 !='Problem ID' && arrEle.col1!='Variable' && arrEle.col2!==undefined){
      questionObj['paramsArr'].push({
        key : arrEle.col1,
        value : arrEle.col2,
        type : arrEle.col3
      });
    }
  }


  questionObj['fib_conditions'].push(fibCondition);
  questionObj['fib_conditions'].push(fibConditionRef);

  questionObj['sub_questions'] = subQuestionArray;

  let data = [
    // tutelageTempalte(questionObj),
    problemTemplate(questionObj),
    //tutelageRefTempalte(),
    // worksheetTempalte(questionObj),
    // worksheetRefTempalte(questionObj)
  ]
  let xml = jsontoxml(data);
  probRefsCollectionsStack +=  worksheetTempalte(questionObj);
  return xml;
}



app.post('/upload-xlsx', (req, res)=>{
	new formidable.IncomingForm().parse(req)
	    .on('file', function(name, file) {
	        const tempPptFileName = uuidv4();
	        console.log(tempPptFileName)
            let xml = '';
           // XLSX.writeFile(file.path+'.xlsx', 'public/xmls/'+tempPptFileName);

			//let workbook = XLSX.readFile(`public/xmls/${file.name}`);
			let workbook = XLSX.readFile(`${file.path}`);
			let sheet_name_list = workbook.SheetNames;
                probRefsCollectionsStack = '';
			for(let x of sheet_name_list){
                xml += uploadXLSX(workbook, x);
			}
            let randonInt = Math.floor(Math.random() * 100);
        let workSheetCommnTemplate = `<worksheet_tmpl name = "WSAAAAAAAAAAAAAAAA">${probRefsCollectionsStack}</worksheet_tmpl><worksheet_ref name = "WSAAAAAAAAAAAAAAAA"/>`;

            // const xml = uploadXLSX(workbook, sheet_name_list[0]);
          //res.send(XMLFormatter(`<xml>${xml}${workSheetCommnTemplate}</xml>`)).
        xml = replaceAll(xml,`÷`,`&#247;`)
        xml = replaceAll(xml,`×`,`&#215;`)
	        res.send(`${xml}${workSheetCommnTemplate}`)
	    })
	    .on('field', function(name, field) {
	    	console.log(field);
	        console.log('Got a field:', field);
	    })
	    .on('error', function(err) {
	        next(err);
	    })
	    .on('end', function() {
	        res.end();
	    });
})


app.listen(CONFIG.port, (err)=>{
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', CONFIG.port)
})
