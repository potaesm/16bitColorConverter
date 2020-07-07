function convert64kColorModeRGB() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        return "Please specify R G B arguments";
    }
    const R = args[0];
    const G = args[1];
    const B = args[2];
    let Rbin = (R >>> 0).toString(2);
    while (Rbin.length < 8) {
        Rbin = '0' + Rbin;
    }
    let Gbin = (G >>> 0).toString(2);
    while (Gbin.length < 8) {
        Gbin = '0' + Gbin;
    }
    let Bbin = (B >>> 0).toString(2);
    while (Bbin.length < 8) {
        Bbin = '0' + Bbin;
    }
    const concatRGBbin = Rbin.substring(0, 5) + Gbin.substring(0, 6) + Bbin.substring(0, 5);
    let hex = parseInt(concatRGBbin, 2).toString(16).toUpperCase();
    while (hex.length < 4) {
        hex = '0' + hex;
    }
    return "0x" + hex;
}

console.log(convert64kColorModeRGB());