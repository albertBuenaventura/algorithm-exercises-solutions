//https://leetcode.com/problems/container-with-most-water/
function maxArea(heights: number[]): number {
    let l = 0;
    let r = heights.length - 1;
    let max = 0;
    
    while(l < r) {
        const leftHeight = heights[l];
        const rightHeight = heights[r];
        
        const width = r - l;
        const height = leftHeight > rightHeight ? rightHeight :  leftHeight;
        const volume = width * height;
        max = max > volume ? max :  volume;
        
        if(heights[l] > heights[r]) r--
        else if(heights[r] > heights[l] ) l++;
        else {
            l++;
            r--;
        }
    }
    
    return max;
};
