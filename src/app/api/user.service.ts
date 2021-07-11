
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Finca } from '../models/finca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  finca: any;
  bfica: any;
  
  API_URL = 'http://localhost:3000';

  constructor(private httpClient:HttpClient){}

  //FINCA
  getFincas(){
              return this.httpClient.get(`${this.API_URL}/finca`);
            }

  getFinca(idx){
                   return this.httpClient.get(`${this.API_URL}/finca/${idx}`);
                  }

  editFinca(idx, form){
                      return this.httpClient.put(`${this.API_URL}/finca/${idx}`,form);  
                      }

  agregarFinca(form){
                      return this.httpClient.post(`${this.API_URL}/finca`,form); 
                    }

  deleteFinca(idx){
                      return this.httpClient.delete(`${this.API_URL}/finca/${idx}`);
                     }
      
//Lote
getLotes(){
  return this.httpClient.get(`${this.API_URL}/lotes`);
}

getLotesid(idx){
       return this.httpClient.get(`${this.API_URL}/lotes/${idx}`);
      }

getLote(idx){
        return this.httpClient.get(`${this.API_URL}/lote/${idx}`);
       }

editLote(idx, form){
          return this.httpClient.put(`${this.API_URL}/lote/${idx}`,form);  
          }

agregarLote(form){
          return this.httpClient.post(`${this.API_URL}/lote`,form); 
        }

deleteLote(idx){
          return this.httpClient.delete(`${this.API_URL}/lote/${idx}`);
         }

//Cultivo
getCultivos(){
  return this.httpClient.get(`${this.API_URL}/cultivos`);
}

getCultivos2(){
  return this.httpClient.get(`${this.API_URL}/cultivos2`);
}


getCultivosid(idx){
       return this.httpClient.get(`${this.API_URL}/cultivos/${idx}`);
      }

getcultivo(idx){
        return this.httpClient.get(`${this.API_URL}/cultivo/${idx}`);
       }

editCultivo(idx, form){
          return this.httpClient.put(`${this.API_URL}/cultivo/${idx}`,form);  
          }

agregarCultivo(form){
          return this.httpClient.post(`${this.API_URL}/cultivo`,form); 
        }

deleteCultivo(idx){
          return this.httpClient.delete(`${this.API_URL}/cultivo/${idx}`);
         }

//Operacion

getOperaciones(){
  return this.httpClient.get(`${this.API_URL}/operaciones`);
}

getOperacionesid(idx){
       return this.httpClient.get(`${this.API_URL}/operaciones/${idx}`);
      }

getOperacion(idx){
        return this.httpClient.get(`${this.API_URL}/operacion/${idx}`);
       }

editOperacion(idx, form){
          return this.httpClient.put(`${this.API_URL}/operacion/${idx}`,form);  
          }

agregarOperacion(form){
          return this.httpClient.post(`${this.API_URL}/operacion`,form); 
        }

deleteOperacion(idx){
          return this.httpClient.delete(`${this.API_URL}/operacion/${idx}`);
         }


//Trabajador
getTrabajadores(){
  return this.httpClient.get(`${this.API_URL}/trabajador`);
}

getTrabajador(idx){
       return this.httpClient.get(`${this.API_URL}/trabajador/${idx}`);
      }

editTrabajador(idx, form){
          return this.httpClient.put(`${this.API_URL}/trabajador/${idx}`,form);  
          }

agregarTrabajador(form){
          return this.httpClient.post(`${this.API_URL}/trabajador`,form); 
        }

deleteTrabajador(idx){
          return this.httpClient.delete(`${this.API_URL}/trabajador/${idx}`);
         }


//Proveedor
getProveedores(){
  return this.httpClient.get(`${this.API_URL}/proveedor`);
}

getProveedor(idx){
       return this.httpClient.get(`${this.API_URL}/proveedor/${idx}`);
      }

editProveedor(idx, form){
          return this.httpClient.put(`${this.API_URL}/proveedor/${idx}`,form);  
          }

agregarProveedor(form){
          return this.httpClient.post(`${this.API_URL}/proveedor`,form); 
        }

deleteProveedor(idx){
          return this.httpClient.delete(`${this.API_URL}/proveedor/${idx}`);
         }


}

