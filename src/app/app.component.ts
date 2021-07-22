import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exittest';

  fileName = 'ExcelSheet.xlsx';
  userList = [
    {

      "Roll_No": 1,

      "name": "Gautam",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 2,

      "name": "sugaer",

      "class": " six",

      "Section": "A",

      "father_name": "Somar Kumar",

      "email": "sautan1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 3,

      "name": "ram",

      "class": "Five",

      "Section": "B",

      "father_name": "Rameswar Kumar",

      "email": "gram1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 4,

      "name": "simi",

      "class": "Seven",

      "Section": "A",

      "father_name": "Samta Kumar",

      "email": "siimi1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 5,

      "name": "eddy",

      "class": "Eight",

      "Section": "A",

      "father_name": "samy Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 6,

      "name": "golgma",

      "class": "Eight",

      "Section": "A",

      "father_name": "chinamma Kumar",

      "email": "googma1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 7,

      "name": "Gautam",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 8,

      "name": "Gautama",

      "class": "Eight",

      "Section": "A",

      "father_name": "simmanta Kumar",

      "email": "gautana1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 9,

      "name": "Gauri",

      "class": "Eight",

      "Section": "A",

      "father_name": "sipayata Kumar",

      "email": "gauri1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 10,

      "name": "Lakhan",

      "class": "Eight",

      "Section": "A",

      "father_name": "Sanjay Kumar",

      "email": "Lakhan1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 11,

      "name": "Chulbul",

      "class": "Eight",

      "Section": "A",

      "father_name": "Simanta Kumar",

      "email": "Simalyachul1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 12,

      "name": "balram",

      "class": "Eight",

      "Section": "A",

      "father_name": "simpuu Kumar",

      "email": "baram1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 13,

      "name": "Gautam",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 13,

      "name": "Gauriii",

      "class": "Eight",

      "Section": "A",

      "father_name": "binoy Kumar",

      "email": "gaurii1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 14,

      "name": "Nidhi",

      "class": "Eight",

      "Section": "A",

      "father_name": "Pankaj Kumar",

      "email": "niluu1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 15,

      "name": "Nilu",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gauravs Kumar",

      "email": "nichi1234@gmail.com",

      "phn_no": "7894561230"

    },



    {

      "Roll_No": 16,

      "name": "gamata",

      "class": "Eight",

      "Section": "A",

      "father_name": "billu Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 17,

      "name": "Billu",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },



    {

      "Roll_No": 18,

      "name": "LkRahul",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 19,

      "name": "babli",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 20,

      "name": "Banti",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 21,

      "name": "dhuun",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 22,

      "name": "Lkim",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },

    {

      "Roll_No": 23,

      "name": "Kumar",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 24,

      "name": "Mohit",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },


    {

      "Roll_No": 25,

      "name": "Bittu",

      "class": "Eight",

      "Section": "A",

      "father_name": "Gaura Kumar",

      "email": "gautan1234@gmail.com",

      "phn_no": "7894561230"

    },






  ]

  a(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
