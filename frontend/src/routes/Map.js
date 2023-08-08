import React, {useState, useMemo, useEffect} from 'react';

const {kakao} = window;

const Map = () => {

    useEffect(() => {
        mapScript();
    }, [])


    const mapScript = () => {
        const container = document.getElementById("map");
        const option = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 5
        }
        const map = new kakao.maps.Map(container, option);
        let markerPosition = new kakao.maps.LatLng(37.57144259075882, 126.98356371462782);
        let marker = new kakao.maps.Marker({
            position: markerPosition,
            clickable: true,
        });

        marker.setMap(map);

        let iwContent = '<div style="padding: 5px">Hello world</div>'
        const infoWindow = new kakao.maps.InfoWindow({
            content : iwContent
        });
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            // 마커 위에 인포윈도우를 표시합니다
            infoWindow.open(map, marker);
        });

    }

    return (
        <div id="map" style={{
            width: '50%',
            height: '80%',
        }}></div>
    )

}

export default Map;