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
      position: 'left',
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
  },
  units: {
    mass: [
      {
        unit: "mg",
        multiplier: 0.001
      },
      {
        unit: "cg",
        multiplier: 0.01
      },
      {
        unit: "dg",
        multiplier: 0.1
      },
      {
        unit: "g",
        multiplier: 1
      },
      {
        unit: "dag",
        multiplier: 10
      },
      {
        unit: "hg",
        multiplier: 100
      },
      {
        unit: "kg",
        multiplier: 1000
      }
    ],
    volume: [
      {
        unit: "ml",
        multiplier: 0.001
      },
      {
        unit: "cl",
        multiplier: 0.01
      },
      {
        unit: "dl",
        multiplier: 0.1
      },
      {
        unit: "l",
        multiplier: 1
      },
      {
        unit: "dal",
        multiplier: 10
      },
      {
        unit: "hl",
        multiplier: 100
      },
      {
        unit: "kl",
        multiplier: 1000
      }
    ],
    unit: {unit: "u"}
  }
};
