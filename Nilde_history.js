function ddchange() {
    var _dd = document.getElementById('ddid');
    if (!_dd) {
        window.requestAnimationFrame(ddchange);
    } else {
        var url = "https://medina.sba.unipi.it/nilde_bk.txt" + "?rv=" +Math.random();
        $.get(url, function(data){
        _dd.value=data;
        historyDDSeach(3);
        });
          
    }
}
changeHistorySearch(3);
window.requestAnimationFrame(ddchange);
