<template>
<q-page class="container-fluid">
<div class="row">
	<div class='col-md-12'>
<q-card class="my-card">
<q-card-section>
<div class="text-h6">Transaction Details</div>
<q-table
      title="Analytic Table"
      :data="tableData"
      :columns="tableCol"
      row-key="id"
    >
      <template v-slot:body="props">
      	  <q-tr :props="props">
          <q-td key="paymethod" :props="props">
          	<div class='row'>
          		<div class='item-icon col-md-4'><img :src="'images/' + props.row.cardlogo" /></div>
          		<div class='item-name col-md'>
          		<div><strong>{{props.row.name}}</strong></div>
          		<div><label>{{props.row.cardtype}}</label></div>
          		</div>
            </div>
          </q-td>
          <q-td key="cardno" :props="props">
            <strong class='f-med'>{{ props.row.cardno }}</strong>
          </q-td>
          <q-td key="cusname" :props="props">
            <div style='text-align:left;'>
            <p><strong class='f-med'>{{ props.row.cusname }}</strong></p>
            <p class='f-small'>Customer No. {{props.row.cusno}}</p>
        	</div>
          </q-td>
          <q-td key="curbal" :props="props">
            <div style='text-align:left;'>
             <p><strong class='f-med'>{{ props.row.curbal }}</strong></p>
             <p class='f-small'>Total: {{props.row.totalbal}}</p>
        	</div>
          </q-td>
 		</q-tr>
      </template>
 </q-table>
</q-card-section>
</q-card>
</div>
</div>
</q-page>
</template>

<style scoped>
.container-fluid{
	padding:20px;
}
.item-name strong{
	font-size:16px;
}
.f-med{
	font-size:16px;
}
.f-small{
	font-size:14px;
}
</style>
<script>
import { AnalyticTable } from './../config/configData.js'

export default {
  name: 'AnalyticTable',
  data() {
  		return {
  			tableCol : null,
  			tableData : null
  		}
  },
  created : function(){
  	this.tableCol = AnalyticTable.columns
  	this.tableData = AnalyticTable.data

  }

}
</script>