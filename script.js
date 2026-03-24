let table = new DataTable('#myTable', {
    ajax: {
        url: 'export.json',
        dataScr: function (data) {
            return data
        }
    },
    columns:[
      {data: 'Pais'},
      {data: 'Perfil'},
      {data: 'Seniority'},
      {data: 'USD'}
    ]
})
