const fibSeries = (num) => ({
    [Symbol.iterator]: () => {
        let i = 1;
        let old = 0;
        let latest = 0;
        return {
            next: () => {
                if(i++ <= num) {
                    [old, latest] = [latest, (old + latest) || 1];
                    return { value: old, done: false }
                }
                else {
                    return { done: true }
                } 
            }
        }
    }
});

console.log([...fibSeries(6)]);