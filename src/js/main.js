// let array1=[1,2,2,3,3,4,4,5,5,4,2,5,1,6]
// let array2=[]

// if (array2.length==0){
//     array2.push(array1[0])
// }
// for (let i=0; i<array2.length; i++){
    
//     for (let j=0; j<array1.length; j++){
//         if (array1[j]!=array2[i]){
//            array2.push(array1[j]);
//            console.log(array2)
//             break

           
//     }
    
// }}

// console.log(array2)

console.group(`Map
map -> el map permite retornar element a diferencia del for each es decir recorer un array con la posicbilidad de retornar uno nuevo
`)
const array1=["lucas", "pablo", "maria", "pedro"]

let array2=[]


// array2=array1.map(nombre =>{
//     return nombre.toUpperCase()

// })

// console.log(array2)
// array2= array1.map(function (nombre){return nombre.toUpperCase()})

// array2=array1.map(nombre=> nombre.toUpperCase())
// console.log(array2)


array1.forEach(nombre => {
    array2.push(nombre.toUpperCase())
});

console.log(array2)
console.groupEnd()


// Reverse y toReversed

console.groupCollapsed(`Reverse y toReversed
Reverse: modifica la lista u objeto original
ToReversed: modifica momentaneamente la lista u objeto original

`)

const alphabet = ["A", "B", "C", "D", "E", "F"]
console.log(alphabet)
console.log(alphabet.reverse()) // Pone
console.log(alphabet)
const alphabetInvertido=alphabet.toReversed()

console.log(alphabetInvertido)



let alfabetoMilitar = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
    "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
    "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
    "Yankee", "Zulu"
];

console.log(alfabetoMilitar.toReversed()) 
console.log(alfabetoMilitar.reverse()) 

console.groupEnd()

console.groupCollapsed(`Sort
Sort: modifica la lista u objeto original
ToSorted: modifica momentaneamente la lista u objeto original
`)

let nombresCoders =[
    "santiago",
    "reycon",
    "narciris",
    "pablo",
    "ana",
    "ignacia",
    "carolina",
    "marlon",
    "brandon",
    "edson",
    "esteban",
    "carlos",
    "shirly"
]

let codersOrdenados=nombresCoders.toSorted().toReversed()
console.table(nombresCoders)
console.table(codersOrdenados)


let superMercadoLista = [
    "Arroz",
    "Carne",
    "Lentejas",
    "Sal",
    "Azucar",
    "Bananos",
    "Pan",
    "Aceite",
    "Tomate",
    "Cebolla",
    "Mantequilla",
    "Leche"
]

console.table(superMercadoLista.toSorted())
console.table(superMercadoLista.toSorted().toReversed())

console.groupEnd()


console.group("Filter")
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let numerosPares=numeros.filter(function(numero){
    
    return numero%2==0
})

console.log(numerosPares)

let nombresCodersA=nombresCoders.filter(function(nombres){
    return nombres[0]=="a" || nombres[0]=="e"||nombres[0]=="i" || nombres[0]=="o"||nombres[0]=="u"
})
console.log(nombresCodersA)


let nombresCodersB=nombresCoders.filter(function(nombres){
    return nombres[0]!=="a" && nombres[0]!=="e" && nombres[0]!=="i" && nombres[0]!=="o" && nombres[0]!="u"
})
console.log(nombresCodersB)

let nombresVocales=nombresCoders.filter(function(nombre){
    if(nombre.startsWith("a")||
    nombre.startsWith("e")||
    nombre.startsWith("i")||
    nombre.startsWith("o")||
    nombre.startsWith("u"))
    return nombresCoders
})

console.log(nombresVocales)

console.groupEnd()

console.group("Every")

let numerosNaturales= [23,55,44,3,5,3,2]

const respuesta=numerosNaturales.every(element => element>0)

const respuesta2=numerosNaturales.some(element => element)


console.log(respuesta) // si todos cumplen una funcion da True

console.log(respuesta2) // Si al menos uno cumple la funcion da True

console.groupEnd()