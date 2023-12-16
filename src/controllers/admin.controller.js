const path = require('path');

module.exports = {
    admin: (req, res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin"
    }),
    createView : (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'),  {
        title: "Crear Item"
    }),
    createItem: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    editView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),  {
        title: "Editar Item"
    }),
    editItem: (req, res) => res.send('Esta es la vista para IMPACTAR LA MODIFICACION DE UN ITEM'),
    deleteItem: (req, res) => res.send('Esta es la vista la ELIMINAR un ITEM ESPECIFICO')
}