const promise1= new Promise(function(resolve,reject){
    // Simulate async operation using setTimeout
    setTimeout(function(){
        console.log('Promise1 Executed');
        resolve();
    })
});
promise1.then(function(){
    console.log('Promise1 Consumed');
})

//2nd way
new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log('Promise2 Executed');
        resolve();
    },1000)
}).then(function(){
    console.log('Promise2 Consumed');
})

//way 3 passing parameters
const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({Name:"Kamran", email:"Kammykamran0093@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

//way4 
const promise4= new Promise(function(resolve,reject){
    let error=false;
    setTimeout(function(){
        if(!error){
            resolve({Name:'shardul',email:'Shardulv@gmail.com'});
        }
        else{
            reject("Error");
        }
    },1000)
})
promise4.then(function(user){
        console.log(user);
        return user.Name;
    }).then(function(username){ //chaining
        console.log(username);
    }).catch(function(err){
        console.log(err);
    }).finally(function(){
        console.log("This will always Execute");
    })
