export function blogs(element){
    element.innerHTML = `
    <div class="blog gallery">
    </div>
    `
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stupidsherlock')
    .then(res=>res.json())
    .then(data=>{
        const res = data.items
        const posts = res.filter(item=>item.categories.length>=0)
        function toText(node){
            let tag = document.createElement('div')
            tag.innerHTML = node
            node = tag.innerText
            return node
        }
        function shortenText(text, startingPoint, maxLength){
            return text.length>maxLength?
            text.slice(startingPoint, maxLength):
            text
        }
        let output = '';
        for(let i = 0; i < 3; i++){
            let item = posts[i];
            output += `
                <div class="item" onClick="window.location.href = '${item.link}'">
                    <div class="thumb">
                        <img src="${item.thumbnail}" class="blog-topImg"></img>
                    </div>
                <div class="text">
                    <h2 class="blog-title">${shortenText(item.title,0,30)+'...'}</h2>
                    <p class="blog-intro">${'...' + shortenText(toText(item.content),60, 300)+ '...'}</p>
                </div>
                </div>
            `
        }
        document.querySelector('.blog').innerHTML = output
    })
}