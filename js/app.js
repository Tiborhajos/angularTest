var app = angular.module('angularTest', []);

app.controller('ShopController', function () {
    this.products = weapons;
    console.log(weapons);
});

//This is actually the model, but let's put it here for now.
var weapons = [
    {
        name: 'bokken',
        imgUrl: 'img/bokken.jpg',
        price: 500,
        description: 'A practice katana.',
        specifications: 'made of real Japanese oak, easy to wield',
        inStock: true
    },
    {
        name: 'jo',
        imgUrl: 'img/jo.jpg',
        price: 200,
        description: 'A practice stick.',
        specifications: '1.27 meters long',
        inStock: true
    },
    {
        name: 'tanto',
        imgUrl: 'img/tanto.jpg',
        price: 100,
        description: 'A practice knife',
        specifications: 'short and easy to conceal',
        inStock: false
    }
];

app.controller('PanelController', function() {
    this.tab = 1; //default selected tab

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    }
});