import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
//import { MenuPageModule } from './menu/menu.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./logeo/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./logeo/register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./logeo/verify-email/verify-email.module').then((m) => m.VerifyEmailPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./logeo/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'finca',
    loadChildren: () => import('./pages/finca/finca.module').then( m => m.FincaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'trabajadores',
    loadChildren: () => import('./pages/trabajadores/trabajadores.module').then( m => m.TrabajadoresPageModule)
  },
  {
    path: 'inicioo',
    loadChildren: () => import('./pages/inicioo/inicioo.module').then( m => m.IniciooPageModule)
  },
  {
    path: 'crearfinca',
    loadChildren: () => import('./pages/fincacrud/crearfinca/crearfinca.module').then( m => m.CrearfincaPageModule)
  },
  {
    path: 'editarfinca/:id',
    loadChildren: () => import('./pages/fincacrud/editarfinca/editarfinca.module').then( m => m.EditarfincaPageModule)
  },
  {
    path: 'lote',
    loadChildren: () => import('./pages/lote/lote.module').then( m => m.LotePageModule)
  },
  {
    path: 'cultivo',
    loadChildren: () => import('./pages/cultivo/cultivo.module').then( m => m.CultivoPageModule)
  },
  {
    path: 'operacion',
    loadChildren: () => import('./pages/operacion/operacion.module').then( m => m.OperacionPageModule)
  },
  {
    path: 'vertrabajador',
    loadChildren: () => import('./pages/trabajadorcrud/vertrabajador/vertrabajador.module').then( m => m.VertrabajadorPageModule)
  },
  {
    path: 'creartrabajador',
    loadChildren: () => import('./pages/trabajadorcrud/creartrabajador/creartrabajador.module').then( m => m.CreartrabajadorPageModule)
  },
  {
    path: 'proveedor',
    loadChildren: () => import('./pages/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  },
  {
    path: 'verproveedor',
    loadChildren: () => import('./pages/proveedorcrud/verproveedor/verproveedor.module').then( m => m.VerproveedorPageModule)
  },
  {
    path: 'crearlote',
    loadChildren: () => import('./pages/lotecrud/crearlote/crearlote.module').then( m => m.CrearlotePageModule)
  },
  {
    path: 'editarlote',
    loadChildren: () => import('./pages/lotecrud/editarlote/editarlote.module').then( m => m.EditarlotePageModule)
  },
  {
    path: 'crearcultivo',
    loadChildren: () => import('./pages/cultivocrud/crearcultivo/crearcultivo.module').then( m => m.CrearcultivoPageModule)
  },
  {
    path: 'editarcultivo',
    loadChildren: () => import('./pages/cultivocrud/editarcultivo/editarcultivo.module').then( m => m.EditarcultivoPageModule)
  },
  {
    path: 'crearoperacion',
    loadChildren: () => import('./pages/operacioncrud/crearoperacion/crearoperacion.module').then( m => m.CrearoperacionPageModule)
  },
  {
    path: 'editaroperacion',
    loadChildren: () => import('./pages/operacioncrud/editaroperacion/editaroperacion.module').then( m => m.EditaroperacionPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./pages/gastos/gastos.module').then( m => m.GastosPageModule)
  },
 
  {
    path: 'editartrabajador',
    loadChildren: () => import('./pages/trabajadorcrud/editartrabajador/editartrabajador.module').then( m => m.EditartrabajadorPageModule)
  },
  {
    path: 'editarproveedor',
    loadChildren: () => import('./pages/proveedorcrud/editarproveedor/editarproveedor.module').then( m => m.EditarproveedorPageModule)
  },
  {
    path: 'crearproveedor',
    loadChildren: () => import('./pages/proveedorcrud/crearproveedor/crearproveedor.module').then( m => m.CrearproveedorPageModule)
  },
  {
    path: 'juego',
    loadChildren: () => import('./pages/juego/juego.module').then( m => m.JuegoPageModule)
  },
  {
    path: 'buscarfinca',
    loadChildren: () => import('./pages/buscar/buscarfinca/buscarfinca.module').then( m => m.BuscarfincaPageModule)
  },
  {
    path: 'buscarlote',
    loadChildren: () => import('./pages/buscar/buscarlote/buscarlote.module').then( m => m.BuscarlotePageModule)
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
