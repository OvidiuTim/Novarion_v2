const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
	const navLinks = document.querySelectorAll('.navlinks li')

    burger.addEventListener('click', () => {
	//toggle nav regtangle
      nav.classList.toggle('nav-active');

	//animate links
	navLinks.forEach((link, index) => {
		if(link.style.animation){
			link.style.animation = '';
		} else {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
		}
		});

	//burger animation
	burger.classList.toggle('toggle');
    });

  }

  navSlide();


  const memberB = document.querySelectorAll('#memberBox ,#memberBoxAlex, #memberBoxLiv, #memberBoxFlo , #memberBoxOvi , #memberBoxDen , #memberBoxRaz, #memberBoxAnc, #memberBoxGab, #memberBoxMih, #memberBoxRal,#memberBoxLuc,#memberBoxDel,#memberBoxMel,#memberBoxSte,#memberBoxCri,#memberBoxCrs,#memberBoxAle,#memberBoxAnd,#memberBoxSim, #memberBoxDan, #memberBoxRau, #memberBoxInv ');
  for (let i = 0; i < memberB.length; i++) 
    memberB[i].onclick = function(){
		memberBox.className = "opacity";
		memberBoxAlex.className = "opacity";
		memberBoxLiv.className = "opacity";
		memberBoxFlo.className = "opacity";
		memberBoxOvi.className = "opacity";
		memberBoxDen.className = "opacity";
		memberBoxRaz.className = "opacity";
		memberBoxAnc.className = "opacity";
		memberBoxGab.className = "opacity";
		memberBoxMih.className = "opacity";
		memberBoxRal.className = "opacity";
		memberBoxLuc.className = "opacity";
		memberBoxDel.className = "opacity";
		memberBoxMel.className = "opacity";
		memberBoxSte.className = "opacity";
		memberBoxCri.className = "opacity";
		memberBoxCrs.className = "opacity";
		memberBoxAle.className = "opacity";
		memberBoxAnd.className = "opacity";
		memberBoxSim.className = "opacity";
		memberBoxDan.className = "opacity";
		memberBoxRau.className = "opacity";

        if(memberB[i].className=="open"){
            memberB[i].className="";
        }
        else{
            memberB[i].className="open";
        }

  }



  //open in new window for the lake

  function NewTabLake() {
	window.open(
	"https://www.thelake.ro/locuintamea/", "_blank");
}

function NewTabRiver() {
	window.open(
	"https://www.theriver.ro/", "_blank");
}


//download pdf
function NewTabHotel() {
	window.open(
	"", "_blank");
}

