import { useEffect, useRef, useState, useCallback, Fragment } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
// import RoutingMachine from "./RoutingMachine";
import L from "leaflet";
import '../DashboardMap/style.css';


const DashboardMap = ({
}) => {
	// Constants
	// const location = useLocation();

	// States
	// const uselocation = useLocation();
	const [position, setPosition] = useState(null);

	const markerIcon = new L.icon({
		// iconUrl: require("./locationmarker.png"),
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		focus: true,
		draggable: false,
	});

	const greenmarkerIcon = new L.icon({
		// iconUrl: require("./GreenMarker.png"),
		iconSize: [100, 100],
		iconAnchor: [12, 41],
		popupAnchor: [41, -31],
		focus: true,
		draggable: false,
	});
	return (
		<Fragment>
			<MapContainer
				center={[29.9695, 76.8783]}
				zoom={13}
				scrollWheelZoom={true}
				minZoom={2}
				maxZoom={18}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				</MapContainer>
				</Fragment>
)
};
export default DashboardMap;
