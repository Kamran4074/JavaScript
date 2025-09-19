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

//way 5 async await

const promise5= new Promise(function(resolve,reject){
    let err=true;
    setTimeout(function(){
        if(!err){
            resolve('problem solved of Promise5')
        }
        else{
            reject('JS is not working')
        }
    },1000)
})
async function consumePromise5(){ //async await 
    try {
        const response=await promise5;
        console.log(response);
    } catch (error) {
        console.log('Error is: '+error);
    }
}
consumePromise5();

// async function getallusers(){
//     try {
//         const url='https://jsonplaceholder.typicode.com/todos'
//         const response=await fetch(url);
//         const data= await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error:'+error);
//     }
// }
// getallusers()

fetch('https://jsonplaceholder.typicode.com/todos')
.then(function(response){
    return response;
}).then(function(data){
    console.log(data);
}).catch((error)=>{
    console.log("Error");
})