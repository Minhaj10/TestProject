export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch("https://api.spacexdata.com/v3/launches");
            const data = await res.json();
            return data;
        };
        try {
            const cartData = await fetchHandler();
            console.log(cartData);
        } catch (err) {
            console.log(err);
        }
    };
};
