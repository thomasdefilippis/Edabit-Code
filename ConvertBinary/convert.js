function minSwaps(s1, s2) {
    let numberOfSwaps = s1.split('').filter((bin, index) => bin === s2[index]).length;
    return (s1.length - numberOfSwaps)/2
}