var swap = function(array, firstIndex, secondIndex) {
    var variable = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = variable;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);
Program.assertEqual(testArray, [9, 7, 4]);

var testArray = [7, 9, 4];
swap(testArray, 0, 2);
Program.assertEqual(testArray, [4, 9, 7]);

var testArray = [7, 9, 4];
swap(testArray, 1, 2);
Program.assertEqual(testArray, [7, 4, 9]);
