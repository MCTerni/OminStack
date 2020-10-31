
import L from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = L.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [178, 2]
  })

export const mapCenterLocation = [-23.5509507, -46.6348859];

export default mapIcon;