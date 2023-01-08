let btns = document.querySelectorAll(".btn");
let display = document.getElementById("display");
let content = "";

Array.from(btns).forEach((btn)=>{
    // display.readonly=false

    btn.addEventListener('click',(event)=>{
        if(event.target.value == "AC"){
        content="";
        display.value = content;
        }
        else if(event.target.value == "="){
            content = eval(content);  
            display.value = content;  
        }
        // console.log(e.target)
        else{
            content = content + event.target.value;
            display.value = content;
        }
    })
})