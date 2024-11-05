import { Component, ComponentRef, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component'
import { ContentComponent} from '../content/content.component'

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [ ContentComponent],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.scss'
})
export class ChoiceComponent {
  vcr = viewChild('container',{read: ViewContainerRef})
  content=viewChild<TemplateRef<unknown>>('content');
  #componentRef?:ComponentRef<WidgetComponent>
  createComponent() {
    console.log('create');
    console.log('this.content',this.content)
    
    this.vcr()?.clear();
      const contentView= this.vcr()?.createEmbeddedView(this.content()!)
    this.#componentRef=this.vcr()?.createComponent(WidgetComponent, {
      projectableNodes:[
        contentView?.rootNodes! 
      ]
  })
    this.#componentRef?.setInput('title','Weather')
    this.#componentRef?.setInput('description','Currently in Sandbach')

    this.#componentRef?.instance.closed.subscribe(
      () => this.#componentRef?.destroy()
    )
  }
  destroyComponent() {
    this.vcr()?.clear()
  }

}
