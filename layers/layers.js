ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([1.378631, 6.111333, 1.730841, 6.325144]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mesures_protection_1 = new ol.format.GeoJSON();
var features_Mesures_protection_1 = format_Mesures_protection_1.readFeatures(json_Mesures_protection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mesures_protection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_1.addFeatures(features_Mesures_protection_1);
var lyr_Mesures_protection_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_1, 
                style: style_Mesures_protection_1,
                popuplayertitle: 'Mesures_protection',
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_1.png" /> Mesures_protection'
            });
var format_qlq_infravulnerableobs_2 = new ol.format.GeoJSON();
var features_qlq_infravulnerableobs_2 = format_qlq_infravulnerableobs_2.readFeatures(json_qlq_infravulnerableobs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_qlq_infravulnerableobs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qlq_infravulnerableobs_2.addFeatures(features_qlq_infravulnerableobs_2);
var lyr_qlq_infravulnerableobs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qlq_infravulnerableobs_2, 
                style: style_qlq_infravulnerableobs_2,
                popuplayertitle: 'qlq_infra vulnerable obs',
                interactive: true,
                title: '<img src="styles/legend/qlq_infravulnerableobs_2.png" /> qlq_infra vulnerable obs'
            });
var format_Zone_dtude_3 = new ol.format.GeoJSON();
var features_Zone_dtude_3 = format_Zone_dtude_3.readFeatures(json_Zone_dtude_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Zone_dtude_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_dtude_3.addFeatures(features_Zone_dtude_3);
var lyr_Zone_dtude_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_dtude_3, 
                style: style_Zone_dtude_3,
                popuplayertitle: 'Zone_d\'étude',
                interactive: true,
                title: '<img src="styles/legend/Zone_dtude_3.png" /> Zone_d\'étude'
            });
var format_PaysTOGO_4 = new ol.format.GeoJSON();
var features_PaysTOGO_4 = format_PaysTOGO_4.readFeatures(json_PaysTOGO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaysTOGO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaysTOGO_4.addFeatures(features_PaysTOGO_4);
var lyr_PaysTOGO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaysTOGO_4, 
                style: style_PaysTOGO_4,
                popuplayertitle: 'PaysTOGO ',
                interactive: false,
                title: '<img src="styles/legend/PaysTOGO_4.png" /> PaysTOGO '
            });
var format_2054_5 = new ol.format.GeoJSON();
var features_2054_5 = format_2054_5.readFeatures(json_2054_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2054_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2054_5.addFeatures(features_2054_5);
var lyr_2054_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2054_5, 
                style: style_2054_5,
                popuplayertitle: '2054',
                interactive: true,
    title: '2054<br />\
    <img src="styles/legend/2054_5_0.png" /> accretion<br />\
    <img src="styles/legend/2054_5_1.png" /> erosion<br />'
        });
var format_2024_6 = new ol.format.GeoJSON();
var features_2024_6 = format_2024_6.readFeatures(json_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_6.addFeatures(features_2024_6);
var lyr_2024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_6, 
                style: style_2024_6,
                popuplayertitle: '2024',
                interactive: true,
    title: '2024<br />\
    <img src="styles/legend/2024_6_0.png" /> accretion<br />\
    <img src="styles/legend/2024_6_1.png" /> erosion<br />'
        });
var format_1990_7 = new ol.format.GeoJSON();
var features_1990_7 = format_1990_7.readFeatures(json_1990_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_1990_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1990_7.addFeatures(features_1990_7);
var lyr_1990_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1990_7, 
                style: style_1990_7,
                popuplayertitle: '1990',
                interactive: true,
    title: '1990<br />\
    <img src="styles/legend/1990_7_0.png" /> accretion<br />\
    <img src="styles/legend/1990_7_1.png" /> erosion<br />'
        });
