const buttons= document.querySelectorAll('.button');
const body= document.querySelector('body');
// or const body= document.body;

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        console.log(e); // to see the event object
        // console.log(e.target); // to see which button is clicked
        // console.log(e.target.classList); // to see the class list of clicked button
        console.log(e.target);

        const color=e.target.id;
        switch (color) {
      case "red":
        body.style.backgroundColor = "red";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "gray":
        body.style.backgroundColor = "gray";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      default:
        body.style.backgroundColor = "#212121";
        }
        // if(e.target.id==="red"){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id==="yellow"){
        //     body.style.backgroundColor = e.target.id;

        // }
        // else if(e.target.id==="gray"){
        //     body.style.backgroundColor= e.target.id;
        // }
        // else if(e.target.id==="blue"){
        //     body.style.backgroundColor = e.target.id;
        // }
    });
})