import podcasts from "./data.js";

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

function createDescriptionsFor(data){
   const array = data.map((podcast) => {
    let hostInfo = ""
    if(Array.isArray(podcast.hosts)) {
      if(podcast.hosts.length === 1) {
        hostInfo = podcast.hosts
      } else if(podcast.hosts.length === 2) {
          hostInfo = podcast.hosts[0] + " and " + podcast.hosts[1]
      } else if(podcast.hosts.length > 1) {
        for(let i=0; i<podcast.hosts.length-1; i++) {
          hostInfo += podcast.hosts[i] + ", "
        }
        hostInfo += "and " + podcast.hosts[podcast.hosts.length-1]

      }
    } 


    const description = `${podcast.title} is a ${podcast.duration} minute ${podcast.genre} podcast hosted by ${hostInfo}.` 
    console.log('description: ', description)
    podcast.description = description
    return podcast
   })
   return array
}

console.log(createDescriptionsFor(podcasts))