var format_Hotspot_2054_8 = new ol.format.GeoJSON();
var features_Hotspot_2054_8 = format_Hotspot_2054_8.readFeatures(json_Hotspot_2054_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hotspot_2054_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspot_2054_8.addFeatures(features_Hotspot_2054_8);
var lyr_Hotspot_2054_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspot_2054_8, 
                style: style_Hotspot_2054_8,
                popuplayertitle: 'Hot spot_2054',
                interactive: true,
                title: '<img src="styles/legend/Hotspot_2054_8.png" /> Hot spot_2054'
            });
var format_Taux2024_2054man_9 = new ol.format.GeoJSON();
var features_Taux2024_2054man_9 = format_Taux2024_2054man_9.readFeatures(json_Taux2024_2054man_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Taux2024_2054man_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux2024_2054man_9.addFeatures(features_Taux2024_2054man_9);
var lyr_Taux2024_2054man_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux2024_2054man_9, 
                style: style_Taux2024_2054man_9,
                popuplayertitle: 'Taux 2024_2054(m/an)',
                interactive: true,
                title: 'Taux 2024_2054(m/an)'
            });
var format_TC2054_pessimiste_10 = new ol.format.GeoJSON();
var features_TC2054_pessimiste_10 = format_TC2054_pessimiste_10.readFeatures(json_TC2054_pessimiste_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2054_pessimiste_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2054_pessimiste_10.addFeatures(features_TC2054_pessimiste_10);
var lyr_TC2054_pessimiste_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2054_pessimiste_10, 
                style: style_TC2054_pessimiste_10,
                popuplayertitle: 'TC 2054_pessimiste',
                interactive: true,
                title: '<img src="styles/legend/TC2054_pessimiste_10.png" /> TC 2054_pessimiste'
            });
var format_TC2054_optimiste_11 = new ol.format.GeoJSON();
var features_TC2054_optimiste_11 = format_TC2054_optimiste_11.readFeatures(json_TC2054_optimiste_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2054_optimiste_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2054_optimiste_11.addFeatures(features_TC2054_optimiste_11);
var lyr_TC2054_optimiste_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2054_optimiste_11, 
                style: style_TC2054_optimiste_11,
                popuplayertitle: 'TC 2054_optimiste ',
                interactive: true,
                title: '<img src="styles/legend/TC2054_optimiste_11.png" /> TC 2054_optimiste '
            });
var format_1990_2024LRR_12 = new ol.format.GeoJSON();
var features_1990_2024LRR_12 = format_1990_2024LRR_12.readFeatures(json_1990_2024LRR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_1990_2024LRR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1990_2024LRR_12.addFeatures(features_1990_2024LRR_12);
var lyr_1990_2024LRR_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1990_2024LRR_12, 
                style: style_1990_2024LRR_12,
                popuplayertitle: '1990_2024(LRR)',
                interactive: true,
                title: '1990_2024(LRR)'
            });
var format_2001_2014EPR_13 = new ol.format.GeoJSON();
var features_2001_2014EPR_13 = format_2001_2014EPR_13.readFeatures(json_2001_2014EPR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2001_2014EPR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2001_2014EPR_13.addFeatures(features_2001_2014EPR_13);
var lyr_2001_2014EPR_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2001_2014EPR_13, 
                style: style_2001_2014EPR_13,
                popuplayertitle: '2001_2014(EPR)',
                interactive: true,
                title: '2001_2014(EPR)'
            });
var format_2014_2024EPR_14 = new ol.format.GeoJSON();
var features_2014_2024EPR_14 = format_2014_2024EPR_14.readFeatures(json_2014_2024EPR_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2014_2024EPR_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014_2024EPR_14.addFeatures(features_2014_2024EPR_14);
var lyr_2014_2024EPR_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014_2024EPR_14, 
                style: style_2014_2024EPR_14,
                popuplayertitle: '2014_2024(EPR)',
                interactive: true,
                title: '2014_2024(EPR)'
            });
