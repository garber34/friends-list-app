const buildFriendView =  require('./friendMaker.js');

const friendList = document.getElementById('friendList');



async function onPageLoad(){

 const result = await fetch('/api/friends');
 const friendArray=await result.json();
 console.log(friendArray);
  friendArray.forEach(friend => {
  attachToList(friend)
});

}
function attachToList(friend){
  const friendView=buildFriendView(friend)
  friendList.appendChild(friendView);
}

onPageLoad();
