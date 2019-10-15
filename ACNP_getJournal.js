function get_el(xp, wipe) {
    if (wipe=="QSEL") {
        var res = document.querySelector(xp);
        return res;
           }
       
    try {
        var res = document.evaluate(xp, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
    } 
    catch (err) {
        return "";
        }
        return res.replace(wipe, "");    
}
var hold = get_el("//span[contains(text(),'Posseduto')]", "Posseduto: ");
var lac = get_el("//div[contains(text(),'Lacune')]", "Lacune: ");
var col = get_el("//div[contains(text(),'Collocazione')]", "Collocazione: ");
var ftext = get_el("//span[contains(text(),'FULL TEXT')]", "");
var epub = get_el("a[href*=onesearch]","QSEL");
if (epub) epub = epub.text;
var jtitle = get_el("a[href*=journal\\/]","QSEL");
var acnp = jtitle.getAttribute("href").replace("/journal/", "");
jtitle = jtitle.text.toUpperCase();
jtitle = jtitle.replace("*", "");
jtitle = jtitle.replace(/\(.+?\)/, "");
var q="?bk=1&titolo="+jtitle+"&acnp_catno="+acnp+"&consistenza="+hold+"&ep="+epub+"&collocazione="+col+"&lacune="+lac;
window.open("http://medina.sba.unipi.it/intranet/modcat.php"+q);
