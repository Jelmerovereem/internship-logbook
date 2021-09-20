const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const convertDate = (dateObj) => {
    let day = days[dateObj.getDay()];
    let dayDate = dateObj.getDate();
    let month = months[dateObj.getMonth()];
    let hour = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    return `${day} ${dayDate} ${month} ${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}`: minutes}`;
}

export default convertDate;