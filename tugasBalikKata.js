/* Tugas balik kata */
// Muhammad Rizwan

function balikKata(kata) {
    var kataBaru = "";
    for(var i=kata.length-1; i>=0; i--) {
        kataBaru += kata.substr(i, 1);
    }
    return kataBaru;
}
console.log(balikKata("Niomic!"));
console.log(balikKata("Javascript!"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
