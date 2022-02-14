describe("SubArray Frequencies suite", function() {
    it(`Input:
    arr: [1, 2]
    m: 2
    Expected Output:
    [1]`, function() {
      expect(solution ([1, 2], 2)).toEqual([1]);
    });

    it(`Input:
    arr: [1, 3, 2, 2, 3]
    m: 4
    Expected Output:
    [2, 2]`, function() {
      expect(solution ([1, 3, 2, 2, 3], 4)).toEqual([2, 2]);
    });

    it(`Input:
    arr: [2, 1, 2, 3, 3, 2, 2, 2, 2, 1]
    m: 3
    Expected Output:
    [2, 1, 2, 2, 2, 3, 3, 2]`, function() {
      expect(solution ([2, 1, 2, 3, 3, 2, 2, 2, 2, 1], 3)).toEqual([2, 1, 2, 2, 2, 3, 3, 2]);
    });
  });