window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'ventana',
            location: {       
                lat: -34.887049,
                lng: -58.006411,
            }             
        },
         {
            name: 'parqueadero',
            location: {
                lat: -34.886793,
                lng: -58.006164,
            }             
        },
          {
            name: 'cocina',
            location: {
                lat: -34.886851,
                lng: -58.006701,
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
        model.setAttribute('gltf-model', './assets/panuelo/panueloLow5.glb');
        model.setAttribute('rotation', '0 270 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.1 0.1 0.1');
        
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
