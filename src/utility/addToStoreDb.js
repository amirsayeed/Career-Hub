export const getStoredItem = () => {
    const storedItemStr = localStorage.getItem('applied-job');
    if (storedItemStr) {
        const storedItem = JSON.parse(storedItemStr);
        return storedItem;
    } else {
        return []
    }
}

export const addToStore = (id) => {
    const storedItem = getStoredItem();
    if (storedItem.includes(id)) {
        alert('job is already applied');
    } else {
        storedItem.push(id);
        const storedItemStr = JSON.stringify(storedItem);
        localStorage.setItem('applied-job', storedItemStr);
    }
}