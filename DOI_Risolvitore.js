var _cn = document.documentElement.innerHTML;
var _doi = _cn.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
if (!_doi) {
    alert("Nessun doi trovato.");
    return;
}
alert ("Doi trovato: " + doi);
window.open("http://medina.sba.unipi.it/intranet/acnp/pubmed_acnp.php" + "?pmid=" + _doi);
