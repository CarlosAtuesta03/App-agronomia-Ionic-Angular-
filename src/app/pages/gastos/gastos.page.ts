import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';
import { Cultivo } from '../../models/cultivo';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
//import {defineCustomElements} from '@ionic/pwa-elements/loader'
//import { Plugins } from '@capacitor/core';
import { analyzeFileForInjectables } from '@angular/compiler';
  //const { Camera, Filesystem} = Plugins;
  import { ActivatedRoute} from '@angular/router';
  import { UserService } from '../../api/user.service';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {
  myForm:FormGroup;
  pdfObj=null;
  fotoPdf=null;
  datalog=null;
  cuerpo : any;
  array_tabla:any;
  cultivoss: any;
  id:any;

  constructor(private fb:FormBuilder,
    private plt:Platform,
    private http:HttpClient,private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router
    //private fileOpener:FileOpener
    ) {
      console.log("ingresando a hacer el consumo:") 
      this.array_tabla=[];
      var titulos = new Array( 'Identificador', 'Nombre','Gastos','Tipo de cultivo', 'total');
      this.array_tabla.push( titulos );

      this.http.get("http://localhost:3000/cultivos2").forEach(res=>{

      console.log(res.valueOf)
      this.cuerpo=(<Cultivo>res);
        
        

        console.log("los datos del api rest son:")  
        console.log(this.cuerpo);
 
                }).then(r=>{
                //  console.log("el valor por fuera es");
               //   console.log(this.cuerpo) ; 
               var auxiliar:Cultivo;    
               this.cuerpo.forEach(element => {
                    auxiliar=<Cultivo>(element)
                    console.log("informacion del auxiliar");
                     console.log(auxiliar);
                  var fila = new Array();
                  fila.push( auxiliar.cul_id);
                  fila.push( auxiliar.cul_nombre );
                  fila.push( auxiliar.cul_gasto );
                  fila.push( auxiliar.tip_nombre );
                  fila.push( auxiliar.total );
            

                this.array_tabla.push(fila);
      });
                }
                  
                );          
     

    }
    
    
    ngOnInit(){

   {  
      this.userservice.getCultivos().forEach(res=>{
        this.cultivoss=(<Cultivo>res);
          }); }

      this.myForm=this.fb.group({
        showLogo:false,
        remite:'Carlos Atuesta',
        to:'Valntina Atuesta',
        text:'Informacion de Detalles'
      });
      this.loadLocalAssetToBase64();
 
    }

    loadLocalAssetToBase64()
    {
        this.http.get('./assets/img/u.png',{responseType:'blob'})
        .subscribe(res => {
          const reader = new  FileReader();
          reader.onloadend = () => {
            this.datalog = reader.result;
          }
          reader.readAsDataURL(res);
        });
    }

    doRefresh(event) {
      this.ngOnInit();
        setTimeout(() => {
          event.target.complete();
      }, 1000);
    }
/*
    async tomarFoto() 
    {
    // Take a photo
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64, 
      source: CameraSource.Camera, 
      quality: 100,
      allowEditing:false 
    });
     this.fotoPdf=`data:image/jpeg;base64,${image.base64String}`
    }
*/
    crearMiPdf()
    {
      const formValue = this.myForm.value;
      console.log(formValue);
      const image= this.fotoPdf ? {image : this.fotoPdf, width:300} : {};
      let logo = {};
      if(formValue.showLogo)
      {
        logo={image:this.datalog, width:80};
      }
      const docDefinition = 
      {
        background: function(currentPage, pageSize) {
          return `Pag Actual  ${currentPage} Configurada con el tamaño ${pageSize.width} Por  ${pageSize.height}`
        },
        
        content:
        [
          {
            columns:[
              logo,
              {
                text: new Date().toDateString(),
                alignment:'right'
              }
            ]
          },
          {text:'INFORMACION NECESARIA', style:'header'},
          {
            columns: [
              {
                width:'50%',
                text:'INFO DEL REMITENTE',
                style:'subheader'
              },
              {
                width:'50%',
                text:'A QUIEN VA DESTINADO',
                style:'subheader'
              }

            ],
          },
          {
            columns: [
              {
                width:'50%',
                text:formValue.remite,

              },
              {
                width:'50%',
                text:formValue.to,

              }

            ],
          },
          {text: formValue.text, margin:[0,20,0,20]},
          {
            layout: 'lightHorizontalLines', // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              //headerRows: 1,
              //widths: [ '*', 'auto', 100, '*' ],
      
              body: this.array_tabla
            }
          }

        ],
        styles: {
          header:{
            fontSize:10,
            bold:true,
            margin:[0,15,0,0]
          },
          subheader:{
            fontSize:14,
            bold:true,
            margin:[0,15,0,0]
          }
        }

      }
      this.pdfObj=pdfMake.createPdf(docDefinition);
      console.log(this.pdfObj);

    }
    downloadPdf()
    {
      if(this.plt.is('cordova'))
      {

      }
      else{
        this.pdfObj.download();
      }

    }

}
