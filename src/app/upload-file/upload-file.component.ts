import { Component, OnInit, Host, HostListener, ElementRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadFileComponent,
      multi: true
    }
  ]
})
export class UploadFileComponent implements ControlValueAccessor {
  @Input() progress;
  onChange = (value: any) => { };
  private file: File | null = null;
  public selectedFile: File;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
    this.uploadService.setFile(this.file);
    this.uploadService.uploadFile(this.uploadService.getFile()).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  constructor(private host: ElementRef<HTMLInputElement>, private uploadService: UploadService) { }

  writeValue(obj: any): void {
    this.host.nativeElement.value = '';
    this.file = null;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }
}
