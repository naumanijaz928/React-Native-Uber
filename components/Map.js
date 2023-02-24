import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      mapType="mutedStandard"
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location?.lat || 31.472,
        longitude: origin?.location?.lng || 74.3724,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {(origin?.location || true) && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat || 31.472,
            longitude: origin?.location?.lng || 74.3724,
          }}
          title="Origin"
          description={origin?.description || "DHA tekboox"}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
