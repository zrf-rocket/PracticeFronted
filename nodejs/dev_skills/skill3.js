function getStatusColor1(status) {
    if (status === 'success') {
        return 'green'
    }

    if (status === 'warning') {
        return 'yellow'
    }

    if (status === 'info') {
        return 'blue'
    }

    if (status === 'error') {
        return 'red'
    }
}


//改造成如下
const statusColors = {
    success: 'green',
    warning: 'yellow',
    info: 'blue',
    error: 'red'
};

function getStatusColor2(status) {
    return statusColors[status] || '';
}

console.log(getStatusColor1("success"));
console.log(getStatusColor2("success"));
