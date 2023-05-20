import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "./restaurants.json";
import * as matchboxes from "./matchboxes";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGlseWVsbGUiLCJhIjoiNzBlNjkxMjJjMmZkOTk3NTUzNWIwMDc4N2IxZmFkNGEifQ.LZYRPY8cYNO4abhaux-v_A";

const images = [
  { url: matchboxes.a, id: "a" },
  { url: matchboxes.b, id: "b" },
  { url: matchboxes.c, id: "c" },
  { url: matchboxes.d, id: "d" },
  { url: matchboxes.e, id: "e" },
  { url: matchboxes.f, id: "f" },
  { url: matchboxes.g, id: "g" },
  { url: matchboxes.h, id: "h" },
  { url: matchboxes.i, id: "i" },
  { url: matchboxes.j, id: "j" },
  { url: matchboxes.k, id: "k" },
  { url: matchboxes.l, id: "l" },
  { url: matchboxes.m, id: "m" },
  { url: matchboxes.n, id: "n" },
  { url: matchboxes.o, id: "o" },
  { url: matchboxes.p, id: "p" },
  { url: matchboxes.q, id: "q" },
  { url: matchboxes.r, id: "r" },
  { url: matchboxes.s, id: "s" },
  { url: matchboxes.t, id: "t" },
  { url: matchboxes.u, id: "u" },
  { url: matchboxes.v, id: "v" },
  { url: matchboxes.w, id: "w" },
  { url: matchboxes.x, id: "x" },
  { url: matchboxes.y, id: "y" },
  { url: matchboxes.z, id: "z" },
  { url: matchboxes.zero, id: "zero" },
  { url: matchboxes.one, id: "one" },
  { url: matchboxes.two, id: "two" },
  { url: matchboxes.three, id: "three" },
  { url: matchboxes.four, id: "four" },
  { url: matchboxes.five, id: "five" },
  { url: matchboxes.six, id: "six" },
  { url: matchboxes.seven, id: "seven" },
  { url: matchboxes.eight, id: "eight" },
  { url: matchboxes.nine, id: "nine" },
];

const Map = () => {
  const mapContainer = useRef(null);
  //   const map = useRef(null);
  //   const [lng, setLng] = useState(-73.948708);
  //   const [lat, setLat] = useState(40.729115);
  //   const [zoom, setZoom] = useState(11);

  //create the map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-73.975382, 40.691965],
      zoom: 12,
      logoPosition: "top-right",
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      images.map((img) => {
        map.loadImage(img.url, function (error, res) {
          if (error) throw error;
          map.addImage(img.id, res);
        });
      });
      // Add a GeoJSON source with multiple points
      map.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: geoJson.features,
        },
      });

      map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": ["get", "img"],
          "icon-size": 0.2,
          "icon-allow-overlap": true,
          "icon-ignore-placement": true,
          //   "icon-rotate": [
          //     "interpolate",
          //     ["linear"],
          //     ["icon-rotate"],
          //     -1,
          //     Math.random(),
          //     1,
          //     Math.random(),
          //   ],
        },
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on("click", "points", (e) => {
        // Put json properties together to build popup content
        const prop = e.features[0].properties;
        const coordinates = e.features[0].geometry.coordinates.slice();
        const title = `<h2><a href=${prop.url} target='blank' title='Opens in a new window'>${prop.title}</a></h2>`;
        const description = `<p>${prop.description}</p>`;
        const meta = `<p class="meta">${prop.meta}</p>`;
        //match each image id with its url in the popup
        const imgUrl = images.find((item) => prop.img === item.id);
        const popupImage = `<p><img class="popupImage" src=${imgUrl.url}></img></p>`;

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(popupImage + meta + title + description)
          .addTo(map);

        window.dataLayer.push({
          event: "event",
          eventProps: {
            category: "popup",
            action: "click",
            label: prop.title,
          },
        });
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on("mouseenter", "points", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "points", () => {
        map.getCanvas().style.cursor = "";
      });
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
