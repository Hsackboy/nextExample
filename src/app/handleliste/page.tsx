"use client"
import React, { ChangeEvent, useState, createElement } from 'react';
import './App.css';


function LeggTilKnapp({ vare, setVare, vareListe, setVareListe }: { vare: string, setVare: (str: string) => any, vareListe: any[], setVareListe: (liste: any[]) => any }) {
  function addToList() {
    if (vare != "") {
      let nyListe = vareListe
      nyListe.push(vare)
      setVareListe(nyListe)
      localStorage.vareListe = JSON.stringify(nyListe)
      console.log(localStorage.vareListe)
    }
    setVare("")
  }

  return (
    <button onClick={addToList}>Legg til</button>
  );
}




function ClearCookiesKnapp({ setNavn, setVareListe }: { setNavn: (str: string) => any, setVareListe: (liste: any) => any }) {
  function clearCookieFunc() {
    localStorage.clear()
    localStorage.name = prompt("Hva er navnet Ditt?")
    setNavn(localStorage.name)
    setVareListe([])
  }
  return (
    <button onClick={clearCookieFunc}>Clear cookies</button>
  )
}



function buttonHandler({e, vare, setVare, vareListe, setVareListe }: {e: React.KeyboardEvent<HTMLElement> , vare: string, setVare: (str: string) => any, vareListe: any[], setVareListe: (liste: any[]) => any }) {
  function addToList() {
    if (vare != "") {
      let nyListe = vareListe
      nyListe.push(vare)
      setVareListe(nyListe)
      localStorage.vareListe = JSON.stringify(nyListe)
      console.log(localStorage.vareListe)
    }
    setVare("")
  }  
  
  
  
  if(e.key == "Enter"){
      addToList()
  }
}

function HandleListeEl({ vareListe, setVareListe }: { vareListe: any, setVareListe: (liste: any) => any }) {


  function removeItemlist(e: ChangeEvent<HTMLInputElement>, index: number) {
    let nyListe = vareListe.slice()
    nyListe.splice(index, 1)
    setVareListe(nyListe)
    localStorage.vareListe = JSON.stringify(nyListe)
    // setVareListe((liste: any) => {
    //   liste.splice(index, 1)
    // localStorage.vareListe = JSON.stringify(liste)
    //   return [...liste];
    // })
    e.target.checked = false;
  }

  return (
    <div id="listeDiv">
      {vareListe.map((vare: string, index: number) => (
        <div key={index}>
          <div className="vareListeClass" >
            <p  className='vareTittel'>{vare}</p>
            <div className="vareCheckbox">
              <input  className='check' onChange={e => removeItemlist(e, index)} type="checkbox" id={index.toString()} ></input>
            </div>
          </div>
          
          {(index+1)!=vareListe.length && <hr className='vareDeler'></hr>}
        
        </div>
      ))
      }
    </div>
  )


}


const updateState = (e: ChangeEvent<HTMLInputElement>, func: (str: string) => any) => {
  func(e.target.value)
}

function App() {
  const [vare, setVare] = useState("")
  const [navn, setNavn] = useState(localStorage.name)



  if (!localStorage.name || localStorage.name == "None") {
    localStorage.name = prompt("Hva er navnet ditt?")
    setNavn(localStorage.name)
  }

  if (!localStorage.vareListe) {
    localStorage.vareListe = JSON.stringify([])
  }
  const [vareListe, setVareListe] = useState(JSON.parse(localStorage.vareListe))


  return (
    <div id="mainDiv" onKeyDown={e => buttonHandler({e,vare,setVare,vareListe,setVareListe})} tabIndex={0}>
      <div id="handleListeDiv">
        <h1 id='title'>{navn}s episke handleliste</h1>
        <div id="inputFeild">
          <input type='text' placeholder='Skriv inn vare' onChange={e => updateState(e, setVare)} value={vare} tabIndex={0}></input>
          <LeggTilKnapp vare={vare} setVare={setVare} vareListe={vareListe} setVareListe={setVareListe} />

        </div>
        <HandleListeEl setVareListe={setVareListe} vareListe={vareListe}></HandleListeEl>
        <ClearCookiesKnapp setNavn={setNavn} setVareListe={setVareListe}></ClearCookiesKnapp>
      </div>
    </div>
  );
}

export default App;
