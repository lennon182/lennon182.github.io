export class Cart {
    constructor() {
        this.cartItems = [];
        this.granTotal = 0;
        this.cartItemsTotal = 0;
        this.resp = { msg: '', status: false };
    }
    add(item) {
        const filterExist = this.cartItems.filter((el) => {
            return el._id === item._id;
        });
        filterExist.length === 0
            ? (this.cartItems.unshift(item),
                (this.resp.msg = 'Adding OK'),
                (this.resp.status = true))
            : ((this.resp.msg = 'Adding FALSE'),
                (this.resp.status = false),
                (filterExist[0].quantity = filterExist[0].quantity + item.quantity),
                (filterExist[0].price = filterExist[0].price + item.price));
        return this.resp;
    }
    getItems() {
        return this.cartItems;
    }
    deleteItem(_id) {
        const filterExist = this.cartItems.filter((el) => {
            return el._id !== _id;
        });
        this.cartItems = filterExist;
        (this.resp.msg = 'Adding OK'), (this.resp.status = true);
        return this.resp;
    }
    getGranTotal() {
        const reducer = (ac, value) => ac + value.price;
        const granTotalTemp = this.cartItems.reduce(reducer, 0);
        this.granTotal = granTotalTemp;
        return this.granTotal;
    }
    getCartItemsTotal() {
        this.cartItemsTotal = this.cartItems.length;
        return this.cartItemsTotal;
    }
    checkOut() {
        this.cartItems = [];
        this.resp.status = true;
        this.resp.msg = 'Pay Ok...';
        return this.resp;
    }
}
