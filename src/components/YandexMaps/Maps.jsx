import './Maps.scss';
import { YMaps, Map, Placemark, GeolocationControl, RouteButton, FullscreenControl } from 'react-yandex-maps';

export default function YandexMaps() {

    return (
        <div className="mapContainer" style={{width:'100%', height:'564px', position:'relative'}}>
            <YMaps>
            <div className="mapBox">
                <Map width='100%' height='564px' defaultState={{
                    center: [41.310629, 69.278123],
                    zoom: 5,
                    controls: [],
                }}>
                <Placemark geometry={[41.310629, 69.278123]} />
                <GeolocationControl options={{float: 'left'}} />
                <RouteButton options={{float: 'right'}} />
                <FullscreenControl />
                </Map>
            </div>
        </YMaps>
        </div>
    )
}