


let party = [    {
    name: 'Joline',
    hitpoints: 15,
    belongings: ["spear", "bread", "Tums"],
    companion: {
        name: "Tabby",
        type: "cat",
    }
},
{
    name: 'Timothy',
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
    }
},
{
    name: 'Sarah',
    hitpoints: 20,
    belongings: ["bow", "arrows", "wood"],
    companion: {
        name: "Tony",
        type: "tiger",
    }
},]

console.log(party)
console.log("updating hitpoints")

party.forEach((el) => {
el.hitpoints = el.hitpoints *2
});
console.log(party)

//hp for party has been doubled

console.log("Timothy has taken damage")

const takeDamage = ( name , hp) => {

party.forEach((item) =>{

if (name == item.name) {
item.hitpoints = item.hitpoints - hp


}}               
)}
takeDamage("Timothy" , 5)
console.log(party)


//timothy hp has been updated to 15

console.log("sarahs companion has been turned into a jellyfish")

party.forEach(el => {

if (el.name == "Sarah"){
el.companion.type = "jellyfish"}


})
console.log(party[2])
//changed sarahs companion type


const drinkPotion = (name , hp) => {

party.forEach((member) => {

if ( member.name == "Timothy") {
member.belongings.splice( 1 , 1)
member.hitpoints = member.hitpoints + hp
console.log("Timothy has drank his only potion!")
}})
}

drinkPotion("Timothy" , 20)
console.log(party[1])
// timothy has drank his potion and gained 20 hp 

party.forEach((member) => {

if (member.name == "Joline" ){

member.belongings.splice( 1,1)

}
if (member.name == "Timothy"){

member.belongings.push("bread")

}
})
console.log(party)
console.log("Timothy was hungry and store bread from Joline")
//Moved bread to Timothys belongings and removed from Joline

party.forEach((joline) => {

if (joline.name == "Joline"){

party.splice(0,1)
}

})
console.log(party)
console.log("Joline has left the party.")
//removed joline w function

let recruitmentDaniel = {name: 'Daniel',
hitpoints: 10,
belongings: ["crystal", "water", "wood"],
companion: {
name: "lemon",
type: "bat"}}


party.push(recruitmentDaniel);

console.log(party);
console.log("daniel has been recruited to the party")
//daniel is a new recruit to the party

party.forEach ((el) => {
el.gold = ~~(100/3);
});
console.log(party)
//the party has split evenly their newly found gold 
console.log("the team has split 200 evenly")

party.forEach(el => {

if (el.name == "Sarah"){
el.companion.type = "bear"
el.gold = el.gold -10
}
})
console.log(party[1])
console.log("sarah has paid 10 gold to change her companion to a bear")
//change compantion type for sarah

party.forEach(el => {

if (el.name == "Timothy"){
el.belongings[0] = "rusty sword"
}
})
console.log(party[0])
console.log("timothys sword has become rusty")
//change timothys sword to rusty sword

party.forEach ((setLeader) => {
setLeader.leader = false;
if (setLeader.name == "Timothy"){
setLeader.leader = true}
});
console.log(party)
//timothy has been made leader of the group
