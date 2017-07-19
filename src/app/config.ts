export const config = {
  ng2SmartTableDefaultSettings: {
    attr: {
      id: '',
      class: 'ng2-smart-table table',
    },
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'right',
    },
    edit: {
      inputClass: '',
      editButtonContent: '<i class="fa fa-pencil fa-fw" title="Editar"></i>',
      saveButtonContent: '<i class="fa fa-floppy-o fa-fw" title="Guardar"></i>',
      cancelButtonContent: '<i class="fa fa-ban fa-fw" title="Cancelar"></i>',
      confirmSave: true,
    },
    add: {
      inputClass: '',
      addButtonContent: 'Nuevo',
      createButtonContent: '<i class="fa fa-plus-square fa-fw" title="Crear"></i>',
      cancelButtonContent: '<i class="fa fa-ban fa-fw" title="Cancelar"></i>',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash fa-fw" title="Eliminar"></i>',
      confirmDelete: true,
    },
    noDataMessage: 'No existen datos'
  }
};
