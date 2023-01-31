function makeFriendsList(friends) {
  const wrapperListFriends = document.createElement('ul');


  for(let i = 0; i < friends.length; i++){
    const friendsList = document.createElement('li');

    wrapperListFriends.append(friendsList);

    friendsList.textContent = `${friends[i].firstName} ${friends[i].lastName}`
  }
  
  
  return wrapperListFriends
}
