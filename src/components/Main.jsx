import React, { memo, useEffect } from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import convert from "../assets/images/convert.png";
import copyIcon from "../assets/images/copy.png";
import ToggleButtons from './ToggleButtons';
import "../css/Main.css"

const Main = ()=> {

  const [alignment, setAlignment] = useState('kril-lotin');
  const [defaultPlaceholder,setDefaultPlaceholder] = useState("Matnni kiriting...")
  const [copy,setCopy] = useState(false);  
  let a = {}, b = {};

  a["Ё"]="Yo";a["Й"]="I";a["Ц"]="Ts";a["У"]="U";a["К"]="K";a["Е"]="E";a["Н"]="N";a["Г"]="G";a["Ш"]="Sh";a["Щ"]="Sch";a["З"]="Z";a["Х"]="H";a["Ъ"]="'";
  a["ё"]="yo";a["й"]="i";a["ц"]="ts";a["у"]="u";a["к"]="k";a["е"]="e";a["н"]="n";a["г"]="g";a["ш"]="sh";a["щ"]="sch";a["з"]="z";a["х"]="h";a["ъ"]="'";
  a["Ф"]="F";a["Ы"]="I";a["В"]="V";a["А"]="A";a["П"]="P";a["Р"]="R";a["О"]="O";a["Л"]="L";a["Д"]="D";a["Ж"]="J";a["Э"]="E";
  a["ф"]="f";a["ы"]="i";a["в"]="v";a["а"]="a";a["п"]="p";a["р"]="r";a["о"]="o";a["л"]="l";a["д"]="d";a["ж"]="j";a["э"]="e";
  a["Я"]="Ya";a["Ч"]="Ch";a["С"]="S";a["М"]="M";a["И"]="I";a["Т"]="T";a["Ь"]="'";a["Б"]="B";a["Ю"]="Yu";
  a["я"]="ya";a["ч"]="ch";a["с"]="s";a["м"]="m";a["и"]="i";a["т"]="t";a["ь"]="'";a["б"]="b";a["ю"]="yu";
  a["қ"] = "q"; a["Қ"] = "Q";a["ҳ"] = "h"; a["Ҳ"] = "H"; a["ў"] = "o'"; a["Ў"] = "O'";
  a["й"] = "y"; a["Й"] = "Y";a["Ғ"] = "G'"; a["ғ"] = "g'";

  b["Yo"]="Ё";b["I"]="Й";b["Ts"]="Ц";b["U"]="У";b["K"]="К";b["E"]="Е";b["N"]="Н";b["G"]="Г";b["Sh"]="Ш";b["Sch"]="Щ";b["Z"]="З";b["H"]="Х";b["’"]="Ъ";
  b["yo"]="ё";b["i"]="й";b["ts"]="ц";b["u"]="у";b["k"]="к";b["e"]="е";b["n"]="н";b["g"]="г";b["sh"]="ш";b["sch"]="щ";b["z"]="з";b["h"]="х";b["’"]="ъ";
  b["F"]="Ф";b["I"]="Ы";b["V"]="В";b["A"]="А";b["P"]="П";b["R"]="Р";b["O"]="О";b["L"]="Л";b["D"]="Д";b["J"]="Ж";//b["E"]="Э";
  b["f"]="ф";b["i"]="ы";b["v"]="в";b["a"]="а";b["p"]="п";b["r"]="р";b["o"]="о";b["l"]="л";b["d"]="д";b["j"]="ж";//b["e"]="э";
  b["Ya"]="Я";b["Ch"]="Ч";b["S"]="С";b["M"]="М";b["I"]="И";b["T"]="Т";b["'"]="Ъ";b["B"]="Б";b["Yu"]="Ю"; b["Sch"] = "Сч";
  b["ya"]="я";b["ch"]="ч";b["s"]="с";b["m"]="м";b["i"]="и";b["t"]="т";b["'"]="ъ";b["b"]="б";b["yu"]="ю"; b["sch"] = "сч" 
  b["q"] = "қ";b["Q"] = "Қ";b["h"] = "ҳ"; b["H"] = "Ҳ"; b["o'"] = "ў"; b["O'"] = "Ў";
  b["y"] = "й";b["Y"] = "Й";b["G'"] = "Ғ"; b["g'"] = "ғ";
  b["Ye"] = "Е"; b["ye"] = "е";

  useEffect(()=>{
    if(alignment === "kril-lotin")  
        setDefaultPlaceholder("Матнни киритинг...")
    else
        setDefaultPlaceholder("Matnni kiriting...");
  },[alignment]);

  const getResult = () =>{
    try{
      const text = document.getElementById("words").value;
      let result = document.getElementById("result");
      let answer = "";        
      let i = 0;

      if(alignment === "kril-lotin"){      
              
        let char = "";
        for(i = 0; i < text.length; i++){
          char = text[i];
          if(text[i] !== undefined && (text[i] === "Ё" 
          || text[i] === "Ц" || text[i] === "Ш" 
          || text[i] === "Щ" || text[i] === "Я"
          || text[i] === "Ч" || text[i] === "Ч"
          || text[i] === "Ю")){
            if( (i > 0 && (text[i-1] === undefined || text[i-1] === text[i-1].toUpperCase())) 
            || (i < text.length-1 && (text[i+1] === undefined || text[i+1] === text[i+1].toUpperCase()))){
              answer += a[char].toUpperCase();
            }else{
              answer += a[char];
            }
          }else if((text[i] === 'Е' || text[i] === 'е') ){  
            console.log('true')
            //&& ((i === 0) || (i > 0 && text[i-1] === undefined))
            answer += text[i] === 'Е' ? 'Ye' : 'ye';
          }
          else{
            answer += (a[char] || char)
          }
        }
      }else{
        let char = "";
        for(i = 0; i < text.length; i++){
          char = text[i];
          if((char === "Y" || char === "y") && i < text.length-1 && (text[i+1] === "o" || text[i+1] === "O")){
            char += "o";
            i++;
          }
          else if((char === "Y" || char === "y") && i < text.length-1 && (text[i+1] === "a" || text[i+1] === "A")){
            char += "a";
            i++;
          }
          else if((char === "Y" || char === "y") && i < text.length-1 && (text[i+1] === "e" || text[i+1] === "E")){
            char += "e";
            i++;
          }
          else if((char === "Y" || char === "y") && i < text.length-1 && (text[i+1] === "u" || text[i+1] === "U")){
            char += "u";
            i++;
          }
          else if((char === "S" || char === "s") && i < text.length-1 && (text[i+1] === "h" || text[i+1] === "H")){
            char += "h";
            i++;          
          }
          else if((char === "S" || char === "s") && i < text.length-2 && (text[i+1] === "c" || text[i+1] === "C") && (text[i+2] === "h" || text[i+2] === "H")){
            char += "ch" 
            i += 2;
          }
          else if((char === "C" || char === "c") && i < text.length-1 && (text[i+1] === "h" || text[i+1] === "H")){
            char += "h";
            i++;
          }
          else if((char === "O" || char === "o") && i < text.length-1 && (text[i+1] === "'" || text[i+1] === "‘" || text[i+1] === "’") ){
            char += "'";
            i++;
          }
          else if((char === "G" || char === "g") && i < text.length-1 && (text[i+1] === "'" || text[i+1] === "‘" || text[i+1] === "’")){
            char += "'";
            i++;
          }
          else if(char === "E" || char === "e"){
            if((text[i-1] === " " || b[text[i-1]] === undefined) && !((text[i-1] >= "a" && text[i-1] <= "z") || (text[i-1] >= "A" && text[i-1] <= "Z"))){
              char = text[i] === "E" ? "Э" : "э";
            }         
          }
          else if(char === "'" || char === "’"){
            if( (i > 0 && (text[i-1] === undefined || text[i-1] === text[i-1].toUpperCase())) 
            || (i < text.length-1 && (text[i+1] === undefined || text[i+1] === text[i+1].toUpperCase()))){
              answer += b[char].toUpperCase();
            }else{
              answer += b[char];
            }
            continue;
          }
          
          answer += (b[char] || char);
        }
      }

    result.value = answer;
    }
    catch(e){
      console.log(e);
    }

  }

  const copyResult = () =>{
    try{
      let copyText = document.getElementById("result");     
      navigator.clipboard.writeText(copyText.value);      
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      },700);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <section id="main-section" className="main-section">
        <div className="container">
            <div className="flex">
                <ToggleButtons alignment={alignment} setAlignment={setAlignment}/>
                <textarea id="words" placeholder={defaultPlaceholder} maxLength={100000} rows={15} cols={50}/>                
                <Button variant="contained" onClick={getResult}>Convert <img className="btn-icon" src={convert} alt="logo"/> </Button>
                <div className="wrapper">
                  <button className="copy-btn" onClick={copyResult}>{copy ? "Nusxalandi" : ""} <img src={copyIcon} alt="copy"/> </button> 
                  <textarea id="result" maxLength={100000} rows={15} cols={50} placeholder={defaultPlaceholder === "Matnni kiriting..." ? "Натижа : Крилча матн" : "Natija : Lotincha matn"}/>
                </div>
            </div>
        </div>
    </section>    
  )
}
export default memo(Main);
