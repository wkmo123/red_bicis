var map = L.map('main_map', {
    center: [4.66666, -74.10584],
    zoom: 13
});

L.marker([4.732158, -74.067025]).addTo(map);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map)

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion,{title: bici.id}).addTo(map);
        });
    }
})