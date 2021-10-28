const items = [
    { id: 1, categoria: 'filtros' ,foto:'/img/220008208078.jpg' , name: "Filtro Bajak NS500", age: 37, precio: 45000, descripcion: "Filtro para el motor de arranque" },
    { id: 2, categoria: 'cadenas' ,foto:'/img/2010001201101.jpg' , name: "Cadena Dorada ", age: 27, precio: 200000, descripcion: "Todo es mejor cada día de tu mano Señor" },
    { id: 3, categoria: 'kits' ,foto:'/img/2010013201136.jpg' , name: "ana", age: 40, precio: 15000, descripcion: "Todo es mejor cada día de tu mano Señor" },
    { id: 4, categoria: 'kits' ,foto:'/img/2010013201502.jpg' , name: "sofia", age: 55, precio: 15000, descripcion: "Todo es mejor cada día de tu mano Señor" },
    { id: 5, categoria: 'filtros' ,foto:'/img/220008208078.jpg' , name: "victoria", age: 11, precio: 15000, descripcion: "Todo es mejor cada día de tu mano Señor" },
    { id: 6, categoria: 'cadenas' ,foto:'/img/2010001201122.jpg' , name: "federico", age: 19, precio: 15000, descripcion: "Todo es mejor cada día de tu mano Señor" },
    { id: 7, categoria: 'cadenas' ,foto:'/img/2010001300104.jpg' , name: "pepe", age: 2, precio: 15000, descripcion: "Todo es mejor cada día de tu mano Señor" },
    { id: 8, categoria: 'cadenas' ,foto:'/img/2010002201202.jpg' , name: "Ping de Cadena", age: 2, precio: 20000, descripcion: "Todo es mejor cada día de tu mano Señor" },
    { id: 9, categoria: 'cadenas' ,foto:'/img/2010002201211.jpg' , name: "Ping de Cadena", age: 2, precio: 20000, descripcion: "Todo es mejor cada día de tu mano Señor" }
  ];

export const getFetch = new Promise((resolve)=>{
   
        setTimeout(()=>{
            resolve(items)
        }, 2000)  
    
})







// const persona = { id: 7, foto:'data:image/jpeg;base64,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' , name: "pepe", age: 2, precio: 15000, descripcion: "Todo es mejor cada día de tu mano Señor" }

// export const getFetchUno = new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(persona)
//         }, 2000)  
    
// })
