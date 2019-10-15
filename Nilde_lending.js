var url = "https://medina.sba.unipi.it/nilde_bk.txt" + "?rv=" +Math.random();
$.get(url, function(data){
    console.log("Apre richiesta Nilde lending id " + data);
    openRequest('action_lending.php', data);
});
          
    
