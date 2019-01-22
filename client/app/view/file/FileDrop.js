Ext.define('badLatitudeClassic.view.file.FileDrop', {
    extend: 'Ext.panel.Panel',
    xtype: 'drag-file',
    controller: 'file-drop',

    requires: [
        'Ext.layout.container.Fit',
        'badLatitudeClassic.view.file.FileDropController'
    ],

    title: 'File Drag',
    width: 500,
    height: 300,
    bodyPadding: 5,
    layout: 'fit',

    bodyCls: 'drag-file-ct',

    html:
        '<div class="drag-file-label">' +
        'Drop some files here' +
        '</div>' +
        '<div class="drag-file-icon"></div>'
});