var format_1990_2001EPR_15 = new ol.format.GeoJSON();
var features_1990_2001EPR_15 = format_1990_2001EPR_15.readFeatures(json_1990_2001EPR_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_1990_2001EPR_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1990_2001EPR_15.addFeatures(features_1990_2001EPR_15);
var lyr_1990_2001EPR_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1990_2001EPR_15, 
                style: style_1990_2001EPR_15,
                popuplayertitle: '1990_2001(EPR)',
                interactive: true,
                title: '1990_2001(EPR)'
            });
var format_Hotspot_2024_16 = new ol.format.GeoJSON();
var features_Hotspot_2024_16 = format_Hotspot_2024_16.readFeatures(json_Hotspot_2024_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hotspot_2024_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspot_2024_16.addFeatures(features_Hotspot_2024_16);
var lyr_Hotspot_2024_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspot_2024_16, 
                style: style_Hotspot_2024_16,
                popuplayertitle: 'Hot spot_2024',
                interactive: true,
                title: '<img src="styles/legend/Hotspot_2024_16.png" /> Hot spot_2024'
            });
var format_TC2024_17 = new ol.format.GeoJSON();
var features_TC2024_17 = format_TC2024_17.readFeatures(json_TC2024_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2024_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2024_17.addFeatures(features_TC2024_17);
var lyr_TC2024_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2024_17, 
                style: style_TC2024_17,
                popuplayertitle: 'TC 2024',
                interactive: true,
                title: '<img src="styles/legend/TC2024_17.png" /> TC 2024'
            });
var format_TC2014_18 = new ol.format.GeoJSON();
var features_TC2014_18 = format_TC2014_18.readFeatures(json_TC2014_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2014_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2014_18.addFeatures(features_TC2014_18);
var lyr_TC2014_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2014_18, 
                style: style_TC2014_18,
                popuplayertitle: 'TC 2014',
                interactive: true,
                title: '<img src="styles/legend/TC2014_18.png" /> TC 2014'
            });
var format_TC2001_19 = new ol.format.GeoJSON();
var features_TC2001_19 = format_TC2001_19.readFeatures(json_TC2001_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC2001_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2001_19.addFeatures(features_TC2001_19);
var lyr_TC2001_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2001_19, 
                style: style_TC2001_19,
                popuplayertitle: 'TC 2001',
                interactive: true,
                title: '<img src="styles/legend/TC2001_19.png" /> TC 2001'
            });
var format_TC1990_20 = new ol.format.GeoJSON();
var features_TC1990_20 = format_TC1990_20.readFeatures(json_TC1990_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TC1990_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC1990_20.addFeatures(features_TC1990_20);
var lyr_TC1990_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC1990_20, 
                style: style_TC1990_20,
                popuplayertitle: 'TC 1990',
                interactive: true,
                title: '<img src="styles/legend/TC1990_20.png" /> TC 1990'
            });
var group_Traits_cte_ancien = new ol.layer.Group({
                                layers: [lyr_Hotspot_2024_16,lyr_TC2024_17,lyr_TC2014_18,lyr_TC2001_19,lyr_TC1990_20,],
                                fold: "open",
                                title: 'Traits_côte_ancien'});
var group_TauxparTransects = new ol.layer.Group({
                                layers: [lyr_1990_2024LRR_12,lyr_2001_2014EPR_13,lyr_2014_2024EPR_14,lyr_1990_2001EPR_15,],
                                fold: "open",
                                title: 'Taux par Transects'});
var group_Prvisiondrosion = new ol.layer.Group({
                                layers: [lyr_Taux2024_2054man_9,lyr_TC2054_pessimiste_10,lyr_TC2054_optimiste_11,],
                                fold: "open",
                                title: 'Prévision d\'érosion'});
var group_Danger2054 = new ol.layer.Group({
                                layers: [lyr_Hotspot_2054_8,],
                                fold: "open",
                                title: 'Danger 2054'});
var group_Superficie_perdue = new ol.layer.Group({
                                layers: [lyr_2054_5,lyr_2024_6,lyr_1990_7,],
                                fold: "open",
                                title: 'Superficie_perdue'});
