class ProductsService {
  constructor($http) {
    this._$http = $http;
  }

  all() {
    return this._$http
      .get(`https://lcboapi.com/products?access_key=MDozMDgyYWIxMi0wYzgyLTExZTYtOTIwMy01YmQ2MWMwODI4OTM6R3lRSExGN3psZjZCRG9DV0FnSnJPTXpma05IYU5ZbzJpOVFB`)
  }

  get(id) {
    return this._$http
      .get(`https://lcboapi.com/products/${id}?access_key=MDozMDgyYWIxMi0wYzgyLTExZTYtOTIwMy01YmQ2MWMwODI4OTM6R3lRSExGN3psZjZCRG9DV0FnSnJPTXpma05IYU5ZbzJpOVFB`)
  }

  search(terms) {
    return this._$http
      .get(`https://lcboapi.com/products?q=${terms}&access_key=MDozMDgyYWIxMi0wYzgyLTExZTYtOTIwMy01YmQ2MWMwODI4OTM6R3lRSExGN3psZjZCRG9DV0FnSnJPTXpma05IYU5ZbzJpOVFB`)
  }
}

export default ProductsService;
