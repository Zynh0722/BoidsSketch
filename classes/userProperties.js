var nBoids = 300;

window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {

            if (properties.boids) {
                nBoids = properties.boids.value;
            } else {
                nBoids = 300;
            }
        
        // Add more properties here
    }
};
