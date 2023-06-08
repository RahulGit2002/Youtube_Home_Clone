console.log("hyyy");

// console.log(thumb.length);
// console.log(videos);
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

// for (let i = 0; i< videos.length; i++) {
//     videos[i].addEventListener('mouseover', function hover(){

//         let TimeoutId= setTimeout(() => {
//             const videos = document.getElementsByClassName('videos');
//             videos[i].style= "transform: scale(1.2); background-color: white; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6); z-index: 10;";
//             // alert("this is event");
//         }, 2000);
        
//         //ghar ka bhedi lanka dhaye
//         const videos = document.getElementsByClassName('videos');
             
//          videos[i].addEventListener('mouseout', function hoverOut(){
//             const videos = document.getElementsByClassName('videos');
//             videos[i].style= "transform: scale(1);";
//             // alert("dnjienfjinijfnfibihbr");
//             clearTimeout(TimeoutId);
//             // console.log(TimeoutId)
//             });
        
//     });
// }


// for (let i = 0; i< thumb.length; i++) {
//     thumb[i].addEventListener('mouseout', function hoverOut(){
//         // const videos = document.getElementsByClassName('videos');
//         // videos[i].style= "transform: scale(1); z-index: 10;";
//         alert("dnjienfjinijfnfibihbr");
//         clearTimeout(TimeoutId);
//         // console.log(TimeoutId)
    
    
//     });
// }


