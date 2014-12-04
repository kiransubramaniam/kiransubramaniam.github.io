// Code by Kiran Subramaniam

function aboutclick()
{
	animnewcontent();
	setTimeout(aboutme,600);
}
function whatidoclick()
{
	animnewcontent();
	setTimeout(whatido,600);
}
function letsworkclick()
{
	animnewcontent();
	setTimeout(letswork,600);
}
function aboutme()
{
	
	document.getElementById('content-head').innerHTML="welcome!";
	document.getElementById('content-body').innerHTML="Hi, I'm Kiran. People basically identify me as as a web designer. I love making design stuff that really work. <b>HTML5</b>, <b>CSS3</b> and e<b>x</b>treme <b>Photoshop</b> are my basic tools I use to design. Navigate through my page, to know me more. Or maybe if you're on Facebook, I think we should be <a id="+'"'+"links"+'"'+" href="+'"'+"http://www.facebook.com/kiransubramaniam"+'"'+">friends</a>.";
}

function whatido()
{
	
	document.getElementById('content-head').innerHTML="what I do?";
		document.getElementById('content-body').innerHTML="Well, I do too much of things, but for your concern, I do designs. Designs that are of pure sense, and simplicity, just the one like this. But, wait. I love photography too. At times I'm free I flaunt out taking photographs.";
}
function letswork()
{
	
	document.getElementById('content-head').innerHTML="lets work!";
		document.getElementById('content-body').innerHTML="Lets work together! So, just do one of the following,</br> <ul><li>mail to me at <a href="+'"'+"mailto:kiransubramaniam@me.com"+'"'+">"+"kiransubramaniam@me.com</a></li><li>or just contact me if you're on <a href="+'"'+"http://www.facebook.com/kiransubramaniam"+'"'+">Facebook</a>";
}
//$( init );

function init() {
//-------before everything gets animated-------
	$('#content-body').slideUp(50);
	$('#content-head').slideUp(50);
	$('#menu').slideUp('fast');
}
//--------animation starts here---------
function logoanim()
{
	//--------animation starts here - logo---------
   $('#logo').animate( {top: '20%'},400 ).delay(100).animate( {top: '0%'},50 ).animate( {top: '6%'},100 ).animate( {top: '0%'},50);
   
      //--------animation ends here - logo---------
}
function contentanim()
{
	 //--------animation starts here - content-holder---------
   		$('#content-holder').animate( {top: '50%'},400 ).delay(100).animate( {top: '15%'},50 ).animate( {top: '25%'},100 ).animate( {top: '10%'},50 );
	//--------animation ends here - content-holder---------
}
function animme()
{
//--------animation starts here - my-image---------
 		$('#FXLogo').animate( {top: '70%'},400 ).delay(100).animate( {top: '15%'},50 ).animate( {top: '60%'},100 ).animate( {top: '45%'},50 );
	//--------animation ends here - my-image---------
}
function animatemenu()
{
	$('#menu').animate( {right: '10%'},400 )
}
function animatecont()
{
	$('#content-body').slideDown('slow');
	$('#content-head').slideDown('slow');
	$('#menu').slideDown('slow');
}
function myAnim()
{
	init();
	logoanim();//<----Logo comes first
	setTimeout(contentanim,600);//<-----Content window second
	setTimeout(animme,1600);//<-----Photo comes third
	setTimeout(animatecont,2200);//<----Content(text) comes last
	setTimeout(animatemenu,2800);
}
function animnewcontent()
{
	//--------animation starts here - content-holder---------
   		$('#content-holder').animate( {right: '100%'},500 ).delay(100).animate( {right: '-5%'},100 ).animate( {right: '5%'},100  );
	//--------animation ends here - content-holder---------
	//--------animation starts here - content-holder---------
   		$('#content-head').animate( {left: '-100%'},500 ).delay(100).animate( {left: '35%'},100 ).animate( {left: '30%'},100  );
	//--------animation ends here - content-holder---------
	//--------animation starts here - content-holder---------
   		$('#content-body').animate( {right: '100%'},500 ).delay(100).animate( {right: '-5%'},100 ).animate( {right: '6%'},100  );
	//--------animation ends here - content-holder---------
}
aboutme();
