//exercise1
/*superHeroes = [["Batman", "Bruce Wayne"], ["Spiderman","Peter Parker"],["The Flash", "Barry Allen"]];

var secretIdentity = superHeroes.map(
    function (revealArray){
        return revealArray.join(" is ");

    }
);
console.log(secretIdentity.join());;*/

//exercise 2

var players =[{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns:32}, 
{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns:0}, 
{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns:12}, 
{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns:8}, 
{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns:3}, 
{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns:9}, 
{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns:2}];

var name = players.find(function(players){
    return players.firstName === 'Mike';
}); 
console.log(name);

var position = players.filter(function(players){
    return (players.position) === 'RB';
}); 
console.log(position);

var lastNames = players.map(function(players){return players.lastName;});
console.log(lastNames);

var rb5 = players.filter(function(players){return players.position== 'RB' && players.touchdowns >5}).map(function(players){return players.firstName + ' ' +players.lastName});
console.log(rb5);

var totalTouchdowns = players.filter(function(players){
    return players.position =='RB' }).reduce(function(sum, players){return sum+players.touchdowns},0);
console.log(totalTouchdowns);

//other option
