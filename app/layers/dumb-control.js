export default L.Control.extend({
  options: {
  position: 'topleft' 
  //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
  },
  onAdd: function (map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
 
    container.style.backgroundColor = 'white';
    container.style.width = '30px';
    container.style.height = '30px';
 
    container.onclick = function(){
      console.log('buttonClicked');
    }
    return container;
  }
});

