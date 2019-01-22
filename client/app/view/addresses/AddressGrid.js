function createAddress() {
    return chance.address()
        .concat(' ', chance.postal())
        .concat(' ', chance.country({ full: true }));
}

function seedAddresses(len) {
    let seedArray = [];
    for(let i = 0; i < len; i++) {
        seedArray.push({
            'row': (i + 1),
            'store_number': chance.integer({ min: 1, max: 9999 }),
            'address': createAddress(),
        });
    }
    return seedArray;
}

Ext.define('badLatitudeClassic.view.addresses.AddressGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'addressgrid',
    alias: 'widget.addressgrid',

    store: {
        fields: ['address'],
        data: seedAddresses(10)
    },

    columns: [{
        dataIndex: 'row',
        maxWidth: 75
    }, {
        text: 'Store Number',
        dataIndex: 'store_number',
        flex: 1
    }, {
        text: 'Address',
        dataIndex: 'address',
        flex: 1
    }]

});

