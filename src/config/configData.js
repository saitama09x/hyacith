export const AnalyticTable = {

	 columns: [
        {
          name: 'paymethod',
          required: true,
          label: 'Payment Method',
          align: 'left',
          field: row => {
          	return {
          		name : row.name,
          		logo : row.cardlogo
          	}
          },
          format: val => `${val}` ,
          sortable: true
        },
        { name: 'cardno', align: 'left', label: 'Card Number', field: 'cardno', sortable: true },
        { name: 'cusname', align: 'left',label: 'Customer Name', field: 'cusname', sortable: true },
        { name: 'curbal', align: 'left', label: 'Current/Total Balance', field: 'curbal' },
      ],

      data : [
      	{
      		id : 0,
      		name : 'Visa',
      		cardlogo : 'Logo/visa_logo.png',
      		cardtype : 'credit card',
      		cardno : '1234456',
      		cusname : 'Customer 1',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	},
      	{
      		id : 1,
      		name : 'Master',
      		cardlogo : 'Logo/mastercard.png',
      		cardtype : 'debit card',
      		cardno : '1234456',
      		cusname : 'Customer 2',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	},
      	{
      		id : 2,
      		name : 'Paypal',
      		cardlogo : 'Logo/PayPal.png',
      		cardtype : 'online payment',
      		cardno : '1234456',
      		cusname : 'Customer 3',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	},
      	{
      		id : 3,
      		name : 'Visa',
      		cardlogo : 'Logo/visa_logo.png',
      		cardtype : 'credit card',
      		cardno : '1234456',
      		cusname : 'Customer 1',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	},
      	{
      		id : 4,
      		name : 'Master',
      		cardlogo : 'Logo/mastercard.png',
      		cardtype : 'debit card',
      		cardno : '1234456',
      		cusname : 'Customer 2',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	},
      	{
      		id : 5,
      		name : 'Paypal',
      		cardlogo : 'Logo/PayPal.png',
      		cardtype : 'online payment',
      		cardno : '1234456',
      		cusname : 'Customer 3',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	},
      	{
      		id : 6,
      		name : 'Master',
      		cardlogo : 'Logo/mastercard.png',
      		cardtype : 'debit card',
      		cardno : '1234456',
      		cusname : 'Customer 2',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	},
      	{
      		id : 7,
      		name : 'Paypal',
      		cardlogo : 'Logo/PayPal.png',
      		cardtype : 'online payment',
      		cardno : '1234456',
      		cusname : 'Customer 3',
      		cusno : '12312312',
      		curbal : '10000000',
      		totalbal : '123123123'
      	}
      ]

}
