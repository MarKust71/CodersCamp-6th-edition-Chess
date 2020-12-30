import King from "../src/pieces/king.js"


test("King construction with correct input.", ()=>{
    const defaultWhiteKing = new King(-1,-1,"white");
    const whiteKing = new King(3,4,"white");
    const defaultBlackKing = new King(-1,-1,"black");
    const blackKing = new King(3,4,"black");

    expect(defaultWhiteKing).toEqual(expect.objectContaining({
        x: 7,
        y: 4,
        name: "king",
        side: "white"
    }))

    expect(whiteKing).toEqual(expect.objectContaining({
        x: 3,
        y: 4,
        name: "king",
        side: "white"
    }))

    expect(defaultBlackKing).toEqual(expect.objectContaining({
        x: 0,
        y: 4,
        name: "king",
        side: "black"
    }))

    expect(blackKing).toEqual(expect.objectContaining({
        x: 3,
        y: 4,
        name: "king",
        side: "black"
    }))
})

test("King construction with incorrect input.", ()=>{
    expect(() => {
        const incorrectSideKing = new King(0,0, "aa")    
    }).toThrow(`Wrong value of parameter side`);

    expect(() => {
        const incorrectXArgKing = new King(10,0,"white")    
    }).toThrow(`x is out of range.`);

    expect(() => {
        const incorrectYArgKing = new King(0,-4, "black")    
    }).toThrow(`y is out of range.`);

    expect(() => {
        const everythingWrong = new King(10,-5,"bb")
    }).toThrow(`x is out of range.`);
})