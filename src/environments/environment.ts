// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'development',
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
