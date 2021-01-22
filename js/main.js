$(document).ready(function(){
	//Mostrar menu mobil
	$('.ShowMenuMobile').on('click', function(){
		var mobileMenu=$('.NavBarP-Nav');
		var login=$('.Login');
		var body=$('body');
		if(mobileMenu.css('opacity')=="0"){
			mobileMenu.addClass('ShowBox');
			body.addClass('NoScroll');
			$(this).removeClass('fa-bars').addClass('fa-times');
		}else{
			mobileMenu.removeClass('ShowBox');
			if(login.css('opacity')=="1"){
				login.removeClass('ShowBox');
			}
			$(this).removeClass('fa-times').addClass('fa-bars');
			body.removeClass('NoScroll');
		}
	});
	//Mostrar login
	$('.btn-login').on('click', function(e){
		e.preventDefault();
		var login=$('.Login');
		if(login.css('opacity')=="0"){
			login.addClass('ShowBox');
		}else{
			login.removeClass('ShowBox');
		}
	});

	// Valida nombre no vacio	
	// Valida telefono no menor a 6 digitos															
	// Cuando la información sea incorrecta, en un label muestra el 
	// resultado (Error en formato o validado), 		
	
	// Valida email correcto	
	$('#send').click(function(){
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
			$('#campo_email').text('El correo electrónico introducido no es correcto.');
        } else {
			$('#campo_email').text('');
		}
	
	    if ($('#nombre').val() == '' || $('#nombre').val() < 4)
        {
		    $('#campo_nombre').text("No dene estar vacio y ser mayor a 4 digitos");
			// $('#send').attr('disabled', true);
		} else {
			$('#campo_nombre').text("");
		}
		if	($('#tel').val() < 6) {
			$('#campo_tel').text("Debe ser mayor a 6 digitos")
			// return false;
		} else {
			$('#campo_tel').text("")
		}
    });

});