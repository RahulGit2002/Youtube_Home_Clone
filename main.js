console.log("hyyy");


let videos = document.getElementsByClassName('videos');
let thumb = document.getElementsByClassName('thumbnail');
for (let i = 0; i < thumb.length; i++) {
    thumb[i].addEventListener('mouseover', function hover(){
        let TimeoutId= setTimeout(() => {
            // const videos = document.getElementsByClassName('videos');
            videos[i].style= "transform: scale(1.2); background-color: white; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6); z-index: 10; margin: 0rem;";
            // alert("this is event");
        }, 2000);

        videos[i].addEventListener('mouseout', function out(){
            videos[i].style= "transform: scale(1); z-index:-1;"
            clearTimeout(TimeoutId)
        })
    })
}



