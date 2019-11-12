export const regex = /^[0-9\b]+$/;

export const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
