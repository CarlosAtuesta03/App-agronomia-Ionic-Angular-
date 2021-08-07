import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'inicioo',
        loadChildren: () => import('../inicioo/inicioo.module').then(m => m.IniciooPageModule)
      },
      {
        path: 'finca',
        loadChildren: () => import('../finca/finca.module').then(m => m.FincaPageModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('../ayuda/ayuda.module').then(m => m.AyudaPageModule)
      },
      {
        path: 'trabajadores',
        loadChildren: () => import('../trabajadores/trabajadores.module').then(m => m.TrabajadoresPageModule)
      },
      {
        path: 'editarfinca/:id',
        loadChildren: () => import('../fincacrud/editarfinca/editarfinca.module').then(m => m.EditarfincaPageModule)
      },
      {
        path: 'finca/lote/:id',
        loadChildren: () => import('../lote/lote.module').then(m => m.LotePageModule)
      },
      {
        path: 'finca/buscarfinca/:text',
        loadChildren: () => import('../buscar/buscarfinca/buscarfinca.module').then(m => m.BuscarfincaPageModule)
      },
      {
        path: 'finca/lote/crearlote',
        loadChildren: () => import('../lotecrud/crearlote/crearlote.module').then(m => m.CrearlotePageModule)
      },
      {
        path: 'finca/lote/editarlote/:id',
        loadChildren: () => import('../lotecrud/editarlote/editarlote.module').then(m => m.EditarlotePageModule)
      },
      {
        path: 'finca/lote/cultivo/:id',
        loadChildren: () => import('../cultivo/cultivo.module').then(m => m.CultivoPageModule)
      },
      {
        path: 'finca/lote/cultivo/editarcultivo/:id',
        loadChildren: () => import('../cultivocrud/editarcultivo/editarcultivo.module').then(m => m.EditarcultivoPageModule)
      },
      {
        path: 'finca/lote/cultivo/crearcultivo',
        loadChildren: () => import('../cultivocrud/crearcultivo/crearcultivo.module').then(m => m.CrearcultivoPageModule)
      },
      {
        path: 'finca/lote/cultivo/operacion/:id',
        loadChildren: () => import('../operacion/operacion.module').then(m => m.OperacionPageModule)
      },
      {
        path: 'finca/lote/cultivo/operacion/editaroperacion/:id',
        loadChildren: () => import('../operacioncrud/editaroperacion/editaroperacion.module').then(m => m.EditaroperacionPageModule)
      },
      {
        path: 'finca/lote/cultivo/operacion/crearoperacion',
        loadChildren: () => import('../operacioncrud/crearoperacion/crearoperacion.module').then(m => m.CrearoperacionPageModule)
      },
      {
        path: 'finca/crearfinca',
        loadChildren: () => import('../fincacrud/crearfinca/crearfinca.module').then(m => m.CrearfincaPageModule)
      },
      {
        path: 'trabajadores/vertrabajador/:id',
        loadChildren: () => import('../trabajadorcrud/vertrabajador/vertrabajador.module').then(m => m.VertrabajadorPageModule)
      },
      {
        path: 'trabajadores/creartrabajador',
        loadChildren: () => import('../trabajadorcrud/creartrabajador/creartrabajador.module').then(m => m.CreartrabajadorPageModule)
      },
      {
        path: 'gastos',
        loadChildren: () => import('../gastos/gastos.module').then(m => m.GastosPageModule)
      },
      {
        path: 'proveedor',
        loadChildren: () => import('../proveedor/proveedor.module').then(m => m.ProveedorPageModule)
      },
      {
        path: 'proveedor/verproveedor/:id',
        loadChildren: () => import('../proveedorcrud/verproveedor/verproveedor.module').then(m => m.VerproveedorPageModule)
      },
      {
        path: 'trabajadores/vertrabajador/editartrabajador/:id',
        loadChildren: () => import('../trabajadorcrud/editartrabajador/editartrabajador.module').then(m => m.EditartrabajadorPageModule)
      },
      {
        path: 'proveedor/verproveedor/editarproveedor/:id',
        loadChildren: () => import('../proveedorcrud/editarproveedor/editarproveedor.module').then(m => m.EditarproveedorPageModule)
      },
      {
        path: 'proveedor/crearproveedor',
        loadChildren: () => import('../proveedorcrud/crearproveedor/crearproveedor.module').then(m => m.CrearproveedorPageModule)
      },
      {
        path: 'juego',
        loadChildren: () => import('../juego/juego.module').then(m => m.JuegoPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/menu/inicioo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MenuPageRoutingModule {}