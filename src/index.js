import podcasts from "./data.js";

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data) {
  const items = [];
  const arr = data.reduce((list, curr) => {
    return list.concat(curr.hosts)
  }, []);
  return arr
}

function assignAwards(data) {
  function getRandomInt() {
    return Math.floor(Math.random() * awards.length);
  }
  const hosts = getHosts(data)
  const awardsList = []
  hosts.forEach(host => {
    const rand = getRandomInt()
    awardsList.push(awards[rand] + " " + host)
  });
  return awardsList

}

console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));
