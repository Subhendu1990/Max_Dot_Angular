import { Component, OnInit, HostListener, Input, AfterViewChecked, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss']
})
export class DotsComponent implements OnInit,AfterViewChecked {
  show :boolean;
  isFirsTime :boolean;
  isFirsTimeRendered:boolean;
  bgColor= '';
  @ViewChild('a') a
  constructor( private cdRef:ChangeDetectorRef) { 
    this.show = false;
    this.isFirsTime = true;
    this.isFirsTimeRendered = true;
  }

  @HostListener('mouseenter', ['$event']) 
  onMouseEnter(e) {
    if(this.isFirsTime && e.target.clientWidth>4 && e.target.clientHeight > 4){
    e.stopPropagation();
    this.show = true;
    this.isFirsTime = false;
    }
  }

  getPosition(e){
    const itemLeft = e.offsetLeft;
    const itemWidth = e.offsetWidth;
    const itemTop = e.offsetTop;
    const itemHeight = e.offsetHeight;
    const itemCenterLeft = itemLeft + itemWidth/2;
    const itemCenterTop = itemTop + itemHeight/2;
    const parentLeft = document.getElementById('mainDotContainer').offsetLeft;
    const parentTop = document.getElementById('mainDotContainer').offsetTop;
    return {
      left: itemCenterLeft - parentLeft,
      top: itemCenterTop - parentTop,
    }
  }

  getColor(e){
    let position = this.getPosition(e);
    console.log(position);
    var c = document.getElementById("myCanvas");
    var ctx = c['getContext']("2d");
    var img = document.getElementById("mainImage");
    //ctx.drawImage(img, 0, 0);
    this.drawImage(ctx,img);
    var imgData = ctx.getImageData(position.left * (c['width'] / img['width']), position.top* (c['height'] / img['height']) , 1, 1);
    console.log(imgData)
    //return 'red';
    return `rgba(${imgData.data[0] != 0 ? imgData.data[0] : 200},${imgData.data[1] != 0 ? imgData.data[1] : 200},${imgData.data[2] != 0 ? imgData.data[2] : 200},${imgData.data[3] != 0 ? imgData.data[3] : 1})`;
  
  }

  drawImage(ctx,img){
    var canvas = ctx.canvas 
    var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    // get the top left position of the image
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }

  ngAfterViewChecked(){
    if(this.isFirsTimeRendered){
      this.bgColor = this.getColor(this.a.nativeElement);
      this.isFirsTimeRendered= false;  
      this.cdRef.detectChanges();
    }
  }

  ngOnInit() {
  }

}
