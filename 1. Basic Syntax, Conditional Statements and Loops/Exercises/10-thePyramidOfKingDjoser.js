function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let layer = 0;
    
    for (let i = base; i >= 1; i -= 2) {
        layer++;
        let currentBase = (i * i);
        let outer = (i * 4 - 4);
        let bulk = (currentBase - outer);
        
        if (currentBase <= 4) {
            gold += currentBase;
        } else if (layer % 5 === 0) {
            stone += bulk;
            lapis += outer;
        } else {
            stone += bulk;
            marble += outer;
        }
    }
    let height = layer * increment;

    let totalStone = Math.ceil(stone * increment);
    let totalMarble = Math.ceil(marble * increment);
    let totalLapis = Math.ceil(lapis * increment);
    let totalGold = Math.ceil(gold * increment);

    console.log(`Stone required: ${totalStone}`);
    console.log(`Marble required: ${totalMarble}`);
    console.log(`Lapis Lazuli required: ${totalLapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
