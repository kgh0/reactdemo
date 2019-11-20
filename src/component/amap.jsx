import * as React from 'react';
var AMap= window.AMap;
class GaoDeMap extends React.Component {
 componentDidMount() {
        // debugger;
        // let map = new BMap.Map("bdmap");
        // let point = new BMap.Point(116.404, 39.915); // 创建点坐标
        // map.centerAndZoom(point, 12); // 初始化地图，设置中心点坐标和地图级别
        // map.enableScrollWheelZoom(true);
        debugger;
        var map = new AMap.Map('gdmap', {
            zooms: [4, 18],//设置地图级别范围
            zoom: 10,
            scrollWheel: true,
            resizeEnable: true,
            viewMode: '3D'//使用3D视图
        });
        window["map"] = map;
    }
 render() {
        return (
            <div id='gdmap' style={{ height: '100%', flex: 1 }} />
        );
    }
};
export default GaoDeMap;