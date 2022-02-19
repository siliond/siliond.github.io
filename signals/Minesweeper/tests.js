describe("Minesweeper suite", function() {
    it(`Input:
    field:
    [[false,true,true], 
     [true,false,true], 
     [false,false,true]]
    x: 1
    y: 1
    Expected Output:
    [[-1,-1,-1], 
     [-1,5,-1], 
     [-1,-1,-1]]`, function() {
        expect(solution([
            [false, true, true],
            [true, false, true],
            [false, false, true]
        ], 1, 1)).toEqual([
            [-1, -1, -1],
            [-1, 5, -1],
            [-1, -1, -1]
        ]);
    });
/*
    it(`Input:
    field:
    [[true,false,false,false,true,false], 
     [false,false,false,false,false,false], 
     [false,false,false,false,false,false], 
     [false,false,false,false,false,false], 
     [true,false,false,false,false,true], 
     [true,false,false,false,false,true], 
     [true,true,true,false,false,false]]
    x: 2
    y: 2
    Expected Output:
    [[-1,1,0,1,-1,-1], 
     [1,1,0,1,1,1], 
     [0,0,0,0,0,0], 
     [1,1,0,0,1,1], 
     [-1,2,0,0,2,-1], 
     [-1,5,2,1,2,-1], 
     [-1,-1,-1,-1,-1,-1]]`, function() {
        expect(solution([
            [true, false, false, false, true, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [true, false, false, false, false, true],
            [true, false, false, false, false, true],
            [true, true, true, false, false, false]
        ], 2, 2)).toEqual([
            [-1, 1, 0, 1, -1, -1],
            [1, 1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 1, 1],
            [-1, 2, 0, 0, 2, -1],
            [-1, 5, 2, 1, 2, -1],
            [-1, -1, -1, -1, -1, -1]
        ]);
    });
*/
});