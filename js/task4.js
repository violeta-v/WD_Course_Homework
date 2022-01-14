
function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var BMI = document.getElementById("weight").value / document.getElementById("height").value**2;
    console.log(`Височина: ${height}`);
	console.log(`Тегло: ${weight}`);
    console.log(`Индекс на телесната маса: ${BMI}`);
    if (weight/height**2 < 16.0){ 
		console.log(`тежко недохранване`)
    } else if ((weight/height**2) >= 16 && (weight/height**2) <= 16.99) {
		console.log(`средно недохранване`)
    }else if ((weight/height**2) >= 16 && (weight/height**2) <= 16.99) {
		console.log(`средно недохранване`)
    }else if ((weight/height**2) >= 17 && (weight/height**2) <= 18.49) {
    console.log(`леко недохранване`)
    }else if (weight/height**2 < 18.5){ 
		console.log(`поднормено тегло`)
    }else if ((weight/height**2) >= 18.5 && (weight/height**2) <= 24.99) {
        console.log(`нормално тегло`)
    }else if (weight/height**2 >= 25.0){ 
		console.log(`наднормено тегло`)
    }else if ((weight/height**2) >= 18.5 && (weight/height**2) <= 24.99) {
        console.log(`нормално тегло`)
    }else if (weight/height**2 >= 25.0){ 
		console.log(`наднормено тегло`)
    }else if ((weight/height**2) >= 25 && (weight/height**2) <= 29.99) {
        console.log(`предзатлъстяване`)
    }else if (weight/height**2 >= 30.0){ 
		console.log(`затлъстяване`)
    }else if ((weight/height**2) >= 30 && (weight/height**2) <= 34.99) {
        console.log(`затлъстяване I степен`)
    }else if ((weight/height**2) >= 35 && (weight/height**2) <= 39.99) {
        console.log(`затлъстяване II степен`)
    }else {
 	    console.log(`затлъстяване III степен`)}
    }
