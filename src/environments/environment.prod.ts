export const environment = {
  production: true,
  envName: 'production',
  baseUrl: 'http://localhost:3000/api/v1',
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
