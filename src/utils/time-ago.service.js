const day = 3600000;
const today = new Date(new Date().setHours(3)).getTime();

const times = {
    future: {
        0: 'hoje',
        1: 'amanhã'
    },
    past: {
        0: 'hoje',
        1: 'ontem'
    }
}

function timeAgo(date) {
    if(date instanceof Date) {
        return calcTime(date);
    } else {
        date = date.split('/').reverse().join('-');
        console.log(date);
        const formattedDate = new Date(`${date}T03:00`);

        if(!isNaN(formattedDate.getMonth())) {
            return calcTime(formattedDate);
        } else {
            console.error('Data inválida');
            return false;
        }
    }
}

function calcTime(date) {
    const dateInMilleseconds = date.getTime();
    let diff = Math.round((dateInMilleseconds - today) / day);
    const direction = diff > 0 ? 'future' : 'past';
    let timePast;

    diff = Math.abs(diff);

    console.log(diff);
    if(diff < 24) {
        timePast = 0;
    } else if (diff > 24 && diff < 48) {
        timePast = 1;
    } else {
        return date.toLocaleDateString();
    }
    
    return times[direction][timePast];
}

export default timeAgo;