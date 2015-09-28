var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "You need some shorts.";
    console.log(suitcase.shorts);
}