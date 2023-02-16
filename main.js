
var imgList=Array.from(document.querySelectorAll('.item img')) 
var boxContainer=document.getElementById('boxContainer')
var innerBox=document.getElementById('innerBox')
var closeEle=document.getElementById('close')
var nextEle=document.getElementById('next')
var prevEle=document.getElementById('prev')


var currentIndex;
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener('click',function(e){

        boxContainer.style.display='flex'
        var imgSrc=e.target.getAttribute('src')
        innerBox.style.backgroundImage=`url(${imgSrc})`

        currentIndex=imgList.indexOf(e.target)
        console.log(currentIndex)
    })
}


closeEle.addEventListener('click',closeFun)

function closeFun()
{
    boxContainer.style.display='none'
}


nextEle.addEventListener('click',nextFunc)


function nextFunc()
{
    currentIndex++
    if(currentIndex==imgList.length)
    {
        currentIndex=0
    }
    imgList[currentIndex]
    var imgSrc= imgList[currentIndex].getAttribute('src')
    innerBox.style.backgroundImage=`url(${imgSrc})`
}


prevEle.addEventListener('click',prevFunc)


function prevFunc()
{
    currentIndex--
    if(currentIndex<0)
    {
        currentIndex=imgList.length-1
    }
    imgList[currentIndex]
    var imgSrc= imgList[currentIndex].getAttribute('src')
    innerBox.style.backgroundImage=`url(${imgSrc})`
}


document.addEventListener('keyup',function(e){


     if(e.key=='ArrowRight')
    {
        nextFunc()
    }
    else if(e.key=='ArrowLeft')
    {
        prevFunc()
    }
    else if(e.key=='Escape')
    {
        closeFun()
    }
    else if(e.target==boxContainer)
    {
        closeFun()
    }
})




document.addEventListener('click',function(e){

    if(e.target==boxContainer)
    {
        closeFun()
    }
})