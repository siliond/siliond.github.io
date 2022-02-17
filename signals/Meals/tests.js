describe("SubArray Frequencies suite", function() {
    it(`Input:
    cntProducts: 2
    quantities:
    [[1,3], 
     [2,1], 
     [1,3]]
    costs:
    [[2,4], 
     [5,2], 
     [4,1]]
    meals:
    [[1,1], 
     [2,2], 
     [3,4]]
    Expected Output:
    [3, 8, 19]`, function() {
        expect(solution(2, [
            [1, 3],
            [2, 1],
            [1, 3]
        ], [
            [2, 4],
            [5, 2],
            [4, 1]
        ], [
            [1, 1],
            [2, 2],
            [3, 4]
        ])).toEqual([3, 8, 19]);
    });

    it(`Input:
        cntProducts: 2
        quantities:
        [[1000,1000], 
         [1000,0]]
        costs:
        [[1,1], 
         [1000,1000]]
        meals: [[2000,1000]]
        Expected Output:
        [1002000]`, function() {
        expect(solution(2, [
            [1000, 1000],
            [1000, 0]
        ], [
            [1, 1],
            [1000, 1000]
        ], [
            [2000, 1000]
        ])).toEqual([1002000]);
    });

    it(`Input:
        cntProducts: 3
        quantities:
        [[1,2,5], 
         [4,3,5], 
         [1,2,4], 
         [4,1,2]]
        costs:
        [[3,1,4], 
         [1,5,1], 
         [4,4,4], 
         [5,1,2]]
        meals:
        [[1,3,3], 
         [2,1,3], 
         [0,3,6], 
         [2,0,3], 
         [1,4,4], 
         [2,1,2]]
        Expected Output:
        [11, 6, 16, 5, 17, 5]`, function() {
        expect(solution(3, [
            [1, 2, 5],
            [4, 3, 5],
            [1, 2, 4],
            [4, 1, 2]
        ], [
            [3, 1, 4],
            [1, 5, 1],
            [4, 4, 4],
            [5, 1, 2]
        ], [
            [1, 3, 3],
            [2, 1, 3],
            [0, 3, 6],
            [2, 0, 3],
            [1, 4, 4],
            [2, 1, 2]
        ])).toEqual([11, 6, 16, 5, 17, 5]);
    });
});