simpleCart({
	cartColumns: [
{ attr: "thumb", label: false, view: "thumb" },
{ attr: "name", label: false, view: "link" },
{ view: "remove", text: false, label: !1 },
{ attr: "price", label: false, view: "harga" },
{ attr: "color", label: 'Warna', view: "color" },
{ attr: "model", label: false, view: "model" },
{ view: "decrement", label: false },
{ attr: "quantity", label: 'false', view: "qty" },
{ view: "increment", label: false },
{ attr: "total", label: false, view: "currency" },
{ attr: "link", label: false, view: "link" },
],
	currency: "IDR",
});