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


  

  var content = document.getElementById("memberBox")
  var button = document.getElementById("showmore")

  const boxes = document.querySelectorAll('#showless, #showlessA,#showlessLiv,#showlessFlo,#showlessOvi,#showlessDen,#showlessRaz, #showlessAnc,#showlessGab, #showlessMih, #showlessRal, #showlessLuc, #showlessDel, #showlessMel, #showlessSte, #showlessCri, #showlessCrs, #showlessAle, #showlessAnd, #showlessSim,#showlessDan, #showlessRau');
  for (var i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function(){
	memberBox.className = "";
	memberBoxAlex.className = "";
	memberBoxLiv.className = "";
	memberBoxFlo.className = "";
	memberBoxOvi.className = "";
	memberBoxDen.className = "";
	memberBoxRaz.className = "";
	memberBoxAnc.className = "";
	memberBoxGab.className = "";
	memberBoxMih.className = "";
	memberBoxRal.className = "";
	memberBoxLuc.className = "";
	memberBoxDel.className = "";
	memberBoxMel.className = "";
	memberBoxSte.className = "";
	memberBoxCri.className = "";
	memberBoxCrs.className = "";
	memberBoxAle.className = "";
	memberBoxAnd.className = "";
	memberBoxSim.className = "";
	memberBoxDan.className = "";
	memberBoxRau.className = "";
  }}


  button.onclick = function(){
	  if(memberBox.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

		  

	  } else {
		  //expand the box
		  memberBox.className = "open";


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
	  }
  }

  var content = document.getElementById("memberBoxAlex")
  var button = document.getElementById("showmoreAlex")


  button.onclick = function(){
	  if(memberBoxAlex.className == "open")
	  {
		  //srink the box
		  memberBoxAlex.className = "";
		  memberBox.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxAlex.className = "open";
		  memberBox.className = "opacity";
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
	  }
  }


  var content = document.getElementById("memberBoxLiv")
  var button = document.getElementById("showmoreLiv")


  button.onclick = function(){
	  if(memberBoxLiv.className == "open")
	  {
		  //srink the box
		  memberBoxLiv.className = "";
		  memberBoxAlex.className = "";
		  memberBox.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxLiv.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }

  var content = document.getElementById("memberBoxFlo")
  var button = document.getElementById("showmoreFlo")


  button.onclick = function(){
	  if(memberBoxFlo.className == "open")
	  {
		  //srink the box
		  memberBoxFlo.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBox.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxFlo.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }



  var content = document.getElementById("memberBoxOvi")
  var button = document.getElementById("showmoreOvi")


  button.onclick = function(){
	  if(memberBoxOvi.className == "open")
	  {
		  //srink the box
		  memberBoxOvi.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBox.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxOvi.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBoxFlo.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }

  var content = document.getElementById("memberBoxDen")
  var button = document.getElementById("showmoreDen")


  button.onclick = function(){
	  if(memberBoxDen.className == "open")
	  {
		  //srink the box
		  memberBoxDen.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBox.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxDen.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBoxFlo.className = "opacity";
		  memberBoxOvi.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }

  var content = document.getElementById("memberBoxRaz")
  var button = document.getElementById("showmoreRaz")


  button.onclick = function(){
	  if(memberBoxRaz.className == "open")
	  {
		  //srink the box
		  memberBoxRaz.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBox.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxRaz.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBoxFlo.className = "opacity";
		  memberBoxOvi.className = "opacity";
		  memberBoxDen.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }

  var content = document.getElementById("memberBoxAnc")
  var button = document.getElementById("showmoreAnc")


  button.onclick = function(){
	  if(memberBoxAnc.className == "open")
	  {
		  //srink the box
		  memberBoxAnc.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBox.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxAnc.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBoxFlo.className = "opacity";
		  memberBoxOvi.className = "opacity";
		  memberBoxDen.className = "opacity";
		  memberBoxRaz.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }

  var content = document.getElementById("memberBoxGab")
  var button = document.getElementById("showmoreGab")


  button.onclick = function(){
	  if(memberBoxGab.className == "open")
	  {
		  //srink the box
		  memberBoxGab.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBox.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxGab.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBoxFlo.className = "opacity";
		  memberBoxOvi.className = "opacity";
		  memberBoxDen.className = "opacity";
		  memberBoxRaz.className = "opacity";
		  memberBoxAnc.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }


  var content = document.getElementById("memberBoxMih")
  var button = document.getElementById("showmoreMih")


  button.onclick = function(){
	  if(memberBoxMih.className == "open")
	  {
		  //srink the box
		  memberBoxMih.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBox.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxMih.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBoxFlo.className = "opacity";
		  memberBoxOvi.className = "opacity";
		  memberBoxDen.className = "opacity";
		  memberBoxRaz.className = "opacity";
		  memberBoxAnc.className = "opacity";
		  memberBoxGab.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }


  var content = document.getElementById("memberBoxRal")
  var button = document.getElementById("showmoreRal")


  button.onclick = function(){
	  if(memberBoxRal.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxRal.className = "open";
		  memberBoxAlex.className = "opacity";
		  memberBoxLiv.className = "opacity";
		  memberBoxFlo.className = "opacity";
		  memberBoxOvi.className = "opacity";
		  memberBoxDen.className = "opacity";
		  memberBoxRaz.className = "opacity";
		  memberBoxAnc.className = "opacity";
		  memberBoxGab.className = "opacity";
		  memberBoxMih.className = "opacity";
		  memberBox.className = "opacity";
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
	  }
  }


  var content = document.getElementById("memberBoxLuc")
  var button = document.getElementById("showmoreLuc")


  button.onclick = function(){
	  if(memberBoxLuc.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxLuc.className = "open";
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
		  memberBox.className = "opacity";
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
	  }
  }


  var content = document.getElementById("memberBoxDel")
  var button = document.getElementById("showmoreDel")


  button.onclick = function(){
	  if(memberBoxDel.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";
		  

	  } else {
		  //expand the box
		  memberBoxDel.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxMel.className = "opacity";
		  memberBoxSte.className = "opacity";
		  memberBoxCri.className = "opacity";
		  memberBoxCrs.className = "opacity";
		  memberBoxAle.className = "opacity";
		  memberBoxAnd.className = "opacity";
		  memberBoxSim.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
	  }
  }


  var content = document.getElementById("memberBoxMel")
  var button = document.getElementById("showmoreMel")


  button.onclick = function(){
	  if(memberBoxMel.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxMel.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxSte.className = "opacity";
		  memberBoxCri.className = "opacity";
		  memberBoxCrs.className = "opacity";
		  memberBoxAle.className = "opacity";
		  memberBoxAnd.className = "opacity";
		  memberBoxSim.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
		  
	  }
  }


  var content = document.getElementById("memberBoxSte")
  var button = document.getElementById("showmoreSte")


  button.onclick = function(){
	  if(memberBoxSte.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxSte.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxCri.className = "opacity";
		  memberBoxCrs.className = "opacity";
		  memberBoxAle.className = "opacity";
		  memberBoxAnd.className = "opacity";
		  memberBoxSim.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
	  }
  }


  var content = document.getElementById("memberBoxCri")
  var button = document.getElementById("showmoreCri")


  button.onclick = function(){
	  if(memberBoxCri.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxCri.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxCrs.className = "opacity";
		  memberBoxAle.className = "opacity";
		  memberBoxAnd.className = "opacity";
		  memberBoxSim.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
		  
	  }
  }



  var content = document.getElementById("memberBoxCrs")
  var button = document.getElementById("showmoreCrs")


  button.onclick = function(){
	  if(memberBoxCrs.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxCrs.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxAle.className = "opacity";
		  memberBoxAnd.className = "opacity";
		  memberBoxSim.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
	  }
  }


  var content = document.getElementById("memberBoxAle")
  var button = document.getElementById("showmoreAle")


  button.onclick = function(){
	  if(memberBoxAle.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxAle.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxAnd.className = "opacity";
		  memberBoxSim.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
	  }
  }


  var content = document.getElementById("memberBoxAnd")
  var button = document.getElementById("showmoreAnd")


  button.onclick = function(){
	  if(memberBoxAnd.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxAnd.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxSim.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
	  }
  }


  var content = document.getElementById("memberBoxSim")
  var button = document.getElementById("showmoreSim")


  button.onclick = function(){
	  if(memberBoxSim.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxSim.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxDan.className = "opacity";
		  memberBoxRau.className = "opacity";
	  }
  }


  var content = document.getElementById("memberBoxDan")
  var button = document.getElementById("showmoreDan")


  button.onclick = function(){
	  if(memberBoxDan.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";
		  spaceBtw.className = "";

	  } else {
		  //expand the box
		  memberBoxDan.className = "open";
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
		  memberBox.className = "opacity";
		  memberBoxRau.className = "opacity";
		  spaceBtw.className = "height";
	  }
  }

  var content = document.getElementById("memberBoxRau")
  var button = document.getElementById("showmoreRau")


  button.onclick = function(){
	  if(memberBoxRau.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";
		  memberBoxAlex.className = "";
		  memberBoxLiv.className = "";
		  memberBoxFlo.className = "";
		  memberBoxOvi.className = "";
		  memberBoxDen.className = "";
		  memberBoxRaz.className = "";
		  memberBoxAnc.className = "";
		  memberBoxGab.className = "";
		  memberBoxMih.className = "";
		  memberBoxRal.className = "";
		  memberBoxLuc.className = "";
		  memberBoxDel.className = "";
		  memberBoxMel.className = "";
		  memberBoxSte.className = "";
		  memberBoxCri.className = "";
		  memberBoxCrs.className = "";
		  memberBoxAle.className = "";
		  memberBoxAnd.className = "";
		  memberBoxSim.className = "";
		  memberBoxDan.className = "";
		  memberBoxRau.className = "";
		  spaceBtw.className = "";


	  } else {
		  //expand the box
		  memberBoxRau.className = "open";
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
		  memberBox.className = "opacity";
		  spaceBtw.className = "height";
	  }
  }



  //contact me form

  function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "pirvu177@gmail.com",
		Password : "459BDB407A3CC1C1D2CF1161953D14A13CEF",
		To : 'boer.livia@gmail.com',
		From : document.getElementById("email").value,
		Subject : "Contact nou de la Novarion.ro",
		Body : "And this is the body"
	}).then(
	  message => alert(message)
	);
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

