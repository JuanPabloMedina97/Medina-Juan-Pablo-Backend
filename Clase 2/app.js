 const fs = require("fs");

// // fs.writeFileSync("./ejemplo.txt", "Hola mundo"); //crea un archivo, tambien si hay uno con el mismo nombre lo sobreescribe
// // const data = fs.readFileSync("./ejemplo.txt", "utf-8"); //lee el archivo 
// // fs.appendFileSync("./ejemplo.txt", `\n esto es un agregado`);

// // console.log(data)

// //modo sincronico
// try {
//     const date = new Date()
//     const data = fs.writeFileSync("./ejemplo.txt", date.toString()); //crea archivo
//     console.log(fs.readFileSync("./ejemplo.txt", "utf-8")) //lee archivo y muestra por consola
// } catch (error) {
//     console.log(error)
// }


const ruta = "./package.json";
const stat = fs.statSync(ruta);
fs.readFile(ruta, "utf-8", (error, contenido)=>{
    if(error) throw new Error(`No se puede leer el archivo: ${error.message}`);

    const info = {
        contenidoStr: JSON.stringify(contenido),
        contenidoObj: JSON.parse(contenido),
        size: `${stat.size}`
    };
    console.log(info);

    fs.writeFile("info.txt", JSON.stringify(info, null, 2), (error)=>{
        if(error){
            console.log(error);
            throw new Error(error.message);
        }
        console.log("archivo creado");
    })
})


const leerAA = async ()=>{

    try {
        console.log(await fs.promises.readFile("./ejemplo.txt", "utf-8"));
    } catch (error) {
        console.log(error)
    }
}

leerAA();