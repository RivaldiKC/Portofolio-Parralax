
var parralax = 0;

$(window).scroll(function(){

	var wTop = $(this).scrollTop();
	//var p2Top = $('#property2').offset().top - 50;
	//var prop3 = $('#property3').offset().top - 50;

	console.log(wTop);
	
	function Propbg(){
		$('#property-background').css({
			'transform' : 'translate(0px, -' + wTop/50 +'%)',
			

		});
	}

	// function Propname(){
	// 	$('#property-name').css({
	// 		'transform' : 'translate(0px, -' + wTop +'%)',
			
	// 	});

	// }

	function Prop31(){
		$('#property3').css({
			'transform' : 'translate(0px,0px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

		parralax = 0;

	}

	function Prop32(){
		$('#property3').css({
			'transform' : 'translate(-600px,-250px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

		parralax = 1;
	}


	function PropBio1(){
		$('#property-biodata').css({
			'transform' : 'translate(0px,-500px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

	}

	function PropBio2(){
		$('#property-biodata').css({
			'transform' : 'translate(0px,0px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

	}

	function Prop41(){
		$('#property4').css({
			'transform' : 'translate(0px,-300px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

	}

	function Prop42(){
		$('#property4').css({
			'transform' : 'translate(600px,-450px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

	}

	function PropCv1(){
		$('#property-cv').css({
			'transform' : 'translate(0px,-300px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});
	}

	function PropCv2(){
		$('#property-cv').css({
			'transform' : 'translate(0px,-650px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

	}

	function PropBulan1(){
		$('#property-bulan').css({
			'transform' : 'translate(-200px,-400px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

	}

	function PropBulan2(){
		$('#property-bulan').css({
			'transform' : 'translate(200px,-600px)',
			'transition-property' : 'transform',
			'transition-duration' : '3s',
			'transition-delay' : '0s'
		});

	}

	// function PropPj1(){
	// 	$('#property-pj1').css({
	// 		'transform' : 'translate(0px,-350px)',
	// 		'transition-property' : 'transform',
	// 		'transition-duration' : '4s',
	// 		'transition-delay' : '0s'
	// 	});
	// }

	// function PropPj2(){
	// 	$('#property-pj2').css({
	// 		'transform' : 'translate(0px,-350px)',
	// 		'transition-property' : 'transform',
	// 		'transition-duration' : '3s',
	// 		'transition-delay' : '1s'
	// 	});
	// }

	// function PropPj3(){
	// 	$('#property-pj3').css({
	// 		'transform' : 'translate(0px,-350px)',
	// 		'transition-property' : 'transform',
	// 		'transition-duration' : '2s',
	// 		'transition-delay' : '0s'
	// 	});
	// }

	// function PropPj4(){
	// 	$('#property-pj4').css({
	// 		'transform' : 'translate(0px,-350px)',
	// 		'transition-property' : 'transform',
	// 		'transition-duration' : '3s',
	// 		'transition-delay' : '0s'
	// 	});
	// }
	
	Propbg();

	if (wTop > 300) {

		Prop32();
		PropBio1();
			
	}

	if (wTop > 250) {

		Prop41();
		PropCv1();
			
	}

	if (parralax == 1) {

		if (wTop < 180) {

			 Prop31();
			 PropBio2();
			 
		}
	}

	if (wTop > 550) {

		Prop42();
		PropCv2();

	}

	if (wTop > 1500) {

		PropBulan1();
		// PropPj1();
		// PropPj2();
		// PropPj3();
		// PropPj4();
	}

	if (wTop > 2000) {

		PropBulan2();
	}
});