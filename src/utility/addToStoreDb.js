import {
    toast
} from 'react-toastify';

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
        toast.error('job is already applied');
        return false;
    } else {
        storedItem.push(id);
        const storedItemStr = JSON.stringify(storedItem);
        localStorage.setItem('applied-job', storedItemStr);
        toast.success('job applied succefully');
        return true;
    }
}