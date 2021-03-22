<template>
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
</template>

<script>
import companyData from '@/services/CompanyService.js';

export default {
  name: 'view',
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
