import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  data;
  s : any;
  amountCtrl = new FormControl(null, { updateOn: 'blur' });
  focusFunction(e)
  {
     this.s = e
   this.amountCtrl.setValue(e)
  }


  focus(e)
  {
if(e != "")
{
    this.amountCtrl.setValue(e);
}  
}
}
