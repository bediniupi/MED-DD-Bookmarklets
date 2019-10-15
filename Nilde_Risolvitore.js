var pmid = document.getElementById("ri_pmid").value;
if (!pmid) {
    alert("PMID non trovato");
    return;
    }
window.open("http://medina.sba.unipi.it/intranet/acnp/pubmed_acnp.php" + "?pmid=" + pmid);
