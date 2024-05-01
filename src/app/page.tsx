'use client'
import Image from "next/image";
import MyForm from "../components/myForm"
import { useState } from "react";
import { useEffect } from "react";
import MyTable from "../components/myTable";

export default function Home() {

const [entries, setEntries] = useState<{name: string, language:string, comment:string}[]>([]);

function addEntry(entry: {name: string, language:string, comment:string, rating: number}){
  setEntries([...entries, entry]);
}

function deleteEntry(index: number){
    setEntries(entries.filter((value, i) => i !== index))
  }

useEffect(()=>{
  console.log(entries)
},[entries])

  return (
    <main>
    <h1>hello</h1>
      <MyForm addEntry={addEntry}/> 
      <MyTable entry={entries} deleteEntry={deleteEntry}></MyTable>
    </main>
  );
}
