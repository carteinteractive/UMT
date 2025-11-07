var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UMTVeolia2025_1 = new ol.format.GeoJSON();
var features_UMTVeolia2025_1 = format_UMTVeolia2025_1.readFeatures(json_UMTVeolia2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMTVeolia2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMTVeolia2025_1.addFeatures(features_UMTVeolia2025_1);
cluster_UMTVeolia2025_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UMTVeolia2025_1
});
var lyr_UMTVeolia2025_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UMTVeolia2025_1, 
                style: style_UMTVeolia2025_1,
                popuplayertitle: 'UMT Veolia 2025',
                interactive: true,
    title: 'UMT Veolia 2025<br />\
    <img src="styles/legend/UMTVeolia2025_1_0.png" /> EP<br />\
    <img src="styles/legend/UMTVeolia2025_1_1.png" /> EU<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_UMTVeolia2025_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UMTVeolia2025_1];
lyr_UMTVeolia2025_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'Ville': 'Ville', 'Code_INSEE': 'Code_INSEE', 'Type': 'Type', 'Capacité': 'Capacité', 'Traitement': 'Traitement', 'x_centre': 'x_centre', 'y_centre': 'y_centre', 'Imagelocal': 'Imagelocal', 'Image': 'Image', 'traiteme_1': 'traiteme_1', });
lyr_UMTVeolia2025_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'Ville': 'TextEdit', 'Code_INSEE': 'TextEdit', 'Type': 'TextEdit', 'Capacité': 'TextEdit', 'Traitement': 'TextEdit', 'x_centre': 'TextEdit', 'y_centre': 'TextEdit', 'Imagelocal': 'TextEdit', 'Image': 'TextEdit', 'traiteme_1': 'TextEdit', });
lyr_UMTVeolia2025_1.set('fieldLabels', {'insee': 'hidden field', 'nom': 'hidden field', 'wikipedia': 'hidden field', 'surf_ha': 'hidden field', 'Ville': 'inline label - always visible', 'Code_INSEE': 'hidden field', 'Type': 'inline label - always visible', 'Capacité': 'inline label - always visible', 'Traitement': 'inline label - visible with data', 'x_centre': 'hidden field', 'y_centre': 'hidden field', 'Imagelocal': 'hidden field', 'Image': 'inline label - always visible', 'traiteme_1': 'hidden field', });
lyr_UMTVeolia2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});