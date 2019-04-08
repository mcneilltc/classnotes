/*
const lion ={
    roar: function(){ console.log('roar')},
    thing: function(){console.log("stuff")}
}
const goat ={
kick: function(){console.log('kick')}
}
const lizard ={
    tail: true
}

const
Object.assign(chimera, lion, goat, lizard);
chimera.roar();
chimera.kick();
chimera.thing();
chimera.tail;
*/
//Real World example:

//const baseConfig ={
//    appName: "Slick",
//    apiKey:"secretPAssword",
//    apiBaseUrl: "http://slickapp.co/api/"
//};
//const localConfig =Object.assign({}, baseConfig, {
//    apiKey: "localPassword",
//    apiBaseUrl: "http://localhost:2000/api"
//});
//console.log(localConfig.appName, localConfig.apiBaseUrl);

/*Create a user profile object that contains properties for
name
address
city
state
zipcode
avatar
Write a function getProfileUpdate() that hypothetically asks the user to update some profile properties and returns information about which properties were changed, and to what values.(for now, just hard code the return value)
Write a function updateProfile() that takes a single object of keys:values and overwrites those keys on the profile object
Get a profile update and update the profile with it.
log the new profile*/

const profile={
    name: ('Tiquila'),
    address:('123 Lane'),
    city: ('Charlotte'),
    state: ('NC'),
    zipcode: ('28269'),
    avatar: ('avatar1')
};
//console.log(profile);
const getProfileUpdate = Object.assign({}, profile, {
    address:(' moved'),
    city:(' to a city'),
    state: ('in a state'),
    zipcode: ('that does not have a zipcode'),
    avatar: ('avatar2')
});
//console.log(getProfileUpdate);

const updateProfile =Object.assign({}, profile, getProfileUpdate, {
    name: ('I')
});
console.log(updateProfile);