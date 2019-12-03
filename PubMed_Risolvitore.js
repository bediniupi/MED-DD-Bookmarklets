var pmid = $('strong:first[title="PubMed ID"]').text();
if (!pmid) {
 alert("PMID non trovato.");   
 return;
}
window.open("http://medina.sba.unipi.it/intranet/acnp/pubmed_acnp.php" + "?pmid=" + pmid);
