import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Week} from "./week";

@Injectable()
export class WeekService {
    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    productNames: string[] = [
        "Bamboo Watch",
        "Black Watch",
        "Blue Band",
        "Blue T-Shirt",
        "Bracelet",
        "Brown Purse",
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

    getWeeksSmall() {
        return this.http.get<any>('assets/products-small.json')
            .toPromise()
            .then(res => <Week[]>res.data)
            .then(data => { return data; });
    }

    getWeeks() {
        return this.http.get<any>('assets/products.json')
            .toPromise()
            .then(res => <Week[]>res.data)
            .then(data => { return data; });
    }

    getWeeksWithOrdersSmall() {
        return this.http.get<any>('assets/products-orders-small.json')
            .toPromise()
            .then(res => <Week[]>res.data)
            .then(data => { return data; });
    }

    generateWeek(): Week {
        const product: Week =  {
            id: this.generateId(),
            name: this.generateName(),
            services: this.generateServices()
        };

        product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
        return product;
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75)+1);
    }

    private generateServices() {
        return [];
    }
}
