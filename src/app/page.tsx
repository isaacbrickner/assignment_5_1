'use client'
import Image from "next/image";
import MyForm from "../components/myForm"
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {

const [entries, setEntries] = useState<{name: string, language:string, comment:string}[]>([]);

function addEntry(entry: {name: string, language:string, comment:string}){
  setEntries([...entries, entry]);
}

useEffect(()=>{
  console.log(entries)
})

  return (
    <main>
    <h1>hello</h1>
      <MyForm addEntry={addEntry}/> 
    </main>
  );
}
