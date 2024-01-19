$(function(){
  $('.box1').slideDown(function(){//javascriptは引数の中に関数(function)を入れられる
    $('.box1').css({//slideDownの引数にfunctionを書き加えることでスライドダウンした後に実行することができるようになる
      'background-color': '#0000FF',//slideDownの中のfunctionにcssで色と大きさを変え、slideUo()をする
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});