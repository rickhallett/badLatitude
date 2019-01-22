Ext.define('badLatitudeClassic.view.geolocation.LongLatPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.longlatpanel',

    requires: [
        'badLatitudeClassic.view.geolocation.LongLatGrid'
    ],

    items: [
        {
            xtype: 'longlatgrid',
            flex: 1,
            maxWidth: '50%',
            margin: '30 0 0 0'
        }
    ],

    buttons: [{
        text: 'Get Addresses',
        handler: 'fetchAddresses'
    }]

});
