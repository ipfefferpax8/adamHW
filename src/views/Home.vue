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
<button @click="redirectPage" class="button">Edit</button>
</div>
</template>
<script>
import button from '@/views/EditButton.vue';
import companyData from '@/services/CompanyService.js';

export default {
  name: 'home',
  component: button,
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
    redirectPage() {
      this.$router.push({ name: 'edit' });
    },
  },
  async created() {
    try {
      const response = await companyData;
      response.getAll().then((values) => {
        this.dataRecord = values;
      }).catch((e) => console.error(e));
    } catch (error) {
    /*  test here */
    }
  },
};
</script>
