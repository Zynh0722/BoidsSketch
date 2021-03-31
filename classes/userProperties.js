var nBoids = 1;

window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {

            if (properties.boids) {
                nBoids = properties.boids.value;
            } else {
                nBoids = 100;
            }
        
        // Add more properties here
    }
};
