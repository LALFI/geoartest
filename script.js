window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'ventana',
            location: {       
                lat: -34.887071,
                lng: -58.006420,
                alt: 0,
            }             
        },
         {
            name: 'parqueadero',
            location: {
                lat: -34.886749,
                lng: -58.006163,
                alt: 50,
            }             
        },
          {
            name: 'cocina',
            location: {
                lat: -34.887123,
                lng: -58.006410,
                alt: 10,
            }             
        },        
    ];
}

/*var models = [    
    {
        url: './assets/articuno/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Articuno, Lv. 80, HP 100/100',
    },
    {
        url: './assets/dragonite/scene.gltf',
        scale: '0.15 0.15 0.15',
        rotation: '0 180 0',
        info: 'Dragonite, Lv. 99, HP 150/150',
    },
     {
        url: './assets/magnemite/scene.gltf',
        scale: '0.15 0.15 0.15',
        info: 'Magnemite, Lv. 5, HP 10/10',
        rotation: '0 180 0',
    },
];
*/
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let altura = place.location.alt;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/articuno/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('position', {x: 0, y: ${altura}, z: 0});
        model.setAttribute('scale', '0.11 0.11 0.11');
        //
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
