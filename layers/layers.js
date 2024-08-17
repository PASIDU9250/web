var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COLOMBO_1 = new ol.format.GeoJSON();
var features_COLOMBO_1 = format_COLOMBO_1.readFeatures(json_COLOMBO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLOMBO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLOMBO_1.addFeatures(features_COLOMBO_1);
var lyr_COLOMBO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLOMBO_1, 
                style: style_COLOMBO_1,
                popuplayertitle: "COLOMBO",
                interactive: true,
                title: '<img src="styles/legend/COLOMBO_1.png" /> COLOMBO'
            });

lyr_OSMStandard_0.setVisible(true);lyr_COLOMBO_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_COLOMBO_1];
lyr_COLOMBO_1.set('fieldAliases', {'GND_N': 'GND_N', });
lyr_COLOMBO_1.set('fieldImages', {'GND_N': '', });
lyr_COLOMBO_1.set('fieldLabels', {'GND_N': 'no label', });
lyr_COLOMBO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});