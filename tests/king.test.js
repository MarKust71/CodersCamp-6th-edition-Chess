import King from '../src/pieces/king.js';
import Rook from '../src/pieces/rook.js';

test('King construction with correct input.', () => {
    const defaultWhiteKing = new King(-1, -1, 'white');
    const whiteKing = new King(3, 4, 'white');
    const defaultBlackKing = new King(-1, -1, 'black');
    const blackKing = new King(3, 4, 'black');
    const kingStringCoord = new King('5', '6', 'white');

    expect(defaultWhiteKing).toEqual(
        expect.objectContaining({
            x: 7,
            y: 4,
            name: 'king',
            side: 'white',
        }),
    );

    expect(whiteKing).toEqual(
        expect.objectContaining({
            x: 3,
            y: 4,
            name: 'king',
            side: 'white',
        }),
    );

    expect(defaultBlackKing).toEqual(
        expect.objectContaining({
            x: 0,
            y: 4,
            name: 'king',
            side: 'black',
        }),
    );

    expect(blackKing).toEqual(
        expect.objectContaining({
            x: 3,
            y: 4,
            name: 'king',
            side: 'black',
        }),
    );

    expect(kingStringCoord).toEqual(
        expect.objectContaining({
            x: 5,
            y: 6,
            name: 'king',
            side: 'white',
        }),
    );
});

test('King construction with incorrect input.', () => {
    expect(() => {
        const incorrectSideKing = new King(0, 0, 'aa');
    }).toThrow(`Wrong value of parameter side`);

    expect(() => {
        const incorrectXArgKing = new King(10, 0, 'white');
    }).toThrow(`x is out of range.`);

    expect(() => {
        const incorrectYArgKing = new King(0, -4, 'black');
    }).toThrow(`y is out of range.`);

    expect(() => {
        const everythingWrong = new King(10, -5, 'bb');
    }).toThrow(`x is out of range.`);
});

test('On edge legal moves detection.', () => {
    const kingInCorner = new King(0, 0, 'white');
    const kingOnLeftEdge = new King(4, 0, 'white');
    const kingOnTopEdge = new King(0, 4, 'white');
    const kingOnRightEdge = new King(4, 7, 'white');
    const kingOnBottomEdge = new King(7, 4, 'whtie');

    expect(kingInCorner.findLegalMoves()).toEqual(
        expect.arrayContaining([
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 0, y: 1 },
        ]),
    );
    expect(kingOnLeftEdge.findLegalMoves()).toEqual(
        expect.arrayContaining([
            { x: 3, y: 0 },
            { x: 5, y: 0 },
            { x: 3, y: 1 },
            { x: 5, y: 1 },
            { x: 4, y: 1 },
        ]),
    );
    expect(kingOnTopEdge.findLegalMoves()).toEqual(
        expect.arrayContaining([
            { x: 0, y: 3 },
            { x: 0, y: 5 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
            { x: 1, y: 5 },
        ]),
    );
    expect(kingOnRightEdge.findLegalMoves()).toEqual(
        expect.arrayContaining([
            { x: 3, y: 7 },
            { x: 5, y: 7 },
            { x: 4, y: 6 },
            { x: 5, y: 6 },
            { x: 3, y: 6 },
        ]),
    );
    expect(kingOnBottomEdge.findLegalMoves()).toEqual(
        expect.arrayContaining([
            { x: 7, y: 3 },
            { x: 7, y: 5 },
            { x: 6, y: 3 },
            { x: 6, y: 4 },
            { x: 6, y: 5 },
        ]),
    );
});

test('Same side pieces blocks legal moves.', () => {
    const board = new Array(8);
    for (let i = 0; i < 8; i++) {
        board[i] = new Array(8);
    }

    const kingOne = new King(3, 3, 'white');
    const kingTwo = new King(4, 3, 'white');
    const pawnOne = new Pawn(2, 3, 'white');
    board[3][3] = kingOne;
    board[4][3] = kingTwo;
    board[2][3] = pawnOne;

    expect(kingOne.findLegalMoves()).toEqual(
        expect.not.arrayContaining([
            { x: 4, y: 3 },
            { x: 2, y: 3 },
        ]),
    );
});

test('Allows attacking opponents pieces.', () => {
    const board = new Array(8);
    for (let i = 0; i < 8; i++) {
        board[i] = new Array(8);
    }

    const king = new King(3, 3, 'white');
    const pawnOne = new Pawn(3, 4, 'black');
    const pawnTwo = new Pawn(3, 2, 'black');

    board[3][3] = king;
    board[3][4] = pawnOne;
    board[3][2] = pawnTwo;

    expect(kingOne.findLegalMoves()).toEqual(
        expect.not.arrayContaining([
            { x: 3, y: 4 },
            { x: 3, y: 2 },
        ]),
    );
});

test("Don't allow moving on squares and attacking pieces that are backed by enemy.", () => {
    const board = new Array(8);
    for (let i = 0; i < 8; i++) {
        board[i] = new Array(8);
    }

    const king = new King(3, 3, 'white');
    const pawnOne = new Pawn(3, 2, 'black');
    const pawnTwo = new Pawn(2, 1, 'black');
    const rook = new Rook(0, 4, 'black');

    board[3][3] = king;
    board[3][2] = pawnOne;
    board[2][1] = pawnTwo;
    board[0][4] = rook;

    expect(king.findLegalMoves()).toEqual(
        except.not.arrayContaining([
            { x: 3, y: 2 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
            { x: 4, y: 4 },
        ]),
    );
});

//test("Detects if is under the check.",()=>{})

//test("Making castle.",()=>{})

//test("Detects stale.",()=>{})
