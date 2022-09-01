const _switch = document.querySelector('#switch');
const stickman = document.querySelectorAll('.stickman')
const colorChange = document.querySelectorAll('.appearance input')

for (const x of colorChange) {
    x.onchange=()=>{
        document.querySelector(':root').style.setProperty(`--${x.id}`,x.value)
        console.log(`var(--${x.id})`)        
    }    
}
// console.log(getComputedStyle(':root').var(--theme-light))
_switch.onchange =()=>{
    if(_switch.checked){
        // meaning the user has checked the bus for run side view should become visible
        for (const x of stickman) {
            if(x.id == "stickman-side-view" ){
                x.classList.remove('hide')
                x.classList.add('show')
            }
            if(x.id == "stickman-front-view"){
                x.classList.remove('show')
                x.classList.add('hide')
            }
        }
    }else{
        for (const x of stickman) {
            if(x.id == "stickman-front-view" ){
                x.classList.remove('hide')
                x.classList.add('show')
            }
            if(x.id == "stickman-side-view"){
                x.classList.remove('show')
                x.classList.add('hide')
            }
        }
    }

}

// for chatting
// on send of the message, message should sent as an object to the global chatmsg object
let chatMsg = document.querySelector('#chatMsg')
let chatBtn = document.querySelector('#chatBtn')
let msgObject = {
    msg:[]
}
// create function that once called sends the text in the input field to the neccessary place of use
let processMsg =(text)=>{
    // save the message to an object
    let msgDate = Date()
    let msgContent = {msg:text, date:msgDate}
    return JSON.stringify(msgContent);
}

chatBtn.onclick=(e)=>{
    e.preventDefault()
    msgObject.msg.push((processMsg(chatMsg.value))) ;
    console.log(msgObject.msg)
    console.log(msgObject.msg.length)
}