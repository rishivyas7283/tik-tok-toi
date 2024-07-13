let boxes= document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newbtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg")


let turno= true
const win=[
[0,1,2],
[0,2,3],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    
        console.log("clicked")
        if(turno){
            box.innerHTML="O"
            turno=false
            
        }
        else{
            box.innerHTML="X"
            turno=true

        }
        box.disabled=true
        checkwinner()


    })
    
   
    const disabledboxes=()=>{
        boxes.forEach((box)=>{
            box.disabled=true
            })
        }
        
    const enableboxes=()=>{
        boxes.forEach((box)=>{
            box.disabled=false
            box.innerText=""
            })

        }
    const showWinner = (winner) => {
        msg.innerText = `congratulation, winner is ${winner}`;
        disabledboxes()
       msgcontainer.classList.remove("hide");
      }

    const checkwinner = () => {
        for(let pattern of win){
            let value1 =boxes[pattern[0]].innerText
            let value2 =boxes[pattern[1]].innerText
            let value3 =boxes[pattern[2]].innerText

            if(value1 !="" && value2 !="" && value3 !=""){
                if(value1 === value2 && value2 === value3){
                    disabledboxes()
                    showWinner(value1)
                    console.log("winnner",value1)
                    
                }
            }
        }
    }
    const resetGame = () =>{
        turno=true
        enableboxes();
        msgcontainer.classList.add("hide");
      
        }
    newbtn.addEventListener("click", resetGame)
    resetbtn.addEventListener("click", resetGame)
        
})



