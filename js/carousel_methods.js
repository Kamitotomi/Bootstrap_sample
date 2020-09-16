$(function () {
	// 循環開始
	$('.start-slide').on('click' ,function(){
		$('#carouselExample').carousel('cycle');
	});
	// 一時停止
	$(".pause-slide").on('click', function(){
		$('#carouselExample').carousel('pause');
	});
	// 前へ循環
	$(".prev-slide").on('click', function(){
		$('#carouselExample').carousel('prev');
	});
	// 次へ循環
	$(".next-slide").on('click', function(){
		$('#carouselExample').carousel('next');
	});
	// 特定のフレームへ
	$(".slide-first").on('click', function(){
		$('#carouselExample').carousel('0');
	});
	$(".slide-second").on('click', function(){
		$('#carouselExample').carousel('1');
	});
	$(".slide-third").on('click', function(){
		$('#carouselExample').carousel('2');
	});
});