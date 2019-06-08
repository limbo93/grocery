import { Injectable } from '@angular/core';

@Injectable()
export class AmountInWordsService {

    currencyMap: Map<string, string>;

    constructor() {
        this.currencyMap = new Map();
        this.currencyMap.set('BDT', "Taka:Paisa");
        this.currencyMap.set('EUR', "Euro:Cent");
        this.currencyMap.set('CAD', "Dollar:Cent");
        this.currencyMap.set('USD', "Dollar:Cent");
        this.currencyMap.set('JPY', "Yen:Sen");
        this.currencyMap.set('GBP', "Pound:Penny");
        this.currencyMap.set('INR', "Rupee:Paisa");
        this.currencyMap.set('DEFAULT', "Taka:Paisa");
    }

    convertAmountToWords(amountToConvert: number, shortCode?: string) {

        if (!amountToConvert) return "";

        const amount = amountToConvert + "";

        const dotPos: number = amount.indexOf('.');
        let dollars: string;
        let cents: string;
        if (dotPos > 0) {
            dollars = amount.slice(0, dotPos);  // 1234.56 = 1234
            cents = amount.slice(dotPos + 1);  // 1234.56 = .56

            if (cents.length == 1) {
                cents = cents + '0';
            }

        } else if (dotPos == 0) {

            dollars = '0';
            cents = amount.slice(dotPos + 1);  // .56 = .56
            if (cents.length == 1) {
                cents = cents + '0';
            }

        } else {
            dollars = amount.slice(0);         // 1234 = 1234
            cents = '0';
        }

        let temp: string = '000000000' + dollars;
        dollars = temp.slice(-9);

        let crores = Number(dollars.substr(0, 2));
        let lakhs = Number(dollars.substr(2, 2));
        let thousands = Number(dollars.substr(4, 2));
        let hundreds = Number(dollars.substr(6, 1));

        temp = this.words999(crores);
        const crW = temp.trim();  // Crores in words

        temp = this.words999(lakhs);
        const lW = temp.trim();   // Lakhs  in words

        temp = this.words999(thousands);
        const thW = temp.trim();   // Thousands in words

        temp = this.words999(hundreds);
        const hW = temp.trim();   // Hundreds  in words

        temp = this.cents(cents);
        const cW = temp.trim();

        let totAmt: string = '';

        if (crW != '') totAmt += ((totAmt != '') ? ' ' : '') + crW + ' Crore';
        if (lW != '') totAmt += ((totAmt != '') ? ' ' : '') + lW + ' Lakh';
        if (thW != '') totAmt += ((totAmt != '') ? ' ' : '') + thW + ' Thousand';
        if (hW != '') totAmt += ((totAmt != '') ? ' ' : '') + hW;

        if (!shortCode) shortCode = "DEFAULT";

        const currencyUnits = this.currencyMap.get(shortCode).split(":");

        if (totAmt != '') {
            totAmt = totAmt + ' ' + currencyUnits[0];
        }

        if (cW != '') totAmt += ((totAmt != '') ? ' and ' : '') + cW + ' ' + currencyUnits[1];

        return totAmt + ' Only';
    }

    words999(n999) {
        let words: string = '';
        let Hn: number = 0;
        let n99: number = 0;
        Hn = Math.floor(n999 / 100);
        if (Hn > 0) {
            words = this.words99(Hn) + " Hundred";
        }
        n99 = n999 - (Hn * 100);
        words += ((words == '') ? '' : ' ') + this.words99(n99);
        return words;
    }

    words99(n99) {

        const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
            "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
            "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy",
            "Eighty", "Ninety"];

        let words: string = '';
        let Dn: number = 0;
        let Un: number = 0;
        Dn = Math.floor(n99 / 10);
        Un = n99 % 10;

        if (Dn > 0 || Un > 0) {
            if (Dn < 2) {
                words += ones[Dn * 10 + Un];
            } else {
                words += tens[Dn];
                if (Un > 0) words += "-" + ones[Un];
            }
        }
        return words;
    }

    cents(cents) {
        const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
            "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
            "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy",
            "Eighty", "Ninety"];

        let words: string = '';
        let Dn: number = 0;
        let Un: number = 0;
        Dn = Math.floor(cents / 1000);
        Un = cents % 1000;
        let thousands = '';
        if (Dn > 0) {
            thousands = ones[Dn] + 'Thousand ';
        }
        let hundreds = this.words999(Un);
        words = thousands + hundreds;

        return words;
    }
}
