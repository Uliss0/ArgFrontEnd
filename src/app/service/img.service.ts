import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  url?:string="";
  constructor(private storage:Storage) { }

  public uploadImg($event:any, name:string){
  const file=$event.target.files[0];
  const imgref=ref(this.storage, `imagen/` + name)
  uploadBytes(imgref, file)
  .then(response=>{this.getImage()})
  .catch(error =>{console.log(error)})
  }

  getImage(){
  const imagesRef=ref(this.storage, 'imagen')
  list(imagesRef)
  .then(async response=>{
    for(let item of response.items){
      this.url=await getDownloadURL(item);
    }
  })
  .catch(error=>console.log(error))

  }
}


