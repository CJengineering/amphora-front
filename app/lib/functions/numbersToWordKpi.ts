export const numbersToWordKpi = (number: number): string => {
    let word = '';
    if (number < 0.20) {
        return word = 'Very Low';
    }
    if (number < 0.40) {
        return word = 'Low';
    }
    if (number < 0.60) {
        return word = 'Medium';
    }
    if (number < 0.80) {
        return word = 'High';
    }
    return word = 'Extreme';
}