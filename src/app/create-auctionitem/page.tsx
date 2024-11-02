"use client"
import React, { FormEvent } from "react"
import { CreateAutionItem } from "./createAuctionItem"


export default function lagAkusjonItem() {
    function test(e:FormData){
        console.log(e.get("name"))
    }

    return (
        <form action={test}>
            <label>
                Navn
                <input name="name"></input>
            </label>
            <button type="submit">Send inn</button>
        </form>
    )
}