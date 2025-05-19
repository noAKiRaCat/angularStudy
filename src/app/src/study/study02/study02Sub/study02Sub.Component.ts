// @ts-ignore
import {
  booleanAttribute,
  Component,
  computed, Input,
  input, model,
  numberAttribute,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: 'study02SubComponent, [study02-sub-component]',       // カンマ区切りのリストで、複数のセレクターを定義できます。
  templateUrl: './study02Sub.Component.html',
  styleUrl: './study02Sub.Component.css',
  encapsulation: ViewEncapsulation.None
})

export class study02SubComponent {
  value = input(0);
  valueNumber = input<number>();

  label = computed(() => 'Hello world')

  valueRequire = input.required<number>();

  disabled = input(false, {transform: booleanAttribute});

  valueTransform = input(0, {transform: numberAttribute})

  valueAlias = input(0, {alias: 'sliderValue'});

  checker = model(false);

  // use @input()
  @Input() inputValue = 1;

  @Input({required:true}) InputValueRequired = 0;

  @Input({'alias':'al'}) InputValueAlias = 0;

  // getter setter
  @Input()
  get getInputValue():number {
    return this.internalGetValue;
  }
  set getInputValue(newValue:number) {this.internalGetValue = newValue;}
  private internalGetValue:number = 0;

  @Input()
  set setInputValue(newValue:number) {
    this.internalSetValue = newValue
  }
  private internalSetValue:number = 0;


  // カスタムイベントと出力
}
