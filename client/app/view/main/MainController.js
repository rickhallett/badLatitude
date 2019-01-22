Ext.define('badLatitudeClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
    ],

    fetchCoordinates: function() {
        console.log('Fetching coordinates...')
    },

    fetchAddresses: function() {
        console.log('Fetching addresses...')
    },

    saveSettings: function() {
        console.log('Saving settings...')
    }
});