var group_References = new ol.layer.Group({
                                layers: [lyr_Mesures_protection_1,lyr_qlq_infravulnerableobs_2,lyr_Zone_dtude_3,lyr_PaysTOGO_4,],
                                fold: "open",
                                title: 'References'});

lyr_OSMStandard_0.setVisible(true);lyr_Mesures_protection_1.setVisible(true);lyr_qlq_infravulnerableobs_2.setVisible(true);lyr_Zone_dtude_3.setVisible(true);lyr_PaysTOGO_4.setVisible(true);lyr_2054_5.setVisible(true);lyr_2024_6.setVisible(true);lyr_1990_7.setVisible(true);lyr_Hotspot_2054_8.setVisible(true);lyr_Taux2024_2054man_9.setVisible(true);lyr_TC2054_pessimiste_10.setVisible(true);lyr_TC2054_optimiste_11.setVisible(true);lyr_1990_2024LRR_12.setVisible(true);lyr_2001_2014EPR_13.setVisible(true);lyr_2014_2024EPR_14.setVisible(true);lyr_1990_2001EPR_15.setVisible(true);lyr_Hotspot_2024_16.setVisible(true);lyr_TC2024_17.setVisible(true);lyr_TC2014_18.setVisible(true);lyr_TC2001_19.setVisible(true);lyr_TC1990_20.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_References,group_Superficie_perdue,group_Danger2054,group_Prvisiondrosion,group_TauxparTransects,group_Traits_cte_ancien];
lyr_Mesures_protection_1.set('fieldAliases', {'creator': 'creator', 'version': 'version', 'lat': 'lat', 'lon': 'lon', 'ns1_name': 'ns1_name', 'ns1_ele': 'ns1_ele', 'ns1_time': 'ns1_time', });
lyr_qlq_infravulnerableobs_2.set('fieldAliases', {'creator': 'creator', 'version': 'version', 'lat': 'lat', 'lon': 'lon', 'ns1_name': 'vulnérable_entité', 'ns1_ele': 'ns1_ele', 'ns1_time': 'ns1_time', 'id': 'id', 'photo': 'photo', });
lyr_Zone_dtude_3.set('fieldAliases', {});
lyr_PaysTOGO_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Superficie': 'superficie(km²)', });
lyr_2054_5.set('fieldAliases', {'Id': 'Id', 'superficie': 'superficie(km²)', 'type': 'type', });
lyr_2024_6.set('fieldAliases', {'Id': 'Id', 'Superficie': 'superficie(km²)', 'Typ_': 'type', });
lyr_1990_7.set('fieldAliases', {'Id': 'Id', 'superficie': 'superficie(km²)', 'type': 'type', });
lyr_Hotspot_2054_8.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', 'ORIG_FID': 'ORIG_FID', 'village': 'village', });
lyr_Taux2024_2054man_9.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', });
lyr_TC2054_pessimiste_10.set('fieldAliases', {'Id': 'Id', 'loca': 'loca', });
lyr_TC2054_optimiste_11.set('fieldAliases', {'Id': 'Id', 'name': 'name', 'an': 'an', 'optimist': 'optimist', });
lyr_1990_2024LRR_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR(m/an)', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_2001_2014EPR_13.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_2014_2024EPR_14.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_1990_2001EPR_15.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Hotspot_2024_16.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'ORIG_FID': 'ORIG_FID', 'VILLAGE': 'VILLAGE', });
lyr_TC2024_17.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC2014_18.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC2001_19.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC1990_20.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_Mesures_protection_1.set('fieldImages', {'creator': 'Hidden', 'version': 'Hidden', 'lat': 'Hidden', 'lon': 'Hidden', 'ns1_name': 'Hidden', 'ns1_ele': 'Hidden', 'ns1_time': 'Hidden', });
lyr_qlq_infravulnerableobs_2.set('fieldImages', {'creator': 'Hidden', 'version': 'Hidden', 'lat': 'Hidden', 'lon': 'Hidden', 'ns1_name': 'TextEdit', 'ns1_ele': 'Hidden', 'ns1_time': 'Hidden', 'id': 'Hidden', 'photo': 'ExternalResource', });
lyr_Zone_dtude_3.set('fieldImages', {});
lyr_PaysTOGO_4.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'ADM0_FR': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM0_REF': 'Hidden', 'date': 'Hidden', 'validOn': 'Hidden', 'validTo': 'Hidden', 'Superficie': 'TextEdit', });
lyr_2054_5.set('fieldImages', {'Id': 'Hidden', 'superficie': 'TextEdit', 'type': 'TextEdit', });
lyr_2024_6.set('fieldImages', {'Id': 'Hidden', 'Superficie': 'TextEdit', 'Typ_': 'TextEdit', });
lyr_1990_7.set('fieldImages', {'Id': 'Hidden', 'superficie': 'TextEdit', 'type': 'TextEdit', });
lyr_Hotspot_2054_8.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', 'ORIG_FID': 'TextEdit', 'village': 'TextEdit', });
lyr_Taux2024_2054man_9.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_TC2054_pessimiste_10.set('fieldImages', {'Id': 'Hidden', 'loca': 'Hidden', });
lyr_TC2054_optimiste_11.set('fieldImages', {'Id': 'Range', 'name': 'Range', 'an': 'Range', 'optimist': 'TextEdit', });
lyr_1990_2024LRR_12.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'TextEdit', 'LR2': 'Hidden', 'LCI': 'Hidden', 'LSE': 'Hidden', 'EPR': 'Hidden', 'EPRunc': 'Hidden', 'NSM': 'Hidden', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_2001_2014EPR_13.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_2014_2024EPR_14.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_1990_2001EPR_15.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Hotspot_2024_16.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'ORIG_FID': 'TextEdit', 'VILLAGE': 'TextEdit', });
lyr_TC2024_17.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_TC2014_18.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_TC2001_19.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_TC1990_20.set('fieldImages', {'Id': 'Hidden', 'Date_': 'DateTime', 'Uncertaint': 'Hidden', });
lyr_Mesures_protection_1.set('fieldLabels', {});
lyr_qlq_infravulnerableobs_2.set('fieldLabels', {'ns1_name': 'inline label - always visible', 'photo': 'inline label - always visible', });
lyr_Zone_dtude_3.set('fieldLabels', {});
lyr_PaysTOGO_4.set('fieldLabels', {'Superficie': 'inline label - always visible', });
lyr_2054_5.set('fieldLabels', {'superficie': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_2024_6.set('fieldLabels', {'Superficie': 'inline label - always visible', 'Typ_': 'inline label - always visible', });
lyr_1990_7.set('fieldLabels', {'superficie': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_Hotspot_2054_8.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'inline label - visible with data', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', 'ORIG_FID': 'no label', 'village': 'no label', });
lyr_Taux2024_2054man_9.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', });
lyr_TC2054_pessimiste_10.set('fieldLabels', {});
lyr_TC2054_optimiste_11.set('fieldLabels', {'Id': 'no label', 'name': 'no label', 'an': 'no label', 'optimist': 'no label', });
lyr_1990_2024LRR_12.set('fieldLabels', {'LRR': 'inline label - always visible', });
lyr_2001_2014EPR_13.set('fieldLabels', {'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', });
lyr_2014_2024EPR_14.set('fieldLabels', {'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', });
lyr_1990_2001EPR_15.set('fieldLabels', {'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', });
lyr_Hotspot_2024_16.set('fieldLabels', {'ObjectID': 'header label - visible with data', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'ORIG_FID': 'no label', 'VILLAGE': 'no label', });
lyr_TC2024_17.set('fieldLabels', {'Date_': 'inline label - always visible', });
lyr_TC2014_18.set('fieldLabels', {'Date_': 'hidden field', });
lyr_TC2001_19.set('fieldLabels', {'Date_': 'inline label - always visible', });
lyr_TC1990_20.set('fieldLabels', {'Date_': 'inline label - always visible', });
lyr_TC1990_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});