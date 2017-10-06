import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
    @ViewChild('fileInput') fileInput;
  isReadyToSave: boolean;

  item: any;
  form: FormGroup;

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, navParams: NavParams,public camera: Camera, formBuilder: FormBuilder,public items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.form = formBuilder.group({
      title : ['', Validators.required],
      date : [''],
      full_description : ['',Validators.required],
      location : ['',Validators.required],
      rate : ['',Validators.required],
      duration : ['',Validators.required],
      frequence : ['',Validators.required],
      start_at_the_latest : ['',Validators.required],
      status : ['',Validators.required],
      client : ['',Validators.required],
      contact_name : ['',Validators.required],
      key_success_1 : [''],
      key_success_2 : [''],
      key_success_3 : [''],
      col1 : [''],
      col2 : [''],
      col3 : [''],
      col4 : [''],
      col5 : [''],
      doc : [''],



    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;

    });
  }

  ionViewDidLoad() {

  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done( item: Item) {
    if (!this.form.valid) { return; }
    else{
      console.log(this.form.value["title"]);
      this.items.update(this.item, this.form.value["date"], this.form.value["title"], this.form.value["full_description"], this.form.value["location"], this.form.value["client"],this.form.value["contact_name"],  this.form.value["rate"], this.form.value["duration"], this.form.value["frequency"],  this.form.value["key_success_1"],this.form.value["key_success_2"],this.form.value["key_success_3"],this.form.value["col1"],this.form.value["col2"], this.form.value["col3"],this.form.value["col4"],this.form.value["col5"], this.form.value["doc"]   );

    this.viewCtrl.dismiss(this.form.value);

  }

  }
  }
