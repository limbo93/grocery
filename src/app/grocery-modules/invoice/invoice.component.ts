import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'
// import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AmountInWordsService } from '../../services/amount-in-words/amount-in-words.service';

@Component({
    selector: 'invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

    doc: jsPDF = new jsPDF();
    invoiceId: number = +new Date();
    todayDate: string = '';

    configuration = {
        shopName: 'Rising Agro BD',
        addressLine1: 'Section- 6, Block- Ta, House- 6,',
        addressLine2: 'Road- 38, Mirpur Dhaka- 1206',
        contactAddress: 'Cell: +8801674988231, 01724-117447',
        customerName: 'Ali Baba'
    }

    constructor(private amountInWordsService: AmountInWordsService) {

    }

    ngOnInit(): void {
        this.todayDate = this.getToday();
    }

    getToday() {
        const today = new Date();
        const day = today.getDate().toString().length === 1 ? '0' + today.getDate() : today.getDate();
        const month = (today.getMonth() + 1).toString().length === 1 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
        return day + '-' + month + '-' + today.getFullYear();
    }

    save() {
        const xAxis: number = this.doc.internal.pageSize.getWidth() / 2; //center
        const pdfName: string = '' + this.invoiceId + '.pdf';

        this.doc.setFontType("bold");
        this.doc.text(this.configuration.shopName, xAxis, 20, null, null, 'center');

        this.doc.setFontType("normal").setFontSize(10);
        this.doc.text(this.configuration.addressLine1, xAxis, 25, null, null, 'center');
        this.doc.text(this.configuration.addressLine2, xAxis, 29, null, null, 'center');
        this.doc.text(this.configuration.contactAddress, xAxis, 33, null, null, 'center');

        this.doc.setFontType("bold");
        this.doc.text('Sales Invoice', xAxis, 43, null, null, 'center');

        this.doc.setFontType("normal");
        this.doc.text('Customer name: ' + this.configuration.customerName, 15, 53);
        this.doc.text('Date          : ' + this.todayDate, 150, 53);
        this.doc.text('Invoice No : ' + this.invoiceId, 150, 57);

        this.doc.autoTable({ html: '#table', startY: 70 });

        let finalY = this.doc.previousAutoTable.finalY;

        this.doc.text("Amount chargeable (in word) : " + this.amountInWordsService.convertAmountToWords(7654320), 15, finalY + 20);

        this.doc.text("________________", 15, finalY + 45);
        this.doc.text("Customer Signature", 15, finalY + 50);

        this.doc.text("Declaration : Received above goods in good ondition", 15, finalY + 60);

        this.doc.save(pdfName);
    }


}