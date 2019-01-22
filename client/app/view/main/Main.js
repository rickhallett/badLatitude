Ext.define('badLatitudeClassic.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'main',

    requires: [
        'badLatitudeClassic.view.addresses.AddressPanel',
        'badLatitudeClassic.view.geolocation.LongLatPanel',
        'badLatitudeClassic.view.file.FileDrop',
        'badLatitudeClassic.view.main.MainController'
    ],

    viewModel: {},

    items: [

        {
            xtype: 'panel',
            title: 'Copy/Paste',
            margin: '20 200 20 200',
            items: [

                {
                    xtype: 'addresspanel'
                },

                {
                    xtype: 'longlatpanel'
                }

            ]

        },

        {
            title: 'File Drop',
            xtype: 'drag-file'
        }

    ]

});

