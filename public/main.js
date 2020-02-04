console.log('我是main.js')
let n = 1;
getPAGE.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET",`/page${n+1}`);
    //上面的`小标签写错了，也算错
    request.onreadystatechange = () =>{
        if(request.readyState ===4 && request.status===200){
           const array = JSON.parse(request.response)
           array.forEach(item=>{
               const li = document.createElement("li");
               li.textContent = item.id;
               xxx.appendChild(li);
           })
           n+=1
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("get","/5.json");
    request.onreadystatechange = () =>{
        if(request.readyState ===4 && request.status===200){
           const object = JSON.parse(request.response)
           myName.textContent = object.name
           console.log(object)
        }
    }
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","/4.xml");
    request.onreadystatechange = () =>{
        if(request.readyState ===4 && request.status===200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
            //创建style标签
            // const style =document.createElement('style')
        }
    };
    request.send()
};
getHTML.onclick =() =>{
    const request = new XMLHttpRequest()
    request.open("GET","/3.html")
    request.onload = ()=>{
        //创建div标签
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response
        //插入到身体里去
        document.body.appendChild(div)
    }
    request.onerror =()=>{}
    request.send()
}
getJS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open("GET","/2.js")
    request.onload = () =>{
        //创建script标签
        const script =document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插到身体里去
        document.body.appendChild(script)
    }
    request.onerror = ()=>{}
    request.send()
}
getCSS.onclick = () =>{
   
    const request = new XMLHttpRequest()
    request.open("GET","/style.css")
    request.onreadystatechange = () =>{
        // console.log(request.readyState)
        if(request.readyState === 4){
            if(request.status>=200 && request.status<300){
                 //创建style标签
                 const style =document.createElement('style')
                 //填写style内容
                 style.innerHTML = request.response
                 //插到头里头
                 document.head.appendChild(style)
                
            }else{
                alert('加载 CSS 失败')
            }
        }
       
    }
    request.onerror = ()=>{
        console.log('失败了')
    };
    request.send() 
};
