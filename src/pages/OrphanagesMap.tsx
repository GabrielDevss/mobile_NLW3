import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/mapMarker.png';

export default function OrphanagesMap() {
  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map} 
      initialRegion={{
        latitude:-20.955136,
        longitude:-48.4704256,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
      >
        <Marker
        icon={mapMarker}
        calloutAnchor={{
          x: 2.7,
          y: 0.8,
        }}
        coordinate={{
          latitude:-20.955136,
          longitude:-48.4704256,
        }}
        >
          <Callout tooltip onPress={() => {}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}> 
        <Text style={styles.footerText}>2 orfanatos encontrado</Text>
        <TouchableOpacity style={styles.createOrphanagesBottom} onPress={() => {}}>
          <Feather name="plus" size={23} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 24,
    backgroundColor:' rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center'

  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'

  },
  footer: {
    position: 'absolute',
    left: 24,
    right:24,
    bottom: 24,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    elevation: 3
  },

  footerText: {
    color: '#8fa7b3',
   fontFamily: 'Nunito_700Bold'

  },
  createOrphanagesBottom: {
    width:56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  }
});