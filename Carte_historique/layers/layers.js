var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HistoriqueUMT_1 = new ol.format.GeoJSON();
var features_HistoriqueUMT_1 = format_HistoriqueUMT_1.readFeatures(json_HistoriqueUMT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoriqueUMT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoriqueUMT_1.addFeatures(features_HistoriqueUMT_1);
var lyr_HistoriqueUMT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HistoriqueUMT_1, 
                style: style_HistoriqueUMT_1,
                popuplayertitle: 'Historique UMT',
                interactive: true,
    title: 'Historique UMT<br />\
    <img src="styles/legend/HistoriqueUMT_1_0.png" /> EP actuel<br />\
    <img src="styles/legend/HistoriqueUMT_1_1.png" /> EU actuel<br />\
    <img src="styles/legend/HistoriqueUMT_1_2.png" /> EP historique<br />\
    <img src="styles/legend/HistoriqueUMT_1_3.png" /> EU historique<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_HistoriqueUMT_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HistoriqueUMT_1];
lyr_HistoriqueUMT_1.set('fieldAliases', {'Ville': 'Ville', 'Nom': 'Nom', 'Code_INSEE': 'Code_INSEE', 'Type': 'Type', 'Capacité': 'Capacité', 'Traitement': 'Traitement', 'x_centre': 'x_centre', 'y_centre': 'y_centre', 'Image': 'Image', 'Année mis': 'Année mis', 'Année ret': 'Année ret', 'Type efflu': 'Type efflu', });
lyr_HistoriqueUMT_1.set('fieldImages', {'Ville': 'TextEdit', 'Nom': 'TextEdit', 'Code_INSEE': 'TextEdit', 'Type': 'TextEdit', 'Capacité': 'TextEdit', 'Traitement': 'TextEdit', 'x_centre': 'TextEdit', 'y_centre': 'TextEdit', 'Image': 'TextEdit', 'Année mis': 'TextEdit', 'Année ret': 'TextEdit', 'Type efflu': 'ExternalResource', });
lyr_HistoriqueUMT_1.set('fieldLabels', {'Ville': 'inline label - visible with data', 'Nom': 'hidden field', 'Code_INSEE': 'hidden field', 'Type': 'inline label - visible with data', 'Capacité': 'inline label - visible with data', 'Traitement': 'inline label - visible with data', 'x_centre': 'hidden field', 'y_centre': 'hidden field', 'Image': 'inline label - visible with data', 'Année mis': 'inline label - visible with data', 'Année ret': 'inline label - visible with data', 'Type efflu': 'inline label - visible with data', });
lyr_HistoriqueUMT_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});