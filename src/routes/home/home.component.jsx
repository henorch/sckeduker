import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './home.styles.css'
import { useContext } from "react";
import { LocationContext } from "../../context/location.context";

const position = [9.0820, 8.6753]

const LOCATIONS = [
    {
        "id":1,
        "place": "Lagos",
        "position": [7.5244, 4.3792]
    },
    {
        "id":2,
        "place": "Abuja",
        "position": [9.0820, 8.6753]
    }
]

const addToLocation = (currentUserLocation) => LOCATIONS.push(currentUserLocation); 

const Home = () => {

    const { currentLocation } = useContext(LocationContext);
    const me = { "id" : 3,
             "place": "ogun",
            "position": currentLocation};
        
    addToLocation(me);

    console.log(me.position);

    
    return(
        <div className="leaflet-container">
        <MapContainer center={position} zoom={6} 
        style={{height: "100vh"}}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {LOCATIONS.map((location) => <Marker key={location.id}
        position={[location.position[0], location.position[1]]}
        />)}
      </MapContainer>
      </div>
    )
}
export default Home;