export default {
    methods: {
        formatMoney(money) {
            if (money) {
                return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            }
            return "";
        }
    }
};