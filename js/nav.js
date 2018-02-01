
$( document ).ready(function() {
    /* CHECKOUT */
    $('.cartao-credito').click(function(){
    $('#cartao-credito').fadeIn();
    $('#boleto-bancario').fadeOut();
    $('#debito-online').fadeOut();
	});

    $('.boleto-bancario').click(function(){
    $('#boleto-bancario').fadeIn();
    $('#cartao-credito').fadeOut();
    $('#debito-online').fadeOut();
	});

    $('.debito-online').click(function(){
    $('#debito-online').fadeIn();
    $('#cartao-credito').fadeOut();
    $('#boleto-bancario').fadeOut();
	});
});
