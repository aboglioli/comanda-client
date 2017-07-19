export const environment = {
  production: false,
  envName: 'staging',
  baseUrl: 'https://sushibox-server.herokuapp.com/api/v1',
  ng2SmartTableDefaultSettings: {
    attr: {
      id: '',
      class: 'ng2-smart-table',
    },
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'left',
    },
    edit: {
      inputClass: '',
      editButtonContent: 'Editar',
      saveButtonContent: 'Guardar',
      cancelButtonContent: 'Cancelar',
      confirmSave: true,
    },
    add: {
      inputClass: '',
      addButtonContent: 'Nuevo',
      createButtonContent: 'Crear',
      cancelButtonContent: 'Cancelar',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: 'Eliminar',
      confirmDelete: true,
    },
    noDataMessage: 'No existen datos'
  }
};
