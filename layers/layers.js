ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3384").setExtent([-8811.500120, 50022.800181, -4161.776506, 52153.166122]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BD_1 = new ol.format.GeoJSON();
var features_BD_1 = format_BD_1.readFeatures(json_BD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3384'});
var jsonSource_BD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BD_1.addFeatures(features_BD_1);
var lyr_BD_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BD_1, 
                style: style_BD_1,
                interactive: true,
                title: '<img src="styles/legend/BD_1.png" /> BD'
            });
var format_LOT_PARCEL_2 = new ol.format.GeoJSON();
var features_LOT_PARCEL_2 = format_LOT_PARCEL_2.readFeatures(json_LOT_PARCEL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3384'});
var jsonSource_LOT_PARCEL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT_PARCEL_2.addFeatures(features_LOT_PARCEL_2);
var lyr_LOT_PARCEL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOT_PARCEL_2, 
                style: style_LOT_PARCEL_2,
                interactive: true,
                title: '<img src="styles/legend/LOT_PARCEL_2.png" /> LOT_PARCEL'
            });
var format_BOUNDARY_MARKING_3 = new ol.format.GeoJSON();
var features_BOUNDARY_MARKING_3 = format_BOUNDARY_MARKING_3.readFeatures(json_BOUNDARY_MARKING_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3384'});
var jsonSource_BOUNDARY_MARKING_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_MARKING_3.addFeatures(features_BOUNDARY_MARKING_3);
var lyr_BOUNDARY_MARKING_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY_MARKING_3, 
                style: style_BOUNDARY_MARKING_3,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_MARKING_3.png" /> BOUNDARY_MARKING'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BD_1.setVisible(true);lyr_LOT_PARCEL_2.setVisible(true);lyr_BOUNDARY_MARKING_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BD_1,lyr_LOT_PARCEL_2,lyr_BOUNDARY_MARKING_3];
lyr_BD_1.set('fieldAliases', {'UPI': 'UPI', 'ADJPARCEL': 'ADJPARCEL', 'BEARING': 'BEARING', 'JARAK': 'JARAK', 'FNODE': 'FNODE', 'TNODE': 'TNODE', 'STATUS': 'STATUS', 'GUID': 'GUID', 'TARIKH_KEM': 'TARIKH_KEM', 'MI_PRINX': 'MI_PRINX', 'BLOCK': 'BLOCK', 'CLASS': 'CLASS', 'PA_BEARING': 'PA_BEARING', 'PA_DISTANC': 'PA_DISTANC', });
lyr_LOT_PARCEL_2.set('fieldAliases', {'NEGERI': 'NEGERI', 'DAERAH': 'DAERAH', 'MUKIM': 'MUKIM', 'SEKSYEN': 'SEKSYEN', 'LOT': 'LOT', 'UPI': 'UPI', 'KELUASAN': 'KELUASAN', 'KOD_KEGUNA': 'KOD_KEGUNA', 'PA': 'PA', 'STATUS': 'STATUS', 'NOFAILUKUR': 'NOFAILUKUR', 'NAMAPEMILI': 'NAMAPEMILI', 'ALAMATPEMI': 'ALAMATPEMI', 'GUID': 'GUID', 'TARIKH_KEM': 'TARIKH_KEM', 'MI_PRINX': 'MI_PRINX', 'FASA': 'FASA', 'BLOCK': 'BLOCK', 'CLASS': 'CLASS', 'KOD_TUJUAN': 'KOD_TUJUAN', 'KELUASAN_P': 'KELUASAN_P', 'KOD_UNITLU': 'KOD_UNITLU', });
lyr_BOUNDARY_MARKING_3.set('fieldAliases', {'ID_BATU': 'ID_BATU', 'UTARA': 'UTARA', 'TIMUR': 'TIMUR', 'UTARA_RSO': 'UTARA_RSO', 'TIMUR_RSO': 'TIMUR_RSO', });
lyr_BD_1.set('fieldImages', {'UPI': '', 'ADJPARCEL': '', 'BEARING': '', 'JARAK': '', 'FNODE': '', 'TNODE': '', 'STATUS': '', 'GUID': '', 'TARIKH_KEM': '', 'MI_PRINX': '', 'BLOCK': '', 'CLASS': '', 'PA_BEARING': '', 'PA_DISTANC': '', });
lyr_LOT_PARCEL_2.set('fieldImages', {'NEGERI': '', 'DAERAH': '', 'MUKIM': '', 'SEKSYEN': '', 'LOT': '', 'UPI': '', 'KELUASAN': '', 'KOD_KEGUNA': '', 'PA': '', 'STATUS': '', 'NOFAILUKUR': '', 'NAMAPEMILI': '', 'ALAMATPEMI': '', 'GUID': '', 'TARIKH_KEM': '', 'MI_PRINX': '', 'FASA': '', 'BLOCK': '', 'CLASS': '', 'KOD_TUJUAN': '', 'KELUASAN_P': '', 'KOD_UNITLU': '', });
lyr_BOUNDARY_MARKING_3.set('fieldImages', {'ID_BATU': '', 'UTARA': '', 'TIMUR': '', 'UTARA_RSO': '', 'TIMUR_RSO': '', });
lyr_BD_1.set('fieldLabels', {'UPI': 'no label', 'ADJPARCEL': 'no label', 'BEARING': 'header label', 'JARAK': 'header label', 'FNODE': 'no label', 'TNODE': 'no label', 'STATUS': 'no label', 'GUID': 'no label', 'TARIKH_KEM': 'no label', 'MI_PRINX': 'no label', 'BLOCK': 'no label', 'CLASS': 'no label', 'PA_BEARING': 'no label', 'PA_DISTANC': 'no label', });
lyr_LOT_PARCEL_2.set('fieldLabels', {'NEGERI': 'no label', 'DAERAH': 'inline label', 'MUKIM': 'inline label', 'SEKSYEN': 'inline label', 'LOT': 'inline label', 'UPI': 'no label', 'KELUASAN': 'inline label', 'KOD_KEGUNA': 'no label', 'PA': 'inline label', 'STATUS': 'header label', 'NOFAILUKUR': 'no label', 'NAMAPEMILI': 'no label', 'ALAMATPEMI': 'no label', 'GUID': 'no label', 'TARIKH_KEM': 'no label', 'MI_PRINX': 'no label', 'FASA': 'no label', 'BLOCK': 'no label', 'CLASS': 'no label', 'KOD_TUJUAN': 'no label', 'KELUASAN_P': 'no label', 'KOD_UNITLU': 'no label', });
lyr_BOUNDARY_MARKING_3.set('fieldLabels', {'ID_BATU': 'no label', 'UTARA': 'inline label', 'TIMUR': 'inline label', 'UTARA_RSO': 'no label', 'TIMUR_RSO': 'no label', });
lyr_BOUNDARY_MARKING_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});