let $text = $(".rolling-text .rolling-text__text");
let $wrap = $(".rolling-text");

$text.clone().appendTo($wrap);

TweenMax.to($wrap, 10, {
  x: -$text.width(),
  ease: Linear.easeNone,
  repeat: -1,
});
