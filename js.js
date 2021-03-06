var WIDTH = $(window).width(),
	HEIGHT = $(window).height();

var bubbleSize = WIDTH*2;

$(window).resize(function() {
	WIDTH = $(window).width();
	HEIGHT = $(window).height();
	bubbleSize = WIDTH*2
});

$('#backhomebutton').click(backhome);

function spacejam() {
	var wait = 125;
		animation = 500

	$('#pagecontainer').css({opacity: 0, 'z-index': '-999'});
	$('#spacejam').css({opacity: 1})

	$('#p1title').css({opacity: 0});
	$('#p2title').css({opacity: 0});
	$('#p3title').css({opacity: 0});
	$('#p4title').css({opacity: 0});
	$('#p5title').css({opacity: 0});
	$('#p6title').css({opacity: 0});

	$('#mainplanet').css({opacity:1, width: '0px', height: '0px', top: 0, left: 0});

	$('#mainplanet').animate({width: '100%', height: '100%', top: '-50%', left: '-50%'}, animation);
	setTimeout(function() {
		setTimeout(function() {
			$('#p1').animate({width: '100%', height: '100%', top: '-50%', left: '-50%'},animation);
			setTimeout(function() {
				$('#p2').animate({width: '100%', height: '100%', top: '-50%', left: '-50%'},animation);
				$('#p1title').animate({opacity: 1}, animation);
				setTimeout(function() {
					$('#p3').animate({width: '100%', height: '100%', top: '-50%', left: '-50%'},animation);
					$('#p2title').animate({opacity: 1}, animation);
					setTimeout(function() {
						$('#p4').animate({width: '100%', height: '100%', top: '-50%', left: '-50%'},animation);
						$('#p3title').animate({opacity: 1}, animation);
						setTimeout(function() {
							$('#p5').animate({width: '100%', height: '100%', top: '-50%', left: '-50%'},animation);
							$('#p4title').animate({opacity: 1}, animation);
							setTimeout(function() {
								$('#p6').animate({width: '100%', height: '100%', top: '-50%', left: '-50%'},animation);
								$('#p5title').animate({opacity: 1}, animation);
								setTimeout(function() {
									$('#p6title').animate({opacity: 1}, animation);
								}, wait);
							}, wait)
						}, wait)
					}, wait)
				}, wait)
			}, wait)
		}, wait)
	}, wait)
}

function backhome() {
	$('#pagecontainer').animate({opacity: 0}, 300);
	setTimeout(spacejam, 500)
}

function bubbleAnimation(x,y,n,primary,secondary) {
	$('#secondarybubble').css({opacity: 1, width: 0, height: 0, top: y, left: x, 'background-color': secondary});
	$('#bubble').css({opacity: 1, width: 0, height: 0, top: y, left: x, 'background-color': primary});

	$('#secondarybubble').animate({width: bubbleSize, height: bubbleSize, top: y-WIDTH, left: x-WIDTH}, 750);

	setTimeout(function() {
		$('#bubble').animate({width: bubbleSize, height: bubbleSize, top: y-WIDTH, left: x-WIDTH}, 750).delay(10).animate({opacity: 0}, 750);
		setTimeout(function() {
			//hide the space jam menu
			$('#spacejam').css({opacity:0});
			//set up new page
			page(n);
			$('#secondarybubble').css({opacity: 0, width: 0, height: 0});
			setTimeout(function() {
				$('#bubble').css({width: 0, height: 0})
				
				
				
				$('#p1').css({opacity:1, width: '0px', height: '0px', top: 0, left: 0});
				$('#p2').css({opacity:1, width: '0px', height: '0px', top: 0, left: 0});
				$('#p3').css({opacity:1, width: '0px', height: '0px', top: 0, left: 0});
				$('#p4').css({opacity:1, width: '0px', height: '0px', top: 0, left: 0});
				$('#p5').css({opacity:1, width: '0px', height: '0px', top: 0, left: 0});
				$('#p6').css({opacity:1, width: '0px', height: '0px', top: 0, left: 0});
			}, 500)
			
		}, 1000)
	}, 100);
}

function page(n) {
	$('#page1').css({opacity: 0, padding: 0, height: 0, 'z-index': '-999'});
	$('#page2').css({opacity: 0, padding: 0, height: 0, 'z-index': '-999'});
	$('#page3').css({opacity: 0, padding: 0, height: 0, 'z-index': '-999'});
	$('#page4').css({opacity: 0, padding: 0, height: 0, 'z-index': '-999'});
	$('#page5').css({opacity: 0, padding: 0, height: 0, 'z-index': '-999'});
	$('#page6').css({opacity: 0, padding: 0, height: 0, 'z-index': '-999'});
	$('p').css({width: 0})

	$('#pagecontainer').css({opacity: 0.75, 'z-index': '999'});
	$('#page' + n).css({opacity: 1, padding: '5em 5em 0em 5em', height: '100%', 'z-index': '999'});
	$('#page' + n + '> p').css({width: '100%'});
}

$('#p1').click(function(event) {
	bubbleAnimation(event.pageX, event.pageY, 1, '#FF8A65', '#FF7043')
});
$('#p2').click(function(event) {
	bubbleAnimation(event.pageX, event.pageY, 2, '#9575CD', '#7E57C2')
});
$('#p3').click(function(event) {
	bubbleAnimation(event.pageX, event.pageY, 3, '#E57373', '#EF5350')
});
$('#p4').click(function(event) {
	bubbleAnimation(event.pageX, event.pageY, 4, '#81C784', '#66BB6A')
});
$('#p5').click(function(event) {
	bubbleAnimation(event.pageX, event.pageY, 5, '#E1E1AA', '#D7D69A')
});
$('#p6').click(function(event) {
	bubbleAnimation(event.pageX, event.pageY, 6, '#4DB6AC', '#26A69A')
});

spacejam()