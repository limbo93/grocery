import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'
// import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
    selector: 'invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

    doc: jsPDF = new jsPDF();
    invoiceId: number = +new Date();
    todayDate: string = '';

    ngOnInit(): void {
        const today = new Date();
        const day = today.getDate().toString().length === 1 ? '0' + today.getDate() : today.getDate();
        const month = (today.getMonth() + 1).toString().length === 1 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
        this.todayDate = day + '-' + month + '-' + today.getFullYear();;

    }

    save() {
        const pdfName: string = '' + this.invoiceId + '.pdf';

        this.doc.setFontType("bold");
        this.doc.text('Rising Agro BD', this.doc.internal.pageSize.getWidth() / 2, 20, null, null, 'center');

        this.doc.setFontType("normal").setFontSize(10);
        this.doc.text('Section- 6, Block- Ta, House- 6,', this.doc.internal.pageSize.getWidth() / 2, 25, null, null, 'center');
        this.doc.text('Road- 38, Mirpur Dhaka- 1206', this.doc.internal.pageSize.getWidth() / 2, 29, null, null, 'center');
        this.doc.text('Cell: +8801674988231, 01724-117447', this.doc.internal.pageSize.getWidth() / 2, 33, null, null, 'center');

        this.doc.setFontType("bold");
        this.doc.text('Sales Invoice', this.doc.internal.pageSize.getWidth() / 2, 43, null, null, 'center');

        this.doc.setFontType("normal");
        this.doc.text('Customer name: Ali Baba', 15, 53);
        this.doc.text('Date          : ' + this.todayDate, 150, 53);
        this.doc.text('Invoice No : ' + this.invoiceId, 150, 57);

        this.doc.autoTable({ html: '#table', startY: 70 });

        let finalY = this.doc.previousAutoTable.finalY;
        this.doc.text("Amount chargeable (in word) : " + "Hundred taka", 15, finalY + 20);

        this.doc.text("Customer Signature", 15, finalY + 50);

        this.doc.text("Declaration : Received above goods in good ondition", 15, finalY + 60);

        this.doc.save(pdfName);
    }


}