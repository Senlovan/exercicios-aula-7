/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

// Matheus Nachtergaele , Virginia Cavendish , Globo 14h


/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/


// a : juca, 3, srd      b : juba , 3 , srd   c : Jubo , 3 , SRD
// A sintexe de 3 pontos faz a copia de um array






/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/
// backender:false  
//altura: undefined
// foi impresso isso pois o usuario esta pedindo pro console imprimir uma variavel que não esta definida







const pessoa = {
    nome: "José",
    apelidos: ["Piadista","Josefino","Jaré",]

}
function inforcacoesPessoais(objeto){
    console.log (`Eu Sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos}`)
return objeto
}

inforcacoesPessoais(pessoa)

const pessoa2 = {
    ...pessoa,
    apelidos:["Josnel","Mané","Jorel"]
}

inforcacoesPessoais(pessoa2)












