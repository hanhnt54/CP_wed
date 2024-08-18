function loadImage(anh){
	var s=anh.src;
	var s1=document.getElementById("img1").src;
	var s2=document.getElementById("img2").src;
	var s3=document.getElementById("img3").src;
	var s4=document.getElementById("img4").src;
	var s5=document.getElementById("img5").src;
	var s6=document.getElementById("img6").src;
	var s7=document.getElementById("img7").src;
	var s8=document.getElementById("img8").src;
	var s9=document.getElementById("img9").src;
	var s10=document.getElementById("img10").src;
	document.getElementById("bigImg").src = s;
	switch (s){
		case s1:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 1";
			break;
		case s2:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 2";
			break;
		case s3:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 3";
			break;
		case s4:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 4";
			break;
		case s5:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 5";
			break;
		case s6:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 6";
			break;
		case s7:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 7";
			break;
		case s8:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 8";
			break;
		case s9:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 9";
			break;
		case s10:
			document.getElementsByTagName("figcaption")[0].innerHTML="Orchid 10";
			break;
	}
}