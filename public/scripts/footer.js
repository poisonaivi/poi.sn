function footerLoaded() {
    document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();
}
try {
    loadElement("footer.html", "footer");
    loadElement("simpleFooter.html", "simpleFooter");
} catch (error) {}