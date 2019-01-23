const now = new Date();
const hour = 3600000;

const months = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ'
]


function timeAgo(date, isMinified = false) {
    if(date === null) {
        return '';
    }

    if(!(date instanceof Date)) {
        try {
            date = new Date(`${date}T03:00`);
        } catch (e) {
            throw new Error('TimeAgo funciona apenas com datas!');
        }
    }

    return transform(date, isMinified);
}

function transform(date, isMinified) {
    let delta = Math.round((now.getTime() - date.getTime()) / hour);

    const forward = delta < 0;

    delta = Math.abs(delta);
    
    if(delta < 24 && !(now.getDate() < date.getDate())) {
        return 'hoje';
    } else if (delta < 48 && !(now.getDate() + 1 < date.getDate())) {
        return forward ? 'amanhã' : 'ontem';
    } else {
        if(isMinified) {
            return `${date.getDate()} ${months[date.getMonth()]}`;
        } else {
            return date.toLocaleDateString();
        }
    }
}

export default timeAgo;