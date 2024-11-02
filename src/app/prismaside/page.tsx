"use server"
import React from 'react';
import { prisma } from '../prisma';



async function App() {
  
  // await prisma.auksjonsObjekt.create({
  //   data: {
  //     approved: true,
  //     autorId: 2,
  //     autorName: "Fredrik",
  //     description: "Huset mitt, det er veldig pent",
  //     pris: 10,
  //     lastSellTime:new Date("2022-03-25"),
  //     sistBud:new Date("2022-03-25")

  //   }
  // })
  
  const auctionItems = await prisma.auksjonsObjekt.findMany()



  return (
    <div id="mainDiv">

      {auctionItems.map(item => <p id=''>{item.description} : {item.pris}kr</p>)}

    </div>
  );
}

export default App;
