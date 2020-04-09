import { Directive, ElementRef, Renderer2, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appMain]'
})
export class MainDirective implements AfterViewChecked{

  constructor(private elmRef: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewChecked(): void {
    let headerTop = this.elmRef.nativeElement.querySelector('.header-top');
    let headerTottom = this.elmRef.nativeElement.querySelector('.header-bottom');
    let mainFooter = this.elmRef.nativeElement.querySelector('.main-footer');
    let pageAdmin = this.elmRef.nativeElement.querySelector('.page_admin');

    if(pageAdmin!=null){
      this.renderer.setStyle(headerTop,'display','none');
      this.renderer.setStyle(headerTottom,'display','none');
      this.renderer.setStyle(mainFooter,'display','none');
    }
  }

}
