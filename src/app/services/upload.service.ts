import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  url: string = 'http://localhost:8080/api';
  currentFile: File;

  constructor(private http: HttpClient) { }

  getFile(): File {
    return this.currentFile;
  }

  setFile(file: File) {
    this.currentFile = file;
    console.log(this.currentFile);
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    console.log('Upload file');
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.url}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
