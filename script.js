replaceText(document.body)
function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType===Text.TEXT_NODE){
        if(element.textContent.match(/Hacker/gi)){
        //🏁🏁🏁🏁◼️◼️◼️
        //    element.parentElement.style.backgroundColor='black'
            
        //     const newElement=document.createElement('span')
        //     newElement.innerHTML=element.textContent.replace(/(hacker)/gi,'<span style="background-color:black;color:black;">$1</span>')
        //     element.replaceWith(newElement)
        // }
        //TO change text
        element.textContent=element.textContent.replace(/Hacker/gi,"▇▇▇▇▇▇")   
    }
    }

}