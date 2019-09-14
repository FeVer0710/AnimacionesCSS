var clipboard = new Clipboard('.portapapeles');

clipboard.on('success', function(e) {
    alert("Copiado en el portapapeles :)");
});

clipboard.on('error', function(e) {
	// Algo no salio como debia
});