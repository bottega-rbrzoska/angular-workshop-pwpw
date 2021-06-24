import { AuthService } from './../../core/services/auth.service';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pwShowOnlyForRole]'
})
export class ShowOnlyForRoleDirective implements OnInit{

  @Input() pwShowOnlyForRole!: string;
  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef, private auth: AuthService) { }

  ngOnInit() {
    this.auth.role$.subscribe(role => {
      this.vcr.clear();
      if (role === this.pwShowOnlyForRole) {
        this.vcr.createEmbeddedView(this.template);
      }
    })
  }
}
