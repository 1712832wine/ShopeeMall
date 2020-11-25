export default {
    methods: {
        currencyFormatting: function(price) {
            let priceFormat = (price / 100000).toFixed(0).replace(".", ",");
            return priceFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        caculateProgress: function(stock, sold) {
            let total = Math.ceil(((stock - sold) * 100) / stock);
            return total;
        }
    }
};