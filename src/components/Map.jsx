import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
        style={{width:"100%", height:"100%", fontSize: "1.5rem", fontWeight: "bold"}}
    >
      <Geographies
        geography="/features.json"
        fill= "#ffc082"
        stroke="#42210d"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[20.4612, 44.8125]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#42210d",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#42210d">
          {"Belgrade"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
