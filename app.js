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


  button.onclick = function(){
	  if(memberBox.className == "open")
	  {
		  //srink the box
		  memberBox.className = "";

	  } else {
		  //expand the box
		  memberBox.className = "open";
	  }
  }

  var content = document.getElementById("memberBoxAlex")
  var button = document.getElementById("showmoreAlex")


  button.onclick = function(){
	  if(memberBoxAlex.className == "open")
	  {
		  //srink the box
		  memberBoxAlex.className = "";

	  } else {
		  //expand the box
		  memberBoxAlex.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxLiv")
  var button = document.getElementById("showmoreLiv")


  button.onclick = function(){
	  if(memberBoxLiv.className == "open")
	  {
		  //srink the box
		  memberBoxLiv.className = "";

	  } else {
		  //expand the box
		  memberBoxLiv.className = "open";
	  }
  }

  var content = document.getElementById("memberBoxFlo")
  var button = document.getElementById("showmoreFlo")


  button.onclick = function(){
	  if(memberBoxFlo.className == "open")
	  {
		  //srink the box
		  memberBoxFlo.className = "";

	  } else {
		  //expand the box
		  memberBoxFlo.className = "open";
	  }
  }



  var content = document.getElementById("memberBoxOvi")
  var button = document.getElementById("showmoreOvi")


  button.onclick = function(){
	  if(memberBoxOvi.className == "open")
	  {
		  //srink the box
		  memberBoxOvi.className = "";

	  } else {
		  //expand the box
		  memberBoxOvi.className = "open";
	  }
  }

  var content = document.getElementById("memberBoxDen")
  var button = document.getElementById("showmoreDen")


  button.onclick = function(){
	  if(memberBoxDen.className == "open")
	  {
		  //srink the box
		  memberBoxDen.className = "";

	  } else {
		  //expand the box
		  memberBoxDen.className = "open";
	  }
  }

  var content = document.getElementById("memberBoxRaz")
  var button = document.getElementById("showmoreRaz")


  button.onclick = function(){
	  if(memberBoxRaz.className == "open")
	  {
		  //srink the box
		  memberBoxRaz.className = "";

	  } else {
		  //expand the box
		  memberBoxRaz.className = "open";
	  }
  }

  var content = document.getElementById("memberBoxAnc")
  var button = document.getElementById("showmoreAnc")


  button.onclick = function(){
	  if(memberBoxAnc.className == "open")
	  {
		  //srink the box
		  memberBoxAnc.className = "";

	  } else {
		  //expand the box
		  memberBoxAnc.className = "open";
	  }
  }

  var content = document.getElementById("memberBoxGab")
  var button = document.getElementById("showmoreGab")


  button.onclick = function(){
	  if(memberBoxGab.className == "open")
	  {
		  //srink the box
		  memberBoxGab.className = "";

	  } else {
		  //expand the box
		  memberBoxGab.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxMih")
  var button = document.getElementById("showmoreMih")


  button.onclick = function(){
	  if(memberBoxMih.className == "open")
	  {
		  //srink the box
		  memberBoxMih.className = "";

	  } else {
		  //expand the box
		  memberBoxMih.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxRal")
  var button = document.getElementById("showmoreRal")


  button.onclick = function(){
	  if(memberBoxRal.className == "open")
	  {
		  //srink the box
		  memberBoxRal.className = "";

	  } else {
		  //expand the box
		  memberBoxRal.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxLuc")
  var button = document.getElementById("showmoreLuc")


  button.onclick = function(){
	  if(memberBoxLuc.className == "open")
	  {
		  //srink the box
		  memberBoxLuc.className = "";

	  } else {
		  //expand the box
		  memberBoxLuc.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxDel")
  var button = document.getElementById("showmoreDel")


  button.onclick = function(){
	  if(memberBoxDel.className == "open")
	  {
		  //srink the box
		  memberBoxDel.className = "";

	  } else {
		  //expand the box
		  memberBoxDel.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxMel")
  var button = document.getElementById("showmoreMel")


  button.onclick = function(){
	  if(memberBoxMel.className == "open")
	  {
		  //srink the box
		  memberBoxMel.className = "";

	  } else {
		  //expand the box
		  memberBoxMel.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxSte")
  var button = document.getElementById("showmoreSte")


  button.onclick = function(){
	  if(memberBoxSte.className == "open")
	  {
		  //srink the box
		  memberBoxSte.className = "";

	  } else {
		  //expand the box
		  memberBoxSte.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxCri")
  var button = document.getElementById("showmoreCri")


  button.onclick = function(){
	  if(memberBoxCri.className == "open")
	  {
		  //srink the box
		  memberBoxCri.className = "";

	  } else {
		  //expand the box
		  memberBoxCri.className = "open";
	  }
  }



  var content = document.getElementById("memberBoxCrs")
  var button = document.getElementById("showmoreCrs")


  button.onclick = function(){
	  if(memberBoxCrs.className == "open")
	  {
		  //srink the box
		  memberBoxCrs.className = "";

	  } else {
		  //expand the box
		  memberBoxCrs.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxAle")
  var button = document.getElementById("showmoreAle")


  button.onclick = function(){
	  if(memberBoxAle.className == "open")
	  {
		  //srink the box
		  memberBoxAle.className = "";

	  } else {
		  //expand the box
		  memberBoxAle.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxAnd")
  var button = document.getElementById("showmoreAnd")


  button.onclick = function(){
	  if(memberBoxAnd.className == "open")
	  {
		  //srink the box
		  memberBoxAnd.className = "";

	  } else {
		  //expand the box
		  memberBoxAnd.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxSim")
  var button = document.getElementById("showmoreSim")


  button.onclick = function(){
	  if(memberBoxSim.className == "open")
	  {
		  //srink the box
		  memberBoxSim.className = "";

	  } else {
		  //expand the box
		  memberBoxSim.className = "open";
	  }
  }


  var content = document.getElementById("memberBoxDan")
  var button = document.getElementById("showmoreDan")


  button.onclick = function(){
	  if(memberBoxDan.className == "open")
	  {
		  //srink the box
		  memberBoxDan.className = "";

	  } else {
		  //expand the box
		  memberBoxDan.className = "open";
	  }
  }

  var content = document.getElementById("memberBoxRau")
  var button = document.getElementById("showmoreRau")


  button.onclick = function(){
	  if(memberBoxRau.className == "open")
	  {
		  //srink the box
		  memberBoxRau.className = "";

	  } else {
		  //expand the box
		  memberBoxRau.className = "open";
	  }
  }

  function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "pirvu177@gmail.com",
		Password : "459BDB407A3CC1C1D2CF1161953D14A13CEF",
		To : 'ovidiu.pirvu@novarion.ro',
		From : document.getElementById("email").value,
		Subject : "Contact nou de la Novarion.ro",
		Body : "And this is the body"
	}).then(
	  message => alert(message)
	);
  }
