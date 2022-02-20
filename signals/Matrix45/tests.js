describe("Matrix45 suite", function() {
    it(`Input:
    matrix:
    [[1,2,3,4,0], 
     [5,6,7,8,1], 
     [3,2,4,1,4], 
     [4,3,5,1,6]]
    a: 2
    b: 3
    Expected Output:
    36`, function() {
        expect(solution([[1,2,3,4,0], 
            [5,6,7,8,1], 
            [3,2,4,1,4], 
            [4,3,5,1,6]], 2, 3)).toEqual(36);
    });

    it(`Input:
    matrix:
    [[117,802,905,300,2,829,667,817,322,688,747,411,975,468,543,774,781,742,55,855], 
     [683,168,120,960,466,570,341,12,74,587,765,111,95,340,263,658,87,979,678,799]]
    a: 1
    b: 2
    Expected Output:
    1865`, function() {
        expect(solution([[117,802,905,300,2,829,667,817,322,688,747,411,975,468,543,774,781,742,55,855], 
            [683,168,120,960,466,570,341,12,74,587,765,111,95,340,263,658,87,979,678,799]], 1, 2)).toEqual(1865);
    });

    it(`Input:
    matrix:
    [[11,80,66,62], 
     [51,10,26,73], 
     [31,4,25,12], 
     [10,24,32,88], 
     [97,36,39,88], 
     [32,20,79,15], 
     [2,34,90,29], 
     [28,73,30,7], 
     [1,82,79,38], 
     [35,17,88,82]]
    a: 1
    b: 4
    Expected Output:
    236`, function() {
        expect(solution([[11,80,66,62], 
            [51,10,26,73], 
            [31,4,25,12], 
            [10,24,32,88], 
            [97,36,39,88], 
            [32,20,79,15], 
            [2,34,90,29], 
            [28,73,30,7], 
            [1,82,79,38], 
            [35,17,88,82]], 1, 4)).toEqual(236);
    });
});