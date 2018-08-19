console.log("connected");

let w = window.innerWidth;
let h = window.innerHeight;

const randy = (max) => {
  return Math.floor( Math.random() * max)
}



const addWord = function(word = "word") {

  let $words = $('#word-text-2').text().split(" ")
  let randomIndex = randy( $words.length )
  word = $words[randomIndex]


  let $body = $('body')
  let $word = $(`<p>${word}</p>`).css({
    color: `rgb(${randy(255)}, ${randy(255)}, ${randy(255)})`,  //"white",
    fontSize: (30 + randy(100)) + "px",  //"100px",
    left: randy(w) + "px", //"20px",
    top: randy(h) + "px", // "50px"
  })

  $word.appendTo( $body ).fadeOut(4000, function() {
    $(this).remove()
  })
}



setInterval(addWord, 400)
