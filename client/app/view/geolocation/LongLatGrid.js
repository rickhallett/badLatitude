function seedCoordinates(len) {
    let seedArray = [];
    for(let i = 0; i < len; i++) {
        seedArray.push({
            'row': (i + 1),
            'store_number': chance.integer({ min: 1, max: 9999 }),
            'latitude': chance.latitude(),
            'longitude': chance.longitude(),
        });
    }
    return seedArray;
}

Ext.define('badLatitudeClassic.view.geolocation.LongLatGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.longlatgrid',

    store: {
        fields: ['latitude', 'longitude'],
        data: seedCoordinates(10)
    },

    columns: [{
        dataIndex: 'row',
        width: 50
    }, {
        text: 'Store Number',
        dataIndex: 'store_number',
        flex: 1
    }, {
        text: 'Latitude',
        dataIndex: 'latitude',
        flex: 1
    }, {
        text: 'Longitude',
        dataIndex: 'longitude',
        flex: 1
    }],

    // height: 600,
    // layout: 'fit',
    // fullscreen: true,

    initComponent: function () {
        this.callParent(arguments);
    }

});
