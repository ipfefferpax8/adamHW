<template>
<div>
<table><thead>
<th v-for="title in headerTitle" :key="title">
{{title}}
</th>
</thead>
<tbody>
<tr v-for="(val,index) in dataRecord" :key="index"
@click="rowSelected(index)"
v-bind:class="{colorRow: isSelected == index}">
<td v-for="(record,k,i) in dataRecord[index]" :key="`${ k }-${ i }`">{{record}}</td>
</tr>
</tbody>
</table>
<div id="input-position"><input v-model="id" placeholder="ID">
<input v-model="name" placeholder="Name">
<input v-model="domain" placeholder="Domain">
<input v-model="nOfE" placeholder="Number of Employees">
<input v-model="sPerE" placeholder="Subscription Per Employee">
</div>
<button @click="updateRecord" class="button">Update Record</button>
</div>
</template>

<script>
import button from '@/views/EditButton.vue';
import companyData from '@/services/CompanyService.js';

export default {
  name: 'edit',
  component: button,
  props: ['id', 'name', 'domain', 'nOfE', 'sPerE'],
  data() {
    return {
      headerTitle: ['ID', 'NAME', 'DOMAIN', 'NUMBEROFEMPLOYEES', 'SUBSCRIPTIONPEREMPLOYEE'],
      dataRecord: [],
      isSelected: null,
    };
  },
  methods: {
    rowSelected(e) {
      console.log(e);
      this.isSelected = e;
    },
    /* upDateUser() {

    let updateUser = {
        id: this.id,
        name: this.name,
        startdate: this.domain,
        numberOfE:this.nOfE,
        subscriptionNum:this.sPerE,
    };
            let verifyObj = this.dataRecord.find(o => o.id === parseInt(updateUser.id));  */
    /* if(confirm('Are you sure you want to update this record?') && !verifyObj){
                        this.$set(this.dataRecord,this.isSelected,updateUser),
                        this.$forceUpdate(),
                        this.clearSelection(),
                        this.clearInputSelection(),
                } */
    /* },
    clearSelection() {
        this.isSelected = null,
    },
    clearInputSelection() {
        this.id = " ",
        this.name = " ",
        this.domain = " ",
        this.nOfE= " ",
        this.sPerE= " ",
    }, */
  },
  async created() {
    try {
      const response = await companyData;
      console.log(response.getAll());
      response.getAll().then((values) => {
        this.dataRecord = values;
      }).catch((e) => console.error(e));
    } catch (error) {
    /*  test here */
    }
  },
};
</script>
