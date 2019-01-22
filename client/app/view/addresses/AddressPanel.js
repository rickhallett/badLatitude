Ext.define('badLatitudeClassic.view.addresses.AddressPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addresspanel',

    requires: [
        'badLatitudeClassic.view.addresses.AddressGrid'
    ],

    items: [
        {
            xtype: 'addressgrid',
            flex: 1,
            maxWidth: '50%',
            margin: '30 0 0 0'
        }
    ],

    buttons: [{
        text: 'Get Coordinates',
        handler: 'fetchCoordinates'
    }]


});
