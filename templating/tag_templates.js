function tag(strings, take, skip) {
    console.log(strings); //http://dmain.com/users?take=
    console.log(take); //take=20
    console.log(skip); //skip = 0;

}

const take = 20;
const skip = 0;
tag`http://dmain.com/users?take=${take}&skip=${skip}`;